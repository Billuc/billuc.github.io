<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	export let name: string;
	export let icon: IconDefinition | null = null;
</script>

<div
	class="
		px-4 py-0
		flex flex-row items-center
		gap-2
		rounded-full
		bg-red-900 text-slate-100
	"
>
	{#if icon}<Fa {icon} />{/if}
	<span class="whitespace-nowrap">{name}</span>
</div>
