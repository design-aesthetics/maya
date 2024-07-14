@extends("partials.master")
@section("title", $currentBrand ? $currentBrand->name . " Products" : "All Products")
@section("content")

	<section>
		<div class="container">
			<div class="items-start text-left">
				<h1 class="prose prose-lg mb-2 uppercase text-primary-blue-5 lg:mb-3">
					{{ $currentBrand ? $currentBrand->name . " Products" : "All Products" }}
				</h1>
				<p class="prose pb-4 text-gray-500 lg:my-3">
					@if ($currentBrand)
						Discover our range of {{ $currentBrand->name }} products designed to enhance your beauty and wellness.
					@else
						Discover our range of products designed to enhance your beauty and wellness.
					@endif
				</p>
			</div>

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
