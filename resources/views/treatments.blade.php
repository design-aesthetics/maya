@extends('partials.master')
@section('title', 'Treatments')
@section('content')
    <div style="opacity: 1;" class="load-first">
        <div class="section bg-primary-3">
            <div class="main-container">
                <div class="w-layout-grid vertical-grid increased-gap">
                    {{-- HAIR REMOVAL --}}
                    <div class="pricing-services" id="hairremoval">
                        <div class="pricing-services-top">
                            <div>
                                <h4 class="medium-heading">HAIR REMOVAL</h4>
                            </div>
                        </div>
                        <div>
                            {{-- laser hair removal --}}
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">LASER HAIR REMOVAL</h6>
                                    <div>Laser Hair Removal Small Area</div>
                                </div>
                                <h6 class="pricing-service-price">From $50</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Laser Hair Removal Medium Area</div>
                                </div>
                                <h6 class="pricing-service-price">From $100</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Laser Hair Removal Large Area</div>
                                </div>
                                <h6 class="pricing-service-price">$250</h6>
                            </div>

                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">ELECTROSYS</h6>
                                    <div></div>
                                </div>
                                <h6 class="pricing-service-price">From $35</h6>
                            </div>
                            {{--
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif"></h6>
                                    <div>10 Minutes</div>
                                    <div>20 Minutes</div>
                                    <div>30 Minutes</div>
                                    <div>1 Hour</div>
                                </div>
                            </div> --}}


                            {{-- waxing --}}
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">WAXING</h6>
                                    <div>Brows & Shaping</div>
                                </div>
                                <h6 class="pricing-service-price">$20</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Brow Lamination</div>
                                </div>
                                <h6 class="pricing-service-price">$100</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Cheeks</div>
                                </div>
                                <h6 class="pricing-service-price">$10</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Lips</div>
                                </div>
                                <h6 class="pricing-service-price">$10</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Chin</div>
                                </div>
                                <h6 class="pricing-service-price">From $10</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Under Arms</div>
                                </div>
                                <h6 class="pricing-service-price">From $16</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Bikini</div>
                                </div>
                                <h6 class="pricing-service-price">From $40</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Upper Leg</div>
                                </div>
                                <h6 class="pricing-service-price">From $35</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Lower Leg</div>
                                </div>
                                <h6 class="pricing-service-price">From $35</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Full Leg</div>
                                </div>
                                <h6 class="pricing-service-price">From $48</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Brazilian</div>
                                </div>
                                <h6 class="pricing-service-price">From $55</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Arms</div>
                                </div>
                                <h6 class="pricing-service-price">From $55</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Back & Neck</div>
                                </div>
                                <h6 class="pricing-service-price">From $65</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Chest</div>
                                </div>
                                <h6 class="pricing-service-price">From $20</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Shoulders</div>
                                </div>
                                <h6 class="pricing-service-price">$65</h6>
                            </div>
                        </div>
                    </div>
                    {{-- SKIN & FACIAL TREATMENT --}}
                    <div class="pricing-services" id="skinnfacial">
                        <div class="pricing-services-top">
                            <div>
                                <h4 class="medium-heading">SKIN & FACIAL TREATMENT</h4>

                            </div>
                        </div>
                        <div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Pink Intimate Skin Bleaching</div>
                                </div>
                                <h6 class="pricing-service-price">$150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Telangiectasia & Skin Tag Removal</div>
                                </div>
                                <h6 class="pricing-service-price">From $150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Telangiectasia & Skin Tag Removal</div>
                                </div>
                                <h6 class="pricing-service-price">From $250</h6>
                            </div>

                            <div class="pricing-service-item">
                                <div>
                                    <div>PRP MICRONEEDLING</div>
                                </div>
                                <h6 class="pricing-service-price">$350</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>PRP MICRONEEDLING</div>
                                </div>
                                <h6 class="pricing-service-price">$180</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Microcurrent</div>
                                </div>
                                <h6 class="pricing-service-price">From $150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Dermaplaning</div>
                                </div>
                                <h6 class="pricing-service-price">From $150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Oxygen Treatment (O2TDERM Facial)</div>
                                </div>
                                <h6 class="pricing-service-price">From $200</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Fire & Ice Facial</div>
                                </div>
                                <h6 class="pricing-service-price">From $170</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Glycolic Peel Treatment</div>
                                </div>
                                <h6 class="pricing-service-price">From $200</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Rosaclear Facial</div>
                                </div>
                                <h6 class="pricing-service-price">From $160</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Acne Laser Treatment</div>
                                </div>
                                <h6 class="pricing-service-price">From $150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Deep Cleaning Treatment</div>
                                </div>
                                <h6 class="pricing-service-price">From $180</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">SPECIALITY SKIN TREATMENTS</h6>
                                    <div></div>
                                </div>
                                <h6 class="pricing-service-price"></h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>The Sculpt Facial</div>
                                </div>
                                <h6 class="pricing-service-price">$150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Express Glow Facial</div>
                                </div>
                                <h6 class="pricing-service-price">$80</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Mini Glow Peel by ZO Skin Health</div>
                                </div>
                                <h6 class="pricing-service-price">$150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Hydrafacial</div>
                                </div>
                                <h6 class="pricing-service-price">From $250</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Customized Facial Treatment</div>
                                </div>
                                <h6 class="pricing-service-price">From $250</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Bacne Facial</div>
                                </div>
                                <h6 class="pricing-service-price">From $150</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>IPL BBL Photorejuvenation (Photofacial) 2 treatments performed in 2 week intervals</div>
                                </div>
                                <h6 class="pricing-service-price">From $250</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Cosmelan Peeling</div>
                                </div>
                                <h6 class="pricing-service-price">From $950</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Led Therapy (added onto any service)</div>
                                </div>
                                <h6 class="pricing-service-price">From $45</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Chemical Peels</div>
                                </div>
                                <h6 class="pricing-service-price">From $180</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Silk Peel</div>
                                </div>
                                <h6 class="pricing-service-price">From $180</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>AFA Clay Peel with (Amino Acids)</div>
                                </div>
                                <h6 class="pricing-service-price">From $180</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Crystal Microdermabrasion (Dermapod)</div>
                                </div>
                                <h6 class="pricing-service-price">From $180</h6>
                            </div>


                            {{-- <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">FACIAL TREATMENTS</h6>
                                    <div>Deep Cleaning</div>
                                    <div>Deep Cleaning AK2 "Acne" Treatment</div>
                                    <div>Acne Laser Treatment</div>
                                    <div>Rosaclear Facial</div>
                                    <div>Algae Mask Treatment</div>
                                    <div>Glygolic Peel Treatment</div>
                                    <div>Maya Signature Customized Facial</div>
                                    <div>Intensive Anti-Aging Vitamin"C"</div>
                                    <div>Fire & Ice Facial</div>
                                    <div>Oxygen Treatment</div>
                                    <div>Dermaplaning</div>
                                    <div>Microcurrent</div>
                                    <div>Telangiectasia Removal</div>
                                </div>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">SPECIALTY TREATMENTS</h6>
                                    <div>Morphous 8</div>
                                    <div>Radio Frequency</div>
                                    <div>Microneedling Collagen Induction Therapy</div>
                                    <div>Crystal Microdermabrasion (Dermapod)</div>
                                    <div>Medical Microdermabrasion</div>
                                    <div>AFAS Clay Peels with Amino Acids</div>
                                    <div>Silk Peel</div>
                                    <div>Chemical Peels</div>
                                    <div>Stemcell Treatment with Led Therapy</div>
                                    <div>Led Light Therapy</div>
                                    <div>Cosmelan Peeling</div>
                                    <div>Photorejuvenation (IPL)</div>
                                    <div>Bacne Facial</div>
                                </div>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <h6 class="sans-serif">EYE TREATMENTS</h6>
                                    <div>Eyelash Tinting</div>
                                    <div>Eyebrow Tinting</div>
                                    <div>Eyelash Perming</div>
                                    <div>Lashlift</div>
                                </div>
                            </div> --}}
                            <p style="font-style: italic;">Results of treatments may vary depending on the individual's skin. To find out which treatment is best for you, call the salon to have a consultation with one of our specialist for more information.</p>
                        </div>
                    </div>
                    {{-- injectables --}}
                    <div class="pricing-services" id="injectables">
                        <div class="pricing-services-top">
                            <div>
                                <h4 class="medium-heading">INJECTABLES</h4>
                            </div>
                        </div>
                        <div>
                            {{-- <div class="pricing-service-item">
                                <div>
                                    <div>Botox / Dysport</div>
                                    <div>Dermal Fillers</div>
                                    <div>Microneedling</div>
                                    <div>PRP</div>
                                    <div>Belkyra</div>
                                    <div>IV Drips Therapy</div>
                                </div>
                            </div> --}}
                            <div class="pricing-service-item">
                                <div>
                                    <div>Non Surgical Thread Lift</div>
                                </div>
                                <h6 class="pricing-service-price">From $750</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>IV drip</div>
                                </div>
                                <h6 class="pricing-service-price">From $120</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Morpheus8 (3 Sessions)</div>
                                </div>
                                <h6 class="pricing-service-price">$2800</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Tixel Total Eye Area</div>
                                </div>
                                <h6 class="pricing-service-price">$299</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Tixel Face & Neck</div>
                                </div>
                                <h6 class="pricing-service-price">$550</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Platelet Rich plasma Scalp</div>
                                </div>
                                <h6 class="pricing-service-price">From $499</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Platelet Rich Plasma Face</div>
                                </div>
                                <h6 class="pricing-service-price">From $499</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Fat Burner (Belkyra)</div>
                                </div>
                                <h6 class="pricing-service-price">From $600</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Dermal fillers (Teosyal)</div>
                                </div>
                                <h6 class="pricing-service-price">From $500</h6>
                            </div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>Neurotoxin (Botox, Dysport)</div>
                                </div>
                                <h6 class="pricing-service-price">From $9</h6>
                            </div>

                        </div>
                    </div>
                    {{-- CRYPROBE --}}
                    <div class="pricing-services" id="cryoprobe">
                        <div class="pricing-services-top">
                            <div>
                                <h4 class="medium-heading">CRYPROBE</h4>
                            </div>
                        </div>
                        <div>
                            <div class="pricing-service-item">
                                <div>
                                    <div>The Cryoprobe is the use of the extreme cold produced by <br/>Liquid Nitrous Oxide for removal of:</div>
                                    <br /><br />
                                    <div>Warts</div>
                                    <div>Skin Tags</div>
                                    <div>Age Liver Spots</div>
                                    <div>Cherry Angioma</div>
                                    <div>Dermatofibromas</div>
                                    <div>Blood Vessel Removal</div>
                                    <div>Telangiectasia Removal</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
