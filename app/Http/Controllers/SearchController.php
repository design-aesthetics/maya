<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\ProductSearch;

class SearchController extends Controller
{
    protected $productSearch;

    public function __construct(ProductSearch $productSearch)
    {
        $this->productSearch = $productSearch;
    }

    public function search(Request $request)
    {
        $products = $this->productSearch->search($request);

        return response()->json([
            'products' => $products->items(),
            'pagination' => [
                'total' => $products->total(),
                'per_page' => $products->perPage(),
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
            ],
        ]);
    }
}
