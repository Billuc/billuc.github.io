<script lang="ts">
	import ResumeElement from '$lib/components/resume/ResumeElement.svelte';
	import resume from '$lib/assets/CV_Luc_Billaud.pdf';
	import SectionTitle from '../general/SectionTitle.svelte';
	import Button from '../general/Button.svelte';
	import {
		faDocker,
		faPython,
		faSquareJs,
		faUnity,
		faVuejs
	} from '@fortawesome/free-brands-svg-icons';
	import ExpandingResumeElement from './ExpandingResumeElement.svelte';

	export let fullHeight: boolean = false;
</script>

<div id="resume" class:min-h-screen={fullHeight}>
	<SectionTitle>My experiences</SectionTitle>

	<div class="flex flex-col flex-nowrap justify-center items-center relative">
		<div
			class="
			absolute h-full w-2 top-0 left-1/2 -translate-x-1/2
			bg-gradient-to-b from-teal-50 via-teal-50 
		"
		/>

		<ExpandingResumeElement
			title="Software Engineer (Fullstack Developper)"
			dates="2021-2023"
			location="Dative (Lyon)"
			image="https://www.gerard-perrier.com/wp-content/uploads/dativelogo2-400x400.png"
			description={[
				'Developped features for a data acquisition application',
				'Created extensions for a cloud data vizualisation platform',
				'Increased test coverage by more than 20 percent',
				"Created tools to increase the team's efficiency"
			]}
			skills={[faVuejs, 'C#', faDocker, faPython]}
		/>

		<ExpandingResumeElement
			title="End of studies internship (VR research project)"
			dates="2021-2021"
			location="LIRIS (IT laboratory in Lyon)"
			image="https://liris.cnrs.fr/sites/default/files/logo_liris_160_0.png"
			description={[
				'Created a protocol to dynamically stream compressed 3D meshes',
				'Implemented different strategies and metrics',
				'Performed a statistical analysis to determine the best combination'
			]}
			skills={[faUnity, faSquareJs, faPython, 'GLSL']}
		/>

		<ExpandingResumeElement
			title="Master of Science in Computer Science and Engineering"
			dates="2016-2021"
			location="INSA Lyon"
			image="https://www.insa-lyon.fr/sites/www.insa-lyon.fr/files/logo-coul.png"
			description={[]}
			skills={[]}
		/>
	</div>

	<div class="flex flex-col flex-nowrap items-center">
		<Button>
			<a href={resume} download class="px-2 uppercase font-bold text-xl text-teal-50">And more...</a>
		</Button>
	</div>
</div>
