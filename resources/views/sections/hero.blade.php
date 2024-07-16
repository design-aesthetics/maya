<section class="embla">
	<div class="embla__viewport">
		<div class="embla__container">
			<div class="embla__slide">
				<div class="embla__slide__number container">
					<div class="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
						<div>
							<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
								1 CloudMaster: Elevate Your Projects
							</h1>
							<p class="text-muted-foreground mt-3 text-xl">
								Simplify team collaboration with CloudMaster, the ultimate tool for efficient project management.
							</p>
							<div class="mt-7 grid w-full gap-3 sm:inline-flex">
								<x-button type="submit" size="lg">Get started</x-button>
								<x-button type="submit" size="lg" variant="outline">Contact sales team</x-button>
							</div>
							<div class="mt-6 grid grid-cols-2 gap-x-5 lg:mt-10">
								<div class="py-5">
									<div class="flex space-x-1">
										@for ($i = 0; $i < 5; $i++)
											<x-star />
										@endfor
									</div>
									<p class="mt-3 text-sm">
										<span class="font-bold">4.6</span> /5 - from 12k reviews
									</p>
									<div class="mt-5">
										{{-- <x-google-logo /> --}}
									</div>
								</div>
								<div class="py-5">
									<div class="flex space-x-1">
										@for ($i = 0; $i < 4; $i++)
											<x-star />
										@endfor
										{{-- <x-half-star /> --}}
									</div>
									<p class="mt-3 text-sm">
										<span class="font-bold">4.8</span> /5 - from 5k reviews
									</p>
									<div class="mt-5">
										{{-- <x-capterra-logo /> --}}
									</div>
								</div>
							</div>
						</div>
						<div class="relative ms-4">
							<img class="w-full rounded-md" src="https://placehold.co/800x700" alt="Hero Image" id="hero-image">
						</div>
					</div>
				</div>
			</div>
			<div class="embla__slide">
				<div class="embla__slide__number container">
					<div className="max-w-2xl text-center mx-auto">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							Nano-Frontiers: Reshaping Tech
						</h1>
						<p className="mt-3 text-xl text-muted-foreground">
							Nano-computing breaks barriers, unlocking new tech horizons.
						</p>
					</div>
					<div className="mt-10 relative max-w-5xl mx-auto">
						<img src="https://placehold.co/1024x480" className="rounded-xl" alt="Image Description" />
						<div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
							<div className="w-48 h-48 rounded-lg bg-background/10" />
						</div>
						<div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
							<div className="w-48 h-48 rounded-full bg-background/10" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<x-script type="js" file="js/65ba7a4e46d2b859ca0e00022.js" />
