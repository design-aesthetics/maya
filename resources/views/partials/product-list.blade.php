<div id="searchResults">
	@if ($products->isEmpty())
		<p>No products found</p>
	@else
		@foreach ($products as $product)
			<div class="group relative flex h-full flex-col overflow-hidden">
				<div class="relative flex-grow lg:h-[70vh]">
					<img src="{{ $product->image_url }}" alt="{{ $product->name }}" class="product-image h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
					<div class="absolute inset-x-0 bottom-0 hidden h-full bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
						<div class="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-300 group-hover:translate-y-0">
							<p class="prose-p prose text-white">{{ $product->brand->name }}</p>
							<p class="prose-h1 prose prose-xl font-semibold text-white">{{ $product->name }}</p>
						</div>
					</div>
				</div>
				<div class="bg-white p-4 md:hidden">
					<p class="prose-p prose">{{ $product->brand->name }}</p>
					<p class="prose-h1 prose">{{ $product->name }}</p>
				</div>
			</div>
		@endforeach
	@endif

</div>
