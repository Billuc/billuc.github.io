<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	interface Props {
		link: string;
		icon: IconDefinition;
		title: string;
	}

	let { link, icon, title }: Props = $props();
</script>

<a
	href={link}
	class={['px-2 mt-2', 'hover:text-red-300', 'transition-colors duration-200', 'inline-block']}
>
	<Fa {icon} {title} class="w-4 h-4" />
</a>
