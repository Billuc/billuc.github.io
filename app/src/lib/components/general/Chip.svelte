<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Icon from './Icon.svelte';

	let className: string = '';
	export { className as class };
	export let icon: IconDefinition | string | null = null;
	export let iconColor: string | null = null;
</script>

<div
	class={'rounded-full inline-flex flex-wrap md:flex-nowrap justify-evenly items-center px-2 text-sm w-fit ' +
		className}
>
	{#if icon}
		<Icon {icon} {iconColor} size="md" />
	{/if}
	<slot />
</div>
