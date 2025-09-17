<script>
	import { page } from '$app/state';
</script>

<div class="py-16 text-center w-full">
	<div class="flex flex-col items-center">
		<span class="text-4xl font-black text-slate-900">An error occurred</span>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		<span class="font-bold text-lg">{page.status}: {page.error?.message}</span>
	</div>
</div>
