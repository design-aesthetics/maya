<!-- Modal -->
<div id="imageModal" class="fixed inset-0 z-[9999] flex hidden h-full w-full items-center justify-center bg-black bg-opacity-90" onclick="closeModal()">
	<button onclick="closeModal()" class="absolute right-4 top-4 z-[10000] text-4xl text-white">&times;</button>
	<div class="flex h-full w-full items-center justify-center">
		<img src="" alt="Modal Image" class="max-h-full max-w-full object-contain" id="modalImage" onclick="event.stopPropagation()">
	</div>
</div>
