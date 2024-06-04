<a href="/blog"
    class="blog-post max-w-[90%] md:max-w-[400px] scale-90 md:scale-100 overflow-hidden border border-slate-200">
    <div class="featured-image w-full h-52 bg-slate-200">
        @if ($featured_image)
            <img src="{{ $featured_image }}"" alt="featured_blog_image" class="w-full h-full object-cover">
        @endif
    </div>
    <div class="mt-4 pl-5 pb-8">
        <h4 class="blog-title text-h3 pt-3 lg:text-h2 font-semibold">{{ $title }}</h4>
        <p class="w-full text-primary-blue-5 pt-2 max-w-full pr-5">{{ $summary }}</p>
        <div class="author flex items-center gap-3 mt-6">
            <div class="author-image w-8 h-8 rounded-full bg-primary-blue-4"></div>
            <div class="author-details flex flex-col items-start">
                <p class="author-name font-semibold text-black text-sm lg:text-p">{{ $author_name }}</p>
            </div>
        </div>
    </div>
</a>
