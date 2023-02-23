<script lang="ts">
    let className: string = "";
    export { className as class };
</script>

<div class={`rounded-md shadow-xl bg-zinc-800 text-teal-50 dark:bg-teal-600 ${className}`}>
	<slot />
</div>
