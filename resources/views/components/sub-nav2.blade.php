<div id="navbar" class="w-full bg-white text-yellow-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center justify-between py-6">
			{{-- mobile hamburger button --}}
			<div class="lg:hidden">
				<button class="text-yellow-950 hover:text-yellow-700 focus:outline-none" aria-label="Toggle navigation">
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>

			{{-- desktop menu start --}}
			<ul class="mb-0 hidden space-x-12 pl-0 lg:flex">
				<li>
					<button class="text-lg font-medium hover:text-yellow-700" tabindex="0" id="treatment-full-dropdown-button">
						TREATMENTS
					</button>
				</li>
				<li>
					<a href="/debug/product">
						<button class="text-lg font-medium hover:text-yellow-700" tabindex="0" id="mega-menu-full-dropdown-button">
							PRODUCTS
						</button>
					</a>

				</li>
				<li>
					<button class="text-lg font-medium hover:text-yellow-700" tabindex="0" id="blog-full-dropdown-button">
						BLOG
					</button>
				</li>
			</ul>
			<div class="mx-8 flex-shrink-0">
				<a href="/" target="_blank" rel="noopener noreferrer">
					<x-logo-icon fill="#543019" class="w-32 md:w-40 lg:w-48" alt="Maya Advanced Skin & Body Care Logo" />
				</a>
			</div>
			<ul class="mb-0 hidden space-x-12 pl-0 lg:flex">
				<li><a href="/about" class="text-lg font-medium hover:text-yellow-700" tabindex="0">ABOUT</a></li>
				<li><a href="/contact" class="text-lg font-medium hover:text-yellow-700" tabindex="0">CONTACT</a></li>
				<li><a target="_blank" href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking" class="text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK NOW</a></li>
			</ul>
			{{-- desktop menu end --}}

			{{-- mobile book now button --}}
			<div class="lg:hidden">
				<a href="#book" class="md:text-md font-medium hover:text-yellow-700 lg:text-lg" tabindex="0">BOOK
					NOW</a>
			</div>

		</nav>

		{{-- SUB MENU FOR TREATMENTS --}}
		<div id="treatment-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
			<div class="sub-nav-dropdown services-dropdown">
				{{-- blade-formatter-disable --}}
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
                    ['label' => 'Plus90 Votiva-Vaginal Rejuvenation', 'url' => '#']
                ]" />

                <x-menu-item title="Hair Removal" :items="[
                    ['label' => 'Laser Hair Removal', 'url' => '#'],
                    ['label' => 'Waxing', 'url' => '#'],
                    ['label' => 'Electrolysis', 'url' => '#']
                ]" />
                {{-- blade-formatter-enable --}}
			</div>
		</div>

		{{-- SUB MENU FOR BLOG --}}
		@php
			$latestPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(5)->get();
			$featuredPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(3)->get();
		@endphp
		<div id="blog-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
			<div class="sub-nav-dropdown blog-dropdown mx-auto max-w-7xl px-8 py-12">
				<div class="flex">
					<!-- Latest Blog Posts Column -->
					<div class="w-2/3 pr-12">
						<h3 class="mb-6 text-sm font-semibold uppercase">Latest Blog Posts</h3>
						<ul class="space-y-2 pl-0">
							@foreach ($latestPosts->take(5) as $post)
								<li>
									<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">
										{{ $post->title }}
									</a>
								</li>
							@endforeach
							<li><a href="/blogs" class="text-sm font-semibold text-gray-600 hover:text-gray-900">Blog
									Archive</a></li>
						</ul>
					</div>

					<!-- Featured Posts -->
					<div class="flex w-2/3 space-x-8">
						@foreach ($featuredPosts->take(3) as $post)
							<div class="featured-post w-full">
								<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="block cursor-pointer">
									<div class="mb-4 h-full w-full min-w-[12vw] max-w-[20vw]">
										<img src="{{ $post->featured_image }}" alt="{{ $post->title }}" class="h-full w-full object-cover">
									</div>
									<div class="h-full w-full min-w-[12vw] max-w-[20vw]">
										<h4 class="mb-1 truncate text-sm font-semibold">{{ Str::upper($post->title) }}
										</h4>
										<p class="text-xs uppercase text-gray-500">
											{{ $post->topic->first()->name ?? "MAYA SKIN & BODY CARE" }}
										</p>
									</div>
								</a>
							</div>
						@endforeach
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- prettier-ignore-start -->
<div class="w-full border border-solid bg-yellow-950 border-yellow-950 min-h-[1px] max-md:max-w-full"></div>
<!-- prettier-ignore-end -->
