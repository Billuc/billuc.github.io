<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';
	import LinkButton from '../general/LinkButton.svelte';

	let className: string = '';
	export { className as class };

	export let icon: IconDefinition;
	export let title: string;
	export let link: string;
</script>

<LinkButton to={link}>
	<div class={`mr-2 ${className}`}><Fa {icon} /></div>
	{title}
</LinkButton>
