<script lang="ts">
	export let image: string;
	export let name: string;
	export let description: string;
	export let fullHeight: boolean = false;
</script>

<div id="profile-header" class:full-height={fullHeight}>
	<img alt="" src={image} />
	<div class="name">{name}</div>
	<div class="description">{description}</div>
</div>

<style>
	#profile-header {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;

		margin: 0 auto 1rem;

		text-align: center;
	}

	img {
		width: min(75vw, 300px);
		height: auto;
		border-radius: 50%;
		margin-bottom: 3rem;
	}

	.name {
		font-size: 3rem;
		margin: 1rem 0;
	}

	.description {
		font-size: 2rem;
		margin: 0.5rem 0;
	}
</style>
