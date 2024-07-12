<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TreatmentService;
use App\Models\TreatmentCategory;
use Illuminate\Support\Str;

class TreatmentServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            'Facials & Skin Treatments' => [
                'The Sculpt Facial',
                'HydraFacial MD',
                'Chemical Peels',
                'Specialty Facials',
                'Skin Resurfacing',
                'Skin Enhancements',
            ],
            'Injectables & Wellness' => [
                'Neurotoxins (Botox, Dysport)',
                'Dermal Fillers (Teosyal, Sculptra Face)',
                'Specialty Treatments',
                'IV Infusions',
                'Vitamin Injections',
            ],
            'Beauty & Wellness' => [
                'Organic Spray Tan',
                'Brow Lamination',
                'Plus90 Votiva-Vaginal Rejuvenation',
            ],
            'Hair Removal' => [
                'Laser Hair Removal',
                'Waxing',
                'Electrolysis',
            ],
        ];

        foreach ($services as $categoryName => $categoryServices) {
            $category = TreatmentCategory::where('name', $categoryName)->first();

            if ($category) {
                foreach ($categoryServices as $serviceName) {
                    TreatmentService::updateOrCreate(
                        [
                            'category_id' => $category->id,
                            'slug' => Str::slug($serviceName),
                        ],
                        [
                            'name' => $serviceName,
                            'description' => "Description for {$serviceName}.",
                            'details' => [
                                'Duration' => 'Varies',
                                'Good for' => ['All skin types'],
                                'How to prepare' => 'Consult with our specialists',
                            ],
                        ]
                    );
                }
            }
        }
    }
}
