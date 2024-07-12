<?php

namespace App\Http\Controllers;

use App\Models\TreatmentCategory;
use App\Models\TreatmentService;

class TreatmentController extends Controller
{
    public function index()
    {
        $categories = TreatmentCategory::with('services')->get();
        return view('treatments.index', compact('categories'));
    }

    public function show(TreatmentCategory $category, TreatmentService $treatment)
    {
        return view('treatments.show', compact('category', 'treatment'));
    }
}
