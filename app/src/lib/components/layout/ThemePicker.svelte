<script lang="ts">
	let themes = [
		{ id: 'black-and-colors', text: 'Black and Colors' },
		{ id: 'black-and-red', text: 'Black and Red' },
		{ id: 'black-and-blue', text: 'Black and Blue' }
	];

	export let value: string;
</script>

<div class="theme-picker">
	<select bind:value>
		{#each themes as theme}
			<option value={theme.id}>{theme.text}</option>
		{/each}
	</select>
</div>

<style>
	.theme-picker select {
		margin: 0 0.5rem;
		padding: 0.2rem;
		border-radius: 0.15rem;

		font-family: inherit;
		font-size: 0.75rem;

		background: var(--background);
		color: var(--text);
	}
</style>
