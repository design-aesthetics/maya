<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'debug'], function () {
    Route::get('/treatment', function () {
        return view('treatment');
    });

    Route::get('/product', function () {
        return view('product');
    });

    // You can add more debug routes here as needed
    Route::get('/any-other-template', function () {
        return view('any-other-template');
    });
});
