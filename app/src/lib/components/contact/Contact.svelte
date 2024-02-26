<script lang="ts">
	import ContactOption from './ContactOption.svelte';
	import Profile from '../home/Profile.svelte';
	import { ContactOptions } from '$lib/model/contact';
	import image from '$lib/assets/luc2.jpg';
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
		<span class="text-4xl font-black text-slate-900">Contact me</span>

		<div class="pt-10 flex flex-col gap-2 w-fit">
			{#each ContactOptions as c}
				<ContactOption icon={c.icon} link={c.link} title={c.name} class={c.color} />
			{/each}
		</div>
	</div>
</div>
