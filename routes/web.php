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
    Route::get('/', [TreatmentController::class, 'index'])->name('treatments.index');
    Route::get('/{category}', [TreatmentController::class, 'index'])->name('treatments.category');
    Route::get('/{category}/{treatment}', [TreatmentController::class, 'show'])->name('treatments.show');
});

// Products routes
Route::group(['prefix' => 'products'], function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');

    Route::get('/search/{token}', [ProductController::class, 'searchByToken'])
        ->name('products.search.token')
        ->middleware('api');
    Route::post('/search-token', [ProductController::class, 'getSearchToken'])
        ->name('products.search.getToken')
        ->middleware('api');

    // Move these routes to the bottom of the group
    Route::get('/brand/{brandSlug}', [ProductController::class, 'showBrand'])
        ->name('products.brand')
        ->where('brandSlug', '[a-z0-9-]+');
    Route::get('/category/{categorySlug}', [ProductController::class, 'showCategory'])
        ->name('products.category')
        ->where('categorySlug', '[a-z0-9-]+');
    Route::get('/{brandSlug}/{productSlug}', [ProductController::class, 'showProduct'])
        ->name('products.show')
        ->where(['brandSlug' => '[a-z0-9-]+', 'productSlug' => '[a-z0-9-]+']);
});


// Form submissions
Route::post('/form', [MailController::class, 'store']);
