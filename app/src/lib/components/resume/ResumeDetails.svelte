<script lang="ts">
	interface Props {
		details: string[];
	}

	let { details }: Props = $props();
</script>

<ul class="list-disc text-justify text-xs md:text-sm">
	{#each details as d}
		<li class="mb-1">{d}</li>
	{/each}
</ul>
