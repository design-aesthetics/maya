@extends("partials.master")
@section("title", "Products")
@section("content")
	<h1>Our Brands and Products</h1>
	@foreach ($brands as $brand)
		<h2>{{ $brand->name }}</h2>
		<div class="product-grid">
			@foreach ($brand->products as $product)
				<div class="product-card">
					<img src="{{ $product->primaryImage()->image_url }}" alt="{{ $product->name }}">
					<h3>{{ $product->name }}</h3>
					<p>{{ $product->price }}</p>
					<a href="{{ route("products.show", [$brand->slug, $product->slug]) }}">View Details</a>
				</div>
			@endforeach
		</div>
		<a href="{{ route("products.brand", $brand->slug) }}">View all {{ $brand->name }} products</a>
	@endforeach
@endsection
