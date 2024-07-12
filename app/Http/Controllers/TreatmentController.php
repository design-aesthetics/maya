<?php

namespace App\Http\Controllers;

use App\Models\TreatmentCategory;
use App\Models\TreatmentService;
use Illuminate\Support\Facades\Log;

class TreatmentController extends Controller
{
    public function index()
    {
        $categories = TreatmentCategory::with('services')->get();
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
}
