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
					<button class="text-lg font-medium hover:text-yellow-700" tabindex="0" id="product-full-dropdown-button">
						PRODUCTS
					</button>

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

		{{-- SUB MENU FOR PRODUCTS --}}
		@php
			$allBrands = \App\Models\Brand::orderBy("name")->get();
			$featuredBrands = \App\Models\Brand::where("is_featured", true)->take(3)->get();
		@endphp
		<div id="product-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
			<div class="sub-nav-dropdown blog-dropdown mx-auto max-w-7xl overflow-hidden px-8 py-12">
				<div class="flex">
					<!-- All Brands Column -->
					<div class="w-2/5 flex-shrink-0 pr-8">
						<h3 class="mb-6 text-sm font-semibold uppercase">All Brands</h3>
						<ul class="space-y-2 pl-0">
							{{-- blade-formatter-disable --}}
                    @foreach ($allBrands as $brand)
                        <li>
                            <a href="{{ route('products.brand', $brand->slug) }}" class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">
                                {{ $brand->name }}
                            </a>
                        </li>
                    @endforeach
                    <li><a href="{{ route('products.index') }}" class="text-sm font-semibold text-gray-600 hover:text-gray-900">All Products</a></li>
                    {{-- blade-formatter-enable --}}
						</ul>
					</div>

					<!-- Featured Brands -->
					<div class="flex w-3/5 flex-grow space-x-8">
						@foreach ($featuredBrands as $brand)
							<div class="featured-brand flex-grow">
								<a href="{{ route("products.brand", $brand->slug) }}" class="block cursor-pointer">
									<div class="mb-4 h-full w-full min-w-[12vw] max-w-[15vw]">
										<img src="{{ $brand->banner_image_url }}" alt="{{ $brand->name }}" class="h-full w-full object-contain">
									</div>
									<div class="h-full w-full min-w-[12vw] max-w-[15vw]">
										<h4 class="mb-1 truncate text-sm font-semibold">{{ Str::upper($brand->name) }}</h4>
										<p class="text-xs uppercase text-gray-500">
											Featured Brand
										</p>
									</div>
								</a>
							</div>
						@endforeach
					</div>
				</div>
			</div>
		</div>

		{{-- SUB MENU FOR BLOG --}}
		@php
			$latestPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(5)->get();
			$featuredPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(3)->get();
		@endphp
		<div id="blog-menu-full-dropdown" class="sub-nav-dropdown-container hidden">
			<div class="sub-nav-dropdown blog-dropdown mx-auto max-w-7xl overflow-hidden px-8 py-12">
				<div class="flex">
					<!-- Latest Blog Posts Column -->
					<div class="w-2/5 flex-shrink-0 pr-8">
						<h3 class="mb-6 text-sm font-semibold uppercase">Latest Blog Posts</h3>
						<ul class="space-y-2 pl-0">
							{{-- blade-formatter-disable --}}
							@foreach ($latestPosts->take(5) as $post)
								<li>
									<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="line-clamp-1 text-sm text-gray-600 hover:text-gray-900">
										{{ $post->title }}
									</a>
								</li>
							@endforeach
							<li><a href="/blogs" class="text-sm font-semibold text-gray-600 hover:text-gray-900">Blog Archive</a></li>
                            {{-- blade-formatter-enable --}}
						</ul>
					</div>

					<!-- Featured Posts -->
					<div class="flex w-3/5 flex-grow space-x-8">
						@foreach ($featuredPosts->take(3) as $post)
							<div class="featured-post flex-grow">
								<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="block cursor-pointer">
									<div class="mb-4 h-full w-full min-w-[12vw] max-w-[15vw]">
										<img src="{{ $post->featured_image }}" alt="{{ $post->title }}" class="h-full w-full object-cover">
									</div>
									<div class="h-full w-full min-w-[12vw] max-w-[15vw]">
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
