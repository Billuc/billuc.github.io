<script lang="ts">
    let className: string;
    export { className as class };
</script>

<div class={`rounded-md drop-shadow-xl ${className}`}>
	<slot />
</div>
