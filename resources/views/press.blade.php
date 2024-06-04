@extends('partials.master')
@section('title', 'Products')
@section('content')

    <section class=" container mx-auto sm:max-w-95vw">
        <div class="container sm:w-full">
            <div class="relative z-1 w-full mx-auto pb-16 items-center text-center">
                <h1 class="uppercase">Press</h1>
            </div>
        </div>
        <div class="w-full flex justify-center gap-3 flex-wrap gap-y-6">
            <x-blog-card title="Press release #1" summary="A summary this is, I don't even know what to write anymore!"
                author_name="" featured_image="/img/OnzdBxbGHE.jpg" source="Google" />
            <x-blog-card title="Press release #2" summary="A summary this is, I don't even know what to write anymore!"
                author_name="" featured_image="/img/OnzdBxbGHE.jpg" source="Google" />
            <x-blog-card title="This is a sample blog" summary="A summary this is, I don't even know what to write anymore!"
                author_name="" featured_image="/img/OnzdBxbGHE.jpg" source="Google" />
            <x-blog-card title="Press release #4" summary="A summary this is, I don't even know what to write anymore!"
                author_name="" featured_image="/img/OnzdBxbGHE.jpg" source="Google" />
            <x-blog-card title="Press release #5" summary="A summary this is, I don't even know what to write anymore!"
                author_name="" featured_image="/img/OnzdBxbGHE.jpg" source="Google" />
        </div>
    </section>

@endsection
