<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'debug'], function () {

    // You can add more debug routes here as needed
    Route::get('/any-other-template', function () {
        return view('any-other-template');
    });
});
