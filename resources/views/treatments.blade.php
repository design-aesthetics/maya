@extends('partials.master')
@section('title', 'Treatments')
@section('content')
<div class="max-w-[90%] max-h-fit mx-auto flex flex-wrap justify-start items-center my-24 gap-y-12 lg:justify-center lg:gap-16 lg:my-36">
    <div class="image bg-slate-200 w-full h-[400px] md:w-[400px]">
        <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
    </div>
    <div class="treatment-content flex flex-col gap-y-6 lg:gap-y-8">
        <h5 class="treatment-title text-h1 lg:text-xlh2 font-semplicita font-medium capitalize">product name</h5>
        <p class="text-p font-regular my-3 max-w-lg md:max-w-md">Groundbreaking full-body sub-dermal adipose remodeling to reverse the aging process. Morpheus8 is a minimally invasive treatment that uses technology that combines micro-needling and radio frequencies to breakdown superficial fat and stimulate collagen production. <span class="font-semibold">Read more</span></p>
        <button class="bg-primary-blue-5 text-white py-4 px-7 text-sm uppercase font-regular w-fit">See the Treatment</button>
    </div>
</div>
<div class="accordions my-16 py-4 lg:my-24">
    <div class="max-w-[90%] lg:max-w-7xl mx-auto flex flex-col gap-y-4 lg:px-20">
        <div class="accordion">
            <div class="top py-3 border-b border-slate-700 flex justify-between">
                <h4 class="font-medium">Description of the procedure</h4>
                <div class="expand border-slate-700 w-fit cursor-pointer">+</div>
            </div>
            <div class="detail pt-3 hidden">
                <p class="text-p font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div class="accordion">
            <div class="top py-3 border-b border-slate-700 flex justify-between">
                <h4 class="font-medium">Indications</h4>
                <div class="expand border-slate-700 w-fit cursor-pointer">+</div>
            </div>
            <div class="detail pt-3 hidden">
                <p class="text-p font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div class="accordion">
            <div class="top py-3 border-b border-slate-700 flex justify-between">
                <h4 class="font-medium">Contraindications</h4>
                <div class="expand border-slate-700 w-fit cursor-pointer">+</div>
            </div>
            <div class="detail pt-3 hidden">
                <p class="text-p font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>
        <div class="accordion">
            <div class="top py-3 border-b border-slate-700 flex justify-between">
                <h4 class="font-medium">Price list</h4>
                <div class="expand border-slate-700 w-fit cursor-pointer">+</div>
            </div>
            <div class="detail pt-3 hidden">
                <p class="text-p font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
        </div>

        <button class="bg-slate-950 text-white py-4 px-7 text-sm uppercase font-regular w-fit mt-10">learn more</button>

    </div>
</div>


<div class="recommended max-w-[90%] mx-auto lg:max-w-7xl my-24 lg:my-36">
  <h3 class="font-semplicita font-medium text-primary-blue-5 text-h3 mb-4 uppercase lg:mb-7">recommended treatments</h3>
  <div class="w-full h-fit flex flex-col justify-center gap-6 items-center md:flex-row lg:flex-row">
    <div class="w-full h-full">
      <div class="treatment_img w-full md:w-[320px] h-[320px] md:h-[400px] lg:w-[400px] bg-slate-100">
        <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
      </div>

      <p class="capitalize font-medium mt-4">Laser Hair Removal</p>
    </div>
    <div class="w-full h-full">
      <div class="treatment_img w-full md:w-[320px] h-[320px] md:h-[400px] lg:w-[400px] bg-slate-100">
        <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
      </div>

      <p class="capitalize font-medium mt-4">Laser Hair Removal</p>
    </div>
    <div class="w-full h-full">
      <div class="treatment_img w-full md:w-[320px] h-[320px] md:h-[400px] lg:w-[400px] bg-slate-100">
        <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
      </div>

      <p class="capitalize font-medium mt-4">Laser Hair Removal</p>
    </div>
  </div>
</div>




<div class="mt-20 mb-28">
<x-insta-component/>
</div>


<script src="/js/accordion.js"></script>

@endsection