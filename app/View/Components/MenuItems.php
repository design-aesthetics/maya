<?php

namespace App\View\Components;

use App\Models\TreatmentCategory;

class MenuItems
{
    public static function getItems()
    {
        $categories = TreatmentCategory::with('services')->get();

        return $categories->map(function ($category) {
            return [
                'title' => $category->name,
                'items' => $category->services->map(function ($service) use ($category) {
                    return [
                        'label' => $service->name,
                        'url' => route('treatments.show', [
                            'category' => $category->slug,
                            'treatment' => $service->slug
                        ])
                    ];
                })->toArray()
            ];
        })->toArray();
    }
}
