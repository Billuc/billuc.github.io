<script lang="ts">
	export let link: string;
</script>

<a href={link} class="w-full px-4 rounded-r-md hover:underline">
	<slot />
</a>
