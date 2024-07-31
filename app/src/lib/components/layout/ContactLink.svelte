<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import IconButton from '../general/IconButton.svelte';

	export let link: string;
	export let icon: IconDefinition;
</script>

<a
	href={link}
	class="
		px-0.5 py-0.5
		hover:text-red-300
	"
>
	<IconButton noBorder {icon} />
</a>
