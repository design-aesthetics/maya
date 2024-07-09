<?php

namespace App\Helpers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Laravel\Scout\Builder as ScoutBuilder;
use Illuminate\Support\Facades\Log;

class ProductSearch
{
    public function search(Request $request)
    {
        Log::info('Initiating search');
        $query = $this->initializeQuery($request);
        Log::info('Query initialized');
        $query = $this->applyFilters($query, $request);
        Log::info('Filters applied');
        $results = $query->paginate(12);
        return $results;
    }

    private function initializeQuery(Request $request)
    {
        $searchTerm = $request->input('search');
        if (!empty($searchTerm)) {
            return Product::search($searchTerm);
        }
        return Product::query();
    }

    private function applyFilters($query, Request $request)
    {
        if ($query instanceof ScoutBuilder) {
            return $this->applyScoutFilters($query, $request);
        }
        return $this->applyEloquentFilters($query, $request);
    }

    private function applyScoutFilters(ScoutBuilder $query, Request $request)
    {
        if ($request->filled('brand')) {
            $query->where('brand.id', $request->input('brand'));
        }

        if ($request->filled('category')) {
            $query->where('categories.id', $request->input('category'));
        }

        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->input('min_price'));
        }

        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->input('max_price'));
        }

        return $query;
    }

    private function applyEloquentFilters(EloquentBuilder $query, Request $request)
    {
        if ($request->filled('brand')) {
            $query->where('brand_id', $request->input('brand'));
        }

        if ($request->filled('category')) {
            $query->whereHas('categories', function ($q) use ($request) {
                $q->where('categories.id', $request->input('category'));
            });
        }

        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->input('min_price'));
        }

        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->input('max_price'));
        }

        return $query;
    }
}
