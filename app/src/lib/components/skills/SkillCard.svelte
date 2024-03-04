<script lang="ts">
	import type { SkillCategory } from '$lib/model/skills';
	import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let category: SkillCategory;
	let flipped = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-full md:w-1/4 relative h-80 rounded-lg overflow-hidden"
	class:flipped
	on:click={(_) => (flipped = !flipped)}
>
	<div class="front flex flex-col justify-between items-center px-2 py-8">
		<img
			src={category.imgLink}
			alt={`Image ${category.title}`}
			class="shadow-md rounded-sm h-36 w-auto"
		/>

		<div class="flex flex-col items-center gap-4">
			<div class="text-xl font-black text-sky-50">{category.title}</div>
			<div
				class="w-6 h-6 rounded-full animate-bounce border-2 border-sky-200 flex flex-row justify-center items-center"
			>
				<Fa icon={faArrowRight} class="text-sky-300" />
			</div>
		</div>
	</div>

	<div class="back" />
</div>

<style>
	.front,
	.back {
		width: 100%;
		height: 100%;
		transition: all 500ms ease-out;
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: center center 2px;
		background-color: #12229d;
		border-radius: 0.5rem;
	}

	.front {
		opacity: 1;
		transform: rotateY(0deg);
	}

	.flipped .front {
		transform: rotateY(180deg);
		opacity: 0;
	}

	.back {
		transform: rotateY(-180deg);
		opacity: 0;
	}

	.flipped .back {
		transform: rotateY(0deg);
		opacity: 1;
	}
</style>
