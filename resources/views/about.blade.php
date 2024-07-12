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
					<h1 class="mb-6">
						We are not just a Spa
					</h1>
					<p class="prose mb-6">
						Maya Advanced Skin and Body care is a full service Medspa specializing in non-surgical medical aesthetics treatments, laser services and a range of individualized skincare solutions for all skin types and conditions.
					</p>
					<p class="prose">
						Indulge yourself in Maya's spa care facility designed to reinvigorate your health and well-being.
					</p>
				</div>



				<div class="flex w-full items-center justify-center py-8 lg:w-1/2">
					<div class="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-lg shadow-lg">
						<!-- Brown gradient background -->
						<div class="absolute inset-0 bg-gradient-to-br from-[#d4a788] to-[#a97a5f]"></div>

						<!-- Teal inner square -->
						<div class="teal-square absolute inset-4 flex items-center justify-center rounded-md">
							<div class="text-center text-white">
								<h3 class="mb-2 font-semplicita text-6xl font-medium">20</h3>
								<p class="text-lg font-medium uppercase leading-tight text-white">
									Years As A Trusted<br>
									Family In The<br>
									Heart Of Vaughn.
								</p>
							</div>
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
					<h2 class="prose mb-6 font-semplicita font-semibold uppercase text-primary-blue-5 md:prose-lg lg:prose-xl">Lia Naccarato</h2>
					<p class="prose mb-4">
						Lia focuses on redefining beauty and is constantly furthering her education in all aesthetic aspects, raising the standard in medical services to deliver clinically effective skin treatments. Through her hard work, she has made an imprint on the
						industry, and Maya has earned an exemplary reputation.
					</p>
					<p class="prose mb-4">
						Passionate in her role as MedSpa Owner & Director, she is highly involved in overseeing daily operations and committed to bridging the gap between medically based aesthetics and the tranquility of a spa.
					</p>
					<p class="prose">
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
					<h2 class="prose mb-6 font-semplicita font-semibold uppercase text-primary-blue-5 md:prose-lg lg:prose-xl">Nurse Injector Adriana "Mina"</h2>
					<p class="prose mb-4">
						Nurse Mina brings 7 years of both medical and aesthetic experience. She graduated in 2012 with a Bachelor of Science in Nursing and worked at a medical centre before transitioning into aesthetic medicine. Mina has always possessed a strong keen
						eye for beauty and has a fulfilling career pursuing her passion in aesthetics.
					</p>
					<p class="prose mb-4">
						Mina provides a wide range of treatments using aesthetic injectables such as Botox/Dysport, Dermal Fillers, Platelet Rich Plasma (PRP), Fat Dissolving Injections, and Beauty boosters. She continuously furthers her education on the latest
						treatments and products, working alongside top-rated cosmetic injectors and plastic surgeons in the industry.
					</p>
					<p class="prose">
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
