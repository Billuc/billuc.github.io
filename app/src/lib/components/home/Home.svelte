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
		<div class="text-4xl font-extrabold">
			<span class="text-slate-900">Hi, I am </span>
			<span class="text-pink-600 font-black">Luc Billaud</span>
		</div>

		<div class="text-2xl font-semibold pt-4">
			<span class="text-slate-900"> I am a </span>
			<span class="text-pink-600 font-bold"> fullstack developer </span>
			<span class="text-slate-900"> , currently based in Lyon, France. </span>
		</div>

		<div class="pt-10 flex flex-col gap-2 w-fit">
			<LinkButton to="resume">More about my experience</LinkButton>
			<LinkButton to="skills">My skills</LinkButton>
			<LinkButton to="projects">Discover some of my projects</LinkButton>
			<LinkButton to="contact">Contact me</LinkButton>
		</div>
	</div>
</div>
