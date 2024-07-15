@props(["categories"])

<div class="container border border-primary-blue-5/20 bg-white p-6 shadow-sm">
	<h3 class="mb-4 font-semplicita text-xl font-medium text-primary-blue-5">Filter Treatments</h3>
	<form id="treatmentsFilterForm" action="{{ route("treatments.index") }}" method="GET">
		<div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			<div class="flex-grow">
				<select name="category" id="category" class="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-1 focus:ring-primary-blue-5">
					<option value="all">All Categories</option>
					@foreach ($categories as $category)
						<option value="{{ $category->slug }}" {{ request("category") == $category->slug ? "selected" : "" }}>
							{{ $category->name }}
						</option>
					@endforeach
				</select>
			</div>
			<div>
				<x-button type="submit" size="sm">Apply Filter</x-button>
				@if (request("category") && request("category") !== "all")
					<div>
						<a href="{{ route("treatments.index") }}" class="text-sm text-primary-blue-5 hover:underline">
							Remove Filter
						</a>
					</div>
				@endif
			</div>

		</div>
	</form>
</div>

<script>
	document.getElementById('category').addEventListener('change', function() {
		document.getElementById('treatmentsFilterForm').submit();
	});
</script>
