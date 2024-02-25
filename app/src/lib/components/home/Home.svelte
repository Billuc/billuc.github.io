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
			<LinkButton label="More about my experience" to="resume" />
			<LinkButton label="My skills" to="skills" />
			<LinkButton label="Discover some of my projects" to="projects" />
			<LinkButton label="Contact me" to="contact" />
		</div>
	</div>
</div>
