<div id="searchResults">
	@if ($products->isEmpty())
		<p>No products found</p>
	@else
		@foreach ($products as $product)
			<div class="group relative overflow-hidden">
				<img src="{{ $product->image_url }}" alt="{{ $product->name }}" class="product-image h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
				<div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<div class="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
						<p class="prose-p prose text-white">{{ $product->brand->name }}</p>
						<p class="prose-h1 prose prose-xl font-semibold text-white">{{ $product->name }}</p>
					</div>
				</div>
			</div>
		@endforeach
	@endif

</div>
