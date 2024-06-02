<div class="relative group overflow-hidden">
    <a href="{{ url('/treatment') }}" class="absolute inset-0 z-10">
        <span class="sr-only">View</span>
    </a>
    <img src="{{ $image }}" alt="{{ $name }}" width="400" height="300"
        class="object-cover w-full h-64 bg-slate-100" />
    <div class="py-2 bg-white">
        <p class="capitalize font-medium mt-2 text-h5 max-w-sm text-gray-800">{{ $name }}</p>
    </div>
</div>
