<div id="searchResults">
	@if ($products->isEmpty())
		<p>No products found</p>
	@else
		@foreach ($products as $product)
			<x-product-list-item brandSlug="{{ $product->brand->slug }}" productSlug="{{ $product->slug }}" imageUrl="{{ $product->image_url }}" productName="{{ $product->name }}" brandName="{{ $product->brand->name }}" />
		@endforeach
	@endif
</div>
