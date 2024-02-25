<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	export let link: string;
	export let icon: IconDefinition;
</script>

<a
	href={link}
	class="
		flex flex-row items-center rounded-full 
		hover:bg-zinc-700 dark:hover:bg-teal-700
	"
>
	<IconButton noBorder {icon} />
	<div
		class="
			max-w-0 md:group-hover:max-w-xs 
			overflow-clip
			duration-300
			ml-4
		"
	>
		<slot />
	</div>
</a>
