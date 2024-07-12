<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TreatmentCategory;
use Illuminate\Support\Str;

class TreatmentCategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            'Facials & Skin Treatments',
            'Injectables & Wellness',
            'Beauty & Wellness',
            'Hair Removal',
        ];

        foreach ($categories as $category) {
            TreatmentCategory::updateOrCreate(
                ['slug' => Str::slug($category)],
                [
                    'name' => $category,
                    'description' => "Description for {$category} category.",
                ]
            );
        }
    }
}
