import {
	faDocker,
	faGitlab,
	faJs,
	faPython,
	faReact,
	faUnity,
	faVuejs
} from '@fortawesome/free-brands-svg-icons';
import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface Experience {
	imgLink: string;
	company: string;
	companyLink: string;
	title: string;
	dates: string;
	location: string;
	skills: { name: string; icon: IconDefinition | null }[];
	details: string[];
	imgBackground: 'light' | 'dark';
}

export const Experiences: Experience[] = [
	{
		company: 'CREATIS',
		title: 'Software engineer',
		dates: '2023 - now',
		location: 'Villeurbanne',
		imgLink: 'https://www.creatis.insa-lyon.fr/site/sites/default/files/logo-creatis_0-1.png',
		companyLink: 'https://www.creatis.insa-lyon.fr/site',
		skills: [
			{ name: 'Python', icon: faPython },
			{ name: 'React', icon: faReact },
			{ name: 'Docker', icon: faDocker },
			{ name: 'Gitlab CI', icon: faGitlab }
		],
		details: [
			'Dockerized apps for simplified deployment and developer onboarding',
			'Improved maintainability with good practices and refactoring',
			'Wrote tests and set a CI pipeline'
		],
		imgBackground: 'light'
	},
	{
		company: 'Dative',
		title: 'Fullstack developer',
		dates: '2021 - 2023',
		location: 'Lyon',
		imgLink: 'https://www.dative-gpi.com/assets/images/logo-dative@2x.png',
		companyLink: 'https://www.dative-gpi.com',
		skills: [
			{ name: 'VueJS', icon: faVuejs },
			{ name: 'C#', icon: null },
			{ name: 'Docker', icon: faDocker },
			{ name: 'Python', icon: faPython }
		],
		details: [
			'Developped features for a data acquisition application',
			'Created extensions for a cloud data vizualisation platform',
			'Increased test coverage by more than 20 percent',
			"Created tools to increase the team's efficiency"
		],
		imgBackground: 'dark'
	},
	{
		company: 'LIRIS',
		title: 'VR research intern',
		dates: '2021 - 2021',
		location: 'Villeurbanne',
		imgLink: 'https://liris.cnrs.fr/sites/default/files/logo_liris_160_0.png',
		companyLink: 'https://liris.cnrs.fr',
		skills: [
			{ name: 'VR', icon: faVrCardboard },
			{ name: 'Babylon.JS', icon: faJs },
			{ name: 'Python', icon: faPython },
			{ name: 'GLSL', icon: null },
			{ name: 'Unity', icon: faUnity }
		],
		details: [
			'Created a protocol to dynamically stream compressed 3D meshes',
			'Implemented different strategies and metrics',
			'Performed a statistical analysis to determine the best combination'
		],
		imgBackground: 'light'
	},
	{
		company: 'INSA Lyon',
		title: 'Masters of Science in Computer Science and Engineering',
		dates: '2016 - 2021',
		location: 'Villeurbanne',
		imgLink: 'https://www.insa-lyon.fr/sites/all/themes/insa/logo.png',
		companyLink: 'https://www.insa-lyon.fr/',
		skills: [],
		details: [],
		imgBackground: 'light'
	}
];
