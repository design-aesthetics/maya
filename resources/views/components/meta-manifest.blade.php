<!-- Basic HTML Setup -->
<meta charset="utf-8">
<title>@yield("title") - {{ config("app.name", "Maya Advanced Skin & Body Care") }}</title>
<meta name="csrf-token" content="{{ csrf_token() }}">

<!-- Viewport and Device Compatibility -->
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">

<!-- SEO and Descriptions -->
<meta name="description" content="@yield("descriptions")">
<link rel="canonical" href="@yield("url")">
<meta name="author" content="{{ config("app.name", "Maya Advanced Skin & Body Care") }}">
<meta name="robots" content="@yield("robots")">

<!-- Favicon -->
<link rel="icon" href="/img/favicon.ico" sizes="any" type="image/x-icon">
<link rel="icon" href="/img/favicon-16x16.svg" sizes="16x16" type="image/svg">
<link rel="icon" href="/img/favicon-32x32.svg" sizes="32x32" type="image/svg">
<link rel="icon" href="/img/favicon-48x48.svg" sizes="48x48" type="image/svg">
<link rel="icon" href="/img/favicon-64x64.svg" sizes="64x64" type="image/svg">


<!-- Social Media Integration -->
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="@yield("url")">
<meta property="og:title" content="@yield("title") - {{ config("app.name", "Maya Advanced Skin & Body Care") }}">
<meta property="og:description" content="@yield("descriptions")">
<meta property="og:image" content="/img/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="@yield("url")">
<meta name="twitter:title" content="@yield("title") - {{ config("app.name", "Maya Advanced Skin & Body Care") }}">
<meta name="twitter:description" content="@yield("descriptions")">
<meta name="twitter:image" content="/img/og-image.png">
<meta name="twitter:site" content="@username">
<meta name="twitter:creator" content="@username">

<!-- Icons and Apple-Specific Links -->
<link href="/img/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
<link href="/img/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
<link href="/img/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
<link href="/img/apple-touch-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">


<!-- Additional Settings -->
<meta name="full-screen" content="yes">
<meta name="browsermode" content="website">
<meta name="nightmode" content="disable">
<meta name="layoutmode" content="responsive">
<meta name="imagemode" content="lazy">
<meta name="screen-orientation" content="auto">

<!-- Pinned Sites & Tap Highlighting -->
<meta name="application-name" content="@yield("title") - {{ config("app.name", "Maya Advanced Skin & Body Care") }}">
<meta name="msapplication-tooltip" content="@yield("descriptions")">
<meta name="msapplication-starturl" content="/">
<meta name="msapplication-tap-highlight" content="no">

<!-- Geo-Tag -->
<meta name="geo.region" content="CA-ON" />
<meta name="geo.placename" content="Maple" />
<meta name="geo.position" content="43.8566841;-79.5123978" />
<meta name="ICBM" content="43.8566841, -79.5123978" />
<meta name="DC.title" content="@yield("title") - {{ config("app.name", "Maya Advanced Skin & Body Care") }}">
