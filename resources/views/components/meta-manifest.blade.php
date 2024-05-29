<!-- Basic HTML Setup -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>@yield('title') - {{ env('APP_NAME') }}</title>
<link href="/img/meta-manifest/favicon.png" rel="shortcut icon" type="image/x-icon">
<link href="/img/meta-manifest/manifest.json" rel="manifest">

<!-- Viewport and Device Compatibility -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta http-equiv="Content-Security-Policy" content="default-src 'self';">

<!-- SEO and Descriptions -->
<meta name="description" content="@yield('descriptions')">
<meta name="keywords" content="@yield('keywords')">
<link rel="canonical" href="@yield('url')">
<meta name="author" content="Design Aesthetics Studio">
<meta name="robots" content="index, follow">

<!-- Social Media Integration -->
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="@yield('url')">
<meta property="og:title" content="@yield('title') - {{ env('APP_NAME') }}">
<meta property="og:description" content="@yield('descriptions')">
<meta property="og:image" content="/img/meta-manifest/webclip.png">

<!-- Twitter -->
{{-- 1200x675 for summary_large_image --}}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="@yield('url')">
<meta name="twitter:title" content="@yield('title') - {{ env('APP_NAME') }}">
<meta name="twitter:description" content="@yield('descriptions')">
<meta name="twitter:image" content="/img/meta-manifest/summary_large_image.png">
<meta name="twitter:site" content="@username">
<meta name="twitter:creator" content="@username">

<!-- Icons and Apple-Specific Links -->
<link href="/img/meta-manifest/webclip.png" rel="apple-touch-icon">
<link href="/img/meta-manifest/touch-icon-iphone.png" rel="apple-touch-icon">
<link href="/img/meta-manifest/touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76">
<link href="/img/meta-manifest/touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120">
<link href="/img/meta-manifest/touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152">

<!-- Android & Windows Specific Tags -->
<meta name="msapplication-TileColor" content="white">
<meta name="msapplication-TileImage" content="/img/meta-manifest/ms-icon-144x144.png">
<meta name="msapplication-config" content="/img/meta-manifest/browserconfig.xml">
<link href="/img/meta-manifest/icon-192x192.png" rel="icon" sizes="192x192">
<link href="/img/meta-manifest/icon-128x128.png" rel="icon" sizes="128x128">

<!-- Additional Settings -->
<meta name="full-screen" content="yes">
<meta name="browsermode" content="website">
<meta name="nightmode" content="disable">
<meta name="layoutmode" content="responsive">
<meta name="imagemode" content="lazy">
<meta name="screen-orientation" content="auto">

<!-- Pinned Sites & Tap Highlighting -->
<meta name="application-name" content="@yield('title') - {{ env('APP_NAME') }}">
<meta name="msapplication-tooltip" content="@yield('descriptions')">
<meta name="msapplication-starturl" content="/">
<meta name="msapplication-tap-highlight" content="no">

<!-- Geo-Tag -->
<meta name="geo.region" content="CA-ON" />
<meta name="geo.placename" content="Maple" />
<meta name="geo.position" content="43.8566841;-79.5123978" />
<meta name="ICBM" content="43.8566841, -79.5123978" />
<meta name="DC.title" content="@yield('title') - {{ env('APP_NAME') }}">
