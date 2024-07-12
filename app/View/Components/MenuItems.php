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
                'title' => $category->name,
                'items' => self::mapServices($category->services, $category)
            ];
        })->toArray();
    }

    private static function mapServices($services, $category)
    {
        return $services->map(function ($service) use ($category) {
            $item = [
                'label' => $service->name,
                'url' => $service->slug ? route('treatments.show', [
                    'category' => $category->slug,
                    'treatment' => $service->slug
                ]) : null,
                'hasChildren' => $service->hasChildren()
            ];

            if ($service->hasChildren()) {
                $item['children'] = self::mapServices($service->children, $category);
            }

            return $item;
        })->toArray();
    }
}
