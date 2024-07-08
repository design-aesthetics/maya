@extends("partials.master")
@section("title", $currentBrand ? $currentBrand->name . " Products" : "All Products")
@section("content")

	<section>
		<div class="container">
			<h2 class="mb-2 font-semplicita text-h2 font-medium uppercase text-primary-blue-5 lg:mb-3 lg:text-h1">
				{{ $currentBrand ? $currentBrand->name . " Products" : "All Products" }}
			</h2>
			<p class="mx-auto text-gray-500 lg:my-3">
				@if ($currentBrand)
					Discover our range of {{ $currentBrand->name }} products designed to enhance your beauty and wellness.
				@else
					Discover our range of products designed to enhance your beauty and wellness.
				@endif
			</p>
		</div>

		<x-product-filter :brands="$brands" />

		<div class="recommended mx-auto my-24 max-w-[90%] lg:my-36 lg:max-w-7xl">
			<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
				@foreach ($products as $product)
					<div class="group relative overflow-hidden">
						<a href="{{ route("products.show", [$product->brand->slug, $product->slug]) }}" class="absolute inset-0 z-10">
							<span class="sr-only">View</span>
						</a>
						<img src="{{ $product->image_url }}" alt="{{ $product->name }}" width="400" height="300" class="h-64 w-full bg-slate-100 object-cover" />
						<div class="bg-white py-2">
							<p class="mt-2 max-w-sm text-h5 font-medium capitalize text-gray-800">{{ $product->name }}</p>
							<p class="mt-1 text-gray-600">${{ number_format($product->price, 2) }}</p>
						</div>
					</div>
				@endforeach
			</div>
		</div>
	</section>

	<div class="mb-28 mt-20">
		@include("sections.insta")
	</div>

@endsection
