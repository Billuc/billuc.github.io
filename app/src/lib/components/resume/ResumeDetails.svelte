<script lang="ts">
	export let details: string[];
</script>

<ul class="list-disc text-justify text-sm">
	{#each details as d}
		<li class="mb-1">{d}</li>
	{/each}
</ul>
