<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let className: string = '';
	export { className as class };
	export let icon: IconDefinition | string | null = null;
	export let iconColor: string | null = null;
	export let size: 'sm' | 'md' | 'lg' = 'md';

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

	$: textSizeClass = textSizeClasses[size];
	$: imgSizeClass = imgSizeClasses[size];
</script>

{#if typeof icon === 'string' && icon.startsWith('http')}
	<img src={icon} alt={icon} class={`${imgSizeClass} ${className}`} />
{:else if typeof icon === 'string'}
	<span class={`${textSizeClass} ${className}`}>{icon}</span>
{:else}
	<Fa {icon} {size} color={iconColor} class={className} />
{/if}
