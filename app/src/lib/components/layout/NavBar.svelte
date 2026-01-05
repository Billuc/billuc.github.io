<script lang="ts">
	import { faFilePen, faFlask, faHome } from '@fortawesome/free-solid-svg-icons';
	import NavigationLink from './NavigationLink.svelte';
</script>

<div
	class={[
		'sticky top-0 left-0',
		'bg-slate-900 text-slate-50',
		'z-10',
		'w-full h-12',
		'px-4 py-2',
		'rounded-b-md',
		'flex flex-row justify-between'
	]}
>
	<div class="">
		<a href="/" class="text-xl font-black">Luc Billaud</a>
	</div>

	<div>
		<NavigationLink link="/" icon={faHome}>About</NavigationLink>
		<NavigationLink link="/projects" icon={faFlask}>Projects</NavigationLink>
		<NavigationLink link="/blog" icon={faFilePen}>Blog</NavigationLink>
	</div>
</div>
