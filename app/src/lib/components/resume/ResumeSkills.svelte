<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import ResumeSkill from './ResumeSkill.svelte';

	interface Props {
		skills: { name: string; icon: IconDefinition | null }[];
	}

	let { skills }: Props = $props();
</script>

<div class="flex flex-col justify-center gap-2">
	{#each skills as s}
		<ResumeSkill name={s.name} icon={s.icon} />
	{/each}
</div>
