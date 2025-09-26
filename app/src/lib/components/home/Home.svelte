<script>
	import { faFilePen, faFlask, faTimeline } from '@fortawesome/free-solid-svg-icons';
	import LinkButton from '../general/LinkButton.svelte';
	import Fa from 'svelte-fa';
	import { ContactOptions } from '$lib/model/contact';
	import ContactLink from '../layout/ContactLink.svelte';
</script>

<div class="text-center w-full py-16">
	<div class="flex flex-col items-center">
		<div class="text-4xl font-extrabold">Hi, I am Luc Billaud</div>
		<div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div>

		<div class="self-stretch w-full mx-auto px-4 max-w-lg">
			<p class="text-base md:text-lg text-justify">
				I am a developer currently based in Lyon, France. I like backend development, even though I
				experimented a lot with frontend. I have a strong interest in language design, my currently
				favourite language is Gleam and I published several open-source libraries. Other centers of
				interest include video games, science-fiction and sports.
			</p>
		</div>

		<div class="my-16 flex flex-col gap-2">
			<!-- <LinkButton to="/resume"> -->
			<!-- 	<Fa icon={faTimeline} class="mr-2" /> -->
			<!-- 	Discover my resume -->
			<!-- </LinkButton> -->
			<!-- <LinkButton to="/skills"> -->
			<!-- 	<Fa icon={faCode} class="mr-2" /> -->
			<!-- 	More about my skills -->
			<!-- </LinkButton> -->
			<LinkButton to="/projects">
				<Fa icon={faFlask} class="mr-2" />
				Project showcase
			</LinkButton>
			<LinkButton to="/blog">
				<Fa icon={faFilePen} class="mr-2" />
				My blog
			</LinkButton>
		</div>

		<div class="self-stretch w-full md:w-1/2 mx-auto rounded-sm px-4 py-2 bg-slate-300">
			<span class="text-xl font-black">Contact me</span>

			<div class="flex justify-center my-2">
				{#each ContactOptions as c}
					<ContactLink icon={c.icon} link={c.link} />
				{/each}
			</div>
		</div>
	</div>
</div>
