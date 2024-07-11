<!-- prettier-ignore-start -->
@extends("partials.master")
@section("title", "About")
@section("url", "https://www.mayaskinandbodycare.com/about")
@section("robots", "index, follow")
@section("descriptions",'At Maya Skin & Body Care, we are committed to providing our clients with the best products andservices to help them achieve their desired results. Our team of experts is dedicated to understanding the unique needsof each individual and tailoring our treatments to meet those needs. Whether you are looking for a comprehensive skincare routine or a personalized treatment plan, we have the expertise and experience to help you achieve your goals.')
<!-- prettier-ignore-end -->
@section("content")
	<section>
		<div class="lg-img bg-[url('/img/pshoot--0062048.png')]"></div>
	</section>
	<section>
		<div class="container">
			<div class="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
				<div class="lg:w-1/2">
					<h1 class="mb-6 font-semplicita text-3xl font-semibold uppercase text-primary-blue-5 md:text-4xl lg:text-5xl">
						We are not just a Spa
					</h1>
					<p class="mb-6 text-lg leading-relaxed text-gray-700">
						Maya Advanced Skin and Body care is a full service Medspa specializing in non-surgical medical aesthetics treatments, laser services and a range of individualized skincare solutions for all skin types and conditions.
					</p>
					<p class="text-lg leading-relaxed text-gray-700">
						Indulge yourself in Maya's spa care facility designed to reinvigorate your health and well-being.
					</p>
				</div>

				<div class="relative lg:w-1/2">
					<img src="/img/60188268fa891516ab0f891a_square-08-p-800.png"
						srcset="/img/60188268fa891516ab0f891a_square-08-p-800.png 500w,
                                 /img/60188268fa891516ab0f891a_square-08-p-800.png 800w,
                                 /img/60188268fa891516ab0f891a_square-08-p-800.png 1000w"
						sizes="(max-width: 479px) 83vw, (max-width: 1023px) 80vw, 40vw" alt="" class="h-auto w-full rounded-lg shadow-lg" />
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="rounded-lg bg-primary-blue-4 p-4 text-center text-white shadow-xl md:p-6 lg:p-8">
							<h3 class="font-semplicita text-4xl font-medium md:text-5xl lg:text-6xl">20</h3>
							<div class="mt-2 max-w-[150px] text-sm md:text-base">years as a trusted family in the heart of Vaughn.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container">
			<div class="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
				<div class="order-2 lg:order-1 lg:w-1/2">
					<img class="abt-img" src="/img/about-lia.jpeg" srcset="/img/about-lia.jpeg 500w, /img/about-lia.jpeg 800w, /img/about-lia.jpeg 996w" sizes="(max-width: 479px) 91vw, (max-width: 1023px) 80vw, 40vw" alt="Lia Naccarato" />
				</div>
				<div class="order-1 lg:order-2 lg:w-1/2">
					<h2 class="mb-6 font-semplicita text-2xl font-semibold uppercase text-primary-blue-5 md:text-3xl">Lia Naccarato</h2>
					<p class="mb-4 text-lg leading-relaxed text-gray-700">
						Lia focuses on redefining beauty and is constantly furthering her education in all aesthetic aspects, raising the standard in medical services to deliver clinically effective skin treatments. Through her hard work, she has made an imprint on the
						industry, and Maya has earned an exemplary reputation.
					</p>
					<p class="mb-4 text-lg leading-relaxed text-gray-700">
						Passionate in her role as MedSpa Owner & Director, she is highly involved in overseeing daily operations and committed to bridging the gap between medically based aesthetics and the tranquility of a spa.
					</p>
					<p class="text-lg leading-relaxed text-gray-700">
						Lia and her team selectively curate a selection of premium products and leading-edge technologies that are both safe and proven successful in results.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="container">
			<div class="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
				<div class="lg:w-1/2">
					<h2 class="mb-6 font-semplicita text-2xl font-semibold uppercase text-primary-blue-5 md:text-3xl">Nurse Injector Adriana "Mina"</h2>
					<p class="mb-4 text-lg leading-relaxed text-gray-700">
						Nurse Mina brings 7 years of both medical and aesthetic experience. She graduated in 2012 with a Bachelor of Science in Nursing and worked at a medical centre before transitioning into aesthetic medicine. Mina has always possessed a strong keen
						eye for beauty and has a fulfilling career pursuing her passion in aesthetics.
					</p>
					<p class="mb-4 text-lg leading-relaxed text-gray-700">
						Mina provides a wide range of treatments using aesthetic injectables such as Botox/Dysport, Dermal Fillers, Platelet Rich Plasma (PRP), Fat Dissolving Injections, and Beauty boosters. She continuously furthers her education on the latest
						treatments and products, working alongside top-rated cosmetic injectors and plastic surgeons in the industry.
					</p>
					<p class="text-lg leading-relaxed text-gray-700">
						Mina's paradigm is to have her clients embrace their beauty and confidence by enhancing their natural features. She prioritizes their needs to ensure the best results, paying attention to detail and creating personalized treatment plans with
						outstanding outcomes.
					</p>
				</div>
				<div class="lg:w-1/2">
					<img class="abt-img" src="/img/about-mina.jpeg" srcset="/img/about-mina.jpeg 500w, /img/about-mina.jpeg 800w, /img/about-mina.jpeg 996w" sizes="(max-width: 479px) 91vw, (max-width: 1023px) 80vw, 40vw" alt="Nurse Injector Adriana Mina" />
				</div>
			</div>
		</div>
	</section>
@endsection
