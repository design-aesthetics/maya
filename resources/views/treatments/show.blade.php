@extends("partials.master")
@section("title", "Treatment")
@section("content")
	<section>
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2">
					<img src="/placeholder.svg" alt="Product Image" class="aspect-[4/3] rounded-lg bg-slate-100 object-cover" />
					<div class="flex space-x-4">
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					<h1 class="text-4xl font-medium">LASER REMOVAL</h1>
					<p class="mt-5 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex
						ea commodo consequat.
						<a href="#" class="font-semibold hover:underline">Read more</a>
					</p>
					<div class="mt-8">
						<button class="bg-primary-blue-5 px-7 py-4 text-sm text-white">SEE THE
							TREATMENT</button>
					</div>
					<div class="mt-8 border-b pb-3">
						<div x-data="{ open: false }">
							<button @click="open = !open" class="flex w-full items-center justify-between py-2 font-medium text-gray-900">
								Accordion Sample #2
								<p class="expand text-lg font-semibold">+</p>
							</button>
							<div x-show="open" class="mt-2 hidden">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et
								dolore magna aliqua.
							</div>
						</div>
					</div>
					{{-- <div class="mt-4">
                        <button class="bg-black text-white text-sm px-7 py-4 hover:bg-gray-800">LEARN MORE</button>
                    </div> --}}
				</div>
			</div>
		</div>
	</section>

	<section class="w-full rounded-xl border py-4 md:py-5 lg:py-11">
		<div class="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
			<img src="/placeholder.svg" width="600" height="400" alt="Banner" class="mx-auto aspect-video overflow-hidden rounded-xl bg-slate-100 object-cover sm:w-full" />
			<div class="flex flex-col gap-y-6">
				<div class="space-y-2">
					<h2 class="font-semplicita text-2xl font-medium uppercase tracking-tighter sm:text-4xl md:text-5xl">
						Start now
					</h2>
				</div>
				<ul class="grid gap-2">
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Streamlined project management
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Real-time visibility and insights
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Seamless team collaboration
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Automated workflows and integrations
					</li>
				</ul>
				<a href="#" class="hover:bg-gray-80 w-fit bg-black px-7 py-4 text-sm uppercase text-white">
					Get Started
				</a>
			</div>
		</div>
	</section>
	<section>
		<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">recommended
			treatments
		</h3>
		<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
			<x-treatment-product />
			<x-treatment-product />
			<x-treatment-product />
		</div>
	</section>
	<x-instagram-grid />
	<script src="/js/accordion.js"></script>
@endsection
