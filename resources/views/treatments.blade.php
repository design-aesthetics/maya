@extends('partials.master')
@section('title', 'Treatments')
@section('content')

<div class="container border-2 border-slate-100 max-h-fit mx-auto flex flex-col flex-wrap justify-center lg:flex-row lg:my-40 lg:gap-20">
    <div class="image bg-slate-200 max-w-full md:w-[400px] lg:w-[400px] ">
    </div>

    <div class="treatment-content">
        <h5 class="treatment-title text-h2 lg:text-xlh2 font-semplicita font-medium uppercase">product name</h5>

        <div class="treatments my-10">
            <ul class="list-disc flex flex-col space-y-2">
                <li>Laser Removal</li>
                <li>Electrosys</li>
                <li>Waxing</li>
                <li>Skin & Facial Treatment</li>
                <li>Specialty Treatment</li>
            </ul>
        </div>

        <button class="bg-primary-blue-5 text-white py-3 px-4 text-sm">Book Your Treatment</button>
    </div>
</div>


<div class="max-w-[90%] px-4 mx-auto border-b border-slate-300 mb-8 md:max-w-2xl lg:max-w-7xl lg:px-6">
<p class="font-medium text-sm pb-3 uppercase font-semplicita" >Products</p>
</div>

<!-- PRODUCT LISTS  -->
<div class="max-w-7xl w-full mx-auto flex flex-wrap justify-start items-start gap-x-5 gap-y-20 mb-10 sm:mb-32">
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
 <x-product-card/>
</div>





   
@endsection
