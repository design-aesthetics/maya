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
            'Facial Treatments' => [
                'Chemical Peels' => [],
                'Deep Cleaning Facial' => [],
                'Bacne' => [],
                'Cosmelan' => [],
                'Silk Peel' => [],
                'Specialty Facials' => [
                    'The Sculpt Facial',
                    'Hydrafacial MD',
                    'Forma Facial',
                    'IPL Facial'
                ],
                'Skin Resurfacing' => [
                    'Morpheus 8',
                    'Tixel'
                ],
                'Skin Enhancements' => [
                    'Red Light Therapy',
                    'CryoProbe',
                    'Pink Intimate',
                    'Dermaplaning',
                    'Oxygen Treatment',
                    'Lymphatic Facial Massage'
                ],
            ],
            'Injectables & Wellness' => [
                'Neurotoxins (Botox, Dysport)' => [],
                'Dermal Fillers (Teosyal, Sculptra Face)' => [],
                'Specialty Treatments' => [],
                'IV Infusions' => [],
                'Vitamin Injections' => [],
            ],
            'Beauty & Wellness' => [
                'Organic Spray Tan' => [],
                'Brow Lamination' => [],
                'Votiva' => [],
            ],
            'Hair Removal' => [
                'Laser Hair Removal' => [],
                'Waxing' => [],
                'Electrolysis' => [],
            ],
        ];

        foreach ($services as $categoryName => $categoryServices) {
            $category = TreatmentCategory::firstOrCreate(['name' => $categoryName], ['slug' => Str::slug($categoryName)]);

            foreach ($categoryServices as $serviceName => $subServices) {
                $slug = $this->generateUniqueSlug($serviceName);
                $service = TreatmentService::updateOrCreate(
                    [
                        'category_id' => $category->id,
                        'name' => $serviceName,
                    ],
                    [
                        'slug' => $slug,
                        'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu consequat urna. Aliquam erat volutpat. Fusce id mi nec mauris eleifend faucibus id ac felis. In in vulputate mi. Nam tempus condimentum lacus eget gravida. Etiam et quam non orci fermentum posuere a nec dolor. Nam at ligula non metus luctus pulvinar. Description for {$serviceName}.",
                        'details' => [
                            'Duration' => 'Varies',
                            'Good for' => ['All skin types'],
                            'How to prepare' => 'Consult with our specialists',
                        ],
                    ]
                );

                // Special case for Vitamin Injections
                if ($serviceName === 'Vitamin Injections') {
                    $subSlug = $this->generateUniqueSlug('B12 Shots');
                    TreatmentService::updateOrCreate(
                        [
                            'category_id' => $category->id,
                            'parent_id' => $service->id,
                            'name' => 'B12 Shots',
                        ],
                        [
                            'slug' => $subSlug,
                            'description' => "Description for B12 Shots.",
                            'details' => [
                                'Duration' => 'Varies',
                                'Good for' => ['All patients'],
                                'How to prepare' => 'Consult with our specialists',
                            ],
                        ]
                    );
                } else {
                    foreach ($subServices as $subServiceName) {
                        $subSlug = $this->generateUniqueSlug($subServiceName);
                        TreatmentService::updateOrCreate(
                            [
                                'category_id' => $category->id,
                                'parent_id' => $service->id,
                                'name' => $subServiceName,
                            ],
                            [
                                'slug' => $subSlug,
                                'description' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu consequat urna. Aliquam erat volutpat. Fusce id mi nec mauris eleifend faucibus id ac felis. In in vulputate mi. Nam tempus condimentum lacus eget gravida. Etiam et quam non orci fermentum posuere a nec dolor. Nam at ligula non metus luctus pulvinar. Description for {$subServiceName}.",
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
    private function generateUniqueSlug($name)
    {
        $slug = Str::slug($name);
        $originalSlug = $slug;
        $count = 1;

        while (TreatmentService::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $count++;
        }

        return $slug;
    }
}
