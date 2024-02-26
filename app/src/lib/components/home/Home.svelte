<script>
	import Profile from './Profile.svelte';
	import image from '$lib/assets/luc.webp';
	import LinkButton from '../general/LinkButton.svelte';
</script>

<div
	class="
		flex flex-col md:flex-row gap-16
		justify-evenly items-center
		w-full
	"
>
	<Profile {image} />

	<div class="flex flex-col">
		<span class="text-4xl font-black text-slate-900">Hi, I am Luc Billaud</span>
		<span class="text-2xl font-semibold text-slate-900 pt-4">
			I am a fullstack developer, currently based in Lyon, France.
		</span>

		<div class="pt-10 flex flex-col gap-2 w-fit">
			<LinkButton to="resume">More about my experience</LinkButton>
			<LinkButton to="skills">My skills</LinkButton>
			<LinkButton to="projects">Discover some of my projects</LinkButton>
			<LinkButton to="contact">Contact me</LinkButton>
		</div>
	</div>
</div>
