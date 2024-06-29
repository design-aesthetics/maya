@extends('partials.master')
@section('title', 'Forma')
@section('content')
    <div style="opacity: 1;">
        <div class="overlap-section-wrapper bg-primary-3">
            <div class="overlap-section">
                <div class="main-container">
                    <div class="w-layout-grid grid-halves reverse-direction">
                        <div class="overlap-section-content">
                            <div class="container">
                                <div class="w-layout-grid vertical-grid increased-gap">
                                    <div>
                                        <h1 class="subheading no-bottom-margin">Forma</h1>
                                        <div class="horizontal-rule reduced-top-space no-bottom-space"></div>
                                    </div>
                                    <div>
                                        <div>Forma is a skin and tissue remodeling technology equipped with a subdermal heating applicator. Radiofrequency travels via electrodes to deliver a non-invasive and pain-free treatment, and its controls allow the device to reach optimal temperatures. Forma effectively treats the forehead, upper and lower eyelids, nasolabial folds, jowls and neck.</div>
                                    </div>
                                    <div>
                                        <div style="font-weight: bold">Benefits</div>
                                        <div>Forma has a thermal temperature sensor built into the handpiece allowing clinicians to acquire skin temperature in real-time.</div>
                                        <br>
                                        <div>Forma provides unprecedented safety of RF delivery. The “cut off temperature” feature reduces RF energy automatically when the handpiece senses that the required skin temperature has been reached.</div>
                                        <br>
                                        <div>Clinical evidence suggests prolonged exposure to temperature above 40°C is advantageous for optimal clinical outcomes.</div>
                                        <br>
                                        <div>Safe on all skin types.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container"><img src="/img/forma-1.png" alt="" class="overlap-section-image" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-primary-3">
            <div class="main-container narrow">
                <div class="section-title">
                    <div class="centered-content-box align-right">
                        <img
                            src="/img/forma-2.png"
                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 88vw, (max-width: 991px) 602px, 94vw"
                            alt=""
                            class="centered-content-box-background-image"
                        />
                        {{-- <div class="container-small">
                            <div class="quote-box">
                                <h3 class="quote-box-main-text">“Couldn’t speak more highly of Bloom.”</h3>
                                <div class="quote-box-subtext">Joe changed his life when he started using Bloom.</div>
                            </div>
                        </div> --}}
                    </div>
                </div>
                <div class="horizontal-small-metrics-collection">
                    <div class="small-metric center-text">
                        <h4 class="medium-heading">Non-invasive</h4>
                    </div>
                    <div class="small-metric center-text">
                        <h4 class="medium-heading">Improves Skin</h4>
                    </div>
                    <div class="small-metric center-text">
                        <h4 class="medium-heading">Minimal Downtime</h4>
                    </div>
                    <div class="small-metric center-text">
                        <h4 class="medium-heading">For all Skin types</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section align-content-center bg-primary-3">
                <div class="main-container">
                    <div class="container align-center">
                        <h4 class="large-heading">Book your session today.</h4>
                        <div class="form-block w-form">
                            <form id="wf-form-Beta-Form" name="wf-form-Beta-Form" data-name="Beta Form" class="form-grid-vertical">
                                <div class="horizontal-form">
                                    <input type="email" class="form-input w-input" maxlength="256" name="Beta-Form-Email" data-name="Beta Form Email" placeholder="Email Address" id="Beta-Form-Email" />
                                    <input type="submit" value="Submit" data-wait="Please wait..." class="button adjacent-to-input w-button" />
                                </div>
                            </form>
                            <div class="form-success w-form-done"><div>Thank you! Your submission has been received!</div></div>
                            <div class="form-error w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
