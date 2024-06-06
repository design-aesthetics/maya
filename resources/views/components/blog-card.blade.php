@props(['title', 'href', 'featured_image', 'published_at'])


<a href="{{ $href }}"
    class="blog-post max-w-[90%] md:max-w-[400px] scale-90 md:scale-100 overflow-hidden border border-slate-200">
    <div class="featured-image w-full h-52 bg-slate-200">
        @if ($featured_image)
            <img src="{{ $featured_image }}" alt="{{ $title }} Image" class="w-full h-full object-cover">
        @endif

    </div>
    <div class="px-8 py-8">
        <h2 class="text-lg font-semplicita text-primary-blue-5">{{ $title }}</h2>
        <p class="text-sm pt-4">{{ \Carbon\Carbon::parse($published_at)->format('F d, Y') }}</p>
    </div>
</a>
