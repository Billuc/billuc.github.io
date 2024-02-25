<script lang="ts">
	import { faCode, faFlask, faHome, faPhone, faTimeline } from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
</script>

<div class="group fixed top-0 right-0 md:left-0 w-fit h-full z-50">
	<div
		class="
            flex flex-col flex-wrap justify-center gap-2
			max-w-[3rem] md:group-hover:max-w-xs md:group-hover:w-screen h-full
			bg-slate-900 dark:bg-teal-600
			text-teal-50
			shadow-xl px-2 group-hover:px-4
			transition-all duration-300
        "
	>
		<NavigationLink link="/" icon={faHome}>Home</NavigationLink>
		<NavigationLink link="/resume" icon={faTimeline}>Experiences</NavigationLink>
		<NavigationLink link="/skills" icon={faCode}>Skills</NavigationLink>
		<NavigationLink link="/projects" icon={faFlask}>Projects</NavigationLink>
		<NavigationLink link="/contact" icon={faPhone}>Contact</NavigationLink>
	</div>
</div>
