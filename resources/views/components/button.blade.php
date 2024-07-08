@props([
    "type" => "button",
    "variant" => "primary",
    "size" => "md",
    "href" => null,
    "gradient" => false,
])

@php
	$baseClasses = "cursor-pointer pointer font-inter font-regular text-p inline-flex items-center justify-center gap-3 rounded-sm transition-all duration-200";

	$variantClasses = [
	    "primary" => "bg-primary-blue-5 text-white hover:opacity-90",
	    "outline" => "bg-white text-primary-blue-5 border border-primary-blue-5 hover:bg-primary-blue-6",
	    "gradient" => "text-white backdrop-blur-[5px] hover:opacity-90",
	];

	$sizeClasses = [
	    "sm" => "py-2.5 px-5 text-sm",
	    "md" => "py-4 px-7 text-sm",
	    "lg" => "py-5 px-10 text-base",
	];

	$classes = $baseClasses . " " . ($gradient ? $variantClasses["gradient"] : $variantClasses[$variant]) . " " . $sizeClasses[$size];

	$gradientStyle = $gradient ? "background-image: linear-gradient(66deg, #356a72, #cfe6ea, #c8d8db, #cfe6ea, #b0c7cd);" : "";
@endphp

@if ($href)
	<a href="{{ $href }}" {{ $attributes->merge(["class" => $classes]) }} style="{{ $gradientStyle }}">
		{{ $slot }}
	</a>
@else
	<button type="{{ $type }}" {{ $attributes->merge(["class" => $classes]) }} style="{{ $gradientStyle }}">
		{{ $slot }}
	</button>
@endif
