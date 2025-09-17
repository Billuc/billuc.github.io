<script lang="ts">
	interface Props {
		selected: boolean | undefined;
		children?: import('svelte').Snippet;
		onclick: (event: MouseEvent) => void;
	}

	let { selected, children, onclick }: Props = $props();
</script>

<button
	{onclick}
	class="
		rounded-full overflow-hidden
		flex justify-center items-center
		shadow-xl
		bg-slate-900 text-slate-50 hover:bg-slate-800
		px-8 py-1 duration-150
	"
	class:bg-slate-600={selected}
>
	{@render children?.()}
</button>
