@extends("partials.master")
@section("title", "Treatments")
@section("content")

	<section>
		<div class="container">
			<div class="items-start text-left">
				<h1 class="prose prose-lg mb-2 uppercase text-primary-blue-5 lg:mb-3">
					Our Treatments
				</h1>
				<p class="prose pb-4 text-gray-500 lg:my-3">
					Discover our range of treatments designed to enhance your beauty and wellness.
				</p>
			</div>

			{{-- You can add a filter component here if needed --}}
			<x-treatment-filter :categories="$categories" />
		</div>
	</section>

	<section class="pt-0">
		<div class="container">
			<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
				@foreach ($treatments as $treatment)
					@php
						$url = route("treatments.show", [
						    "category" => $treatment->category->slug,
						    "treatment" => $treatment->slug,
						]);
					@endphp
					<x-treatment-product :name="$treatment->name" :image="$treatment->main_image" :url="$url" />
				@endforeach
			</div>
		</div>
	</section>

	<div class="mb-28 mt-20">
		<x-instagram-grid />
	</div>

@endsection
