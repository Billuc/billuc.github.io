<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	export let link: string;
	export let icon: IconDefinition;
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
		<slot />
	</div>
</a>
