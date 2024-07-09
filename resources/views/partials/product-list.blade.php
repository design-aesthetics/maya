<div id="searchResults">
	@if ($products->isEmpty())
		<p>No products found</p>
	@else
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
	@endif
</div>
