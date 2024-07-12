@extends("partials.master")
@section("title", "Treatment")
@section("content")
	<section>
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2">
					<img src="{{ $treatment->main_image_url ?? "/placeholder.svg" }}" alt="{{ $treatment->name }}" class="aspect-[4/3] rounded-lg bg-slate-100 object-cover" />
					<div class="flex space-x-4">
						@foreach ($treatment->gallery_image_urls ?? [] as $image)
							<img src="{{ $image }}" alt="{{ $treatment->name }} Gallery Image" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						@endforeach
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					<h1 class="text-4xl font-medium">{{ $treatment->name }}</h1>
					<p class="mt-5 text-gray-600">
						<span class="treatment-description" data-full-text="{{ $treatment->description }}">
							{{ Str::limit($treatment->description, 250) }}
						</span>
						@if (strlen($treatment->description) > 250)
							<button class="read-more-btn ml-1 font-semibold text-primary-blue-5 hover:underline">Read more</button>
						@endif
					</p>
					<div class="mt-8">
						<x-button type="submit" size="md" gradient href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking">Book Appointment</x-button>
						<div class="mt-8">
							@foreach ($treatment->details ?? [] as $key => $value)
								<div class="border-b border-gray-200 pb-4">
									<button class="treatment-accordion-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left" aria-expanded="false">
										<span class="text-h3 font-medium">{{ $key }}</span>
										<div class="plus-minus closed">
											<div class="horizontal"></div>
											<div class="vertical"></div>
										</div>
									</button>
									<div class="hidden pl-4 pt-2">
										@if (is_array($value))
											<ul>
												@foreach ($value as $item)
													<li class="py-1 text-h5 text-gray-600">{{ $item }}</li>
												@endforeach
											</ul>
										@else
											<p class="py-1 text-h5 text-gray-600">{{ $value }}</p>
										@endif
									</div>
								</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
	</section>
	<section class="w-full rounded-xl border py-4 md:py-5 lg:py-11">
		<div class="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
			<img src="/placeholder.svg" width="600" height="400" alt="Banner" class="mx-auto aspect-video overflow-hidden rounded-xl bg-slate-100 object-cover sm:w-full" />
			<div class="flex flex-col gap-y-6">
				<div class="space-y-2">
					<h2 class="font-semplicita text-2xl font-medium uppercase tracking-tighter sm:text-4xl md:text-5xl">
						Start now
					</h2>
				</div>
				<ul class="grid gap-2">
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Streamlined project management
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Real-time visibility and insights
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Seamless team collaboration
					</li>
					<li>
						<svg class="mr-2 inline-block h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
						Automated workflows and integrations
					</li>
				</ul>
				<a href="#" class="hover:bg-gray-80 w-fit bg-black px-7 py-4 text-sm uppercase text-white">
					Get Started
				</a>
			</div>
		</div>
	</section>
	<section>
		<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">recommended
			treatments
		</h3>
		<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
			<x-treatment-product />
			<x-treatment-product />
			<x-treatment-product />
		</div>
	</section>
	<x-instagram-grid />
	<x-script type="js" file="js/809f166de994f9e9c9f58922b.js" />
@endsection
