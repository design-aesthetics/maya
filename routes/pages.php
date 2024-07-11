<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;

Route::get('/test-storage', function () {
    $directory = Storage::disk('public')->directories();
    return response()->json([
        'directories' => $directory,
        'storage_path' => storage_path('app/public'),
        'public_path' => public_path('storage'),
        'symlink_exists' => file_exists(public_path('storage')),
    ]);
});

Route::get('/', function () {
    if (!file_exists(public_path('storage'))) {
        Artisan::call('storage:link');
    }
    return view('index');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/about/team', function () {
    return view('team');
});

Route::get('/about/press', function () {
    return view('press');
});

Route::get('/policy', function () {
    return view('policy');
});

Route::get('/contact', function () {
    return view('contact');
});
