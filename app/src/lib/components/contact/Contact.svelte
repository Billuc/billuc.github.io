<script lang="ts">
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import Card from '../general/Card.svelte';
	import SectionTitle from '../general/SectionTitle.svelte';
	import ContactOption from './ContactOption.svelte';

	export let fullHeight: boolean = false;
</script>

<div id="contact" class:min-h-screen={fullHeight} class="mb-12">
	<SectionTitle>Contact</SectionTitle>

	<Card class="
		w-5/6 sm:w-2/3 lg:w-1/2 
		px-4 py-2 mx-auto
	">
		<ContactOption
			icon={faGithub}
			link="https://github.com/Billuc"
			title="Github"
			class="text-teal-50"
		/>
		<ContactOption
			icon={faLinkedin}
			link="https://www.linkedin.com/in/luc-billaud/"
			title="LinkedIn"
			class="text-sky-600"
		/>
		<ContactOption
			icon={faEnvelope}
			link="mailto:luc.billaud.pro@gmail.com"
			title="luc.billaud.pro@gmail.com"
			class="text-orange-700"
		/>
	</Card>
</div>
