<script lang="ts">
    let className: string = "";
    export { className as class };

    export let background: string = "bg-yellow-400 dark:bg-yellow-600"
    export let color: string = "text-zinc-800 dark:text-zinc-800"
</script>

<div class={`rounded-md shadow-xl ${className} ${background} ${color}`}>
	<slot />
</div>
