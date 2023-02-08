<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	let className: string = '';
	export { className as class };
	export let icon: IconDefinition;
</script>

<button
	on:click
	class={'border-2 border-current w-8 h-8 flex justify-center items-center rounded ' + className}
>
	<Fa {icon} />
</button>
