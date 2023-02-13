<script lang="ts">
	export let link: string;
</script>

<a href={link} class="w-full px-4 rounded-md hover:underline hover:bg-teal-700">
	<slot />
</a>
