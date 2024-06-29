<!DOCTYPE html>

<html data-wf-page="6018961da2172664de1beba5" data-wf-site="5fb1bda997835a6f2a83e6f2">

<head>
    <meta charset="utf-8" />
    <title>@yield('title') - Maya Advanced Skin &amp; Body Care</title>
    <meta
        content="Rejuvenate yourself at MAYA Advanced Skin and Body Care located in The heart of Maple. We offer a selection of treatments made just for you."
        name="description" />
    <meta content="Maya Advanced Skin & Body Care" property="og:title" />
    <meta
        content="Rejuvenate yourself at MAYA Advanced Skin and Body Care located in The heart of Maple. We offer a selection of treatments made just for you."
        property="og:description" />
    <meta content="Maya Advanced Skin & Body Care" property="twitter:title" />
    <meta
        content="Rejuvenate yourself at MAYA Advanced Skin and Body Care located in The heart of Maple. We offer a selection of treatments made just for you."
        property="twitter:description" />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    @if (config('app.env') === 'local')
        <link href="{{ asset(mix('css/7c3db942378cd88.css')) }}" rel="stylesheet">
    @elseif(config('app.env') === 'production')
        <link rel="stylesheet" href="{{ secure_asset(mix('css/7c3db942378cd88.css')) }}">
    @endif

    @if (config('app.env') === 'local')
        <script src="{{ asset(mix('js/c645ab8ff4f1949.js')) }}" type="text/javascript" defer></script>
    @elseif(config('app.env') === 'production')
        <script src="{{ secure_asset(mix('js/c645ab8ff4f1949.js')) }}" type="text/javascript" defer></script>
    @endif
    {!! RecaptchaV3::initJs() !!}
    <style>
        @media (min-width: 992px) {
            html.w-mod-js: not(.w-mod-ix) [data-w-id= "9ac9cba3-dc46-e08e-6181-dc0553b80828"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "9ac9cba3-dc46-e08e-6181-dc0553b80830"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "436e2db6-6182-f23b-5b08-24d20fd09816"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "436e2db6-6182-f23b-5b08-24d20fd09820"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "0f314b51-8eb5-cf8c-6236-80d7ffd09183"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "0f314b51-8eb5-cf8c-6236-80d7ffd09185"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "55bbbcf4-0232-c595-d5a9-881ab810f249"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "55bbbcf4-0232-c595-d5a9-881ab810f24b"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "2617cfcb-be7c-6491-a3da-cf93acb1fefd"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }

            html.w-mod-js: not(.w-mod-ix) [data-w-id= "2617cfcb-be7c-6491-a3da-cf93acb1ff03"] {
                -webkit-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -moz-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                -ms-transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                transform: translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                opacity: 0;
            }
        }
    </style>
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif]-->
    <script type="text/javascript">
        !(function(o, c) {
            var n = c.documentElement,
                t = " w-mod-";
            (n.className += t + "js"), ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) && (n
                .className += t + "touch");
        })(window, document);
    </script>
    <link href="" rel="shortcut icon" type="image/x-icon" />
    <link href="" rel="apple-touch-icon" />
    <style>
        body {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
        }

        select,
        input,
        textarea {
            -webkit-appearance: none;
        }
    </style>
</head>

<body>
    <div id="Top" class="back-to-top-container">
        <a href="#Top" class="back-to-top-button w-inline-block">
            <img src="/img/icons/arrow.svg" loading="lazy" alt="" />
        </a>
    </div>
    @include('partials.topbar')
    <div class="navbar-wrapper sticky-top">
        @include('partials.nav')
    </div>
    @yield('content')
    @include('partials.footer')
    @include('partials.loader')
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-210552007-6"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-210552007-6');
    </script>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fb1bda997835a6f2a83e6f2"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <!--[if lte IE 9]><script src="//cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif]-->

</body>

</html>
