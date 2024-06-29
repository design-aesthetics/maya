<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;
// use App\Mail\Mailer1;

// view Mailer1
// Route::get('/mailable', function () {
//     $data = [
//         'email' => 'john.doe@example.com',
//         'name' => 'John Doe',
//         'phone' => '555-555-5555',
//         'subject' => 'Test Email',
//         'message' => 'This is a test email.',
//         'type' => 'admin'
//     ];

//     $mailer1 = new Mailer1($data);

//     return $mailer1->render();
// });


Route::get('/', function () {
    return view('index');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/policy', function () {
    return view('policy');
});
Route::get('/treatments', function () {
    return view('treatments');
});
Route::get('/morpheus8', function () {
    return view('morpheus_8');
});
Route::get('/forma', function () {
    return view('forma');
});
Route::get('/farsk-iv', function () {
    return view('farskiv');
});

Route::get('/blog', function () {
    return view('blog');
});


Route::get('/products/zo-skin-health', function () {
    return view('products.zo-skin');
});
Route::get('/products/111-skin', function () {
    return view('products.111skin');
});

// Route::post('/form/1', [MailController::class, 'store']);
Route::post('/form', [MailController::class, 'store']);

Route::post('/form2', [MailController::class, 'newsletter']);
