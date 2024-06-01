
<nav id="navbar" class="max-w-7xl px-8 mx-auto">
    <div class="flex justify-between items-center min-h-[84px] py-4 px-2 md:py-4 md:px-0">
        <div class="flex items-center space-x-16">
            <!-- logo -->
            <a class="flex items-center" href="/">
                <x-logo-icon fill="#543019" width="114px" height="22px" />
            </a>
            <!-- nav -->
            <nav role="navigation" class="navigation-content" aria-controls="mega-menu-full" aria-expanded="false">

                <div id="mega-menu-full" class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white items-center">
                        <li>
                            <button id="mega-menu-full-dropdown-button" class="flex items-center justify-between w-full py-2 px-1 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-blue-5 font-semplicita uppercase md:p-0">
                                Treatments
                                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Products</a>
                        </li>
                        <li>
                            <a href="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">About Maya</a>
                        </li>
                        <li>
                            <a href="/blogs" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Blog</a>
                        </li>
                        <li>
                            <a href="/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-blue-5 font-semplicita uppercase">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <!-- button on the right -->
        <div class="flex justify-end">
            <button class="primary sm font-semplicita uppercase">
                <a href="https://www.fresha.com/a/maya-skin-and-body-care-vaughan-10065-keele-street-6cx9vlgo/booking" target="_blank">
                    Book Now
                </a>
            </button>

            <div class="burgermenu-container">
                <img src="/img/icons/icon-menu-dark.svg" loading="eager" alt="" class="burger-menu" />
            </div>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" class="hidden mt-1 border-gray-200 bg-gray-50 md:bg-white border-y z-50 lg:max-h-[90vh] lg:pb-14 overflow-auto scrollbar-thin">
        <div class="flex flex-col max-w-screen-xl px-0 py-5 justify-between mx-auto text-gray-900 lg:gap-y-10 h-full lg:overflow-y lg:pb-10">
            <div class="w-full flex justify-between basis-1/4">
                <div class="menu flex flex-col gap-2 justify-start px-3">
                    <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Featured</div>
                    <ul class="text-slate-900 capitalize space-y-[0.5px] pl-0">
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Neurotoxin (Botox, Dysport)</a></li>
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Customized Facial Treatment</a></li>
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Forma Facial - Radio Frequency</a></li>
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Forma Facial - Radio Frequency 6 Sessions + (1 free)</a></li>
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Organic spray tan</a></li>
                        <li class="text-xs hover:underline"><a href="#" class="block py-1">Dermal fillers (Teosyal)</a></li>
                    </ul>
                </div>
            <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Consultations</div>
                    <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Consultation: Skincare</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Consultation: Injectables</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Follow up: Injectables</a></li>
                    </ul>
            </div>
            <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Skin Resurfacing</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Tixel ® Total Eye Area</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Tixel ® Face and Neck (Eyes included)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Morpheus8 - 1 Session</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Morpheus8 - 3 Sessions</a></li>
                </ul>
            </div>
            <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Injectibles</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Dissolve filler</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Plus90 Votiva-Vaginal Rejuvenation</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Sculptra Face</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Aqua Gold</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Half Syringe</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">PRP platelet rich plasma Face/or Scalp 3 sessions</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Meso Therepy - Beauty Booster</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Non Surgical Thread Lift</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Platelet Rich plasma Scalp</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Platelet Rich Plasma Face</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Fat Burner (Belkyra)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Dermal fillers (Teosyal)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Neurotoxin (Botox, Dysport) existing client</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Neurotoxin (Dysport, Botox) New Client</a></li>
                </ul>
            </div>
            </div>

            {{-- SECOND ROW  --}}
          <div class="w-full flex justify-between basis-1/4">
              <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Vitamin Infusions</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip NAD+</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip High C</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip Energy</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip Boost</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip Immune</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IV Drip Radiance</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Vitamin B12 Injection</a></li>
                </ul>
                </div>
             <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Skin and Facial Treatments</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">The Sculpt Facial</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Platinum HydraFacial MD</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Deluxe HydraFacial MD</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Signature Hydrafacial MD</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Express Glow Facial</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Mini Glow Peel by ZO Skin Health</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Chemical Peels</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">CryoProbe</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Forma Facial - Radio Frequency</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Forma Facial - Radio Frequency 6 Sessions + (1 free)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Fire & Ice Facial</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Led Therapy (added to any service)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Pink Intimate Skin Bleaching</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Telangiectasia & Skin Tag Removal</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">ULTRASOUND</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Dermaplaning</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Oxygen Treatment (O2TDERM Facial)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Rosaclear Facial</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Deep Cleaning Treatment</a></li>
                </ul>
                </div>
                <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Specialty Skin Treatments</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Lymphatic Facial Massage ( add on )</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Customized Facial Treatment</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IPL Photofacial - 2 Sessions</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">IPL - PhotoFacial 4 Sessions</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Bacne Facial</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Cosmelan Peeling</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Silk Peel</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">AFA Clay Peel with (Amino Acids)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Micro-Needling 1 Session with Induction Therapy</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Micro-Needling 3 Sessions with Induction Therapy</a></li>
                </ul>
             </div>
                <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Laser Hair Removal</div>
                <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Lip Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Lip and Chin Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Lower Face Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Chest Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Back Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Brazilian Laser (free underarm)</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Bikini Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">1/2 Leg Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">1/2 Leg & Bikini (or Underarms) Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Full Leg Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Full Leg & Brazilian</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Underarm Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">1/2 Arm Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Full Arm Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Full Body Laser</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Electrolysis Small</a></li>
                </ul>
            </div>
          </div>

          {{-- THIRD ROW  --}}
          <div class="w-full flex justify-start basis-1/4 lg:gap-x-24">
            <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Waxing</div>
                    <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Brow Lamination</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Buttock</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Shoulders</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Chest</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Back and neck</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Arms</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Brazilian</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Bikini</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Full leg</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Lower Leg</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Upper Leg</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Under Arms</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Chin</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Upper Lip</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Cheeks</a></li>
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Brows and Shaping</a></li>
                    </ul>
            </div>

            <div class="menu flex flex-col gap-2 justify-start px-3">
                <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">Organic spraytan</div>
                    <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
                    <li class="text-xs hover:underline"><a href="#" class="block py-1">Organic spray tan</a></li>
                    </ul>
            </div>
        </div>
        </div>
    </div>
</nav>

<script>
</script>




