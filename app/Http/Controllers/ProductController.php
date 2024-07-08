<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $brands = Brand::all();
        $products = Product::with('images')->get();
        $currentBrand = null; // No specific brand for the main products page
        return view('products.brand', compact('brands', 'products', 'currentBrand'));
    }

    public function showBrand($brandSlug)
    {
        $brands = Brand::all();
        $currentBrand = Brand::where('slug', $brandSlug)->firstOrFail();
        $products = $currentBrand->products()->with('images')->get();
        return view('products.brand', compact('brands', 'products', 'currentBrand'));
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
        $brand = $product->brand;
        return view('products.show', compact('product', 'brands', 'brand'));
    }
}
