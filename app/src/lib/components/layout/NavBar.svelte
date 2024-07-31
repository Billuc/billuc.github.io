<script lang="ts">
	import { faCode, faFlask, faHome, faPhone, faTimeline } from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
	import image from '$lib/assets/luc2.jpg';
	import Profile from './Profile.svelte';
</script>

<div class="relative bg-slate-900 text-slate-50" style="max-width: min(30%, 400px);">
	<div class="sticky top-0 left-0 p-8 max-h-screen overflow-auto">
		<Profile {image} />

		<div class="text-center">
			<div class="text-xl font-black my-4">Luc Billaud</div>
			<div class="text-sm my-2">
				Fullstack developer based in Lyon, backend and DevOps enjoyer, geek and nerd
			</div>
		</div>

		<div class="my-8">
			<NavigationLink link="/" icon={faHome}>Home</NavigationLink>
			<NavigationLink link="/resume" icon={faTimeline}>Experiences</NavigationLink>
			<NavigationLink link="/skills" icon={faCode}>Skills</NavigationLink>
			<NavigationLink link="/projects" icon={faFlask}>Projects</NavigationLink>
			<NavigationLink link="/contact" icon={faPhone}>Contact</NavigationLink>
		</div>
	</div>
</div>
