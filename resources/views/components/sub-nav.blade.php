<!-- <nav id="navbar" class="max-w-full px-8 mx-auto">
    <div class="max-w-1280 mx-auto flex justify-between items-center min-h-[84px] py-4 px-2 md:py-4 md:px-0">
        <div class="flex items-center space-x-16">
            {{-- logo  --}}
            <a class="flex items-center" href="/">
                <x-logo-icon fill="#543019" width="114px" height="22px" />
            </a>
            {{-- nav  --}}
            <nav role="navigation" class="navigation-content">
                <div class="nav-link">
                    <div class="drop-toggle">
                        <div>Treatments</div>
                        <img src="/img/icons/dropdown.svg" loading="eager" alt="" class="dropdown-arrow" />
                    </div>
                </div>
                <div class="nav-link">
                    <div class="drop-toggle">
                        <div>Products</div>
                        <img src="/img/icons/dropdown.svg" loading="eager" alt="" class="dropdown-arrow" />
                    </div>
                </div>
                <div class="nav-link">
                    <div class="drop-toggle">
                        <div>About Maya</div>
                        <img src="/img/icons/dropdown.svg" loading="eager" alt="" class="dropdown-arrow" />
                    </div>
                </div>
                <a href="/blog" class="nav-link">
                    <div>Blog</div>
                </a>
                <a href="/contact" class="nav-link">
                    <div>Contact</div>
                </a>
            </nav>
        </div>

        {{-- button on the right --}}
        <div class="flex justify-end">
            <button class="primary sm">
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
</nav> -->



<nav id="navbar" class="max-w-7xl px-8 mx-auto">
    <div class="flex justify-between items-center min-h-[84px] py-4 px-2 md:py-4 md:px-0">
        <div class="flex items-center space-x-16">
            {{-- logo  --}}
            <a class="flex items-center" href="/">
                <x-logo-icon fill="#543019" width="114px" height="22px" />
            </a>
            {{-- nav  --}}
            <nav role="navigation" class="navigation-content" aria-controls="mega-menu-full" aria-expanded="false">
                <button href="#" class="nav-link" data-collapse-toggle="mega-menu-full" type="button">
                    <!-- <div class="drop-toggle">
                        <span class="sr-only">Open main menu</span>
                        <img src="/img/icons/dropdown.svg" loading="eager" alt="" class="dropdown-arrow" />
                    </div> -->
                </button>
                <div id="mega-menu-full"
                    class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul
                        class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white items-center">
                    
                        <li>
                            <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown"
                                class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-blue-5 font-semplicita uppercase md:p-0">Treatments
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Products</a>
                        </li>
                        <li>
                            <a href="/about"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">About Maya</a>
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

        {{-- button on the right --}}
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
        class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y hidden">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-gray-100">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-gray-500">Connect with third-party tools that
                            you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>




