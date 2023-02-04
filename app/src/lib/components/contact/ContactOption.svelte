<script lang="ts">
	import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: IconDefinition;
	export let title: string;
	export let link: string;
	export let iconColor: string;
</script>

<div class="contact-option">
	<a href={link}>
		<div class="icon" style:color={iconColor}><Fa {icon} /></div>
		<div class="title">
			<div class="title-underline" style:background-color={iconColor} />
			{title}
		</div>
	</a>
</div>

<style>
	.contact-option {
		margin: 0.1rem 0 0.1rem 0.1rem;
	}

	.contact-option > a {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;

		color: black;
		text-decoration: none;
	}

	.icon {
		font-size: 32px;
		transition: all 0.2s ease-out;
	}

	.contact-option:hover .icon {
		transform: translateY(-0.15rem);
	}

	.title {
		position: relative;
		margin-left: 1rem;
	}

	.title-underline {
		position: absolute;
		left: 0px;
		bottom: 0;
		width: 0%;
		height: 1px;
		transition: all 0.2s ease-out;
	}

	.contact-option:hover .title-underline {
		width: 101%;
	}
</style>
