<script lang="ts">
	import { Proficiency } from '$lib/model';
	import {
		faDocker,
		faGit,
		faHtml5,
		faJava,
		faJs,
		faPhp,
		faPython,
		faReact,
		faSymfony,
		faUnity,
		faVuejs
	} from '@fortawesome/free-brands-svg-icons';
	import SectionTitle from '../general/SectionTitle.svelte';
	import Profile from '../profile/Profile.svelte';
	import SkillCategory from './SkillCategory.svelte';
	import SkillElement from './SkillElement.svelte';

	export let fullHeight: boolean = false;
</script>

<div id="skills" class:min-h-screen={fullHeight}>
	<SectionTitle>My Skills</SectionTitle>

	<SkillCategory title="Programming Languages">
		<SkillElement
			skill="https://iconape.com/wp-content/png_logo_vector/c.png"
			name="C# / .Net"
			proficiency={Proficiency.Master}
		/>
		<SkillElement
			skill={faPython}
			name="Python / Jupyter"
			proficiency={Proficiency.Master}
			color="#417fb1"
		/>
		<SkillElement
			skill={faJs}
			name="Javascript / Typescript"
			proficiency={Proficiency.Master}
			color="orange"
		/>
		<SkillElement
			skill={faHtml5}
			name="HTML / CSS"
			proficiency={Proficiency.Master}
			color="#de5029"
		/>
		<SkillElement skill={faJava} name="Java" proficiency={Proficiency.Proficient} color="#0276b9" />
		<SkillElement skill="SQL" name="SQL" proficiency={Proficiency.Proficient} color="#0276b9" />
		<SkillElement skill={faPhp} name="PHP" proficiency={Proficiency.Intermediate} color="#0276b9" />
		<SkillElement skill="GLSL" name="GLSL" proficiency={Proficiency.Basic} />
	</SkillCategory>

	<SkillCategory title="Frameworks">
		<SkillElement
			skill={faReact}
			name="React"
			proficiency={Proficiency.Proficient}
			color="#61dafb"
		/>
		<SkillElement
			skill={faVuejs}
			name="Vue.JS"
			proficiency={Proficiency.Proficient}
			color="#42b883"
		/>
		<SkillElement skill=".NET" name=".NET" proficiency={Proficiency.Proficient} />
		<SkillElement
			skill="https://kit.svelte.dev/favicon.png"
			name="Svelte"
			proficiency={Proficiency.Proficient}
		/>
		<SkillElement
			skill="https://flask.palletsprojects.com/en/2.2.x/_static/flask-icon.png"
			name="Flask"
			proficiency={Proficiency.Intermediate}
		/>
		<SkillElement skill={faSymfony} name="Symfony" proficiency={Proficiency.Intermediate} />
		<SkillElement skill={faUnity} name="Unity" proficiency={Proficiency.Intermediate} />
		<SkillElement
			skill="JavaEE"
			name="JavaEE"
			proficiency={Proficiency.Intermediate}
			size="text-sm"
		/>
	</SkillCategory>

	<SkillCategory title="Technologies">
		<SkillElement skill="Linux" name="Linux" proficiency={Proficiency.Proficient} size="text-md" />
		<SkillElement
			skill={faDocker}
			name="Docker"
			proficiency={Proficiency.Proficient}
			color="#2597ef"
		/>
		<SkillElement skill={faGit} name="Git / Github Actions" proficiency={Proficiency.Proficient} />
		<SkillElement
			skill="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg"
			name="Kubernetes"
			proficiency={Proficiency.Intermediate}
		/>
		<SkillElement
			skill="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/azure-blue-1"
			name="Azure / Azure DevOps"
			proficiency={Proficiency.Intermediate}
		/>
	</SkillCategory>

	<SkillCategory title="Languages">
		<SkillElement
			skill="https://worldflags.net/assets/flaggor/flags/4x3/fr.svg"
			name="French"
			proficiency={Proficiency.Master}
		/>
		<SkillElement
			skill="https://worldflags.net/assets/flaggor/flags/4x3/gb.svg"
			name="English"
			proficiency={Proficiency.Master}
		/>
		<SkillElement
			skill="https://worldflags.net/assets/flaggor/flags/4x3/de.svg"
			name="German"
			proficiency={Proficiency.Proficient}
		/>
		<SkillElement
			skill="https://worldflags.net/assets/flaggor/flags/4x3/se.svg"
			name="Swedish"
			proficiency={Proficiency.Basic}
		/>
	</SkillCategory>
</div>
