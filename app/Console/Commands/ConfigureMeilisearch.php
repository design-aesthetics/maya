<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Meilisearch\Client;

class ConfigureMeilisearch extends Command
{
    protected $signature = 'meilisearch:configure';
    protected $description = 'Configure Meilisearch settings';

    public function handle()
    {
        $client = new Client(config('scout.meilisearch.host'), config('scout.meilisearch.key'));
        $index = $client->index('products');

        $index->updateSettings([
            'searchableAttributes' => [
                'name',
                'description',
                'brand.name',
                'categories.name'
            ],
            'filterableAttributes' => [
                'brand_id',
                'categories.id'
            ],
            'sortableAttributes' => [
                'name',
                'price'
            ],
            'rankingRules' => [
                'words',
                'typo',
                'proximity',
                'attribute',
                'sort',
                'exactness'
            ],
            'typoTolerance' => [
                'enabled' => true,
                'minWordSizeForTypos' => [
                    'oneTypo' => 3,
                    'twoTypos' => 6
                ]
            ]
        ]);

        $this->info('Meilisearch configured successfully.');
    }
}
