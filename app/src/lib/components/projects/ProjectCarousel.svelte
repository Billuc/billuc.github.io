<script lang="ts">
	import { faArrowLeft, faArrowRight, faExternalLink } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import IconButton from '../general/IconButton.svelte';
	import type { Project } from '../../model/projects';

	$: displayedElement = elements[projectIndex];

	function select(index: number) {
		projectIndex = index;
	}

	function selectPrevious() {
		projectIndex = (projectIndex - 1 + elements.length) % elements.length;
	}

	function selectNext() {
		projectIndex = (projectIndex + 1 + elements.length) % elements.length;
	}

	let projectIndex: number = 0;

	export let elements: Project[];
</script>

<div>
	<div
		class="
		flex flex-wrap w-fit md:flex-nowrap max-w-full mx-auto mb-2 rounded-md
		bg-yellow-500 dark:bg-yellow-500
	"
	>
		{#each elements as el, index}
			<button
				class={`
					text-zinc-800 font-semibold
					py-1 rounded-md
					whitespace-nowrap transition-all
					${
						index == projectIndex
							? 'ring-2 dark:ring-teal-50 ring-zinc-800 px-4 z-10'
							: 'overflow-hidden overflow-ellipsis px-2'
					}
				`}
				on:click={() => select(index)}
			>
				{el.label}
			</button>
		{/each}
	</div>

	<div class="relative rounded-md overflow-hidden">
		<div
			class="
                    flex flex-col shrink-0
                    w-full h-full shadow-lg
                    bg-zinc-300 dark:bg-zinc-200
                "
		>
			<div
				class="
                        h-64 w-full rounded-t-md
						flex justify-center items-center
                        shadow-[inset_0_-20px_20px_-20px_rgba(0,0,0,0.5)]
                    "
			>
				<img
					src={displayedElement.imgSrc}
					alt={displayedElement.label}
					class="
                        max-h-full max-w-full md:max-w-2/3
                    "
				/>
			</div>
			<div class="text-center p-2 bg-zinc-800 dark:bg-teal-500 text-teal-50 dark:text-zinc-800">
				<div class="font-bold text-2xl mb-2">
					<span>{displayedElement.label}</span>
					<a
						href={displayedElement.projectLink}
						class="inline-block"
						target="_blank"
						rel="noreferrer"
					>
						<Fa icon={faExternalLink} size="xs" />
					</a>
				</div>

				<div class="">{displayedElement.description}</div>
			</div>
		</div>

		<IconButton
			icon={faArrowLeft}
			class="absolute top-48 left-2 text-zinc-800 bg-teal-50"
			on:click={selectPrevious}
		/>
		<IconButton
			icon={faArrowRight}
			class="absolute top-48 right-2 text-zinc-800 bg-teal-50"
			on:click={selectNext}
		/>
	</div>
</div>
