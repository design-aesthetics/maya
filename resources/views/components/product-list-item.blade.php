<div class="group scale-75">
	<a href="{{ route("products.show", ["brandSlug" => $brandSlug, "productSlug" => $productSlug]) }}" class="block">
		<div class="relative aspect-[8/12] overflow-hidden">
			<img src="{{ $imageUrl }}" alt="{{ $productName }}" class="product-image" />
			<div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<div class="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
					<p class="text-sm text-white">{{ $brandName }}</p>
					<h2 class="text-xl font-semibold text-white">{{ $productName }}</h2>
				</div>
			</div>
		</div>
		<div class="p-4 md:hidden">
			<p class="text-sm">{{ $brandName }}</p>
			<h2 class="text-xl font-semibold">{{ $productName }}</h2>
		</div>
	</a>
</div>
