@extends('partials.master')
@section('title', 'About')
@section('content')
    <div style="opacity: 1;" class="load-first">
    </div>
    <div style="opacity: 1;" class="load-second">
        <div class="video-overlap-section">
            <div class="main-container">
                <div class="video-overlap-container">
                    <div class="video-thumbnail-wrapper">
                        <img src="/img/about-full.jpeg"
                            srcset="
                                /img/about-full.jpeg    800w,
                                /img/ about-full.jpeg   1600w,
                                /img/about-full.jpeg    1680w
                            "
                            sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, 94vw" alt="" />
                    </div>
                </div>
            </div>
            <div class="overlap-section-strip bottom bg-dark"></div>
        </div>


            <div class="max-w-[90%] mx-auto h-fit py-24 relative bg-white -z-10 lg:w-full">
                <div class="container flex flex-col justify-start gap-8 md:gap-16 items-center lg:flex-row lg:justify-center lg:gap-32">
                <div class="text-container ">
                    <h6 class="text-h1 max-w-lg text-primary-blue-5 uppercase font-semibold font-semplicita md:text-xlh1 lg:text-xlh2 lg:max-w-none">We are not just a Spa</h6>
                    <p class="py-5 text-justify lg:max-w-[500px]">Maya Advanced Skin and Body care is a full service Medspa specializing in non-surgical medical aesthetics treatments, laser services and a range of individualized skincare solutions for all skin types and conditions. Indulge yourself in Maya's also offers spa care facility designed to reinvigorate your health and well-being.</p>
                </div>
<!-- 
                <div >
                <img src="/img/60188268fa891516ab0f891a_square-08-p-800.png" srcset="
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png  500w,
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png  800w,
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png       1000w
                                "
                                sizes="(max-width: 479px) 83vw, 386px" alt=""
                                class="centered-content-box-background-image relative flex items-center " />
                                    <div class="py-10 px-5 bg-primary-blue-4 text-white">
                                    <h3 class="">20</h3>
                                    <div class="">years as a trusted family in the heart of Vaughn.</div>
                                    </div>
                </div>
                </div> -->


                <div class="relative">
    <img src="/img/60188268fa891516ab0f891a_square-08-p-800.png"
         srcset="
             /img/60188268fa891516ab0f891a_square-08-p-800.png  500w,
             /img/60188268fa891516ab0f891a_square-08-p-800.png  800w,
             /img/60188268fa891516ab0f891a_square-08-p-800.png 1000w
         "
         sizes="(max-width: 479px) 83vw, 386px"
         alt=""
         class="w-full h-auto"
    />
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="bg-primary-blue-4 text-white p-5 md:py-10 md:px-3 transform scale-90 md:scale-95 text-center">
            <h3 class="text-6xl font-semplicita font-medium lg:text-7xl ">20</h3>
            <div class="mt-2 md:mt-4 max-w-[150px]">years as a trusted family in the heart of Vaughn.</div>
        </div>
    </div>
</div>


            </div>               

            <div class="container mx-auto px-4  flex flex-col lg:flex-row lg:px-0 gap-8 justify-center items-center mt-10 mb-14">
    <div class="order-2 max-w-[600px] lg:pl-8">
        <p class="mb-4">We offer consultations and assessments by experienced aestheticians and well-respected board of medical directors.</p>
        <p class="mb-4">We have our medical expertise make recommendations based on your skin type, beauty goals and together we curate a personalized treatment plan.</p>
        <p class="mb-4">Lia and her team understand the importance of their client's desire for natural looking solutions through their selection of services.</p>
        <div class="pt-6">
            <h6 class="text-h3 font-semibold pb-3 font-semplicita uppercase">Lia Naccarato</h6>
            <p class="mb-4">Lia focuses on redefining beauty and is constantly furthering her education in all aesthetic and constantly raising the standard in medical services to deliver clinically effective skin treatments. Through her hard work she has made an imprint on the industry and Maya has an exemplary reputation.</p>
            <p class="mb-4">Passionate in her role as MedSpa Owner & Director, she is highly involved in overseeing daily operations and committed to bridging the gap between medically based aesthetics and the tranquility of a spa.</p>
            <p class="mb-4">Lia and her team selectively curate a selection of premium products and leading edge technologies that are both safe and proven successful in results.</p>
        </div>
    </div>
    <div class="order-1">
        <img src="/img/about-lia.jpeg"
            srcset="
                /img/about-lia.jpeg 500w,
                /img/about-lia.jpeg 800w,
                /img/about-lia.jpeg 996w
            "
            sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px"
            alt="Lia Naccarato"
            class="overlap-section-image max-w-full h-auto"
        />
    </div>
</div>



<div class="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-8 justify-center items-center mb-24">
    <div class="order-1 max-w-[600px] lg:pr-8">
        <h6 class="text-h3 font-semibold pb-3 font-semplicita uppercase">Nurse Injector Adriana "Mina"</h6>
        <p class="pt-3">Nurse Mina brings 7 years of both medical and aesthetic experience. She graduated in
            2012 having earned her Bachelor of Science in Nursing, she had worked at a medical
            centre before transitioning into aesthetic medicine. Mina has always possessed a
            strong keen eye for beauty and has a fulfilling career pursuing her passion in
            aesthetics.</p>
        <p class="pt-3">Mina provides a wide range of treatments using aesthetic injectables such as
            Botox/Dysport, Dermal Fillers, Platelet Rich Plasma(PRP), Fat Dissolving Injections,
            Beauty boosters. She is continuously furthering her education on the latest
            treatments and products, working alongside top-rated cosmetic injectors and plastic
            surgeons in the industry.</p>
        <p class="pt-3">Mina's paradigm is to have her clients embrace their beauty and confidence by
            enhancing their natural features. She prioritizes their needs to ensure the best
            results for her clients, paying attention to detail and creating a personalized
            treatment plan with only outstanding outcomes.</p>
    </div>
    <div class="order-2">
        <img src="/img/about-mina.jpeg"
            srcset="/img/about-mina.jpeg 500w,
                    /img/about-mina.jpeg 800w,
                    /img/about-mina.jpeg 996w"
            sizes="(max-width: 479px) 91vw,
                    (max-width: 767px) 88vw,
                    497px"
            alt="Nurse Injector Adriana Mina"
            class="overlap-section-image max-w-full h-auto"
        />
    </div>
</div>

@endsection