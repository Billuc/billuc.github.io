<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	export let name: string;
	export let icon: IconDefinition | null = null;
</script>

<div
	class="
		px-2 py-0
		flex flex-row items-center 
		gap-2
		rounded-full
		bg-sky-50 text-slate-900
	"
>
	{#if icon}<Fa {icon} />{/if}
	<span>{name}</span>
</div>
