<?php

use Illuminate\Support\Facades\Route;
use Canvas\Models\Topic;
use Canvas\Models\Post;

//  blogs/admin url for blog


Route::get('/blogs', function () {
    return view('blogs');
})->name('blogs.archive');

Route::get('/blog/{slug}', function ($slug) {
    $post = Canvas\Models\Post::with('user', 'tags', 'topic')->firstWhere('slug', $slug);

    if (!$post) {
        abort(404);
    }

    event(new Canvas\Events\PostViewed($post));

    return view('blog', compact('post'));
})->name('blog.show');

Route::get('/blog/topic/{slug}', function ($slug) {
    $topic = Canvas\Models\Topic::firstWhere('slug', $slug);

    if (!$topic) {
        abort(404);
    }

    $posts = $topic->posts()->published()->paginate(12);

    return view('blog_topic', compact('topic', 'posts'));
})->name('blog.topic');
