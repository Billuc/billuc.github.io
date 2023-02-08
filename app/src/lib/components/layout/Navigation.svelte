<script lang="ts">
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import IconButton from '../general/IconButton.svelte';
	import NavigationLink from './NavigationLink.svelte';
</script>

<div class="group fixed top-4 left-4 z-10">
	<IconButton icon={faBars} class="drop-shadow-xl bg-teal-500 dark:bg-zinc-800" />
	<div
		class="
            absolute top-8 left-0 
            flex flex-col flex-nowrap 
            h-0 group-hover:h-24 truncate
            transition-[height] duration-500 ease-out 
            border-l-2 border-zinc-900 dark:border-teal-50
            bg-teal-700 text-teal-50 rounded-r-sm
        "
	>
		<NavigationLink link="#profile">Home</NavigationLink>
		<NavigationLink link="#resume">Experiences</NavigationLink>
		<NavigationLink link="#projects">Projects</NavigationLink>
		<NavigationLink link="#contact">Contact</NavigationLink>
	</div>
</div>
