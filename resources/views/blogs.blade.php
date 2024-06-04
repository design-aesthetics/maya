@extends('partials.master')
@section('title', 'Blogs')
@section('content')
    <section>
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
                        {{-- href="{{ $post->url }}" --}}
                        href="{{ route('blog.show', ['slug' => $post->slug]) }}"

                    />
                @endforeach
                <!-- prettier-ignore-end -->
            </div>
        </div>
    </section>
@endsection
