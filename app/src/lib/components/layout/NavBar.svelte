<script lang="ts">
	import { faFilePen, faFlask, faHome, faTimeline } from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
	import image from '$lib/assets/luc2.jpg';
	import Profile from './Profile.svelte';
	import { ContactOptions } from '$lib/model/contact';
	import ContactLink from './ContactLink.svelte';

	let opened = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="fixed top-4 left-4 block md:hidden w-8 h-8 shadow-md cursor-pointer"
	onclick={() => (opened = true)}
	role="button"
	tabindex={0}
>
	<Profile {image} />
</div>

<div
	class={[
		'fixed md:relative top-0 left-0',
		'bg-slate-900 text-slate-50',
		'z-10',
		'max-w-[80%] md:min-w-xs md:max-w-xs',
		'transition-transform duration-300',
		opened ? 'translate-x-0' : '-translate-x-full',
		'md:translate-x-0'
	]}
>
	<div class="sticky top-0 left-0 p-8 h-screen overflow-auto">
		<Profile {image} />

		<div class="text-center">
			<div class="text-xl font-black my-4">Luc Billaud</div>
			<div class="text-sm my-2">
				Curious developer, Gleam enthusiast, backend enjoyer and open-source lover.
			</div>
		</div>

		<div class="my-8">
			<NavigationLink link="/" icon={faHome}>Home</NavigationLink>
			<!-- <NavigationLink link="/resume" icon={faTimeline}>Resume</NavigationLink> -->
			<!-- <NavigationLink link="/skills" icon={faCode}>Skills</NavigationLink> -->
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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class={`fixed top-0 left-0 w-screen h-screen bg-slate-900 opacity-50 cursor-pointer ${
		opened ? 'block' : 'hidden'
	}`}
	onclick={() => (opened = false)}
></div>
