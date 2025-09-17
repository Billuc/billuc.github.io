<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	interface Props {
		name: string;
		icon?: IconDefinition | null;
	}

	let { name, icon = null }: Props = $props();
</script>

<div
	class="
		px-2 py-0
		flex flex-row items-center justify-center gap-2
		rounded-full
		bg-red-900 text-slate-100
	h-6
	"
>
	{#if icon}<Fa {icon} />{/if}
	<span class={`truncate ${icon ? 'hidden' : ''} md:inline`}>{name}</span>
</div>
