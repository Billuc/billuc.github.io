<script lang="ts">
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import Button from '../general/Button.svelte';

	$: icon = isDark ? faSun : faMoon;

	export let isDark: boolean;
</script>

<div class="fixed top-4 right-4">
	<Button on:click={() => (isDark = !isDark)} {icon} />
</div>
