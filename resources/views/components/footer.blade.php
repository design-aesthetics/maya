<footer class="relative overflow-hidden bg-gray-100 py-16">
	<div class="noise-overlay"></div>
	<div class="container relative z-10 mx-auto px-4 lg:px-0">
		<div class="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-16">
			<div class="flex flex-col items-center text-center lg:max-w-[20vw] lg:items-start lg:text-left">
				<a href="/" class="inline-block w-full max-w-[60vw] pb-4 lg:max-w-[20vw]">
					<x-logo-icon fill="white" class="lg:mx-08 mx-auto w-32 md:w-40 lg:w-64" alt="Maya Advanced Skin & Body Care Logo" />
				</a>
				<div class="my-4 flex items-center space-x-4">
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
			<div class="flex flex-col flex-wrap justify-start gap-8 md:justify-center lg:flex-row lg:justify-between lg:gap-16">
				<div class="flex flex-col items-center text-center lg:items-start lg:text-left">
					<h6 class="footernav-title mb-5">Treatments</h6>
					<div class="flex flex-col gap-3">
						<a href="/treatments#hairremoval" class="hover-link">Hair Removal</a>
						<a href="/treatments#skinnfacial" class="hover-link">Skin & Facial</a>
						<a href="/treatments#injectables" class="hover-link">Injectables</a>
						<a href="/treatments#cryoprobe" class="hover-link">Cryoprobe</a>
					</div>
				</div>
				<div class="flex flex-col items-center text-center lg:items-start lg:text-left">
					<h6 class="footernav-title mb-5">About</h6>
					<div class="flex flex-col gap-3">
						<a href="/contact" class="hover-link">Contact Us</a>
						<a href="/about" class="hover-link">About Us</a>
						<a href="/policy" class="hover-link">Policy</a>
					</div>
				</div>
				<div class="flex flex-col items-center text-center lg:items-start lg:text-left">
					<h6 class="footernav-title mb-5">Products</h6>
					<div class="flex flex-col gap-3">
						<a href="/products/zo-skin-health" class="hover-link">Zo Skin Health</a>
						<a href="/products/111-skin" class="hover-link">111SKIN</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-24 max-w-[90%] border-t border-white lg:mt-60"></div>
		<div class="mt-3 flex items-center justify-between text-center lg:text-left">
			<div class="font-inter text-sm font-medium uppercase text-white">
				&copy; {{ date("Y") }} | MAYA ADVANCED SKIN & BODY CARE
			</div>
		</div>
	</div>
</footer>
