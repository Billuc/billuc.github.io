<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import NavigationLink from './NavigationLink.svelte';

	export let isDark: boolean;
</script>

<div class="group fixed top-4 left-1/2 -translate-x-1/2 w-5/6 z-50">
	<div
		class="
            flex flex-row flex-wrap justify-center w-fit
			bg-zinc-900 dark:bg-teal-600
			text-teal-50 rounded-full
			shadow-xl px-4 mx-auto
        "
	>
		<NavigationLink link="/">Home</NavigationLink>
		<NavigationLink link="/resume">Experiences</NavigationLink>
		<NavigationLink link="/skills">Skills</NavigationLink>
		<NavigationLink link="/projects">Projects</NavigationLink>
		<NavigationLink link="/contact">Contact</NavigationLink>
		<DarkModeToggle bind:isDark />
	</div>
</div>
