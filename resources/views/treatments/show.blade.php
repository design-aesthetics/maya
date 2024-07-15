@extends("partials.master")
@section("title", "Treatment")
@section("content")
	<section>
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2">
					<img src="{{ $treatment->main_image ?? "/img/placeholder.svg" }}" alt="{{ $treatment->name }}" class="aspect-[4/3] rounded-lg bg-slate-100 object-contain" />
					<div class="flex space-x-4">
						@foreach ($treatment->gallery_image_urls ?? [] as $image)
							<img src="{{ $main_image }}" alt="{{ $treatment->name }} Gallery Image" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						@endforeach
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					{{-- Treatment Name --}}
					<h1 class="text-4xl font-medium">{{ $treatment->name }}</h1>
					{{-- Treatment Description --}}
					<div class="mt-5 text-gray-600">
						<div class="treatment-description prose">
							{!! $treatment->description !!}
						</div>
						<p class="debug-info"></p>
						@if (strlen(strip_tags($treatment->description)) > 180)
							<button class="read-more-btn mt-2 text-sm font-semibold text-primary-blue-5 hover:underline">Read more</button>
						@endif
					</div>
					{{-- Accordion Treatment Details --}}
					<div class="mt-8">
						<x-button type="submit" size="md" gradient href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking">Book Appointment</x-button>
						<div class="mt-8">
							@foreach ($treatment->details ?? [] as $key => $value)
								<div class="border-b border-gray-200 py-4">
									<button class="treatment-accordion-toggle relative flex w-full items-center justify-between py-2 pr-8 text-left" aria-expanded="false">
										<span class="text-h3 font-medium">{{ $key }}</span>
										<div class="plus-minus closed">
											<div class="horizontal"></div>
											<div class="vertical"></div>
										</div>
									</button>
									<div class="hidden pr-8 pt-2">
										<div class="accordion-item prose py-1 text-h5 text-gray-600">
											@if (is_array($value))
												@foreach ($value as $item)
													@if (is_string($item))
														{!! $item !!}<br>
													@elseif(is_array($item))
														@foreach ($item as $subItem)
															{!! $subItem !!}<br>
														@endforeach
													@endif
												@endforeach
											@else
												{!! $value !!}
											@endif
										</div>
									</div>
								</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
	</section>
	{{-- <x-call-to-action /> --}}
	<section>
		<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">recommended
			treatments
		</h3>
		<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
			@foreach ($similarTreatments as $similarTreatment)
				@php
					$url = route("treatments.show", [
					    "category" => $category->slug,
					    "treatment" => $similarTreatment->slug,
					]);
				@endphp
				<x-treatment-product :name="$similarTreatment->name" :image="$similarTreatment->main_image" :url="$url" />
			@endforeach
		</div>
	</section>
	<x-instagram-grid />
	<x-script type="js" file="js/809f166de994f9e9c9f58922b.js" />
@endsection
