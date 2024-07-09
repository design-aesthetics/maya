@props(["brands", "categories", "currentBrand", "currentCategory"])

<x-base-filter title="Filter Products" searchPlaceholder="Search products">
	<div class="w-full md:w-48">
		<div class="grid">
			<svg class="forced-colors:hidden pointer-events-none relative right-1 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
				<path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
			</svg>
			<select name="category" id="category">
				<option value="">All Categories</option>
				@foreach ($categories as $category)
					<option value="{{ $category->id }}" data-slug="{{ $category->slug }}" {{ ($currentCategory && $currentCategory->id == $category->id) || request("category") == $category->id ? "selected" : "" }}>
						{{ $category->name }}
					</option>
				@endforeach
			</select>
		</div>

	</div>
	@if (!$currentBrand)
		<div class="w-full md:w-48">
			<div class="grid">
				<svg class="forced-colors:hidden pointer-events-none relative right-1 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path>
				</svg>
				<select name="brand" id="brand">
					<option value="">All Brands</option>
					@foreach ($brands as $brand)
						<option value="{{ $brand->id }}" data-slug="{{ $brand->slug }}" {{ request("brand") == $brand->id ? "selected" : "" }}>
							{{ $brand->name }}
						</option>
					@endforeach
				</select>
			</div>

		</div>
	@endif
</x-base-filter>
