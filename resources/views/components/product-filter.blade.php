@props(["brands"])

<x-base-filter title="Filter Products" searchPlaceholder="Search products">
	<div class="w-full md:w-48">
		<select name="category" id="category" class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-1 focus:ring-primary-blue-5">
			<option value="">All Categories</option>
			<!-- Add category options here -->
		</select>
	</div>
	<div class="w-full md:w-48">
		<select name="brand" id="brand" class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-1 focus:ring-primary-blue-5">
			<option value="">All Brands</option>
			@foreach ($brands as $brand)
				<option value="{{ $brand->id }}">{{ $brand->name }}</option>
			@endforeach
		</select>
	</div>
</x-base-filter>
