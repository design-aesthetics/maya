<section class="lp swiper-slide">
    <div
        class="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 {{ $imageOnRight ? 'lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px]' : '' }}">
        <img src="{{ $imageSrc }}" alt="{{ $imageAlt }}"
            class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full {{ $imageOnRight ? 'lg:order-last' : '' }}" />
        <div class="flex flex-col justify-center space-y-6">
            <div class="space-y-4">
                <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    {{ $title }}
                </h1>
                <p class="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    {{ $description }}
                </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="{{ $primaryButtonUrl }}"
                    class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                    {{ $primaryButtonText }}
                </a>
                @if (isset($secondaryButtonText))
                    <a href="{{ $secondaryButtonUrl }}"
                        class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                        {{ $secondaryButtonText }}
                    </a>
                @endif
            </div>
        </div>
    </div>
</section>
