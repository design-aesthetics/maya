<!-- prettier-ignore-start -->
@extends('partials.master')
@section('title', 'Blogs')
@section('url', 'https://www.mayaskinandbodycare.com/contact')
@section('robots', 'index, follow')
@section('descriptions', 'Explore the latest in skincare and wellness on the Maya Skin & Body Care blog. Discover tips, treatments, and expert advice to enhance your beauty and health.')
<!-- prettier-ignore-end -->
@section('content')
    <section class="mb-24">
        <div class="container sm:w-full">
            <div class="relative z-1 w-full mx-auto pb-16 items-center text-center">
                <h1 class="text-xlh1 font-light mb-4">Blogs</h1>
            </div>
            <div class="w-full flex justify-start gap-3 flex-wrap gap-y-6">
                <!-- prettier-ignore-start -->
                @foreach (\Canvas\Models\Post::published()->with('user', 'tags', 'topic')->get() as $post)
                    <x-blog-card
                        title="{{ $post->title }}"
                        summary="{{ $post->summary }}"
                        author_name="{{ $post->user->name }}"
                        featured_image="{{ $post->featured_image }}"
                        slug="{{ $post->slug }}"
                        href="{{ route('blog.show', ['slug' => $post->slug]) }}"
                        published_at="{{ $post->published_at }}"
                    />
                @endforeach
                <!-- prettier-ignore-end -->
            </div>
        </div>
    </section>
    @include('sections.insta')
@endsection
