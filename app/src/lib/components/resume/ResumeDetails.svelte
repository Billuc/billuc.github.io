<script lang="ts">
	export let details: string[];
</script>

<ul class="list-disc text-justify text-sm italic">
	{#each details as d}
		<li class="mt-1 first:mt-4">{d}</li>
	{/each}
</ul>
