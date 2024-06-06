<div id="navbar" class="bg-white w-full text-yellow-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between py-6">
            {{-- mobile hamburger button  --}}
            <div class="lg:hidden">
                <button class="text-yellow-950 hover:text-yellow-700 focus:outline-none" aria-label="Toggle navigation">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {{-- desktop menu start  --}}
            <!-- prettier-ignore-start -->
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li>
                    <button
                        class="text-lg font-medium hover:text-yellow-700"
                        tabindex="0"
                        id="treatment-full-dropdown-button"
                    >
                        TREATMENTS
                    </button>
                </li>
                <li>
                    <button
                        class="text-lg font-medium hover:text-yellow-700"
                        tabindex="0"
                        id="mega-menu-full-dropdown-button"
                    >
                        PRODUCTS
                    </button>
                </li>
                <li>
                    <button
                        class="text-lg font-medium hover:text-yellow-700"
                        tabindex="0"
                        id="blog-full-dropdown-button"
                    >
                        BLOG
                    </button>
                </li>
            </ul>
            <div class="flex-shrink-0 mx-8">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <x-logo-icon fill="#543019" class="w-32 md:w-40 lg:w-48" alt="Maya Advanced Skin & Body Care Logo" />
                </a>
            </div>
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li><a href="/about" class="text-lg font-medium hover:text-yellow-700" tabindex="0">ABOUT</a></li>
                <li><a href="/contact" class="text-lg font-medium hover:text-yellow-700" tabindex="0">CONTACT</a></li>
                <li><a target="_blank"
                        href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking"
                        class="text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK NOW</a></li>
            </ul>
            <!-- prettier-ignore-end -->
            {{-- desktop menu end  --}}

            {{-- mobile book now button  --}}
            <div class="lg:hidden">
                <a href="#book" class="md:text-md lg:text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK
                    NOW</a>
            </div>

        </nav>

        {{-- SUB MENU FOR TREATMENTS  --}}
        <div id="treatment-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
            <div class="sub-nav-dropdown services-dropdown">
                <x-menu-item title="Facials & Skin Treatments" :items="[
                    ['label' => 'The Sculpt Facial', 'url' => '#'],
                    ['label' => 'HydraFacial MD', 'url' => '#'],
                    ['label' => 'Chemical Peels', 'url' => '#'],
                    ['label' => 'Specialty Facials', 'url' => '#'],
                    ['label' => 'Skin Resurfacing', 'url' => '#'],
                    ['label' => 'Skin Enhancements', 'url' => '#'],
                ]" />
                <x-menu-item title="Injectables & Wellness" :items="[
                    ['label' => 'Neurotoxins (Botox, Dysport)', 'url' => '#'],
                    ['label' => 'Dermal Fillers (Teosyal, Sculptra Face)', 'url' => '#'],
                    ['label' => 'Specialty Treatments', 'url' => '#'],
                    ['label' => 'IV Infusions', 'url' => '#'],
                    ['label' => 'Vitamin Injections', 'url' => '#'],
                ]" />

                <x-menu-item title="Beauty & Wellness" :items="[
                    ['label' => 'Organic Spray Tan', 'url' => '#'],
                    ['label' => 'Brow Lamination', 'url' => '#'],
                    ['label' => 'Plus90 Votiva-Vaginal Rejuvenation', 'url' => '#'],
                ]" />

                <x-menu-item title="Hair Removal" :items="[
                    ['label' => 'Laser Hair Removal', 'url' => '#'],
                    ['label' => 'Waxing', 'url' => '#'],
                    ['label' => 'Electrolysis', 'url' => '#'],
                ]" />
            </div>
        </div>

        {{-- SUB MENU FOR BLOG  --}}
        <div id="blog-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
            <div class="sub-nav-dropdown blog-dropdown">
                <div class="col-span-1 md:col-span-1 grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                        @foreach (\Canvas\Models\Post::published()->with('user', 'tags', 'topic')->take(2)->get() as $post)
                            <a href="{{ route('blog.show', ['slug' => $post->slug]) }}">
                                <div class="space-y-2">
                                    <img src="{{ $post->featured_image }}" alt="{{ $post->title }} Image"
                                        width="400" height="300" class="rounded-md object-cover"
                                        style="aspect-ratio: 400 / 300; object-fit: cover;" />
                                    <p class="text-sm text-gray-500">{{ $post->title }}</p>
                                </div>
                            </a>
                        @endforeach
                    </div>
                </div>
                <div class="col-span-1 md:col-span-1 space-y-4">
                    <ul class="space-y-2">
                        @foreach (\Canvas\Models\Topic::all() as $topic)
                            <li>
                                <a class="font-inter text-sm font-regular leading-tight hover:underline"
                                    href="{{ route('blog.topic', $topic->slug) }}">
                                    {{ $topic->name }}
                                </a>
                            </li>
                        @endforeach
                        <li>
                            <a class="font-inter text-sm font-regular leading-tight hover:underline" href="#">
                                Blog Archive
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- prettier-ignore-start -->
<div class="w-full border border-solid bg-yellow-950 border-yellow-950 min-h-[1px] max-md:max-w-full"></div>
<!-- prettier-ignore-end -->
