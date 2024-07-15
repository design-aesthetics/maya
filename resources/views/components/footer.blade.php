<footer class="relative overflow-hidden bg-gray-100 pb-4 pt-16 lg:pb-8 lg:pt-24">
	<div class="noise-overlay"></div>
	<div class="container relative z-10 mx-auto px-4 lg:px-8 xl:px-16">
		<div class="footer-wrapper">
			<div class="footer-logo-social-container">
				<a href="/" class="inline-block w-full max-w-[240px] pb-6">
					<x-logo-icon fill="white" class="w-full" alt="Maya Advanced Skin & Body Care Logo" />
				</a>
				<div class="flex items-center space-x-6">
					<a href="https://twitter.com/mayaskinandbody" target="_blank" class="inline-block">
						<img src="/img/icons/twitter.svg" alt="Twitter" class="h-6 w-6" />
					</a>
					<a href="https://www.instagram.com/mayaaesthetics/" target="_blank" class="inline-block">
						<img src="/img/icons/instagram.svg" alt="Instagram" class="h-6 w-6" />
					</a>
					<a href="https://www.facebook.com/mayaskinandbody" target="_blank" class="inline-block">
						<img src="/img/icons/facebook.svg" alt="Facebook" class="h-6 w-6" />
					</a>
				</div>
			</div>
			{{-- <div class="flex flex-wrap justify-center gap-16 lg:w-3/4 lg:justify-end"> --}}
			<div class="footer-items-container">
				<div id="footer-treatments">
					<h6 class="footernav-title mb-5">Treatments</h6>
					{{-- Populated by JavaScript --}}
				</div>
				<div id="footer-brands">
					<h6 class="footernav-title mb-5">Brands</h6>
					{{-- Populated by JavaScript --}}
				</div>
				<div id="footer-about">
					<h6 class="footernav-title mb-5">About</h6>
					<div class="flex flex-col gap-3">
						<a href="/about" class="hover-link">About</a>
						<a href="/contact" class="hover-link">Contact</a>
						<a href="/about#press" class="hover-link">Press</a>
						<a href="/clinic-policy" class="hover-link">Clinic Policy</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-24 border-t border-white opacity-30 lg:mt-60"></div>
		<div class="mt-3 text-center lg:text-left">
			<div class="font-inter text-sm font-medium uppercase text-white">
				<span class="prose-sm">&copy; {{ date("Y") }} | MAYA ADVANCED SKIN & BODY CARE
				</span>
			</div>
		</div>
	</div>
</footer>
<x-script type="js" file="js/7177edbb0f58bc0c3fd020636.js" />
