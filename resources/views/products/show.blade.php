@extends("partials.master")
@section("title", $brand->name . " Products")
@section("content")
	<section>
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="w-full md:w-1/2" id="gallery">
					<div class="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
						<img src="{{ $product->image_url }}" alt="{{ $product->name }}" class="h-full w-full cursor-pointer object-cover" onclick="openModal(this.src)" />
					</div>
					<div class="grid grid-cols-3 gap-4">
						@foreach ($product->images->take(3) as $image)
							@if ($image && $image->image_url)
								<div class="aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
									<img src="{{ $image->image_url }}" alt="{{ $product->name }} Thumbnail" class="h-full w-full cursor-pointer object-cover" onclick="openModal(this.src)" />
								</div>
							@endif
						@endforeach
					</div>
				</div>
				<div class="mt-8 w-full md:mt-0 md:w-1/2">
					<h2 class="prose-p pb-2 text-sm font-medium uppercase">{{ $brand->name }}</h2>
					<h1 class="text-4xl font-medium">{{ $product->name }}</h1>
					<div class="mt-5 text-gray-600">
						<div class="product-description prose">
							{!! $product->description ?? "No description available." !!}
						</div>
						<p class="debug-info"></p>
						@if (strlen(strip_tags($product->description)) > 180)
							<button class="read-more-btn mt-2 text-sm font-semibold text-primary-blue-5 hover:underline">Read more</button>
						@endif
					</div>
					{{-- Accordion Product Details --}}
					<div class="mt-8">
						<x-button type="submit" size="md" gradient href="#">PURCHASE OPTIONS</x-button>
						<div class="mt-8">
							@foreach ($product->details ?? [] as $key => $value)
								<div class="border-b border-gray-200 py-4">
									<button class="product-accordion-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left" aria-expanded="false">
										<span class="text-h3 font-medium">{{ $key }}</span>
										<div class="plus-minus closed">
											<div class="horizontal"></div>
											<div class="vertical"></div>
										</div>
									</button>
									<div class="hidden pr-8 pt-2">
										<div class="accordion-item prose py-1 text-h5 text-gray-600">
											@if (is_array($value))
												@foreach ($value as $item)
													@if (is_string($item))
														{!! $item !!}<br>
													@elseif(is_array($item))
														@foreach ($item as $subItem)
															{!! $subItem !!}<br>
														@endforeach
													@endif
												@endforeach
											@else
												{!! $value !!}
											@endif
										</div>
									</div>
								</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
	</section>

	<section>
		<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">Recommended Products</h3>
		<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
			@foreach ($similarProducts as $similarProduct)
				<x-product-list-item brandSlug="{{ $similarProduct->brand->slug }}" productSlug="{{ $similarProduct->slug }}" imageUrl="{{ $similarProduct->image_url }}" productName="{{ $similarProduct->name }}" brandName="{{ $similarProduct->brand->name }}" />
			@endforeach
		</div>
	</section>

	<x-instagram-grid />
	<x-script type="js" file="js/0e214b8306743439e9c1a8f05.js" />
	<x-script type="js" file="js/e88123a276601a4fa85f35087.js" />
	@include("partials.imageModal")

@endsection
