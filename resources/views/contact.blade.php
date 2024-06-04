@extends('partials.master')
@section('title', 'Contact')
@section('url', 'https://www.mayaskinandbodycare.com/contact')
@section('robots', 'index, follow')
@section('content')
    <section>
        <div class="w-full h-[70vh] bg-slate-100 lg:h-[70vh] bg-[url('/img/about-full.jpeg')] bg-cover bg-center lg:bg-top">
        </div>
    </section>
    <section class="pt-0">
        <div class="max-w-1280 mx-auto">
            <h1 class="text-xlh1 font-light mb-4">Contact Us</h1>
        </div>
        <div class="container">
            <div class="half-grid">
                <div class="w-full mx-auto">
                    <p class="pb-8">We are dedicated to assisting you. Please fill out the form below,
                        and our team will respond promptly.</p>
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
                        {{-- <div>{!! RecaptchaV3::field('contact') !!}</div> --}}
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
                <div class="w-full mx-auto">
                    <div>
                        <p>We’re here to help you feel amazing in your own skin. Let us create a
                            personalized treatment plan just for you, enhancing your natural beauty and wellness.
                        </p>
                        <div class="grid grids-cols-1 md:grid-cols-2 py-6 lg:py-12">
                            <div>
                                <h6 class="text-primary-blue-5 font-regular pb-4">Address</h6>
                                <div class="text-primary-gray-1">
                                    10065 Keele St,<br />
                                    Maple ON, Canada
                                </div>
                            </div>
                            <div>
                                <h6 class="text-primary-blue-5 font-regular pb-4">Contact</h6>
                                <a class="text-primary-gray-1" href="tel:+(905)832-2677">(905) 832-2677</a>
                                <a class="text-primary-gray-1"
                                    href="mailto:info@mayaskinandbodycare.com">info@mayaskinandbodycare.com</a>
                            </div>
                        </div>
                    </div>
                    {{-- <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5753.917085889672!2d-79.51497272400128!3d43.85668793924636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2920df8ef2d5%3A0x66fe6c21a9a1048f!2sMaya%20Advanced%20Skin%20%26%20Bodycare!5e0!3m2!1sen!2sca!4v1716393959693!5m2!1sen!2sca"
                        width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe> --}}
                </div>
            </div>
        </div>
    </section>

@endsection
