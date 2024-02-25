<script lang="ts">
	export let details: string[];
</script>

<ul class="mt-4 list-disc text-left">
	{#each details as d}
		<li>{d}</li>
	{/each}
</ul>
