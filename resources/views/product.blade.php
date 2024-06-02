@extends('partials.master')
@section('title', 'Treatment')
@section('content')
    <div class="max-w-[90%] mx-auto lg:max-w-7xl">
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

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div class="flex flex-col md:flex-row md:space-x-12">
                <div class="flex flex-col space-y-4 md:w-1/2">
                    <img src="/placeholder.svg" alt="Product Image"
                        class="aspect-[4/3] object-cover rounded-lg bg-slate-100" />
                    <div class="flex space-x-4">
                        <img src="/placeholder.svg" alt="Product Image Thumbnail"
                            class="aspect-[4/3] object-cover rounded-lg bg-slate-200" />
                        <img src="/placeholder.svg" alt="Product Image Thumbnail"
                            class="aspect-[4/3] object-cover rounded-lg bg-slate-200" />
                        <img src="/placeholder.svg" alt="Product Image Thumbnail"
                            class="aspect-[4/3] object-cover rounded-lg bg-slate-200" />
                    </div>
                </div>
                <div class="md:w-1/2 mt-8 md:mt-0">
                    <h1 class="text-4xl font-medium">LASER REMOVAL</h1>
                    <p class="mt-5 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex
                        ea commodo consequat.
                    </p>
                    <div class="mt-8">
                        <button class="bg-primary-blue-5 text-white px-7 py-4 text-sm">SEE THE
                            TREATMENT</button>
                    </div>

                </div>
            </div>
        </div>

        @include('sections.product-card')
        @include('sections.insta')

    </div>
@endsection
