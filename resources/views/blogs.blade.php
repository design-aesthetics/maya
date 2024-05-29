@extends('partials.master')
@section('title', 'Blogs')
@section('content')
<section class=" container mx-auto sm:max-w-95vw">
    <div class="container sm:w-full">
        <div class="relative z-1 w-full mx-auto pb-16 items-center text-center">
            <h1 class="uppercase">Blogs</h1>
        </div>
    </div>
    <div class="w-full flex justify-center gap-3 flex-wrap gap-y-6">
        <x-blog-card title="This is a sample long blog article you need to read" summary="A summary this is, I don't even know what to write anymore!" author_name="" featured_image="/img/OnzdBxbGHE.jpg" />  
        <x-blog-card title="This is a sample long blog article you need to read" summary="A summary this is, I don't even know what to write anymore!" author_name="" featured_image="/img/OnzdBxbGHE.jpg" />  
        <x-blog-card title="This is a sample blog" summary="A summary this is, I don't even know what to write anymore!" author_name="" featured_image="/img/OnzdBxbGHE.jpg" />  
        <x-blog-card title="This is a sample long blog article you need to read" summary="A summary this is, I don't even know what to write anymore!" author_name="" featured_image="/img/OnzdBxbGHE.jpg" />  
        <x-blog-card title="This is a sample long blog article you need to read" summary="A summary this is, I don't even know what to write anymore!" author_name="" featured_image="/img/OnzdBxbGHE.jpg" />  
           </div>
</section>


@endsection
 