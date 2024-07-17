<!-- prettier-ignore-start -->
@extends('partials.master')
@section('title', 'Contact')
@section('url', 'https://www.mayaskinandbodycare.com/contact')
@section('descriptions', 'Get in touch with Maya Skin & Body Care in Maple. We are here to answer your questions and book your personalized treatments. Reach out today!')
@section('robots', 'index, follow')
<!-- prettier-ignore-end -->
@section("content")
	<section>
		<div class="lg-img bg-[url('/img/pshoot--00262048.png')]"></div>
	</section>
	<section class="px-4 py-16 md:px-8">
		<div class="mx-auto max-w-7xl">
			<h1 class="mb-8 text-3xl font-light md:text-4xl">Contact Us</h1>
			<div class="grid gap-12 md:grid-cols-2">
				<div>
					<p class="prose mb-8">We are dedicated to assisting you. Please fill out the form below, and our team will respond promptly.</p>
					<form action="/form" method="POST" class="space-y-6">
						@csrf
						{!! RecaptchaV3::field("contact") !!}
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-1 block">Name:</label>
								<input type="text" id="name" name="name" required class="w-full rounded border px-3 py-2">
							</div>
							<div>
								<label for="email" class="mb-1 block">Email:</label>
								<input type="email" id="email" name="email" required class="w-full rounded border px-3 py-2">
							</div>
						</div>
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="phone" class="mb-1 block">Phone:</label>
								<input type="tel" id="phone" name="phone" required class="w-full rounded border px-3 py-2">
							</div>
							<div>
								<label for="subject" class="mb-1 block">Subject:</label>
								<input type="text" id="subject" name="subject" required class="w-full rounded border px-3 py-2">
							</div>
						</div>

						<div>
							<label for="message" class="mb-1 block">Message:</label>
							<textarea id="message" name="message" required class="h-32 w-full resize-none rounded border px-3 py-2"></textarea>
						</div>
						<x-button type="submit" size="md">Send Message</x-button>
						@if ($errors->any())
							<div class="bg-destructive/15 text-destructive mb-4 rounded-md p-4" role="alert">
								<div class="mb-2 flex items-center gap-2">
									<span class="font-medium">There were some errors with your submission</span>
								</div>
								<ul class="list-inside list-disc text-sm">
									@foreach ($errors->all() as $error)
										<li>{{ $error }}</li>
									@endforeach
								</ul>
							</div>
						@endif

						@if (session("message"))
							<div class="bg-primary/15 text-primary mb-4 rounded-md p-4" role="alert">
								<div class="flex items-center gap-2">
									<span class="font-medium">{{ session("message") }}</span>
								</div>
							</div>
						@endif
					</form>
				</div>

				<div>
					<p class="prose mb-8">We're here to help you feel amazing in your own skin. Let us create a personalized treatment plan just for you, enhancing your natural beauty and wellness.</p>

					<div class="mb-8 grid gap-8 sm:grid-cols-2">
						<div>
							<h6 class="mb-2 font-semibold">Address</h6>
							<p class="prose">10065 Keele St,<br>Maple ON, Canada</p>
						</div>
						<div>
							<h6 class="mb-2 font-semibold">Contact</h6>
							<p><a href="tel:+19058322677" class="prose hover:underline">(905) 832-2677</a></p>
							<p><a href="mailto:info@mayaskinandbodycare.com" class="prose hover:underline">info@mayaskinandbodycare.com</a></p>
						</div>
					</div>

					<div class="aspect-h-9 aspect-w-16">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5753.917085889672!2d-79.51497272400128!3d43.85668793924636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2920df8ef2d5%3A0x66fe6c21a9a1048f!2sMaya%20Advanced%20Skin%20%26%20Bodycare!5e0!3m2!1sen!2sca!4v1716393959693!5m2!1sen!2sca"
							width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
						</iframe>
					</div>
				</div>
			</div>
		</div>
	</section>
@endsection
