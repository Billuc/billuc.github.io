<script>
	import img from '$lib/assets/luc.webp';
	import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
	import Resume from '$lib/components/resume/Resume.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
</script>

<ProfileHeader
	image={img}
	name="Luc Billaud"
	description="Software Engineer at Dative"
	fullHeight
/>

<Resume fullHeight />

<Projects fullHeight />

<Contact />
