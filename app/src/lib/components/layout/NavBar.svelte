<script lang="ts">
	import {
		faCode,
		faFilePen,
		faFlask,
		faHome,
		faTimeline
	} from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
	import image from '$lib/assets/luc2.jpg';
	import Profile from './Profile.svelte';
	import { ContactOptions } from '$lib/model/contact';
	import ContactLink from './ContactLink.svelte';

	let opened: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed top-4 left-4 block md:hidden w-8 h-8 shadow-md cursor-pointer"
	on:click={() => (opened = true)}
>
	<Profile {image} />
</div>

<div
	class={`
		fixed md:relative top-0 left-0 
		bg-slate-900 text-slate-50 
		navbar z-10
		transition-transform duration-300 ${
			opened ? 'translate-x-0' : '-translate-x-full'
		} md:translate-x-0`}
>
	<div class="sticky top-0 left-0 p-8 h-screen overflow-auto">
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
			<NavigationLink link="/blog" icon={faFilePen}>Blog</NavigationLink>
		</div>

		<div class="flex justify-center my-2">
			{#each ContactOptions as c}
				<ContactLink icon={c.icon} link={c.link} />
			{/each}
		</div>
	</div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class={`fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50 cursor-pointer ${
		opened ? 'block' : 'hidden'
	}`}
	on:click={() => (opened = false)}
/>

<style>
	.navbar {
		max-width: 80%;
	}

	@media (min-width: 768px) {
		.navbar {
			max-width: min(30%, 400px);
		}
	}
</style>
