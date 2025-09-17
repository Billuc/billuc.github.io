<script lang="ts">
	interface Props {
		image: string;
	}

	let { image }: Props = $props();
</script>

<div
	id="profile"
	class="
		flex flex-col flex-nowrap justify-center items-center
	"
>
	<img alt="" src={image} class="shadow-xl rounded-xl" />
</div>

<style>
	img {
		width: min(75vw, 300px);
		height: auto;
	}
</style>
