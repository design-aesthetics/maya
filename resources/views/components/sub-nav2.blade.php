@php
	$allBrands = \App\Models\Brand::orderBy("name")->get();
	$featuredBrands = \App\Models\Brand::where("is_featured", true)->take(3)->get();
	$latestPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(5)->get();
	$featuredPosts = \Canvas\Models\Post::published()->orderBy("published_at", "desc")->take(3)->get();
@endphp

<div id="navbar" class="w-full bg-white text-yellow-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center justify-between py-6">
			{{-- mobile hamburger button --}}
			<div class="flex-1 lg:hidden">
				<button id="mobile-menu-toggle" class="text-yellow-950 hover:text-yellow-700 focus:outline-none" aria-label="Toggle navigation">
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
			<div class="flex flex-1 justify-center">
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

			{{-- Empty div for spacing (hidden on desktop) --}}
			<div class="flex-1 lg:hidden"></div>
		</nav>


		{{-- mobile menu overlay --}}
		<div id="mobile-menu-overlay" class="hidden lg:hidden"></div>
		{{-- mobile menu --}}
		<div id="mobile-menu" class="fixed inset-y-0 left-0 z-50 w-4/5 -translate-x-full transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out lg:hidden">
			<div class="flex h-full flex-col">
				<div class="flex items-center justify-between border-b border-gray-200 p-4">
					<button id="mobile-menu-close" class="text-yellow-950 hover:text-yellow-700 focus:outline-none">
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex-grow p-4">
					<ul class="space-y-4 pl-0">
						<!-- Treatments -->
						<li class="border-b border-gray-200 pb-4">
							<button class="mobile-submenu-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left">
								<span class="text-h3 font-medium">TREATMENTS</span>
								<div class="plus-minus closed">
									<div class="horizontal"></div>
									<div class="vertical"></div>
								</div>
							</button>
							{{-- <ul class="mobile-submenu hidden pl-4 pt-2">
								@foreach (\App\View\Components\MenuItems::getItems() as $menuItem)
									<li class="py-2">
										<button class="mobile-submenu-toggle-secondary relative flex w-full items-center justify-between py-1 pr-4 text-left">
											<span class="text-h4 font-medium">{{ $menuItem["title"] }}</span>
											<div class="plus-minus closed pr-4">
												<div class="horizontal"></div>
												<div class="vertical"></div>
											</div>
										</button>
										<ul class="mobile-submenu-secondary hidden pl-4 pt-2">
											@foreach ($menuItem["items"] as $item)
												<li>
													<a href="{{ $item["url"] }}" class="block py-1 text-h5 text-gray-600 hover:text-gray-900">
														{{ $item["label"] }}
													</a>
												</li>
											@endforeach
										</ul>
									</li>
								@endforeach
							</ul> --}}
						</li>
						<!-- Products -->
						<li class="border-b border-gray-200 pb-4">
							<button class="mobile-submenu-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left">
								<span class="text-h3 font-medium">PRODUCTS</span>
								<div class="plus-minus closed">
									<div class="horizontal"></div>
									<div class="vertical"></div>
								</div>
							</button>
							<ul class="mobile-submenu hidden pl-4 pt-2">
								@foreach ($allBrands as $brand)
									<li>
										<a href="{{ route("products.brand", $brand->slug) }}" class="block overflow-hidden overflow-ellipsis whitespace-nowrap py-1 text-h5 text-gray-600 hover:text-gray-900">
											{{ $brand->name }}
										</a>
									</li>
								@endforeach
								<li>
									<a href="{{ route("products.index") }}" class="block py-1 text-h5 font-semibold text-gray-600 hover:text-gray-900">
										All Products
									</a>
								</li>
							</ul>
						</li>
						<!-- Blog -->
						<li class="border-b border-gray-200 pb-4">
							<button class="mobile-submenu-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left">
								<span class="text-h3 font-medium">BLOG</span>
								<div class="plus-minus closed">
									<div class="horizontal"></div>
									<div class="vertical"></div>
								</div>
							</button>
							<ul class="mobile-submenu hidden pl-4 pt-2">
								@foreach ($latestPosts->take(5) as $post)
									<li>
										<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="line-clamp-1 block overflow-hidden overflow-ellipsis whitespace-nowrap py-1 text-h5 text-gray-600 hover:text-gray-900">
											{{ $post->title }}
										</a>
									</li>
								@endforeach
								<li>
									<a href="/blogs" class="block py-1 text-h5 font-semibold text-gray-600 hover:text-gray-900">
										Blog Archive
									</a>
								</li>
							</ul>
						</li>
						<li class="border-b border-gray-200 pb-4"><a href="/about" class="text-h3 font-medium">ABOUT</a></li>
						<li class="border-b border-gray-200 pb-4"><a href="/contact" class="text-h3 font-medium">CONTACT</a></li>
						<li class="border-b border-gray-200 pb-4"><a href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking" class="text-h3 font-medium">BOOK NOW</a></li>
					</ul>
				</div>
				<div class="border-t border-gray-200 p-4">
					<a href="https://www.instagram.com/mayaaesthetics/" target="_blank" class="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
						</svg>
					</a>
				</div>
			</div>
		</div>

		{{-- SUB MENU FOR TREATMENTS --}}
		<div id="treatment-menu-full-dropdown" class="sub-nav-dropdown-container mt-1 hidden">
			<div class="sub-nav-dropdown services-dropdown">
			</div>
		</div>

		{{-- SUB MENU FOR PRODUCTS --}}
		<div id="product-menu-full-dropdown" class="sub-nav-dropdown-container mt-1 hidden">
			<div class="sub-nav-dropdown product-dropdown container">
				<div class="flex">
					<!-- All Brands Column -->
					<div class="sub-nav-dropdown-left-col">
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
					<div class="sub-nav-dropdown-right-col">
						@foreach ($featuredBrands as $brand)
							<div class="w-1/3">
								<a href="{{ route("products.brand", $brand->slug) }}" class="block cursor-pointer">
									<div class="aspect-w-16 aspect-h-9 mb-4 h-40">
										<img src="{{ $brand->banner_image_url }}" alt="{{ $brand->name }}" class="h-full w-full object-contain">
									</div>
									<div class="w-full">
										<h4 class="mb-1 break-words text-sm font-semibold">{{ Str::upper($brand->name) }}</h4>
										<p class="text-xs text-gray-500">
											View All
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
		<div id="blog-menu-full-dropdown" class="sub-nav-dropdown-container mt-1 hidden">
			<div class="sub-nav-dropdown blog-dropdown container">
				<div class="flex w-full justify-between">
					{{-- Latest Blog Posts Column --}}
					<div class="sub-nav-dropdown-left-col">
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

					{{-- Featured Posts --}}
					<div class="sub-nav-dropdown-right-col">
						@foreach ($featuredPosts->take(3) as $post)
							<div class="w-1/3">
								<a href="{{ route("blog.show", ["slug" => $post->slug]) }}" class="block cursor-pointer">
									<div class="aspect-w-16 aspect-h-9 mb-4 h-40">
										<img src="{{ $post->featured_image }}" alt="{{ $post->title }}" class="h-full w-full object-cover">
									</div>
									<div class="w-full">
										<h4 class="mb-1 break-words text-sm font-semibold">{{ Str::upper($post->title) }}
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
