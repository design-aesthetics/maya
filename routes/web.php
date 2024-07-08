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
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::get('/{brandSlug}', [ProductController::class, 'showBrand'])->name('products.brand');
    Route::get('/{brandSlug}/{productSlug}', [ProductController::class, 'showProduct'])->name('products.show');
});


// Form submissions
Route::post('/form', [MailController::class, 'store']);
Route::post('/form2', [MailController::class, 'newsletter']);
