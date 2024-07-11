@extends("partials.master")
@section("title", "Treatment")
@section("content")

	<div class="mx-auto max-w-[90%] lg:max-w-7xl">
		{{-- <div
            class="max-h-fit mx-auto flex flex-col items-start my-24 gap-y-12 lg:justify-between lg:gap-16 lg:my-36 lg:basis-1/2">
            <div class="flex flex-col justify-start gap-y-3 lg:flex-row lg:gap-5 lg:items-start">
                <div class="image bg-slate-100 w-full h-[400px] md:w-[400px] lg:order-2 lg:w-[600px] lg:h-[500px]">
                    <img src="" alt="" class="w-full h-full object-cover">
                </div>

                <div class="small_images flex gap-5 lg:order-1 lg:flex-col">
                    <div class="w-[90px] h-[90px] bg-slate-100">
                        <img src="" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="w-[90px] h-[90px] bg-slate-100">
                        <img src="" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="treatment-content flex flex-col gap-y-6 lg:gap-y-8">
                    <h5 class="treatment-title text-h1 lg:text-xlh2 font-semplicita font-medium capitalize">LASER REMOVAL
                    </h5>
                    <p class="text-h5 font-regular my-3 max-w-lg md:max-w-md">Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span
                            class="font-semibold">Read more</span></p>
                    <button class="bg-primary-blue-5 text-white py-4 px-7 text-sm uppercase font-regular w-fit">See the
                        Treatment</button>
                </div>

                <div class="accordions py-1 lg:my-5 ">
                    <div class="max-w-full md:w-full mx-auto flex flex-col gap-y-4">
                        <div class="w-full accordion flex flex-col">
                            <div class="top py-3 border-b border-slate-700 flex justify-between">
                                <h4 class="font-medium">Accordion Sample #2</h4>
                                <div class="expand border-slate-700 w-fit cursor-pointer">+</div>
                            </div>
                            <div class="detail pt-3 hidden">
                                <p class="text-h5 font-regular">Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis
                                    nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <button class="bg-slate-950 text-white py-4 px-7 text-sm uppercase font-regular w-fit mt-10">learn
                            more</button>

                    </div>
                </div>
            </div>
        </div> --}}

		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
			<div class="flex flex-col md:flex-row md:space-x-12">
				<div class="flex flex-col space-y-4 md:w-1/2">
					<img src="/placeholder.svg" alt="Product Image" class="aspect-[4/3] rounded-lg bg-slate-100 object-cover" />
					<div class="flex space-x-4">
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
						<img src="/placeholder.svg" alt="Product Image Thumbnail" class="aspect-[4/3] rounded-lg bg-slate-200 object-cover" />
					</div>
				</div>
				<div class="mt-8 md:mt-0 md:w-1/2">
					<h1 class="text-4xl font-medium">LASER REMOVAL</h1>
					<p class="mt-5 text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex
						ea commodo consequat.
						<a href="#" class="font-semibold hover:underline">Read more</a>
					</p>
					<div class="mt-8">
						<button class="bg-primary-blue-5 px-7 py-4 text-sm text-white">SEE THE
							TREATMENT</button>
					</div>
					<div class="mt-8 border-b pb-3">
						<div x-data="{ open: false }">
							<button @click="open = !open" class="flex w-full items-center justify-between py-2 font-medium text-gray-900">
								Accordion Sample #2
								<p class="expand text-lg font-semibold">+</p>
							</button>
							<div x-show="open" class="mt-2 hidden">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et
								dolore magna aliqua.
							</div>
						</div>
					</div>
					{{-- <div class="mt-4">
                        <button class="bg-black text-white text-sm px-7 py-4 hover:bg-gray-800">LEARN MORE</button>
                    </div> --}}
				</div>
			</div>
		</div>


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


		<div class="recommended mx-auto my-24 max-w-[90%] lg:my-36 lg:max-w-7xl">
			<h3 class="mb-4 font-semplicita text-h3 font-medium uppercase text-primary-blue-5 lg:mb-7">recommended
				treatments
			</h3>
			<div class="grid grid-cols-1 justify-start gap-6 px-0 py-2 sm:grid-cols-2 md:px-0 md:py-4 lg:grid-cols-3">
				<x-treatment-product />
				<x-treatment-product />
				<x-treatment-product />
			</div>
		</div>

		<div class="mb-28 mt-20">
			<x-instagram-grid />
		</div>
	</div>
	<script src="/js/accordion.js"></script>
@endsection
