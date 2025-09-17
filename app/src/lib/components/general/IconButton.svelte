<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	interface Props {
		class?: string;
		icon: IconDefinition;
		noBorder?: boolean;
		onclick?: (event: MouseEvent) => void;
	}

	let { class: className = '', icon, noBorder = false, onclick }: Props = $props();
</script>

<button
	{onclick}
	class={`
		${!noBorder ? 'border-2 border-current' : ''} rounded
		w-8 h-8 flex justify-center items-center 
		${className}`}
>
	<Fa {icon} />
</button>
