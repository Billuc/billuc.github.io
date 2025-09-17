<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	interface Props {
		class?: string;
		icon?: IconDefinition | string | null;
		iconColor?: string | null;
		size?: 'sm' | 'md' | 'lg';
	}

	let { class: className = '', icon = null, iconColor = null, size = 'md' }: Props = $props();

	const textSizeClasses = {
		sm: 'text-sm',
		md: 'text-md',
		lg: 'text-lg'
	};
	const imgSizeClasses = {
		sm: 'h-3',
		md: 'h-4',
		lg: 'h-5'
	};

	let textSizeClass = $derived(textSizeClasses[size]);
	let imgSizeClass = $derived(imgSizeClasses[size]);
</script>

{#if typeof icon === 'string' && icon.startsWith('http')}
	<img src={icon} alt={icon} class={`${imgSizeClass} ${className}`} />
{:else if typeof icon === 'string'}
	<span class={`${textSizeClass} ${className}`}>{icon}</span>
{:else}
	<Fa {icon} {size} color={iconColor} class={className} />
{/if}
