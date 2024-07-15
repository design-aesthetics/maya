<div class="flex min-w-[250px] max-w-[400px] flex-grow flex-col gap-4 overflow-hidden">
	<a href="{{ $url }}" class="flex h-64 w-full items-center justify-center overflow-hidden bg-slate-100">
		<img src="{{ $image }}" alt="Product Image" class="max-h-full max-w-full object-contain">
	</a>
	<div class="flex flex-col gap-1">
		<a href="{{ $url }}">
			<h5 class="text-md font-semplicita font-medium uppercase">{{ $name }}</h5>
		</a>
		<p class="font-semplicita text-sm text-slate-500">${{ $price }}</p>
	</div>
</div>
