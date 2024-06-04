@extends('partials.master')
@section('title', 'Contact')
@section('content')
    <section>
        <div class="w-full h-[50vh] bg-slate-100 lg:h-[50vh] bg-[url('/img/about-full.jpeg')] bg-cover bg-center lg:bg-top">
        </div>
    </section>
    <section>
        <div class="container">
            <div class="half-grid">
                <div class="w-full max-w-[500px] justify-between mx-auto mt-6">
                    <h1 class="font-light pb-2">MAYA ADVANCED <br>SKIN & BODY CARE</h1>
                    {{-- <h1 class="font-light pb-2">Contact Us</h2> --}}
                    <p class="text-primary-gray-1 pb-8">We are here to help you. Fill out the form below and we will get
                        back
                        to you as soon as possible.</p>
                    <form action="/form" method="POST">
                        @csrf
                        <div class="grid grid-cols-2 grid-rows-1 space-x-4 py-4">
                            <x-form-input label="Name:" type="text" name="name" id="name" required="required" />
                            <x-form-input label="Email:" type="email" name="email" id="email" required="required" />
                        </div>
                        <div class="grid grid-cols-2 grid-rows-1 space-x-4">
                            <x-form-input label="Phone:" type="phone" name="phone" id="phone" required="required" />
                            <x-form-input label="Subject:" type="text" name="subject" id="subject"
                                required="required" />
                        </div>
                        <div class="grid grid-cols-1 grid-rows-1 space-x-4 pt-8">
                            <x-form-input is-textarea="true" label="Message: " type="text" name="message" id="message"
                                class="w-full min-h-32 page-contact-input resize-none appearance-none h-auto"
                                required="required" />
                        </div>
                        <div>{!! RecaptchaV3::field('contact') !!}</div>
                        <div class="form-item pt-16">
                            <button class="primary lg" type="submit" data-wait="Please wait...">Send Message</button>
                        </div>

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
                {{-- <div>
                    <img class="relative max-h-[80vh]" src="/img/contact-image-2.png"
                        srcset="
                                    /img/contact-image-2.png 500w,
                                    /img/contact-image-2.png 800w,
                                    /img/contact-image-2.png        996w
                                "
                        sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px" alt="" />
                </div> --}}
                <div class="w-full max-w-[500px] justify-between mx-auto mt-6">
                    <div>
                        {{-- <h1 class="font-light pb-2">MAYA ADVANCED <br>SKIN & BODY CARE</h1> --}}
                        <p class="text-primary-gray-1">Together, we are committed to helping realign the wellness and beauty
                            of your skin. Have one of our experts curate a personalized treatment plan made special for
                            you.
                        </p>
                        <div class="grid grids-cols-1 md:grid-cols-2 py-6 lg:py-12">
                            <div>
                                <h6 class="text-primary-blue-5 font-semibold uppercase pb-4">Address</h6>
                                <div class="text-primary-gray-1">
                                    10065 Keele St,<br />
                                    Maple ON, Canada
                                </div>
                            </div>
                            <div>
                                <h6 class="text-primary-blue-5 font-semibold uppercase pb-4">Contact</h6>
                                <a class="text-primary-gray-1" href="tel:+(905)832-2677">(905) 832-2677</a>
                                <a class="text-primary-gray-1"
                                    href="mailto:info@mayaskinandbodycare.com">info@mayaskinandbodycare.com</a>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5753.917085889672!2d-79.51497272400128!3d43.85668793924636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2920df8ef2d5%3A0x66fe6c21a9a1048f!2sMaya%20Advanced%20Skin%20%26%20Bodycare!5e0!3m2!1sen!2sca!4v1716393959693!5m2!1sen!2sca"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

@endsection
