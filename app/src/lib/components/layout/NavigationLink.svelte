<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	interface Props {
		link: string;
		icon: IconDefinition;
		children?: import('svelte').Snippet;
	}

	let { link, icon, children }: Props = $props();
</script>

<a
	href={link}
	class="
		flex flex-row items-center
		px-8 py-0.5
		border-sky-200 border-t last:border-b border-opacity-30
		hover:text-red-300
	"
>
	<IconButton noBorder {icon} />
	<div class="overflow-clip ml-2">
		{@render children?.()}
	</div>
</a>
