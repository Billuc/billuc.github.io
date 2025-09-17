<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Icon from './Icon.svelte';

	interface Props {
		class?: string;
		icon?: IconDefinition | string | null;
		iconColor?: string | null;
		children?: import('svelte').Snippet;
	}

	let { class: className = '', icon = null, iconColor = null, children }: Props = $props();
</script>

<div
	class={'rounded-full inline-flex flex-wrap md:flex-nowrap justify-evenly items-center px-2 text-sm w-fit ' +
		className}
>
	{#if icon}
		<Icon {icon} {iconColor} size="md" />
	{/if}
	{@render children?.()}
</div>
