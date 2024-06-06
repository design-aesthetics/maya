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
// blog
Route::get('/blogs', function () {
    return view('blogs');
});

Route::get('/blog/{slug}', function ($slug) {
    $post = Canvas\Models\Post::with('user', 'tags', 'topic')->firstWhere('slug', $slug);

    if (!$post) {
        abort(404);
    }

    event(new Canvas\Events\PostViewed($post));

    return view('blog', compact('post'));
})->name('blog.show');





Route::get('/about', function () {
    return view('about');
});
Route::get('/about/team', function () {
    return view('team');
});
Route::get('/about/press', function () {
    return view('team');
});

Route::get('/policy', function () {
    return view('policy');
});
Route::get('/treatments', function () {
    return view('treatments');
});
Route::get('/treatment', function () {
    return view('treatment');
});
Route::get('/products', function () {
    return view('products');
});
Route::get('/product', function () {
    return view('product');
});
Route::get('/products', function () {
    return view('products');
});

Route::get('/press', function () {
    return view('press');
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


Route::get('/products/zo-skin-health', function () {
    return view('products.zo-skin');
});
Route::get('/products/111-skin', function () {
    return view('products.111skin');
});

// Route::post('/form/1', [MailController::class, 'store']);
Route::post('/form', [MailController::class, 'store']);

Route::post('/form2', [MailController::class, 'newsletter']);
