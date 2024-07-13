<?php

namespace App\View\Components;

use App\Models\TreatmentCategory;
use App\Models\TreatmentService;

class MenuItems
{
    public static function getItems()
    {
        $categories = TreatmentCategory::with(['services' => function ($query) {
            $query->whereNull('parent_id')->with('children');
        }])->get();

        return $categories->map(function ($category) {
            return [
                'name' => $category->name,
                'slug' => $category->slug,
                'services' => self::mapServices($category->services, $category)
            ];
        })->toArray();
    }

    private static function mapServices($services, $category)
    {
        return $services->map(function ($service) use ($category) {
            $item = [
                'name' => $service->name,
                'slug' => $service->slug,
                'url' => route('treatments.show', [
                    'category' => $category->slug,
                    'treatment' => $service->slug
                ]),
                'main_image' => $service->main_image
            ];

            if ($service->hasChildren()) {
                $item['subservices'] = self::mapSubservices($service->children, $category);
            }

            return $item;
        })->toArray();
    }

    private static function mapSubservices($subservices, $category)
    {
        return $subservices->map(function ($subservice) use ($category) {
            return [
                'name' => $subservice->name,
                'slug' => $subservice->slug,
                'url' => route('treatments.show', [
                    'category' => $category->slug,
                    'treatment' => $subservice->slug
                ])
            ];
        })->toArray();
    }
}
