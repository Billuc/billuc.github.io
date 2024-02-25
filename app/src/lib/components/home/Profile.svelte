<script lang="ts">
	export let image: string;
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
