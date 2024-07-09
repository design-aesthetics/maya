@props(["title", "searchPlaceholder"])

<div class="container border border-primary-blue-5/20 bg-white p-6 shadow-sm">
	<h3 class="mb-4 font-semplicita text-xl font-medium text-primary-blue-5">{{ $title }}</h3>
	<form id="filterForm">
		<input type="hidden" name="page" value="1">
		<div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
			<div class="flex-grow">
				<input type="text" name="search" placeholder="Search products" class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-1 focus:ring-primary-blue-5">
			</div>
			{{ $slot }}
		</div>
	</form>
</div>

<x-script type="js" file="js/fb2c0eb72db64a79b143b3f74.js" />
