@if (config('app.env') === 'local')
    @if ($type === 'css')
        <link href="{{ asset(mix($file)) }}" rel="stylesheet">
    @elseif ($type === 'js')
        <script src="{{ asset(mix($file)) }}" type="text/javascript" defer></script>
    @endif
@elseif (config('app.env') === 'production')
    @if ($type === 'css')
        <link rel="stylesheet" href="{{ secure_asset(mix($file)) }}">
    @elseif ($type === 'js')
        <script src="{{ secure_asset(mix($file)) }}" type="text/javascript" defer></script>
    @endif
@endif
