<script lang="ts">
	import ResumeElementText from './ResumeElementText.svelte';

	export let title: string;
	export let dates: string;
	export let description: string;

	export let color: string;
	export let onLeft: boolean = false;
</script>

<div class="resume-element">
	<div class="text align-right" class:empty={!onLeft}>
		{#if onLeft}
			<ResumeElementText {title} {dates} {description} {color}>
				<slot />
			</ResumeElementText>
		{/if}
	</div>
	<div class={color + ' vertical-color-line'} />
	<div class="text" class:empty={onLeft}>
		{#if !onLeft}
			<ResumeElementText {title} {dates} {description} {color}>
				<slot />
			</ResumeElementText>
		{/if}
	</div>
</div>

<style>
	.resume-element {
		display: flex;
		width: 100%;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: stretch;
		margin-bottom: 1rem;
	}

	.resume-element .text {
		flex: 1 1 50%;
	}

	.resume-element .vertical-color-line {
		width: 5px;
		margin: 0 0.5rem;
	}

	.align-right {
		text-align: end;
	}

	@media screen and (max-width: 960px) {
		.resume-element .text.empty {
			flex: 0 0 0%;
		}
	}
</style>
