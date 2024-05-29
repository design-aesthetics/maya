@extends('partials.master')
@section('title', 'ZO Skin Health')
@section('content')

<div class="container max-w-[90%] mx-auto flex flex-col-reverse gap-8 lg:gap-16 justify-center px-4 items-start my-10 lg:my-20 lg:max-w-7xl lg:flex-row">
    <div class="product-text lg:order-2">
        <h1 class="subheading no-bottom-margin pb-4 border-b border-slate-200">ZO Skin Health</h1>
        <div class="py-5 max-w-full lg:max-w-[800px] text-justify">
            <p>ZO Skin Health has earned a distinguished reputation for delivering innovative skincare solutions that harness cutting-edge science and technology, optimizing skin health. Our extensive range of ZO Skin Health products caters to various concerns, such as wrinkles, pigmentation, and overall rejuvenation. These products work at the cellular level, boosting the skin's innate ability to regenerate.</p><br/>
            <p class="pt-4">At Maya Skin Body and Care, we integrate the finest ZO Skin Health products to ensure a customized and professional experience. Whether you seek targeted treatments or holistic skin wellness, our expert care combined with ZO's proven product line guarantees exceptional results.</p>
            <p class="pt-4">Recognizing the uniqueness of each customer's skin, Maya Skin Body and Care offers personalized consultations. Embracing ZO Skin Health's unwavering commitment to excellence, we strive to comprehend and fulfill the specific needs of every individual.</p>
            <p class="pt-4">We cordially invite you to explore the transformative possibilities that ZO Skin Health offers at Maya Skin Body and Care. To experience a comprehensive evaluation and expert guidance on selecting the ideal products and treatments for your skin, we warmly encourage you to schedule an appointment with our specialists today.</p>
        </div>
    </div>
    <div class="product-image lg:order-1">
        <img src="/img/retinol-ep_hero_mob_r1-wtr-rnr_cropped.jpg" alt="ZO Skin Health Product" class="overlap-section-image max-w-full h-auto" />
    </div>
</div>


<div class=" container mb-5 max-w-[90%] mx-auto my-20 lg:my-14 lg:max-w-7xl">
<img src="/img/gsr-ep_desk_hero_infographic_new.jpg"
                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 88vw, (max-width: 991px) 602px, 94vw"
                            alt=""
                            class="centered-content-box-background-image"
                            style="object-fit: scale-down !important;"
                        />
</div>

<div class="my-6 md:my-10 lg:my-16">
    <!-- PRODUCT CARDS  -->
<div class="max-w-[90%] px-4 mx-auto border-b border-slate-300 mb-8 md:max-w-2xl lg:max-w-7xl lg:px-6">
<p class="font-medium text-lg pb-3 uppercase font-semplicita" >Products</p>
</div>

<div class=" w-full mx-auto flex flex-wrap justify-center items-start gap-x-3 gap-y-8 mb-20 md:gap-x-5 md:gap-y-12 lg:mb-32 lg:max-w-7xl lg:justify-start lg:gap-x-5 lg:gap-y-20">
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
    <x-product-card image="/img/forma-1.png"/>
</div>

</div>

<div class="max-w-fit mx-auto my-10 md:my-20 px-4">
    <h4 class="text-lg md:text-h1 font-semplicita pt-6 md:pt-10 pb-8 md:pb-14 font-semibold text-center">
        Book your session today.
    </h4>
    <form action="" class="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input type="email" class="w-full md:w-[450px] h-fit py-2 md:py-4 px-3 bg-white placeholder:text-slate-500 text-black border-b-2 border-slate-400 outline-none " maxlength="256" name="Beta-Form-Email" data-name="Beta Form Email" placeholder="Email Address" id="Beta-Form-Email" />
        <input type="submit" value="Submit" data-wait="Please wait..." class="bg-primary-blue-5 text-white py-2 md:py-4 px-6 md:px-10 rounded-full cursor-pointer" />
    </form>

    <div class="py-6 md:py-8 flex flex-col gap-2 text-center justify-center font-medium">
        <div class="form-success">Thank you! Your submission has been received!</div>
        <div class="form-error">Oops! Something went wrong while submitting the form.</div>
    </div>
</div>


@endsection
