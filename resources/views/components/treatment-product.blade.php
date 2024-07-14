@props(["name", "image", "url"])

<div class="group relative overflow-hidden">
	<a href="{{ $url }}" class="absolute inset-0 z-10">
		<span class="sr-only">View</span>
	</a>
	<img src="{{ $image }}" alt="{{ $name }}" width="400" height="300" class="h-64 w-full rounded-sm bg-slate-100 object-cover shadow-sm" />
	<div class=py-2">
		<h5 class="mt-2 max-w-sm text-h5 font-medium capitalize text-gray-800">{{ $name }}</h5>
	</div>
</div>
