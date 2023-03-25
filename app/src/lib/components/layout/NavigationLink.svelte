<script lang="ts">
	export let link: string;
</script>

<a
	href={link}
	class="
		px-4 py-2 rounded-full 
		hover:bg-zinc-700 dark:hover:bg-teal-700
	"
>
	<slot />
</a>
