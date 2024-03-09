<script lang="ts">
	export let selected: boolean | undefined;
</script>

<button
	on:click
	class="
		rounded-full overflow-hidden
		flex justify-center items-center
		shadow-xl
		bg-slate-900 text-slate-50 hover:bg-slate-800
		px-8 py-1 duration-150
	"
	class:bg-slate-600={selected}
>
	<slot />
</button>
