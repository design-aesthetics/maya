<!-- prettier-ignore-start -->
@extends('partials.master')
@section('title', 'Home')
@section('url', 'https://www.mayaskinandbodycare.com')
@section('robots', 'index, follow')
@section('descriptions', 'Rejuvenate yourself at Maya Skin & Body Care, located in the heart of Maple. We offer a wide range of personalized treatments designed to enhance your natural beauty and well-being. Experience the perfect blend of advanced techniques and luxurious care tailored just for you.')
<!-- prettier-ignore-end -->
@section('content')
    <div class="unused">
        {{-- @include('partials.hero') --}}

        {{-- <div>
            <div class="section reduced-bottom-padding">
                <div class="main-container">
                    <div class="container-large wide align-center">
                        <div class="max-w-1280 mx-auto mt-10 h-fit py-8">
                            <h6 class="subheading text-center">Maya Advanced Skin & Body</h6>
                            <h2 class="large-heading text-center font-semplicita text-h1 lg:text-xlh2 uppercase">Rediscover
                                Yourself</h2>
                            <div class="container mx-auto mt-4 ">
                                <p class="large-text text-justify text-h5 max-w-md mx-auto lg:max-w-2xl">We provide our client's
                                    with a curated selection of
                                    personalized treatments. We work with the top medical directors and aestheticians that
                                    specialize in non-surgical facial rejuvenation, advanced laser services and a range of
                                    skincare solutions. We offer the most advanced scientific methods in skin rejuvenation and
                                    committed to boosting your wellness, energy and vitality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section horizontal-tabs-section bg-primary-light-gray py-8">
            <div class="max-w-5xl mx-auto pt-10">
                <div class="mb-10 ">
                    <h3 class="text-xlh2 font-semplicita font-semibold">Services</h3>
                </div>
                <div data-duration-in="300" data-duration-out="100" class="horizontal-tabs w-tabs">
                    <div class="horizontal-tabs-menu w-tab-menu flex flex-wrap justify-center gap-10 " role="tablist">
                        <a data-w-tab="Tab 1"
                            class="horizontal-tab-button w-inline-block w-tab-link w--current px-4 border-y-2 border-gray-300 py-4"
                            id="w-tabs-1-data-w-tab-0" href="#w-tabs-1-data-w-pane-0" role="tab"
                            aria-controls="w-tabs-1-data-w-pane-0" aria-selected="true" tabindex="1">
                            <h6 class="horizontal-tabs-button-text">FEATURED</h6>
                        </a>
                        <a data-w-tab="Tab 2"
                            class="horizontal-tab-button w-inline-block w-tab-link px-4 border-y-2 border-gray-300 py-4"
                            id="w-tabs-1-data-w-tab-1" href="#w-tabs-1-data-w-pane-1" role="tab"
                            aria-controls="w-tabs-1-data-w-pane-1" aria-selected="false" tabindex="2">
                            <h6 class="horizontal-tabs-button-text">HAIR REMOVAL</h6>
                        </a>
                        <a data-w-tab="Tab 3"
                            class="horizontal-tab-button w-inline-block w-tab-link px-4 border-y-2 border-gray-300 py-4"
                            id="w-tabs-1-data-w-tab-2" href="#w-tabs-1-data-w-pane-2" role="tab"
                            aria-controls="w-tabs-1-data-w-pane-2" aria-selected="false" tabindex="3">
                            <h6 class="horizontal-tabs-button-text">SKIN & FACIAL</h6>
                        </a>
                        <a data-w-tab="Tab 4"
                            class="horizontal-tab-button w-inline-block w-tab-link px-4 border-y-2 border-gray-300 py-4"
                            id="w-tabs-1-data-w-tab-3" href="#w-tabs-1-data-w-pane-3" role="tab"
                            aria-controls="w-tabs-1-data-w-pane-3" aria-selected="false" tabindex="4">
                            <h6 class="horizontal-tabs-button-text">INJECTABLES</h6>
                        </a>
                        <a data-w-tab="Tab 5"
                            class="horizontal-tab-button w-inline-block w-tab-link px-4 border-y-2 border-gray-300 py-4"
                            id="w-tabs-1-data-w-tab-4" href="#w-tabs-1-data-w-pane-4" role="tab"
                            aria-controls="w-tabs-1-data-w-pane-4" aria-selected="false" tabindex="5">
                            <h6 class="horizontal-tabs-button-text">CRYOPROBE</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="horizontal-tabs-container w-tab-content">
            <!-- FEATURED SERVICE -->

            <div class="bg-primary-light-gray">
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                        <video id="video" autoplay loop muted class="w-full">
                            <source src="/video/Morpheus8-Workstation-Video1.mp4" type="video/mp4">
                            <source src="/video/Morpheus8-Workstation-Video1.webm" type="video/webm">
                        </video>
                    </div>
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <div class="container mx-auto">
                            <h4 class="text-h1 font-semplicita font-semibold">MORPHEUS 8</h4>
                            <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                                Morpheus8 uses new cutting-edge fractional technology that penetrates deep into your skin to
                                break down fat and smoothen your skin for a youthful appearance.
                            </p>
                            <a href="/morpheus8" class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- HAIR REMOVAL -->

            <div class="bg-primary-light-gray">
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                        <img src="/img/iLauqzeemp.png" alt="Hair Removal" class="w-full max-h-96 lg:max-h-full object-cover">
                    </div>
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <div class="container mx-auto">
                            <h4 class="text-h1 font-semplicita font-semibold mb-4">HAIR REMOVAL</h4>
                            <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                                We provide a wide variety of hair removal services to get rid of your unwanted body hair.
                                Our
                                services include Electrolysis, laser removal, and waxing.
                            </p>
                            <a href="/treatments#hairremoval" class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn
                                More</a>
                        </div>
                    </div>
                </div>
            </div>



            <!-- SKIN & FACIAL -->

            <div class="bg-primary-light-gray">
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                        <img src="/img/cQv8lnn63v.png" alt="Skin & Facial" class="w-full max-h-96 lg:max-h-full object-cover">
                    </div>
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <div class="container mx-auto">
                            <h4 class="text-h1 font-semplicita font-semibold mb-4">SKIN & FACIAL</h4>
                            <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                                We have many treatments for different types of skin types available. You will receive a
                                consultation from our team professionals. We can help you gain more insight into the needs
                                of
                                your skin. <br /><br />Facials help promote clear skin from toxins, which help rejuvenate
                                and
                                improve its tone and texture.
                            </p>
                            <a href="/treatments#skinnfacial"
                                class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>



            <!-- INJECTABLES -->

            <div class="bg-primary-light-gray">
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                        <img src="/img/about-mina.png" alt="Injectables" class="w-full max-h-96 lg:max-h-full object-cover">
                    </div>
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <div class="container mx-auto">
                            <h4 class="text-h1 font-semplicita font-semibold mb-4">INJECTABLES</h4>
                            <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                                Reduce the signs of aging with our highly experienced injector to reduce the appearance of
                                aging. We provide a range of injectable treatments including Botox/Dysport, Non-permanent
                                dermal
                                Fillers, Fat Dissolving Injections, Platelet Rich Plasma(PRP), Beauty IV Boosters, and other
                                treatments. <br><br> Maya prides itself on providing our clients with the best procedures in
                                the
                                industry.
                            </p>
                            <a href="/treatments#injectables"
                                class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>



            <!-- CRYROPROBE -->
            <div class="bg-primary-light-gray">
                <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                        <img src="https://assets.website-files.com/5fb1bda997835a6f2a83e6f2/601792cd11f71f115cacf090_portrait-02.jpg"
                            alt="Cryroprobe Therapy" class="w-full max-h-96 lg:max-h-full object-cover">
                    </div>
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                        <div class="container mx-auto">
                            <h4 class="text-h1 font-semplicita font-semibold mb-4">CRYROPROBE THERAPY</h4>
                            <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                                Cryotherapy utilizes the latest Nitrous Oxide microtechnology. The application freezes any
                                skin
                                abnormalities such as benign skin lesions, keratosis, and other skin conditions.
                                <br><br>
                                The method is the most ground-breaking technological advancement offering significant
                                results in
                                cryosurgery. din in. Commodo orci vitae tristique ac euismod suspendisse.
                            </p>
                            <a href="/treatments#cryoprobe" class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn
                                More</a>
                        </div>
                    </div>
                </div>
            </div>





        </div>

        <div class="bg-primary-light-gray">
            <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                <div class="w-full lg:w-1/2 lg:pr-8 order-2">
                    <video id="video" autoplay loop muted class="w-full max-h-96 lg:max-h-full">
                        <source src="/video/forma.mp4" type="video/mp4">
                        <source src="/video/forma.webm" type="video/webm">
                    </video>
                </div>
                <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 order-1">
                    <div class="container mx-auto">
                        <h4 class="text-h1 font-semplicita font-semibold mb-4">FORMA</h4>
                        <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                            Forma is a skin and tissue remodeling technology equipped with a subdermal heating applicator.
                            Radiofrequency travels via electrodes to deliver a non-invasive and pain-free treatment.
                        </p>
                        <a href="/forma" class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn More</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white">
            <div class="max-w-5xl mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                <div class="w-full lg:w-1/2 lg:pr-8">
                    <img src="/img/farsk-iv.png" alt="Farsk Health IV Drips"
                        class="w-full max-h-96 lg:max-h-full object-cover">
                </div>
                <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                    <div class="container mx-auto">
                        <h4 class="text-h1 font-semplicita font-semibold mb-4">Farsk Health IV Drips</h4>
                        <p class="text-justify text-h5 max-w-md my-5 lg:max-w-2xl">
                            We follow an exclusive process to make our IV solutions, which makes it novel in the market as well
                            as safer and more convenient for medical practitioners and customers alike.
                        </p>
                        <a href="/farsk-iv" class="inline-block py-3 px-4 bg-primary-blue-5 text-white">Learn More</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="bg-primary-light-gray mb-5 md:mb-7 lg:mb-16">
            <div class="max-w-1280 mx-auto flex flex-col lg:flex-row items-center py-8 lg:py-16 px-4">
                <div class="w-full lg:w-1/2 lg:pr-8">
                    <h4 class="text-h1 font-semplicita font-medium mb-4">Give the perfect gift.</h4>
                    <p class="text-lg mb-6">Give the ultimate gift with a Maya certificate. We offer gift certificates, a wide
                        range of spa treatments, packages, and products to choose from.</p>
                    <a href="/contact" class="button bg-primary-blue-5 text-white py-3 px-4 mt-4 inline-block">Buy Now</a>
                </div>
                <div class="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
                    <img src="/img/601792cf791717367bed116f_portrait-8@1x.png"
                        srcset="/img/601792cf791717367bed116f_portrait-8@500w.png 500w,
                                /img/601792cf791717367bed116f_portrait-8@800w.png 800w,
                                /img/601792cf791717367bed116f_portrait-8@1080w.png 1080w,
                                /img/601792cf791717367bed116f_portrait-8@1280w.png 1280w"
                        sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px" alt="Image"
                        class="max-h-96 lg:max-h-full object-cover w-full">
                </div>
            </div>
        </div>

        <div class="section bg-dark bg-primary-light-gray">
            <div class="main-container">
                <div class="wide-quotes-slider-wrapper">
                    <div data-animation="slide" data-nav-spacing="7" data-duration="500" data-infinite="1"
                        class="wide-quotes-slider w-slider" role="region" aria-label="carousel">
                        <div class="w-slider-mask" id="w-slider-mask-0">
                            <div class="w-slide" aria-label="1 of 3" role="group"
                                style="transform: translateX(0px); opacity: 1;">
                                <div>
                                    <div class="horizontal-quote">
                                        <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" />
                                        <h4 class="no-bottom-margin">I have been going to Maya Advanced Skin & Body Care for
                                            over a year now. I have been to many places for facials, spray tans and waxing but
                                            my experience at Maya is always top notch. My favourite Saturday each month is when
                                            I have my pedicure and get to spend time with my cousin (its our monthly tradition)
                                            with Lia. I highly recommend Maya Advanced Skin & Body Care to anyone looking for a
                                            great spa experience.</h4>
                                    </div>
                                    <div class="small-quote-wrapper">
                                        <div class="small-quote-text">
                                            <h6 class="sans-serif no-bottom-margin">Angelina G.</h6>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div class="w-slide" aria-label="2 of 3" role="group" aria-hidden="true"
                                style="transform: translateX(0px); opacity: 1;">
                                <div aria-hidden="true">
                                    <div class="horizontal-quote" aria-hidden="true">
                                        <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon"
                                            aria-hidden="true" />
                                        <h4 class="no-bottom-margin" aria-hidden="true">Amazing.. I have been to a few spas
                                            but never do I get the results like this one. Ever since I’ve been coming to Maya’s
                                            I have seen a huge difference in my skin and face. I will be coming here for life...
                                            thank you!</h4>
                                    </div>
                                    <div class="small-quote-wrapper" aria-hidden="true">
                                        <div class="small-quote-text">
                                            <h6 class="sans-serif no-bottom-margin">Sandy</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true"
                                style="transform: translateX(0px); opacity: 1;">
                                <div aria-hidden="true">
                                    <div class="horizontal-quote" aria-hidden="true">
                                        <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon"
                                            aria-hidden="true" />
                                        <h4 class="no-bottom-margin" aria-hidden="true">Very clean and good smelling. There is
                                            a full time medical director at the facility present</h4>
                                    </div>
                                    <div class="small-quote-wrapper" aria-hidden="true">
                                        <div class="small-quote-text">
                                            <h6 class="sans-serif no-bottom-margin">Reza</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true"
                                style="transform: translateX(0px); opacity: 1;">
                                <div aria-hidden="true">
                                    <div class="horizontal-quote" aria-hidden="true">
                                        <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon"
                                            aria-hidden="true" />
                                        <h4 class="no-bottom-margin" aria-hidden="true">Love Lia! Every service she offers is
                                            done with such care and expertise! Love her spray tans as well! Such a welcoming
                                            environment!t</h4>
                                    </div>
                                    <div class="small-quote-wrapper" aria-hidden="true">
                                        <div class="small-quote-text">
                                            <h6 class="sans-serif no-bottom-margin">Angela</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true"
                                style="transform: translateX(0px); opacity: 1;">
                                <div aria-hidden="true">
                                    <div class="horizontal-quote" aria-hidden="true">
                                        <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon"
                                            aria-hidden="true" />
                                        <h4 class="no-bottom-margin" aria-hidden="true">This is the best beauty spa.</h4>
                                    </div>
                                    <div class="small-quote-wrapper" aria-hidden="true">
                                        <div class="small-quote-text">
                                            <h6 class="sans-serif no-bottom-margin">Megan</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-live="polite" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore=""></div>
                        </div>
                        <div class="hide w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-0"
                            aria-label="previous slide"></div>
                        <div class="hide w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-0"
                            aria-label="next slide" style=""></div>
                        <div class="slide-nav wide-quotes-slide-nav w-slider-nav w-slider-nav-invert w-round">
                            <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3"
                                aria-selected="true" role="button" tabindex="0"
                                style="margin-left: 7px; margin-right: 7px;"></div>
                            <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-selected="false"
                                role="button" tabindex="-1" style="margin-left: 7px; margin-right: 7px;"></div>
                            <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-selected="false"
                                role="button" tabindex="-1" style="margin-left: 7px; margin-right: 7px;"></div>
                        </div>
                    </div>
                </div>
                <div class="container-large"></div>
            </div>
        </div>

        <div class="section-large bg-match-text" id="newsletter-index">
            <div class="main-container">
                <div class="w-layout-grid grid-halves align-content-center">
                    <div class="container">
                        <h3 class="no-bottom-margin">
                            Schedule your virtual consultation for a skin analysis for your comprehensive, customized treatment
                            plan.
                        </h3>
                    </div>
                    <div class="container">
                        <div class="form-block w-form">
                            <form id="wf-form-Subscribe-Form" name="email-form2" method="POST" action="/form2"
                                class="form-grid-vertical">
                                @csrf
                                <input name="email" id="email" type="email" class="form-input white w-input"
                                    data-name="Subscribe Email" maxlength="256" placeholder="Email Address" />
                                <div class="select-wrapper" style="padding-bottom:5px;">
                                    <select id="option" name="option" data-name="Select Field"
                                        class="select dark-background w-select">
                                        <option value="">I am interested in</option>
                                        <option name="option1" value="Hair Removal">Hair Removal</option>
                                        <option name="option2" value="Sking & Facial">Sking & Facial</option>
                                        <option name="option3" value="Injectables">Injectables</option>
                                        <option name="option4" value="Cryoprobe">Cryoprobe</option>
                                    </select>
                                </div>
                                {!! RecaptchaV3::field('newsletter') !!}
                                <input type="submit" value="Subscribe now" data-wait="Please wait..."
                                    id="w-node-e6bfdaf0-5382-f973-559b-d996e764da7e-de1beba5" class="button w-button" />
                            </form>
                            @if ($errors->any())
                                <div class="alert alert-danger">
                                    @foreach ($errors->all() as $error)
                                        <p>{{ $error }}</p>
                                    @endforeach
                                </div>
                            @endif
                            @if (session()->has('message'))
                                <div class="alert alert-success">
                                    {{ session()->get('message') }}
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <img src="/img/floral-pattern-2.svg" alt="" class="bg-radial" />
        </div>

        <div class="section reduced-bottom-padding max-w-1280 ">
            <div class="main-container">
                <div class="w-layout-grid grid-halves">
                    <div data-w-id="55bbbcf4-0232-c595-d5a9-881ab810f249" class="container-large">
                        <img src="/img/OnzdBxbGHE.png"
                            srcset="
                                        /img/OnzdBxbGHE@500w.png  500w,
                                        /img/OnzdBxbGHE@800w.png  800w,
                                        /img/OnzdBxbGHE@1000w.png        1000w
                                    "
                            sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 608px" alt="" />
                    </div>
                    <div data-w-id="55bbbcf4-0232-c595-d5a9-881ab810f24b" class="container">
                        <h3 class="large-heading">Your Safety First</h3>
                        <div class="large-text">During Covid-19 we have taken hygiene and sanitation to the highest of
                            standards. Our client's are always our top priority, always ensuring your health and safety when you
                            visit. All our tools are cured with medical grade skincare solutions and ensure our facility
                            surpasses all health board requirements.</div>
                        <div class="horizontal-rule"></div>
                        <h6 class="brand-logos-heading">Trusted by the best:</h6>
                        <div class="brand-logos-wrapper">
                            <img src="/img/partners/croma.svg" alt="" class="brand-logo" />
                            <img src="/img/partners/skinceuticals.svg" alt="" class="brand-logo" />
                        </div>
                        <div class="brand-logos-wrapper">
                            <img src="/img/partners/isclinical.svg" alt="" class="brand-logo" />
                            <img src="/img/partners/RejudiCare.svg" alt="" class="brand-logo" />
                        </div>
                        <div class="brand-logos-wrapper">
                            <img src="/img/partners/innoaesthetics.svg" alt="" class="brand-logo" />
                            <img src="/img/partners/drschrammek.svg" alt="" class="brand-logo" />
                        </div>
                        <div class="brand-logos-wrapper">
                            <img src="/img/partners/knesko.svg" alt="" class="brand-logo" />
                            <img src="/img/partners/nuface.svg" alt="" class="brand-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}
    </div>
    @include('sections.hero')
    @include('sections.product-card')
    @include('sections.insta')
@endsection
