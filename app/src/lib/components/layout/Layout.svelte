<script lang="ts">
	import img from '$lib/assets/luc.webp';
	import HeaderBar from '$lib/components/layout/HeaderBar.svelte';
	import Profile from '../profile/Profile.svelte';

	let isDark: boolean = true;
</script>

<div class:dark={isDark}>
	<div
		class="
			text-zinc-900 dark:text-teal-500
			transition-all duration-500 ease-in-out relative
		"
	>
		<HeaderBar bind:isDark />

		<div
			class="
			md:fixed h-screen w-screen md:w-1/3
			px-4 drop-shadow-2xl
			border-b-4 border-r-0 md:border-b-0 md:border-r-4 border-current
			bg-teal-500 dark:bg-teal-700
		"
		>
			<Profile
				image={img}
				name="Luc Billaud"
				description="Software Engineer at Dative"
				fullHeight
			/>
		</div>

		<div
			class="w-screen min-h-screen md:w-2/3 md:ml-4 float-right
				bg-zinc-200 bg-gradient-to-b from-zinc-200 via-zinc-200 to-zinc-300
				dark:bg-zinc-800 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900
				flex flex-col justify-between
				"
		>
			<div class="w-11/12 mx-auto pt-12 pb-6">
				<slot />
			</div>

			<div class="mx-auto mb-4 text-center w-11/12 opacity-60 text-sm">
				Website developped by Luc Billaud using Svelte, Vite, Tailwind, FontAwesome, Github & Github
				Actions
			</div>
		</div>
	</div>
</div>
