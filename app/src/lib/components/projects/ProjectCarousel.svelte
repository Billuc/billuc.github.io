<script lang="ts">
	import type { Project } from './projects';

	export let elements: Project[];
</script>

<div class="rounded-md">
	<div class="flex w-full overflow-hidden h-96">
		{#each elements as el}
			<div class="flex flex-col md:flex-row w-full h-full shrink-0 bg-teal-50 dark:bg-teal-500 shadow-lg">
				<img src={el.imgSrc} alt={el.label} class="h-full w-full md:w-2/3 rounded-md" />
                <div class="text-center p-2">
                    <div class="font-bold text-2xl mb-2">{el.label}</div>
                    <div class="">{el.description}</div>
                </div>
			</div>
		{/each}
	</div>
    <div class="flex w-full h-8">
        {#each elements as el}
            <img src={el.imgSrc} alt={el.label} class="h-full" />
        {/each}
    </div>
</div>
