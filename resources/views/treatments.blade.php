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
        <div class="grid grid-cols-1 justify-start sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 px-0 md:py-4 md:px-0">
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
        @include('sections.insta')
    </div>






@endsection
