@extends("partials.master")
@section("title", $currentBrand ? $currentBrand->name . " Products" : "All Products")
@section("content")

	<section>
		<div class="container">
			<h2 class="mb-2 font-semplicita text-h2 font-medium uppercase text-primary-blue-5 lg:mb-3 lg:text-h1">
				{{ $currentBrand ? $currentBrand->name . " Products" : "All Products" }}
			</h2>
			<p class="mx-auto pb-4 text-gray-500 lg:my-3">
				@if ($currentBrand)
					Discover our range of {{ $currentBrand->name }} products designed to enhance your beauty and wellness.
				@else
					Discover our range of products designed to enhance your beauty and wellness.
				@endif
			</p>
			{{-- header filter and search component  --}}
			<x-product-filter :brands="$brands" :categories="$categories" :currentBrand="$currentBrand" :currentCategory="$currentCategory" />
		</div>
	</section>

	<section class="pt-0">
		<div class="container">
			{{-- product list --}}
			@include("partials.product-list", ["products" => $products])
		</div>
	</section>

	<div class="mb-28 mt-20">
		<x-instagram-grid />
	</div>

@endsection
