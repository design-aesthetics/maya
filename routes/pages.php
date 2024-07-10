<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstagramController;

Route::get('/', function () {
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
