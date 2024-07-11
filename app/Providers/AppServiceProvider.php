<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (!file_exists(public_path('storage'))) {
            try {
                app('files')->link(storage_path('app/public'), public_path('storage'));
            } catch (\Exception $e) {
                Log::error('Failed to create storage symlink: ' . $e->getMessage());
            }
        } else if (!is_link(public_path('storage'))) {
            // If it exists but is not a symlink, remove it and create the symlink
            try {
                unlink(public_path('storage'));
                app('files')->link(storage_path('app/public'), public_path('storage'));
            } catch (\Exception $e) {
                Log::error('Failed to recreate storage symlink: ' . $e->getMessage());
            }
        }
    }
}
