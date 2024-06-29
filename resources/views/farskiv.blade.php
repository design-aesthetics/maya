@extends('partials.master')
@section('title', 'Morpheus8')
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
                                        <h1 class="subheading no-bottom-margin">Farsk Health IV Drips</h1>
                                        <div class="horizontal-rule reduced-top-space no-bottom-space"></div>
                                    </div>
                                    <div>
                                        <div>
                                            IV Drip treatments provide the body with the essential vitamins and minerals it requires by injecting the solution directly into the bloodstream. This facilitates a very high absorption rate and, because it is fast-acting, it delivers efficient results immediately after finishing the treatment.
                                        </div>
                                    </div>
                                    <div>
                                        <div>Farsk's IV drips were created by our industry leading pharmaceutical team, who bring decades of medical knowledge of admixtures and clinical experience in their field. They have formulated a range of vastly unrivalled solutions than what's currently available on the market.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container"><img src="/img/farsk-1.png" alt="" class="overlap-section-image" /></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section bg-primary-3">
            <div class="main-container narrow">
                <div class="section-title">
                    <div class="centered-content-box align-right">
                        <img
                            src="/img/farsk-2.png"
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
