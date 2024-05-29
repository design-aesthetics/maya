<div class="w-[300px] flex flex-col gap-4 overflow-hidden">
    <div class="w-[300px] h-[300px] bg-slate-100 flex justify-center items-center">
      <img src="{{ $image }}" alt="Product Image" class="w-full h-full">
    </div>
    <div class="flex flex-col gap-1 ">
      <h5 class="font-medium text-md font-semplicita uppercase">{{ $name}}</h5>
      <p class="text-slate-500 text-sm font-semplicita">${{ $price }}</p>
    </div>
  </div>

