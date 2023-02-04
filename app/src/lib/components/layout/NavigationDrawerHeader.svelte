<script lang="ts">
	import img from '$lib/assets/luc.webp';

	function scrollTo(identifier: string) {
		document.getElementById(identifier)?.scrollIntoView(true);
	}
</script>

<div class="drawer-header">
	<button on:click={() => scrollTo('profile-header')}>
		<img src={img} alt="" class="logo" />
	</button>
</div>

<style>
	button {
		cursor: pointer;
		background: transparent;
		border: 0;
		color: var(--second-text);
	}

	.drawer-header {
		text-align: center;
	}

	.logo {
		width: 66%;
		height: auto;
		border-radius: 50%;
	}

	.logo:hover {
		box-shadow: 0px 0px 10px 5px var(--primary);
	}
</style>
