import {
	faDocker,
	faGit,
	faHtml5,
	faJava,
	faJs,
	faPhp,
	faPython,
	faReact,
	faVuejs
} from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import { Proficiency } from './proficiency';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface SkillCategory {
	title: string;
	imgLink: string;
	skills: Skill[];
}

export interface Skill {
	name: string;
	icon: IconDefinition | string;
	proficiency: Proficiency;
	color?: string;
}

export const Skills: SkillCategory[] = [
	{
		title: 'Frontend',
		imgLink:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		skills: [
			{ name: 'Vue.JS', icon: faVuejs, proficiency: Proficiency.Master, color: '#42b883' },
			{
				name: 'Javascript / Typescript',
				icon: faJs,
				proficiency: Proficiency.Master,
				color: 'orange'
			},
			{ name: 'HTML / CSS', icon: faHtml5, proficiency: Proficiency.Master, color: '#de5029' },
			{ name: 'React', icon: faReact, proficiency: Proficiency.Proficient, color: '#61dafb' },
			{
				name: 'Svelte',
				icon: 'https://kit.svelte.dev/favicon.png',
				proficiency: Proficiency.Intermediate
			}
		]
	},
	{
		title: 'Backend',
		imgLink:
			'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		skills: [
			{
				name: 'C# / .Net',
				icon: 'https://iconape.com/wp-content/png_logo_vector/c.png',
				proficiency: Proficiency.Master
			},
			{
				name: 'Python / Jupyter',
				icon: faPython,
				proficiency: Proficiency.Master,
				color: '#417fb1'
			},
			{ name: 'Java', icon: faJava, proficiency: Proficiency.Proficient, color: '#0276b9' },
			{ name: 'SQL', icon: 'SQL', proficiency: Proficiency.Proficient, color: '#0276b9' },
			{
				name: 'C++',
				icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
				proficiency: Proficiency.Intermediate
			},
			{
				name: 'Flask',
				icon: 'https://flask.palletsprojects.com/en/2.2.x/_static/flask-icon.png',
				proficiency: Proficiency.Intermediate
			},
			{
				name: 'PHP / Symfony',
				icon: faPhp,
				proficiency: Proficiency.Basic,
				color: '#0276b9'
			},
			{ name: 'GLSL', icon: 'GLSL', proficiency: Proficiency.Basic }
		]
	},
	{
		title: 'Devops',
		imgLink:
			'https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		//'https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		skills: [
			{ name: 'Docker', icon: faDocker, proficiency: Proficiency.Master, color: '#2597ef' },
			{ name: 'Bash', icon: faTerminal, proficiency: Proficiency.Master },
			{ name: 'Git / Github Actions', icon: faGit, proficiency: Proficiency.Proficient },
			{
				name: 'Kubernetes',
				icon: 'https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg',
				proficiency: Proficiency.Intermediate
			},
			{
				name: 'Azure / Azure DevOps',
				icon: 'https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/azure-blue-1',
				proficiency: Proficiency.Basic
			}
		]
	},
	{
		title: 'Languages',
		imgLink:
			'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		skills: [
			{
				name: 'French',
				icon: 'https://worldflags.net/assets/flaggor/flags/4x3/fr.svg',
				proficiency: Proficiency.Master
			},
			{
				name: 'English',
				icon: 'https://worldflags.net/assets/flaggor/flags/4x3/gb.svg',
				proficiency: Proficiency.Master
			},
			{
				name: 'German',
				icon: 'https://worldflags.net/assets/flaggor/flags/4x3/de.svg',
				proficiency: Proficiency.Proficient
			},
			{
				name: 'Spanish',
				icon: 'https://worldflags.net/assets/flaggor/flags/4x3/es.svg',
				proficiency: Proficiency.Basic
			},
			{
				name: 'Swedish',
				icon: 'https://worldflags.net/assets/flaggor/flags/4x3/se.svg',
				proficiency: Proficiency.Basic
			}
		]
	}
];
