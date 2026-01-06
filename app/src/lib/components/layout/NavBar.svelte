<script lang="ts">
	import { faFilePen, faFlask, faHome } from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
</script>

<div
	class={[
		'sticky top-0 left-0',
		'bg-slate-900 text-slate-50',
		'z-10',
		'w-full h-11 md:h-12',
		'px-4 py-2',
		'rounded-b-md',
		'flex flex-row justify-between',
		'text-sm md:text-base'
	]}
>
	<div class="">
		<a href="/" class="text-lg md:text-xl font-black text-nowrap">Luc Billaud</a>
	</div>

	<div class="ml-4">
		<NavigationLink link="/" icon={faHome}>About</NavigationLink>
		<NavigationLink link="/projects" icon={faFlask}>Projects</NavigationLink>
		<NavigationLink link="/blog" icon={faFilePen}>Blog</NavigationLink>
	</div>
</div>
