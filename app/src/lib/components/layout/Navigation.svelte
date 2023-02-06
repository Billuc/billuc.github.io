<script lang="ts">
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Button from '../general/Button.svelte';
	import NavigationLink from './NavigationLink.svelte';
</script>

<div class="group fixed top-4 left-4 transition-all">
	<div class="drop-shadow-xl z-10">
		<Button icon={faBars} />
	</div>
	<div
		class="
            absolute top-8 left-0 
            flex flex-col flex-nowrap 
            h-0 group-hover:h-24 truncate 
            transition-[height] duration-500 ease-out 
            border-l-2 border-current dark:border-amber-200
            bg-amber-100 z-0 rounded-r-sm
			dark:text-slate-900
        "
	>
		<NavigationLink link="#profile">Home</NavigationLink>
		<NavigationLink link="#resume">Experiences</NavigationLink>
		<NavigationLink link="#projects">Projects</NavigationLink>
		<NavigationLink link="#contact">Contact</NavigationLink>
	</div>
</div>
