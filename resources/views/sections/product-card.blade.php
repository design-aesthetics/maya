@php
	// Array of featured product IDs
	$featuredProductIds = [1, 2, 11, 4];

	// Fetch featured products from the database
	$featuredProducts = \App\Models\Product::whereIn("id", $featuredProductIds)->with("brand")->get();
@endphp

<section>
	<div class="container">
		<div class="mb-8 border-b border-slate-300">
			<h3 class="prose-h3 prose pb-3 font-semplicita font-medium uppercase">Featured Products</h3>
		</div>
		<div class="product-grid-container">
			@foreach ($featuredProducts as $product)
				<x-product-list-item :brandSlug="$product->brand->slug" :productSlug="$product->slug" :imageUrl="$product->image_url" :productName="$product->name" :brandName="$product->brand->name" />
			@endforeach
		</div>
	</div>
</section>
