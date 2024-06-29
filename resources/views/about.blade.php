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
                        <img
                            src="/img/about-full.jpeg"
                            srcset="
                                /img/about-full.jpeg    800w,
                                /img/ about-full.jpeg   1600w,
                                /img/about-full.jpeg    1680w
                            "
                            sizes="(max-width: 479px) 91vw, (max-width: 767px) 93vw, 94vw"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="overlap-section-strip bottom bg-dark"></div>
        </div>
        <div class="section bg-dark">
            <div class="main-container">
                <div class="w-layout-grid grid-halves">
                    <div class="container">
                        <div
                            data-w-id="f5de96e7-17c1-e687-cc24-30fdd5a3397a"
                            class="container"
                            style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
                        >
                            <div class="w-layout-grid vertical-grid medium-gap">
                                <h6 class="large-heading no-bottom-margin">We are not just a Spa</h6>
                                <div class="small-heading no-bottom-margin">Maya Advanced Skin and Body care is a full service Medspa specializing in non-surgical medical aesthetics treatments, laser services and a range of individualized skincare solutions for all skin types and conditions. Indulge yourself in Maya's  also offers spa care facility designed to reinvigorate your health and well-being.</div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-w-id="f5de96e7-17c1-e687-cc24-30fdd5a33987"
                        class="container-small"
                        style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
                    >
                        <div class="centered-content-box hug-content">
                            <img
                                src="/img/60188268fa891516ab0f891a_square-08-p-800.png"
                                srcset="
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png  500w,
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png  800w,
                                    /img/60188268fa891516ab0f891a_square-08-p-800.png       1000w
                                "
                                sizes="(max-width: 479px) 83vw, 386px"
                                alt=""
                                class="centered-content-box-background-image"
                            />
                            <div class="container-small align-center">
                                <div class="metrics-box bg-match-text align-center">
                                    <h3 class="quote-box-main-text display-heading-2">20</h3>
                                    <div class="quote-box-subtext">years as a trusted family in the heart of Vaughn.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlap-section-wrapper">
            <div class="overlap-section-strip bg-dark"></div>
            <div class="overlap-section">
                <div class="main-container">
                    <div class="w-layout-grid grid-two-thirds reverse-direction">
                        <div class="container-large">
                            <div class="overlap-section-content">
                                <div class="section-title reduced-margin">
                                    {{-- <div class="large-heading">A flexible system.</div> --}}
                                    <p>We offer consultations and assessments by experienced aestheticians and well-respected board of medical directors.</p>
                                    <p>We have our medical expertise make recommendations based on your skin type, beauty goals and together we curate a personalized treatment plan.</p>
                                    <p>Lia and her team understand the importance of their client's desire for natural looking solutions through their selection of services. </p>
                                    <h6 class="subheading">Lia Naccarato</h6>
                                    <p>Lia focuses on redefining beauty and is constantly furthering her education in all aesthetic and constantly raising the standard in medical services to deliver clinically effective skin treatments. Through her hard work she has made an imprint on the industry and Maya has an exemplary reputation.</p>
                                    <p>Passionate in her role as MedSpa Owner & Director, she is highly involved in overseeing   daily operations and committed to bridging the gap between medically based aesthetics and the tranquility of a spa.</p>
                                    <p>Lia and her team selectively curate a selection of premium products and leading edge technologies that are both safe and proven successful in results.</p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <img
                                src="/img/about-lia.jpeg"
                                srcset="
                                    /img/about-lia.jpeg 500w,
                                    /img/about-lia.jpeg 800w,
                                    /img/about-lia.jpeg        996w
                                "
                                sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px"
                                alt=""
                                class="overlap-section-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlap-section-wrapper bottom-padding">
            <div class="overlap-section">
                <div class="main-container">
                    <div class="w-layout-grid grid-two-thirds">
                        <div class="container-large">
                            <div class="overlap-section-content">
                                <div class="section-title reduced-margin">
                                    <h6 class="subheading">Nurse Injector Adriana "Mina"</h6>
                                    <p>Nurse Mina brings 7 years of both medical and aesthetic experience. She graduated in 2012 having earned her Bachelor of Science in Nursing, she had worked at a medical centre before transitioning into aesthetic medicine. Mina has always possessed a strong keen eye for beauty and has a fulfilling career pursuing her passion in aesthetics.</p>
                                    <p>Mina provides a wide range of treatments using aesthetic injectables such as Botox/Dysport, Dermal Fillers, Platelet Rich Plasma(PRP), Fat Dissolving Injections, Beauty boosters. She is continuously furthering her education on the latest treatments and products, working alongside top-rated cosmetic injectors and plastic surgeons in the industry.</p>
                                    <p>Mina's paradigm is to have her clients embrace their beauty and confidence by enhancing their natural features. She prioritizes their needs to ensure the best results for her clients, paying attention to detail and creating a personalized treatment plan with only outstanding outcomes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <img
                                src="/img/about-mina.jpeg"
                                srcset="
                                    /img/about-mina.jpeg 500w,
                                    /img/about-mina.jpeg 800w,
                                    /img/about-mina.jpeg        996w
                                "
                                sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px"
                                alt=""
                                class="overlap-section-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
