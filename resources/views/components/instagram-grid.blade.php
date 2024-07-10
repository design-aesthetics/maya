<section class="lp">
	<div class="mx-auto max-w-7xl px-4 py-8">
		<div class="text-center">
			<h2 class="mb-2 font-semplicita text-h2 font-medium uppercase text-primary-blue-5 lg:mb-3 lg:text-h1">check
				out
				our instagram</h2>
			<a href="#" class="uppercase text-gray-500 lg:my-3">@mayaaesthetics</a>
		</div>
		<div class="mt-8 grid grid-cols-2 justify-center gap-3 lg:scale-75 lg:grid-cols-4">
			@foreach ($posts as $post)
				<div class="overflow-hidden bg-white">
					<img src="{{ $post["image"] }}" alt="Instagram post from {{ $post["date"]->format("Y-m-d") }}" class="h-64 w-full object-cover">
				</div>
			@endforeach
		</div>
	</div>
</section>
