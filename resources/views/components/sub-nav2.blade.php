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
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li><a href="#" class="text-lg font-medium hover:text-yellow-700" tabindex="0">TREATMENTS</a>
                </li>
                <li><a href="#" class="text-lg font-medium hover:text-yellow-700" tabindex="0">PRODUCTS</a>
                </li>
                <li><a href="/blogs" class="text-lg font-medium hover:text-yellow-700" tabindex="0">BLOG</a></li>
            </ul>
            <div class="flex-shrink-0 mx-8">
                <x-logo-icon fill="#543019" class="w-32 md:w-40 lg:w-48" alt="Maya Advanced Skin & Body Care Logo" />
            </div>
            <ul class="hidden lg:flex pl-0 space-x-12 mb-0">
                <li><a href="/about" class="text-lg font-medium hover:text-yellow-700" tabindex="0">ABOUT</a></li>
                <li><a href="/contact" class="text-lg font-medium hover:text-yellow-700" tabindex="0">CONTACT</a></li>
                <li><a target="_blank"
                        href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking"
                        class="text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK NOW</a></li>
            </ul>
            {{-- desktop menu end  --}}

            {{-- mobile book now button  --}}
            <div class="lg:hidden">
                <a href="#book" class="md:text-md lg:text-lg font-medium hover:text-yellow-700" tabindex="0">BOOK
                    NOW</a>
            </div>
        </nav>
        {{-- <div class="border-t border-yellow-950"></div> --}}

    </div>
</div>
<div class="w-full border border-solid bg-yellow-950 border-yellow-950 min-h-[1px] max-md:max-w-full">
</div>
