<script lang="ts">
	function scrollTo(identifier: string) {
		document.getElementById(identifier)?.scrollIntoView(true);
	}
</script>

<div class="drawer-body">
	<button on:click={() => scrollTo('resume')}>
		<span class="vertical-text">Experiences</span>
	</button>
	<button on:click={() => scrollTo('projects')}>
		<span class="vertical-text">Projects</span>
	</button>
	<button on:click={() => scrollTo('contact')}>
		<span class="vertical-text">Contact</span>
	</button>
</div>

<style>
	button {
		cursor: pointer;
		background: transparent;
		border: 0;
		color: var(--second-text);
	}

	.vertical-text {
		writing-mode: vertical-lr;
	}

	.drawer-body {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}

	.drawer-body button {
		text-transform: uppercase;
		transform: rotate(-180deg);
		padding: 0.5rem;
		margin: 0.1rem 0;
		color: var(--primary);
		border-radius: 1rem;
		transition: all 0.3s ease-out;
	}

	.drawer-body button:hover {
		background-color: var(--primary);
		color: var(--background);
	}

	.drawer-body button span {
		font-size: 0.75rem;
	}
</style>
