<?php

namespace App\View\Components;

class MenuItems
{
    public static function getItems()
    {
        return [
            [
                'title' => 'Facials & Skin Treatments',
                'items' => [
                    ['label' => 'The Sculpt Facial', 'url' => '#'],
                    ['label' => 'HydraFacial MD', 'url' => '#'],
                    ['label' => 'Chemical Peels', 'url' => '#'],
                    ['label' => 'Specialty Facials', 'url' => '#'],
                    ['label' => 'Skin Resurfacing', 'url' => '#'],
                    ['label' => 'Skin Enhancements', 'url' => '#'],
                ]
            ],
            [
                'title' => 'Injectables & Wellness',
                'items' => [
                    ['label' => 'Neurotoxins (Botox, Dysport)', 'url' => '#'],
                    ['label' => 'Dermal Fillers (Teosyal, Sculptra Face)', 'url' => '#'],
                    ['label' => 'Specialty Treatments', 'url' => '#'],
                    ['label' => 'IV Infusions', 'url' => '#'],
                    ['label' => 'Vitamin Injections', 'url' => '#'],
                ]
            ],
            [
                'title' => 'Beauty & Wellness',
                'items' => [
                    ['label' => 'Organic Spray Tan', 'url' => '#'],
                    ['label' => 'Brow Lamination', 'url' => '#'],
                    ['label' => 'Plus90 Votiva-Vaginal Rejuvenation', 'url' => '#']
                ]
            ],
            [
                'title' => 'Hair Removal',
                'items' => [

                    ['label' => 'Laser Hair Removal', 'url' => '#'],
                    ['label' => 'Waxing', 'url' => '#'],
                    ['label' => 'Electrolysis', 'url' => '#']
                ]
            ],
        ];
    }
}
