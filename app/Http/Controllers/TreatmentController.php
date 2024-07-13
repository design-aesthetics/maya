<?php

namespace App\Http\Controllers;

use App\Models\TreatmentCategory;
use App\Models\TreatmentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class TreatmentController extends Controller
{
    public function index()
    {
        $categories = $this->getCachedCategories();
        return view('treatments.index', compact('categories'));
    }

    public function show($categorySlug, $treatmentSlug)
    {
        $category = TreatmentCategory::where('slug', $categorySlug)->firstOrFail();
        $treatment = TreatmentService::where('slug', $treatmentSlug)
            ->where('category_id', $category->id)
            ->firstOrFail();

        return view('treatments.show', compact('category', 'treatment'));
    }

    public function getMenuData()
    {
        try {
            $categories = $this->getCachedCategories();
            return response()->json($categories);
        } catch (\Exception $e) {
            Log::error('Error in getMenuData: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while fetching the menu data'], 500);
        }
    }

    private function getCachedCategories()
    {
        return Cache::remember('treatment_categories', 3600, function () {
            try {
                $categories = TreatmentCategory::with(['services' => function ($query) {
                    $query->whereNull('parent_id')
                        ->with(['children' => function ($q) {
                            $q->orderBy('sort_order', 'asc');
                        }])
                        ->select('id', 'category_id', 'name', 'slug', 'main_image', 'sort_order')
                        ->orderBy('sort_order', 'asc');
                }])
                    ->select('id', 'name', 'slug', 'sort_order')
                    ->orderBy('sort_order', 'asc')
                    ->get();

                // Sort treatments within each category and their children
                $categories->each(function ($category) {
                    $category->services = $category->services->sortBy('sort_order')->values();
                    $category->services->each(function ($service) use ($category) {
                        $service->children = $service->children->sortBy('sort_order')->values();
                        // Add URLs for children
                        $service->children->each(function ($child) use ($category) {
                            $child->url = route('treatments.show', [
                                'category' => $category->slug,
                                'treatment' => $child->slug
                            ]);
                        });
                    });
                });

                $this->logMissingTreatments($categories);

                return $categories;
            } catch (\Exception $e) {
                Log::error('Error in getCachedCategories: ' . $e->getMessage());
                throw $e;
            }
        });
    }

    private function logMissingTreatments($categories)
    {
        foreach ($categories as $category) {
            if ($category->services->isEmpty()) {
                Log::warning("Category '{$category->name}' has no treatments.");
            }
        }
    }
}
