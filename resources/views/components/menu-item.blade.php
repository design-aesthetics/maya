<div class="flex flex-col gap-2 justify-start px-3">
    <div class="uppercase text-primary-blue-5 font-semplicita text-h5 pt-2">{{ $title }}</div>
    <ul class="text-slate-900 capitalize space-y-[1.5px] pl-0">
        @foreach ($items as $item)
            <li class="font-inter text-sm font-regular leading-tight hover:underline">
                <a href="{{ $item['url'] }}" class="block py-1">{{ $item['label'] }}</a>
            </li>
        @endforeach
    </ul>
</div>
