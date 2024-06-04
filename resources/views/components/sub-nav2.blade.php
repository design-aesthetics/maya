<nav id="navbar" class="bg-white w-full">
    <div class="max-w-7xl px-8 mx-auto">
        <div class="flex justify-between items-center min-h-[84px] py-4 px-2 md:py-4 md:px-0">
            <div class="flex items-center space-x-16">
                <!-- logo -->
                <a class="flex items-center" href="/">
                    <x-logo-icon fill="#543019" width="114px" height="22px" />
                </a>
                <!-- nav -->
                <nav role="navigation" class="navigation-content" aria-controls="mega-menu-full" aria-expanded="false">
                    <div id="mega-menu-full"
                        class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                        <ul
                            class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white items-center">
                            <li>
                                <button id="mega-menu-full-dropdown-button"
                                    class="flex items-center justify-between w-full py-2 px-1 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-blue-5 font-semplicita uppercase md:p-0">
                                    Treatments
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button id="mega-menu-full-dropdown-button2"
                                    class="flex items-center justify-between w-full py-2 px-1 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-blue-5 font-semplicita uppercase md:p-0">
                                    Products
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                            </li>

                            <li>
                                <a href="/about"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">About
                                    Maya</a>
                            </li>
                            <li>
                                <a href="/blogs"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Blog</a>
                            </li>
                            <li>
                                <a href="/contact"
                                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- button on the right -->
            <div class="flex justify-end">
                <button class="primary sm font-semplicita uppercase">
                    <a href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking"
                        target="_blank">
                        Book Now
                    </a>
                </button>
                <div class="burgermenu-container">
                    <img src="/img/icons/icon-menu-dark.svg" loading="eager" alt="" class="burger-menu" />
                </div>
            </div>
        </div>
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

        {{-- SECOND DROPDOWN (PRODUCTS) --}}
        {{-- <div id="mega-menu-full-dropdown2" class=" mt-1 border-gray-200 bg-gray-50 md:bg-white border-y z-50 lg:pb-14">
            <div class="grid grid-cols-4 gap-3 py-4 ">
                <div class="product space-y-4 p-2 group transition duration-150 ease-linear">
                    <p class="hover:font-medium">Product 1</p>
                    <div class="bg-slate-100 rounded-lg h-56 overflow-hidden">
                        <img src="" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="product space-y-4 p-2 group transition duration-150 ease-linear">
                    <p class="hover:font-medium">Product 2</p>
                    <div class="bg-slate-100 rounded-lg h-56 overflow-hidden">
                        <img src="" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="product space-y-4 p-2 group transition duration-150 ease-linear">
                    <p class="hover:font-medium">Product 3</p>
                    <div class="bg-slate-100 rounded-lg h-56 overflow-hidden">
                        <img src="" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="product space-y-4 p-2 group transition duration-150 ease-linear">
                    <p class="group-hover:font-medium">Product 4</p>
                    <div class="bg-slate-100 rounded-lg h-56 overflow-hidden">
                        <img src="" alt="" class="w-full h-full object-cover">
                        <a href=""
                            class="hidden translate-y-36 py-3 px-5 text-sm bg-black text-center text-white uppercase group-hover:translate-y-0 group-hover:block transition duration-150 ease-linear">View
                            product</a>
                    </div>
                </div>
            </div>
        </div> --}}
    </div>

</nav>
