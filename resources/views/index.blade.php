@extends('partials.master')
@section('title', 'Home')
@section('content')
        {{-- hero  --}}
        <div style="opacity: 0;" class="load-first">
            <div class="overlap-section-wrapper">
                @include('partials.hero')

                <div class="overlap-section-strip bottom bg-white"></div>
            </div>
        </div>
        <div style="opacity: 0;" class="load-second">
            <div class="section reduced-bottom-padding">
                <div class="main-container">
                    <div class="container-large wide align-center">
                        <div class="justify-content-center">
                            <h6 class="subheading">Maya Advanced Skin & Body</h6>
                            <h2 class="large-heading">Rediscover Yourself</h2>
                            <div class="container-large">
                                <div class="large-text">We provide our client's with a curated selection of personalized treatments. We work with the top medical directors and aestheticians that specialize in non-surgical facial rejuvenation, advanced laser services and a range of skincare solutions. We offer the most advanced scientific methods in skin rejuvenation and committed to boosting your wellness, energy and vitality.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section horizontal-tabs-section">
                <div class="main-container">
                    <div class="container-large"><h3 class="large-heading horizontal-tabs-section-title">Services</h3></div>
                </div>
                <div data-duration-in="300" data-duration-out="100" class="horizontal-tabs w-tabs">
                    <div class="horizontal-tabs-menu w-tab-menu" role="tablist">

                        <a
                            data-w-tab="Tab 1"
                            class="horizontal-tab-button w-inline-block w-tab-link w--current"
                            id="w-tabs-1-data-w-tab-0"
                            href="#w-tabs-1-data-w-pane-0"
                            role="tab"
                            aria-controls="w-tabs-1-data-w-pane-0"
                            aria-selected="true"
                            tabindex="1"
                        >

                            <h6
                                class="horizontal-tabs-button-text">FEATURED</h6>
                        </a>

                        <a
                            data-w-tab="Tab 2"
                            class="horizontal-tab-button w-inline-block w-tab-link"
                            id="w-tabs-1-data-w-tab-1"
                            href="#w-tabs-1-data-w-pane-1"
                            role="tab"
                            aria-controls="w-tabs-1-data-w-pane-1"
                            aria-selected="false"
                            tabindex="2"
                        >

                            <h6 class="horizontal-tabs-button-text">HAIR REMOVAL</h6>
                        </a>
                        <a
                            data-w-tab="Tab 3"
                            class="horizontal-tab-button w-inline-block w-tab-link"
                            id="w-tabs-1-data-w-tab-2"
                            href="#w-tabs-1-data-w-pane-2"
                            role="tab"
                            aria-controls="w-tabs-1-data-w-pane-2"
                            aria-selected="false"
                            tabindex="3"
                        >
                            <h6 class="horizontal-tabs-button-text">SKIN & FACIAL</h6>
                        </a>
                        <a
                            data-w-tab="Tab 4"
                            class="horizontal-tab-button w-inline-block w-tab-link"
                            id="w-tabs-1-data-w-tab-3"
                            href="#w-tabs-1-data-w-pane-3"
                            role="tab"
                            aria-controls="w-tabs-1-data-w-pane-3"
                            aria-selected="false"
                            tabindex="4"
                        >
                            <h6 class="horizontal-tabs-button-text">INJECTABLES</h6>
                        </a>
                        <a
                            data-w-tab="Tab 5"
                            class="horizontal-tab-button w-inline-block w-tab-link"
                            id="w-tabs-1-data-w-tab-4"
                            href="#w-tabs-1-data-w-pane-4"
                            role="tab"
                            aria-controls="w-tabs-1-data-w-pane-4"
                            aria-selected="false"
                            tabindex="5"
                        >
                            <h6 class="horizontal-tabs-button-text">CRYOPROBE</h6>
                        </a>

                    </div>
                    <div class="horizontal-tabs-container w-tab-content">
                        <!-- FEATURED SERVICE -->
                        <div data-w-tab="Tab 1" class="horizontal-tabs-content w-tab-pane w--tab-active" id="w-tabs-1-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-1-data-w-tab-0" style="opacity: 1;">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">MORPHEUS 8</h4>
                                                                </div>
                                                            </div>
                                                            <div>Morpheus8 uses new cutting-edge fractional technology that penetrates deep into your skin to breakdown fat and smoothening your skin for a youthful appearance.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/morpheus8" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container">
                                                <video id="video" autoplay loop muted>
                                                    <source src="/video/Morpheus8-Workstation-Video1.mp4">
                                                    <source src="/video/Morpheus8-Workstation-Video1.webm">
                                                    <source src="/video/Morpheus8-Workstation-Video1.webm.xmp">
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- HAIR REMOVAL -->
                        <div data-w-tab="Tab 2" class="horizontal-tabs-content w-tab-pane" id="w-tabs-1-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-1-data-w-tab-1" style="opacity: 0;">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">HAIR REMOVAL</h4>
                                                                </div>
                                                            </div>
                                                            <div>We provide a wide variety of hair removal services to get rid of your unwanted body hair. Our services include Electrolysis, laser removal and waxing.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/treatments#hairremoval" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container"><img src="/img/iLauqzeemp.png" alt="" class="overlap-section-image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- SKIN & FACIAL -->
                        <div data-w-tab="Tab 3" class="horizontal-tabs-content w-tab-pane" id="w-tabs-1-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-1-data-w-tab-2">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">SKIN & FACIAL</h4>
                                                                </div>
                                                            </div>
                                                            <div>We have many treatments for different types of skin types available. You will receive a consultation from our team professionals. We can help you gain more insight into the needs of your skin. <br/><br/>Facials help promote clear skin from toxins, which help rejuvenate and improve its tone and texture.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/treatments#skinnfacial" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container">
                                                <img
                                                    src="/img/cQv8lnn63v.png"
                                                    srcset="
                                                        /img/cQv8lnn63v@800w.png 800w,
                                                        /img/cQv8lnn63v@996w.png        996w
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
                        <!-- INJECTABLES -->
                        <div data-w-tab="Tab 4" class="horizontal-tabs-content w-tab-pane" id="w-tabs-1-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-1-data-w-tab-3">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">INJECTABLES</h4>
                                                                </div>
                                                            </div>
                                                            <div>Reduce the signs of aging with our highly experienced injector to reduce the appearance of aging. We provide a range of injectable treatments including Botox/Dysport, Non-permanent dermal Fillers, Fat Dissolving Injections, Platelet Rich Plasma(PRP), Beauty IV Boosters and other treatments. Maya prides itself on providing our client's with the best procedures in the industry.</div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/treatments#injectables" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container"><img src="/img/about-mina.png" alt="" class="overlap-section-image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- CRYROPROBE -->
                        <div data-w-tab="Tab 5" class="horizontal-tabs-content w-tab-pane" id="w-tabs-1-data-w-pane-4" role="tabpanel" aria-labelledby="w-tabs-1-data-w-tab-4">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">CRYROPROBE THERAPY</h4>
                                                                </div>
                                                            </div>
                                                            <div>Cryotherapy utilizes the latest Nitrous Oxide microtechnology. The application freezes any skin abnormalities such as benign skin lesions,keratosis and other skin conditions. </div>
                                                            <div><br><br>The method is the most ground-breaking technological advancement offering significant results in cryosurgery. din in. Commodo orci vitae tristique ac euismod suspendisse.</div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <a href="/treatments#cryoprobe" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <!-- <div class="container"><img src="https://assets.website-files.com/5fb1bda997835a6f2a83e6f2/601792cd11f71f115cacf090_portrait-02.jpg" alt="" class="overlap-section-image" /></div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- forma  --}}
            <div class="overlap-section-wrapper bg-primary-3">
                <div class="overlap-section-strip bg-white"></div>
                <div class="overlap-section">
                    <div class="main-container">
                        <div class="horizontal-tabs-content w-tab-pane w--tab-active" style="opacity: 1;">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">FORMA</h4>
                                                                </div>
                                                            </div>

                                                            <div>Forma is a skin and tissue remodeling technology equipped with a subdermal heating applicator. Radiofrequency travels via electrodes to deliver a non-invasive and pain-free treatment.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/forma" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container">
                                                <video id="video" autoplay loop muted>
                                                    <source src="/video/forma.mp4">
                                                    <source src="/video/forma.webm">
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {{-- farsk iv --}}
            <div class="overlap-section-wrapper bg-primary-3">
                <div class="overlap-section-strip bg-white"></div>
                <div class="overlap-section">
                    <div class="main-container">
                        <div class="horizontal-tabs-content w-tab-pane w--tab-active" style="opacity: 1;">
                            <div class="overlap-section-wrapper bg-primary-3">
                                <div class="overlap-section-strip bg-white"></div>
                                <div class="overlap-section">
                                    <div class="main-container">
                                        <div class="w-layout-grid grid-halves reverse-direction">
                                            <div class="overlap-section-content">
                                                <div class="container">
                                                    <div class="w-layout-grid vertical-grid large-features-grid">
                                                        <div class="w-layout-grid vertical-grid no-gap">
                                                            <div>
                                                                <div class="icon-list-item horizontal-icon-list-item align-content-left">
                                                                    <h4 class="icon-list-item-text horizontal-icon-list-item-text expanded-gap">Farsk Health IV Drips</h4>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                We follow an exclusive process to make our IV solutions, which makes it novel in the market as well as safer and more convenient for medical practitioners and customers alike.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="/farsk-iv" class="button small w-inline-block" style="color:white;"><div>Learn More</div></a>
                                            </div>
                                            <div class="container">
                                                <img src="/img/farsk-iv.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overlap-section-wrapper bg-primary-3">
                <div class="overlap-section-strip bg-white"></div>
                <div class="overlap-section">
                    <div class="main-container">
                        <div class="w-layout-grid grid-halves">
                            <div class="overlap-section-content">
                                <div data-w-id="436e2db6-6182-f23b-5b08-24d20fd09816" class="container">
                                    <div class="medium-heading">Give the perfect gift.</div>
                                    <p>Give the ultimate gift with a Maya certificate. We offer gift certificates, a wide range of spa treatments, packages and products to choose from.</p>
                                    <a href="/contact" class="button bg-transparent w-inline-block"><div>Buy Now</div></a>
                                </div>
                            </div>
                            <div data-w-id="436e2db6-6182-f23b-5b08-24d20fd09820" class="container">
                                <img
                                    src="/img/601792cf791717367bed116f_portrait-8@1x.png"
                                    srcset="
                                        /img/601792cf791717367bed116f_portrait-8@500w.png   500w,
                                        /img/601792cf791717367bed116f_portrait-8@800w.png   800w,
                                        /img/601792cf791717367bed116f_portrait-8@1080w.png 1080w,
                                        /img/601792cf791717367bed116f_portrait-8@1280w.png         1280w
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
            <div class="section bg-dark">
                <div class="main-container">
                    <div class="wide-quotes-slider-wrapper">
                        <div data-animation="slide" data-nav-spacing="7" data-duration="500" data-infinite="1" class="wide-quotes-slider w-slider" role="region" aria-label="carousel">
                            <div class="w-slider-mask" id="w-slider-mask-0">
                                <div class="w-slide" aria-label="1 of 3" role="group" style="transform: translateX(0px); opacity: 1;">
                                    <div>
                                        <div class="horizontal-quote">
                                            <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" />
                                            <h4 class="no-bottom-margin">I have been going to Maya Advanced Skin & Body Care for over a year now. I have been to many places for facials, spray tans and waxing but my experience at Maya is always top notch. My favourite Saturday each month is when I have my pedicure and get to spend time with my cousin (its our monthly tradition) with Lia. I highly recommend Maya Advanced Skin & Body Care to anyone looking for a great spa experience.</h4>
                                        </div>
                                        <div class="small-quote-wrapper">
                                            <div class="small-quote-text">
                                                <h6 class="sans-serif no-bottom-margin">Angelina G.</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-slide" aria-label="2 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                    <div aria-hidden="true">
                                        <div class="horizontal-quote" aria-hidden="true">
                                            <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" aria-hidden="true" />
                                            <h4 class="no-bottom-margin" aria-hidden="true">Amazing.. I have been to a few spas but never do I get the results like this one. Ever since I’ve been coming to Maya’s I have seen a huge difference in my skin and face. I will be coming here for life... thank you!</h4>
                                        </div>
                                        <div class="small-quote-wrapper" aria-hidden="true">
                                            <div class="small-quote-text">
                                                <h6 class="sans-serif no-bottom-margin">Sandy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                    <div aria-hidden="true">
                                        <div class="horizontal-quote" aria-hidden="true">
                                            <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" aria-hidden="true" />
                                            <h4 class="no-bottom-margin" aria-hidden="true">Very clean and good smelling. There is a full time medical director at the facility present</h4>
                                        </div>
                                        <div class="small-quote-wrapper" aria-hidden="true">
                                            <div class="small-quote-text">
                                                <h6 class="sans-serif no-bottom-margin">Reza</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                    <div aria-hidden="true">
                                        <div class="horizontal-quote" aria-hidden="true">
                                            <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" aria-hidden="true" />
                                            <h4 class="no-bottom-margin" aria-hidden="true">Love Lia! Every service she offers is done with such care and expertise! Love her spray tans as well! Such a welcoming environment!t</h4>
                                        </div>
                                        <div class="small-quote-wrapper" aria-hidden="true">
                                            <div class="small-quote-text">
                                                <h6 class="sans-serif no-bottom-margin">Angela</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-slide" aria-label="3 of 3" role="group" aria-hidden="true" style="transform: translateX(0px); opacity: 1;">
                                    <div aria-hidden="true">
                                        <div class="horizontal-quote" aria-hidden="true">
                                            <img src="/img/icons/quote.svg" alt="" class="horizontal-quote-icon" aria-hidden="true" />
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
                            <div class="hide w-slider-arrow-left" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="previous slide"></div>
                            <div class="hide w-slider-arrow-right" role="button" tabindex="0" aria-controls="w-slider-mask-0" aria-label="next slide" style=""></div>
                            <div class="slide-nav wide-quotes-slide-nav w-slider-nav w-slider-nav-invert w-round">
                                <div class="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3" aria-selected="true" role="button" tabindex="0" style="margin-left: 7px; margin-right: 7px;"></div>
                                <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-selected="false" role="button" tabindex="-1" style="margin-left: 7px; margin-right: 7px;"></div>
                                <div class="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-selected="false" role="button" tabindex="-1" style="margin-left: 7px; margin-right: 7px;"></div>
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
                                Schedule your virtual consultation for a skin analysis for your comprehensive, customized treatment plan.
                            </h3>
                        </div>
                        <div class="container">
                            <div class="form-block w-form">
                                <form id="wf-form-Subscribe-Form" name="email-form2" method="POST" action="/form2" class="form-grid-vertical">
                                    @csrf
                                    <input name="email" id="email" type="email" class="form-input white w-input" data-name="Subscribe Email" maxlength="256" placeholder="Email Address" />
                                    <div class="select-wrapper" style="padding-bottom:5px;">
                                        <select id="option" name="option" data-name="Select Field" class="select dark-background w-select">
                                            <option value="">I am interested in</option>
                                            <option name="option1" value="Hair Removal">Hair Removal</option>
                                            <option name="option2" value="Sking & Facial">Sking & Facial</option>
                                            <option name="option3" value="Injectables">Injectables</option>
                                            <option name="option4" value="Cryoprobe">Cryoprobe</option>
                                        </select>
                                    </div>
                                    {!! RecaptchaV3::field('newsletter') !!}
                                    <input type="submit" value="Subscribe now" data-wait="Please wait..." id="w-node-e6bfdaf0-5382-f973-559b-d996e764da7e-de1beba5" class="button w-button" />
                                </form>
                                {{-- has any error --}}
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
            <div class="section reduced-bottom-padding">
                <div class="main-container">
                    <div class="w-layout-grid grid-halves">
                        <div data-w-id="55bbbcf4-0232-c595-d5a9-881ab810f249" class="container-large">
                            <img
                                src="/img/OnzdBxbGHE.png"
                                srcset="
                                    /img/OnzdBxbGHE@500w.png  500w,
                                    /img/OnzdBxbGHE@800w.png  800w,
                                    /img/OnzdBxbGHE@1000w.png        1000w
                                "
                                sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 608px"
                                alt=""
                            />
                        </div>
                        <div data-w-id="55bbbcf4-0232-c595-d5a9-881ab810f24b" class="container">
                            <h3 class="large-heading">Your Safety First</h3>
                            <div class="large-text">During Covid-19 we have taken hygiene and sanitation to the highest of standards. Our client's are always our top priority, always ensuring your health and safety when you visit. All our tools are cured with medical grade skincare solutions and ensure our facility surpasses all health board requirements.</div>
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
            </div>
        </div>
        {{-- <script>
            const containers = document.querySelectorAll('.hero-rotating-container');
            const leftArrow = document.querySelector('.left-arrow');
            const rightArrow = document.querySelector('.right-arrow');
            let currentContainer = 0;
            let autoRotationInterval;

            function rotateContainers() {
                containers.forEach((container, index) => {
                container.style.display = index === currentContainer ? 'block' : 'none';
                });
            }

            function nextContainer() {
                currentContainer = (currentContainer + 1) % containers.length;
                rotateContainers();
            }

            leftArrow.addEventListener('click', () => {
                currentContainer = (currentContainer - 1 + containers.length) % containers.length;
                rotateContainers();
                clearInterval(autoRotationInterval);
            });

            rightArrow.addEventListener('click', () => {
                currentContainer = (currentContainer + 1) % containers.length;
                rotateContainers();
                clearInterval(autoRotationInterval);
            });

            function startAutoRotation() {
                autoRotationInterval = setInterval(() => {
                nextContainer();
                }, 14000); // Change the time (in milliseconds) to adjust the auto-rotation speed
            }

            function stopAutoRotation() {
                clearInterval(autoRotationInterval);
            }

            // Show the first container initially
            rotateContainers();

            // Start auto-rotation on page load
            startAutoRotation();

            // Stop auto-rotation when the page is no longer in focus
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') {
                startAutoRotation();
                } else {
                stopAutoRotation();
                }
            });
        </script> --}}

@endsection
