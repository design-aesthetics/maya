{{-- blade-formatter-disable --}}
@extends('partials.master')
@section('title', $post->title)
@section('content')
    <article>
        <section>
            <div class="container">
                <div class="px-4 sm:px-4 lg:px-[15vw] text-center flex flex-col gap-6">
                    <p>{{ $post->published_at->format('F d, Y') }}</p>
                    <h1 class="text-xlh1 font-light mb-4">
                        {{ $post->title }}</h1>
                </div>
            </div>
        </section>
        <section class="pt-0">
            <div class="container">
            @php
            $content = preg_split('#</p>\s*<p>#i', $post->body);
            @endphp
            @foreach ($content as $block)
                @if (strpos($block, '<div class="embedded_image"') !== false)
                    {!! $block !!}
                @else
                    <div class="px-4 md:px-[10vw] lg:px-[8vw] xl:px-[12vw] 2xl:px-[15vw]">
                        <p>{!! $block !!}</p>
                    </div>
                @endif
            @endforeach
                <div class="tags flex gap-4 flex-wrap mt-20 mb-10 lg:mb-20">
                    @foreach ($post->tags as $tag)
                        <p class="prose tag py-3 px-5 bg-slate-100 text-slate-800 font-inter">{{ $tag->name }}</p>
                    @endforeach
                </div>
            </div>
        </section>
    </article>
    <x-instagram-grid />
@endsection
