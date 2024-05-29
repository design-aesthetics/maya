<div class="form-item">
    <div class="w-form-field">
        <label for="{{ $id }}"><p class="text-primary-blue-5">{{ $label }}</p></label>
        @if ($isTextarea)
            <textarea id="{{ $id }}" type="{{ $type }}" class="page-contact-input appearance-none {{ $class }}" name="{{ $name }}" required="{{ $required }}"></textarea>
        @else
            <input id="{{ $id }}" type="{{ $type }}" class="page-contact-input appearance-none {{ $class }}" name="{{ $name }}" required="{{ $required }}">
        @endif
    </div>
</div>
