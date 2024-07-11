<section class="pb-16">
	<div class="container">
		<div class="text-center">
			<h2 class="mb-2 font-semplicita text-h2 font-medium uppercase text-primary-blue-5 lg:mb-3 lg:text-h1">check out our instagram</h2>
			<a href="#" class="uppercase text-gray-500 lg:my-3">@mayaaesthetics</a>
		</div>
		<div class="mt-8 grid grid-cols-2 justify-center gap-3 lg:grid-cols-4">
			@foreach ($posts as $post)
				<div class="group relative overflow-hidden bg-white">
					<a href="{{ $post["url"] }}" target="_blank" rel="noopener noreferrer">
						<img src="{{ $post["image"] }}" alt="Instagram post from {{ $post["date"]->format("Y-m-d") }}" class="stretch h-full w-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:brightness-50 group-hover:filter">
						<div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<div class="flex items-center space-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
								<span class="text-lg font-bold text-white">{{ $post["likeCount"] }}</span>
							</div>
						</div>
					</a>
				</div>
			@endforeach
		</div>
	</div>
</section>
