@extends("partials.master")
@section("title", "Treatment")
@section("content")
	<section class="py-12 md:py-16 lg:py-20">
		<div class="flex flex-col md:flex-row md:space-x-12">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2" id="gallery">
					<a href="/img/forma-1.png" class="max-h-[400px] overflow-hidden">
						<img src="/img/forma-1.png" alt="Product Image" class="h-auto w-full rounded-lg bg-slate-100 object-cover" />
					</a>
					<div class="flex space-x-4">
						<a href="/img/forma-1.png" class="h-full w-1/3 overflow-hidden">
							<img src="/img/forma-1.png" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						</a>
						<a href="/img/forma-1.png" class="h-full w-1/3 overflow-hidden">
							<img src="/img/forma-1.png" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						</a>
						<a href="/img/forma-1.png" class="h-full w-1/3 overflow-hidden">
							<img src="/img/forma-1.png" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						</a>
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					<h1 class="text-4xl font-medium">PRODUCT NAME</h1>
					<p class="mt-5 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex
						ea commodo consequat.
					</p>
					<div class="mt-8">
						<x-button href="#" size="md" gradient>PURCHASE OPTIONS</x-button>
					</div>

				</div>
			</div>
	</section>

	@include("sections.product-card")
	@include("sections.insta")
	<x-script type="js" file="js/e88123a276601a4fa85f35087.js" />
	</div>
@endsection
