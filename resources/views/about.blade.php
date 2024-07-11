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
			<div class="mx-auto flex flex-col items-center justify-start gap-8 md:gap-16 lg:flex-row lg:justify-center lg:gap-32">
				<div class="text-container">
					<h6 class="max-w-lg font-semplicita text-h1 font-semibold uppercase text-primary-blue-5 lg:max-w-none">
						We are not just a Spa</h6>
					<p class="py-5 text-justify lg:max-w-[500px]">Maya Advanced Skin and Body care is a full service Medspa
						specializing in non-surgical medical aesthetics treatments, laser services and a range of individualized
						skincare solutions for all skin types and conditions. Indulge yourself in Maya's also offers spa care
						facility designed to reinvigorate your health and well-being.</p>
				</div>
				<div class="relative">
					<img src="/img/60188268fa891516ab0f891a_square-08-p-800.png"
						srcset="/img/60188268fa891516ab0f891a_square-08-p-800.png 500w,
                 /img/60188268fa891516ab0f891a_square-08-p-800.png 800w,
                 /img/60188268fa891516ab0f891a_square-08-p-800.png 1000w"
						sizes="(max-width: 479px) 83vw, 386px" alt="" class="h-auto w-full" />
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="scale-90 transform bg-primary-blue-4 p-5 text-center text-white md:scale-95 md:p-10 md:px-6 md:py-12">
							<h3 class="font-semplicita text-6xl font-medium lg:text-7xl">20</h3>
							<div class="mt-2 max-w-[150px] md:mt-4">years as a trusted family in the heart of Vaughn.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div>
		<div class="container mx-auto mb-14 mt-10 flex flex-col items-center justify-center gap-8 px-4 lg:max-h-screen lg:flex-row lg:px-0">
			<div class="order-2 max-w-[600px] lg:pl-8">
				<p class="mb-4">We offer consultations and assessments by experienced aestheticians and well-respected
					board of medical directors.</p>
				<p class="mb-4">We have our medical expertise make recommendations based on your skin type, beauty goals
					and together we curate a personalized treatment plan.</p>
				<p class="mb-4">Lia and her team understand the importance of their client's desire for natural looking
					solutions through their selection of services.</p>
				<div class="pt-6">
					<h6 class="pb-3 font-semplicita text-h3 font-semibold uppercase">Lia Naccarato</h6>
					<p class="mb-4 font-regular">Lia focuses on redefining beauty and is constantly furthering her education
						in all aesthetic and constantly raising the standard in medical services to deliver clinically
						effective skin treatments. Through her hard work she has made an imprint on the industry and Maya
						has an exemplary reputation.</p>
					<p class="mb-4 font-regular">Passionate in her role as MedSpa Owner & Director, she is highly involved
						in overseeing daily operations and committed to bridging the gap between medically based aesthetics
						and the tranquility of a spa.</p>
					<p class="mb-4 font-regular">Lia and her team selectively curate a selection of premium products and
						leading edge technologies that are both safe and proven successful in results.</p>
				</div>
			</div>
			<div class="order-1">
				<img src="/img/about-lia.jpeg" srcset="/img/about-lia.jpeg 500w, /img/about-lia.jpeg 800w, /img/about-lia.jpeg 996w" sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px" alt="Lia Naccarato"
					class="overlap-section-image h-auto max-w-full" />
			</div>
		</div>

		<div class="container mx-auto mb-24 flex flex-col items-center justify-center gap-8 px-4 lg:max-h-screen lg:flex-row lg:px-0">
			<div class="order-1 max-w-[600px] lg:pr-8">
				<h6 class="pb-3 font-semplicita text-h3 font-semibold uppercase">Nurse Injector Adriana "Mina"</h6>
				<p class="pt-3 font-regular">Nurse Mina brings 7 years of both medical and aesthetic experience. She
					graduated in 2012 having earned her Bachelor of Science in Nursing, she had worked at a medical centre
					before transitioning into aesthetic medicine. Mina has always possessed a strong keen eye for beauty and
					has a fulfilling career pursuing her passion in aesthetics.</p>
				<p class="pt-3 font-regular">Mina provides a wide range of treatments using aesthetic injectables such as
					Botox/Dysport, Dermal Fillers, Platelet Rich Plasma(PRP), Fat Dissolving Injections, Beauty boosters.
					She is continuously furthering her education on the latest treatments and products, working alongside
					top-rated cosmetic injectors and plastic surgeons in the industry.</p>
				<p class="pt-3 font-regular">Mina's paradigm is to have her clients embrace their beauty and confidence by
					enhancing their natural features. She prioritizes their needs to ensure the best results for her
					clients, paying attention to detail and creating a personalized treatment plan with only outstanding
					outcomes.</p>
			</div>
			<div class="order-2">
				<img src="/img/about-mina.jpeg" srcset="/img/about-mina.jpeg 500w, /img/about-mina.jpeg 800w, /img/about-mina.jpeg 996w" sizes="(max-width: 479px) 91vw, (max-width: 767px) 88vw, 497px" alt="Nurse Injector Adriana Mina"
					class="overlap-section-image h-auto max-w-full" />
			</div>
		</div>
	</div>
@endsection
