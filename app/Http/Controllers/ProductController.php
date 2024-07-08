<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $brands = Brand::with('products')->get();
        return view('products.index', compact('brands'));
    }

    public function showBrand($brandSlug)
    {
        $brand = Brand::where('slug', $brandSlug)->firstOrFail();
        $products = $brand->products()->with('images')->get();
        $brands = Brand::all(); // Add this line to fetch all brands
        return view('products.brand', compact('brand', 'products', 'brands'));
    }


    public function showProduct($brandSlug, $productSlug)
    {
        $product = Product::where('slug', $productSlug)
            ->whereHas('brand', function ($query) use ($brandSlug) {
                $query->where('slug', $brandSlug);
            })
            ->with(['brand', 'images'])
            ->firstOrFail();

        $brands = Brand::all();
        return view('products.show', compact('product'));
    }
}
