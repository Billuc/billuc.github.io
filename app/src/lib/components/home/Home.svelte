<script>
	import Card from '$lib/components/general/Card.svelte';
	import SectionTitle from '../general/SectionTitle.svelte';
	import HomeText from './HomeText.svelte';
</script>

<SectionTitle>Introduction</SectionTitle>

<Card
	class="
	px-8 py-4
	w-fit mx-auto
"
>
	<HomeText>
		I am currently working for <a
			href="https://www.gerard-perrier.com/dative/"
			class="underline underline-offset-4 decoration-dotted"
		>
			Dative
		</a>
		as a Fullstack Developer in Lyon, France.
	</HomeText>
	<HomeText>I am interested in backend development, software architecture and DevOps.</HomeText>
	<HomeText>In my free time, I like bouldering, reading and playing video games.</HomeText>
</Card>
