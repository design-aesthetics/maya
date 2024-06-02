<section class="swiper-container lp w-full overflow-hidden">
    <div class="container swiper-wrapper">
        <div class="swiper-slide">
            <x-hero-slide image-src="/img/scratch__save.png" image-alt="Hero Image" :image-on-right="true"
                title="Discover the Beauty of Nature"
                description="Immerse yourself in the breathtaking landscapes of our world. Explore hidden gems and create unforgettable memories."
                primary-button-url="#" primary-button-text="Explore Now" />
        </div>
        <div class="swiper-slide">
            <x-hero-slide image-src="/img/scratch__save.png" image-alt="Another Hero Image" :image-on-right="false"
                title="Unlock Your Potential"
                description="Discover our transformative solutions and take your business to new heights."
                primary-button-url="#" primary-button-text="Get Started" secondary-button-url="#"
                secondary-button-text="Learn More" />
        </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-pagination"></div>
</section>

<script src="../../../js/hero.js"></script>
