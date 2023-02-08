<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let className: string = "";
	export { className as class };
	export let icon: IconDefinition | null = null;
</script>

<div class={'rounded-full inline-flex items-baseline px-2 text-sm w-fit ' + className}>
	{#if icon}
		<Fa {icon} size="sm" class="mr-1" />
	{/if}
	<slot />
</div>
