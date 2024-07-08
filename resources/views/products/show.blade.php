@extends("partials.master")
@section("title", $brand->name . " Products")
@section("content")
	<section class="py-12 md:py-16 lg:py-20">
		<div class="flex flex-col md:flex-row md:space-x-12">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2" id="gallery">
					<a href="{{ $product->primaryImage()->image_url }}" class="max-h-[400px] overflow-hidden">
						<img src="{{ $product->primaryImage()->image_url }}" alt="{{ $product->name }}" class="h-auto w-full rounded-lg bg-slate-100 object-cover" />
					</a>
					<div class="flex space-x-4">
						@foreach ($product->images->take(3) as $image)
							<a href="{{ $image->image_url }}" class="h-full w-1/3 overflow-hidden">
								<img src="{{ $image->image_url }}" alt="{{ $product->name }} Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
							</a>
						@endforeach
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					<h2>{{ $brand->name }}</h2>
					<h1 class="text-4xl font-medium">{{ $product->name }}</h1>
					<p class="mt-5 text-gray-600">
						{{ $product->description ?? "No description available." }}
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
