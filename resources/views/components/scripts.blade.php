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
