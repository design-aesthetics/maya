@props(["title", "searchPlaceholder"])

<div class="mx-auto my-12 max-w-7xl border border-primary-blue-5/20 bg-white p-6 shadow-sm">
	<h3 class="mb-4 font-semplicita text-xl font-medium text-primary-blue-5">{{ $title }}</h3>
	<div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
		<div class="flex-grow">
			<input type="text" placeholder="{{ $searchPlaceholder }}" class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-1 focus:ring-primary-blue-5">
		</div>
		{{ $slot }}
		<button class="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-150 ease-in-out hover:bg-primary-blue-6 focus:outline-none focus:ring-2 focus:ring-primary-blue-5 focus:ring-offset-2"
			style="background-image: linear-gradient(45deg, #3a8590, #73b7c2, #3a8590);">
			Apply Filters
		</button>
	</div>
</div>
