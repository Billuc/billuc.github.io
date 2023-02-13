<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
	import Card from '../general/Card.svelte';
	import IconButton from '../general/IconButton.svelte';
	import ResumeElementSkill from './ResumeElementSkill.svelte';
	import ResumeElementText from './ResumeElementText.svelte';

	function showBack() {
		card.classList.remove('-translate-y-0');
		card.classList.add('-translate-y-full');
	}

	function showFront() {
		card.classList.remove('-translate-y-full');
		card.classList.add('-translate-y-0');
	}

	let card: HTMLDivElement;

	export let title: string;
	export let image: string = '';

	export let dates: string;
	export let location: string;
	export let skills: (IconDefinition | string)[];
	export let description: string[];
</script>

<Card
	class="
		text-teal-50 bg-zinc-800 dark:bg-teal-500
		w-80 h-72 overflow-hidden
	"
>
	<div class="transition-transform duration-300 -translate-y-0 h-full" bind:this={card}>
		<div class="min-h-full">
			{#if image}
				<div
					class="
						bg-zinc-200 rounded-t-md
						shadow-[inset_0_-20px_30px_-15px_rgba(0,0,0,0.5)]
					"
				>
					<img src={image} alt="" class="w-80 h-40 object-contain px-4 py-2" />
				</div>
			{/if}

			<div
				class="
					flex flex-col flex-nowrap
					justify-center items-center 
					w-80 h-32 px-4 py-2 gap-2
				"
			>
				<div
					class="
						text-teal-50 uppercase font-semibold text-xl
						text-center max-w-full
						whitespace-nowrap overflow-hidden overflow-ellipsis
					"
				>
					{title}
				</div>
				<div class="flex flex-row flex-wrap justify-center gap-2">
					{#each skills as skill}
						<ResumeElementSkill {skill} />
					{/each}
				</div>

				<IconButton icon={faArrowDown} on:click={showBack} class="shadow-xl self-center" />
			</div>
		</div>

		<div class="min-h-full">
			<div
				class="
				w-80 h-72 px-4 py-2
				flex flex-col flex-nowrap justify-start items-center
			"
			>
				<IconButton icon={faArrowUp} on:click={showFront} class="shadow-xl self-center" />
				<div
					class="
						text-teal-50 uppercase font-semibold text-md
						text-center my-2
					"
				>
					{title}
				</div>
				<ResumeElementText {dates} {location} {description} />
			</div>
		</div>
	</div>
</Card>
