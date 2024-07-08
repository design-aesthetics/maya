<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
use App\Http\Controllers\TreatmentController;
use App\Http\Controllers\ProductController;

// Include static pages routes
Route::group([], base_path('routes/pages.php'));

// Include blog routes
Route::group([], base_path('routes/blog.php'));

// Include debug routes (only in non-production environments)
if (app()->environment('local', 'staging', 'testing')) {
    Route::group([], base_path('routes/debug.php'));
}

// Treatments routes
Route::group(['prefix' => 'treatments'], function () {
    Route::get('/', [TreatmentController::class, 'index']);
    Route::get('/morpheus8', [TreatmentController::class, 'morpheus8']);
    Route::get('/forma', [TreatmentController::class, 'forma']);
});


// Products routes
Route::group(['prefix' => 'products'], function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::get('/zo-skin-health', [ProductController::class, 'zoSkinHealth']);
    Route::get('/111-skin', [ProductController::class, 'oneTwentyOneSkin']);
    Route::get('/farsk', [ProductController::class, 'farskHealthIv']);
});


// Form submissions
Route::post('/form', [MailController::class, 'store']);
Route::post('/form2', [MailController::class, 'newsletter']);
