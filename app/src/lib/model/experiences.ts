import {
	type IconDefinition,
	faVuejs,
	faDocker,
	faPython
} from '@fortawesome/free-brands-svg-icons';

export interface Experience {
	imgLink: string;
	company: string;
	companyLink: string;
	title: string;
	dates: string;
	location: string;
	skills: { name: string; icon: IconDefinition | null }[];
	details: string[];
}

export const Experiences: Experience[] = [
	{
		company: 'CREATIS',
		title: 'Software engineer',
		dates: '2023 - 2024',
		location: 'Villeurbanne',
		imgLink: 'https://www.creatis.insa-lyon.fr/site/sites/default/files/logo-creatis_0-1.png',
		companyLink: 'https://www.creatis.insa-lyon.fr/site',
		skills: [],
		details: []
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
		]
	},
	{
		company: 'LIRIS',
		title: 'VR research intern',
		dates: '2021 - 2021',
		location: 'Villeurbanne',
		imgLink: 'https://liris.cnrs.fr/sites/default/files/logo_liris_160_0.png',
		companyLink: 'https://liris.cnrs.fr',
		skills: [],
		details: []
	}
];
