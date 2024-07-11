@extends("partials.master")
@section("title", "Treatments")
@section("content")

	<!-- FIRST TREATMENT PAGE  -->

	<div class="mx-auto my-20 max-w-lg text-center">
		<h2 class="mb-2 font-semplicita text-h2 font-medium uppercase text-primary-blue-5 lg:mb-3 lg:text-h1">our services
		</h2>
		<a href="#" class="mx-auto text-gray-500 lg:my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
			do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
	</div>

	<div class="mx-auto my-24 flex max-w-[90%] flex-col flex-wrap items-center justify-between border bg-primary-light-gray py-7 md:max-w-[80%] md:px-5 lg:my-36 lg:max-w-7xl lg:flex-row lg:justify-between lg:px-20 lg:py-14">
		<div class="top space-y-2">
			<h3 class="font-semplicita text-h2 font-semibold uppercase lg:text-h1">Hi, I'm an example</h3>

			<div class="flex flex-col items-center space-y-2 md:flex-row md:space-x-8">
				<div class="relative w-full md:max-w-[500px] lg:max-w-[800px]">
					<select name="first" id="first" class="block border border-slate-700 bg-transparent px-5 py-2 text-sm focus:border-primary-blue-5 focus:outline-none focus:ring-primary-blue-5">
						<option value="Treatment 0" class="py-2">Choose a treatment</option>
						<option value="Treatment 1" class="py-2">Treatment 1</option>
						<option value="Treatment 2" class="py-2">Treatment 2</option>
					</select>
				</div>
			</div>

		</div>

		<div class="bottom flex flex-col justify-center space-y-2">
			<button class="mt-10 w-full bg-slate-950 px-7 py-4 text-[11px] font-regular uppercase text-white lg:w-fit">View
				vouchers</button>
			<div class="space-y-2 py-2 text-center lg:text-left">
				<p class="text-xs underline">Remove filters</p>
			</div>
		</div>
	</div>

	<div class="recommended mx-auto my-24 max-w-[90%] lg:my-36 lg:max-w-7xl">
		<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">Injectibles</h3>
		<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
			<x-treatment-product name="Dissolve filler" />
			<x-treatment-product name="Plus90 Votiva-Vaginal Rejuvenation" />
			<x-treatment-product name="Sculptra Face" />
			<x-treatment-product name="Aqua Gold" />
			<x-treatment-product name="Half Syringe" />
			<x-treatment-product name="PRP platelet rich plasma Face/or Scalp 3 sessions" />
			<x-treatment-product name="Meso Therepy - Beauty Booster" />
			<x-treatment-product name="Non Surgical Thread Lift" />
			<x-treatment-product name="Platelet Rich plasma Scalp" />
			<x-treatment-product name="Platelet Rich Plasma Face" />
			<x-treatment-product name="Fat Burner (Belkyra)" />
			<x-treatment-product name="Dermal fillers (Teosyal)" />
			<x-treatment-product name="Neurotoxin (Botox, Dysport) existing client" />
			<x-treatment-product name="Neurotoxin (Dysport, Botox) New Client" />
		</div>
	</div>


	<div class="mb-28 mt-20">
		<x-instagram-grid />
	</div>






@endsection
