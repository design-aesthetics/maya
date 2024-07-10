<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Helpers\ProductSearch;
use App\Helpers\SearchTokenManager;
use Illuminate\Support\Facades\Log;


class ProductController extends Controller
{
    protected $productSearch;

    public function __construct(ProductSearch $productSearch)
    {
        $this->productSearch = $productSearch;
    }

    public function index(Request $request)
    {
        $products = $this->productSearch->search($request);
        return $this->respondWithProducts($request, $products);
    }

    public function searchByToken(Request $request, $token)
    {
        $isAjax = $request->ajax() || $request->header('X-Requested-With') === 'XMLHttpRequest';
        $searchParams = SearchTokenManager::getSearchParams($token);

        if (!$isAjax) {
            return redirect()->route('products.index');
        }

        if (!$searchParams) {
            return response()->json(['error' => 'Invalid sea rch token', 'redirect' => route('products.index')], 400);
        }

        try {
            $searchRequest = new Request($searchParams);
            $products = $this->productSearch->search($searchRequest);

            $validProducts = collect($products->items())->filter(function ($item) {
                return is_object($item) && method_exists($item, 'getAttribute') && $item->getAttribute('id');
            });

            $formattedProducts = $validProducts->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'price' => $product->price,
                    'image_url' => $product->image_url,
                    'brand' => $product->brand ? [
                        'id' => $product->brand->id,
                        'name' => $product->brand->name,
                        'slug' => $product->brand->slug,
                    ] : null,
                ];
            });

            return response()->json([
                'products' => $formattedProducts->values(),
                'pagination' => [
                    'total' => $products->total(),
                    'per_page' => $products->perPage(),
                    'current_page' => $products->currentPage(),
                    'last_page' => $products->lastPage(),
                ],
            ]);
        } catch (\Exception $e) {
            Log::error('Search error: ' . $e->getMessage(), [
                'token' => $token,
                'searchParams' => $searchParams,
                'trace' => $e->getTraceAsString()
            ]);
            return response()->json(['error' => 'An error occurred while processing your request.'], 500);
        }
    }

    public function getSearchToken(Request $request)
    {
        try {
            $token = SearchTokenManager::generateToken($request->only(['search', 'category', 'brand', 'page']));
            return response()->json(['token' => $token]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function showBrand(Request $request, $brandSlug)
    {
        $currentBrand = Brand::where('slug', $brandSlug)->firstOrFail();
        $request->merge(['brand' => $currentBrand->id]);
        $products = $this->productSearch->search($request);

        return $this->respondWithProducts($request, $products, $currentBrand);
    }

    public function showCategory(Request $request, $categorySlug)
    {
        $currentCategory = Category::where('slug', $categorySlug)->firstOrFail();
        $request->merge(['category' => $currentCategory->id]);
        $products = $this->productSearch->search($request);

        return $this->respondWithProducts($request, $products, null, $currentCategory);
    }

    public function showProduct(Request $request, $brandSlug, $productSlug)
    {
        $currentBrand = Brand::where('slug', $brandSlug)->firstOrFail();
        $product = Product::where('slug', $productSlug)
            ->whereHas('brand', function ($query) use ($brandSlug) {
                $query->where('slug', $brandSlug);
            })
            ->with(['brand', 'images'])
            ->firstOrFail();

        $products = collect([$product]);

        return $this->respondWithProducts($request, $products, $currentBrand);
    }

    private function getCommonViewData()
    {
        return [
            'brands' => Brand::all(),
            'categories' => Category::all(),
        ];
    }

    private function respondWithProducts(Request $request, $products, $searchParams = null)
    {
        $data = [
            'products' => $products,
            'brands' => Brand::all(),
            'categories' => Category::all(),
            'currentBrand' => null,
            'currentCategory' => null,
            'searchParams' => $searchParams,
        ];

        return view('products.brand', $data);
    }

    private function respondWithError(Request $request, $message, $statusCode)
    {
        if ($request->ajax()) {
            return response()->json(['error' => $message], $statusCode);
        }

        abort($statusCode, $message);
    }
}
