<div id="navbar" class="bg-white w-full text-yellow-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between py-6">
            {{-- mobile hamburger button  --}}
            <div class="lg:hidden">
                <button class="text-yellow-950 hover:text-yellow-700 focus:outline-none" aria-label="Toggle navigation">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {{-- desktop menu start  --}}
            <!-- prettier-ignore-start -->
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li>
                    <button
                        class="text-lg font-medium hover:text-yellow-700"
                        tabindex="0"
                        id="mega-menu-full-dropdown-button"
                    >
                        TREATMENTS
                    </button>
                </li>
                <li>
                    <button
                        class="text-lg font-medium hover:text-yellow-700"
                        tabindex="0"
                        id="mega-menu-full-dropdown-button"
                    >
                        PRODUCTS
                    </button>
                </li>
                <li>
                    <a href="/blogs" class="text-lg font-medium hover:text-yellow-700" tabindex="0">BLOG</a>
                </li>
            </ul>
            <div class="flex-shrink-0 mx-8">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <x-logo-icon fill="#543019" class="w-32 md:w-40 lg:w-48" alt="Maya Advanced Skin & Body Care Logo" />
                </a>
            </div>
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li><a href="/about" class="text-lg font-medium hover:text-yellow-700" tabindex="0">ABOUT</a></li>
                <li><a href="/contact" class="text-lg font-medium hover:text-yellow-700" tabindex="0">CONTACT</a></li>
                <li><a target="_blank"
                        href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking"
                        class="text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK NOW</a></li>
            </ul>
            <!-- prettier-ignore-end -->
            {{-- desktop menu end  --}}

            {{-- mobile book now button  --}}
            <div class="lg:hidden">
                <a href="#book" class="md:text-md lg:text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK
                    NOW</a>
            </div>

        </nav>

        {{-- SUB MENU FOR TREATMENTS  --}}
        <div id="mega-menu-full-dropdown"
            class="hidden mt-1 border-gray-200 bg-gray-50 md:bg-white border-y z-50 lg:pb-14">
            <div
                class="grid grid-cols-4 max-w-screen-xl px-0 py-5 justify-between mx-auto text-gray-900 lg:gap-y-10 h-full lg:overflow-y lg:pb-10">
                <x-menu-item title="Facials & Skin Treatments" :items="[
                    ['label' => 'The Sculpt Facial', 'url' => '#'],
                    ['label' => 'HydraFacial MD', 'url' => '#'],
                    ['label' => 'Chemical Peels', 'url' => '#'],
                    ['label' => 'Specialty Facials', 'url' => '#'],
                    ['label' => 'Skin Resurfacing', 'url' => '#'],
                    ['label' => 'Skin Enhancements', 'url' => '#'],
                ]" />
                <x-menu-item title="Injectables & Wellness" :items="[
                    ['label' => 'Neurotoxins (Botox, Dysport)', 'url' => '#'],
                    ['label' => 'Dermal Fillers (Teosyal, Sculptra Face)', 'url' => '#'],
                    ['label' => 'Specialty Treatments', 'url' => '#'],
                    ['label' => 'IV Infusions', 'url' => '#'],
                    ['label' => 'Vitamin Injections', 'url' => '#'],
                ]" />

                <x-menu-item title="Beauty & Wellness" :items="[
                    ['label' => 'Organic Spray Tan', 'url' => '#'],
                    ['label' => 'Brow Lamination', 'url' => '#'],
                    ['label' => 'Plus90 Votiva-Vaginal Rejuvenation', 'url' => '#'],
                ]" />

                <x-menu-item title="Hair Removal" :items="[
                    [
                        'label' => 'Laser Hair Removal',
                        'url' => '#',
                    ],
                    ['label' => 'Waxing', 'url' => '#'],
                    ['label' => 'Electrolysis', 'url' => '#'],
                ]" />
            </div>
        </div>
    </div>
</div>
<!-- prettier-ignore-start -->
<div class="w-full border border-solid bg-yellow-950 border-yellow-950 min-h-[1px] max-md:max-w-full"></div>
<!-- prettier-ignore-end -->
