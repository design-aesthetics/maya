@extends('partials.master')
@section('title', 'Treatments')
@section('content')

    <!-- FIRST TREATMENT PAGE  -->

    <div class="text-center my-20 max-w-lg mx-auto">
        <h2 class="text-h2 font-medium uppercase text-primary-blue-5 mb-2 font-semplicita lg:text-h1 lg:mb-3">our services
        </h2>
        <a href="#" class="text-gray-500 mx-auto lg:my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</a>
    </div>

    <div
        class="max-w-[90%] mx-auto flex flex-col flex-wrap justify-between items-center border py-7 bg-primary-light-gray my-24 md:px-5 md:max-w-[80%] lg:max-w-7xl lg:my-36 lg:justify-between lg:flex-row lg:px-20 lg:py-14">
        <div class="top space-y-2">
            <h3 class="text-h2 font-semplicita font-semibold uppercase lg:text-h1">Hi, I'm an example</h3>

            <div class="space-y-2 items-center flex flex-col md:flex-row md:space-x-8 ">
                <div class="w-full relative md:max-w-[500px] lg:max-w-[800px]">
                    <select name="first" id="first"
                        class="block px-5 py-2 bg-transparent border border-slate-700 focus:outline-none focus:ring-primary-blue-5 focus:border-primary-blue-5 text-sm">
                        <option value="Treatment 0" class="py-2">Choose a treatment</option>
                        <option value="Treatment 1" class="py-2">Treatment 1</option>
                        <option value="Treatment 2" class="py-2">Treatment 2</option>
                    </select>
                </div>
            </div>

        </div>

        <div class="bottom flex flex-col justify-center space-y-2">
            <button class="bg-slate-950 text-white py-4 w-full px-7 text-[11px] uppercase font-regular lg:w-fit mt-10">View
                vouchers</button>
            <div class="space-y-2 py-2 text-center lg:text-left">
                <p class="text-xs underline">Remove filters</p>
            </div>
        </div>
    </div>

    <div class="recommended max-w-[90%] mx-auto lg:max-w-7xl my-24 lg:my-36">
        <h3 class="font-semplicita font-medium text-primary-blue-5 text-h3 mb-4 uppercase lg:mb-7">Injectibles</h3>
        <div class="w-full h-fit flex flex-wrap gap-6 justify-start items-center">
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


    <div class="mt-20 mb-28">
        <x-insta-component />
    </div>


    <div
        class="max-w-[90%] max-h-fit mx-auto flex flex-wrap justify-start items-start my-24 gap-y-12 lg:justify-center lg:gap-16 lg:my-36">
        <div class="image bg-slate-200 w-full h-[400px] md:w-[400px]">
            <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
        </div>
        <div class="flex flex-col">
            <div class="treatment-content flex flex-col gap-y-6 lg:gap-y-8">
                <h5 class="treatment-title text-h1 lg:text-xlh2 font-semplicita font-medium capitalize">LASER REMOVAL</h5>
                <p class="text-h5 font-regular my-3 max-w-lg md:max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
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
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <button class="bg-slate-950 text-white py-4 px-7 text-sm uppercase font-regular w-fit mt-10">learn
                        more</button>

                </div>
            </div>
        </div>

    </div>





    <div class="recommended max-w-[90%] mx-auto lg:max-w-7xl my-24 lg:my-36">
        <h3 class="font-semplicita font-medium text-primary-blue-5 text-h3 mb-4 uppercase lg:mb-7">recommended treatments
        </h3>
        <div class="w-full h-fit flex flex-col justify-start gap-6 items-center md:flex-row lg:flex-row">
            <x-treatment-product />
            <x-treatment-product />
            <x-treatment-product />
        </div>
    </div>




    <div class="mt-20 mb-28">
        <x-insta-component />
    </div>


    <script src="/js/accordion.js"></script>

@endsection
