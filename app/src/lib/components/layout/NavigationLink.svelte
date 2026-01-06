<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

	interface Props {
		link: string;
		icon: IconDefinition;
		children?: import('svelte').Snippet;
	}

	let { link, children }: Props = $props();
</script>

<a href={link} class={['px-2 md:px-4', 'hover:text-red-300', 'inline', 'align-middle underline']}>
	{@render children?.()}
</a>
