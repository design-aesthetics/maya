@extends('partials.master')
@section('title', 'Contact')
@section('content')
    <div style="opacity: 1;" class="load-first">
        <div class="section">
            <div class="main-container">
                <div class="w-layout-grid grid-halves">
                    <div class="container">
                        <img src="/img/contact-image-2.png" srcset="
                                            /img/contact-image-2.png 500w,
                                            /img/contact-image-2.png 800w,
                                            /img/contact-image-2.png        996w
                                        " sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px" alt="" />
                    </div>
                    <div id="w-node-_717b09c8-dab7-ed1d-cfda-d79ebfe7c394-0ab68040" class="contact-section mg-main">
                        <div>
                            <h1 class="medium-heading">MAYA ADVANCED <br>SKIN & BODY CARE</h1>
                            <p class="large-text">Together, we are committed to helping realign the wellness and beauty
                                of your skin. Have one of our experts curate a personalized treatment plan made special for
                                you. </p>
                            <div class="w-layout-grid contact-methods">
                                <div>
                                    <h6 class="sans-serif no-bottom-margin">Address</h6>
                                    <div>
                                        10065 Keele St<br />
                                        Maple ON<br />
                                        Canada
                                    </div>
                                </div>
                                <div>
                                    <h6 class="sans-serif no-bottom-margin">Contact</h6>
                                    <a href="tel:+(905)832-2677">(905) 832-2677</a>
                                    <a href="mailto:info@mayaskinandbodycare.com">info@mayaskinandbodycare.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{-- contact form --}}
                    <div class="contact-form">
                        <div class="container">
                            <h2 class="medium-heading">Contact Us</h2>
                            <p class="large-text">We are here to help you. Fill out the form below and we will get back
                                to you as soon as possible.</p>
                            <form id="contact-form" class="w-form" action="/form" method="POST">
                                @csrf
                                <div class="w-row">
                                    <div class="w-col w-col-6">
                                        <div class="w-form-field">
                                            <label for="name" class="form-label">Name:</label>
                                            <input id="name" type="text" class="w-input input-c" name="name"
                                                required="required">
                                        </div>
                                    </div>
                                    <div class="w-col w-col-6">
                                        <div class="w-form-field">
                                            <label for="email" class="form-label">Email:</label>
                                            <input id="email" type="email" class="w-input input-c" name="email"
                                                required="required">
                                        </div>
                                    </div>
                                </div>
                                <div class="w-row">
                                    <div class="w-col w-col-6">
                                        <div class="w-form-field">
                                            <label for="phone" class="form-label">Phone:</label>
                                            <input id="phone" type="text" class="w-input input-c" name="phone"
                                                placeholder="+1 999 999 9999" required="required">
                                        </div>
                                    </div>
                                    <div class="w-col w-col-6">
                                        <div class="w-form-field">
                                            <label for="subject" class="form-label">Subject:</label>
                                            <input id="subject" type="text" class="w-input input-c" name="subject"
                                                required="required">
                                        </div>
                                    </div>
                                    {{-- message textarea --}}
                                    <div class="w-col w-col-12">
                                        <div class="w-form-field">
                                            <label for="message" class="form-label">Message:</label>
                                            <textarea id="message" class="w-input input-c" name="message"
                                                required="required"></textarea>
                                        </div>
                                    </div>
                                    <div class="w-col w-col-12">
                                        {!! RecaptchaV3::field('contact') !!}
                                        {{-- @error('g-recaptcha-response')
                                        <div class="alert alert-danger mt-1 mb-1">{{ $message }}</div>
                                    @enderror --}}
                                    </div>
                                    <div class="w-col w-col-12">
                                        <div class="w-form-field">
                                            <input type="submit" value="Send Message" data-wait="Please wait..."
                                                class="w-button button-primary">
                                        </div>
                                    </div>
                                </div>
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
                    <div class="container">
                        <div class="mapwrapper">
                            <div style="width: 100%">
                                <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=10065%20Keele%20St,%20Maple,%20ON%20L6A%201W4+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
