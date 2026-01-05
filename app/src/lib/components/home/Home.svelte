<script>
	import { ContactOptions } from '$lib/model/contact';
	import ContactLink from '../layout/ContactLink.svelte';
	import { asset } from '$app/paths';

	const image = asset('/luc2.jpg');
</script>

<div class="text-center w-full py-12">
	<img src={image} alt="Myself" class="w-48 h-48 rounded object-cover mb-8 mx-auto" />

	<div class="text-4xl font-extrabold">Hi, I am Luc Billaud</div>
	<div class="my-4 mx-auto border-b-2 border-red-600 border-opacity-30 w-40"></div>

	<div class="w-full mx-auto px-4 max-w-lg my-6">
		<p class="text-base md:text-lg text-justify">
			I am a developer currently based in Lyon, France. I like backend development, even though I
			experimented a lot with frontend. I have a strong interest in language design and I published
			several open-source libraries. Other centers of interest include video games, science-fiction
			and sports.
		</p>
	</div>

	<div class="w-full md:w-1/2 mx-auto rounded-sm px-4 py-1 bg-slate-300 mt-8">
		<span class="text-xl font-black">Contact me</span>

		<div class="">
			{#each ContactOptions as c}
				<ContactLink icon={c.icon} link={c.link} title={c.name} />
			{/each}
		</div>
	</div>
</div>
