import engine3D from '$lib/assets/images/3d.png';
import balistics from '$lib/assets/images/balistics.png';
import ballAndStars from '$lib/assets/images/ball-and-stars.png';
import fractals from '$lib/assets/images/fractals.png';
import git from '$lib/assets/images/GIT.png';
import muninn from '$lib/assets/images/Muninn.png';
import py2048 from '$lib/assets/images/py2048.png';
import rayTracing from '$lib/assets/images/ray-tracing.png';
import taipanDi from '$lib/assets/images/taipan-di.jpeg';
import triSelectIF from '$lib/assets/images/TriSelectIF.jpg';

export enum ProjectCategory {
	Libraries = 'Libraries',
	Games = 'Games',
	Websites = 'Websites',
	Others = 'Others'
}

export const ProjectCategories = [
	ProjectCategory.Libraries,
	ProjectCategory.Games,
	ProjectCategory.Websites,
	ProjectCategory.Others
];

export interface Project {
	imgSrc: string;
	projectLink: string;
	label: string;
	description: string;
	category: ProjectCategory;
}

export const Projects: Project[] = [
	{
		imgSrc: triSelectIF,
		projectLink: 'https://hexanome-thermopropulsif.gitlab.io/tri-selectif/',
		label: "Tri Select'IF",
		description: `
            A university project we did as a team of 6. Tri Select'IF is a mobile game whose intent
            is to help children learn how to sort waste. It was made with Unity with an Agile project
            management.
        `,
		category: ProjectCategory.Games
	},
	{
		imgSrc: git,
		projectLink: '',
		label: "Gaming Insa Tournament's website",
		description: `
            I was part of an association at my university which organized each year an academic e-sport
            tournament. I was the leader of the Dev team and we built the registration website to this
            tournament.
        `,
		category: ProjectCategory.Websites
	},
	{
		imgSrc: taipanDi,
		projectLink: 'https://github.com/Billuc/Taipan-DI',
		label: 'Taipan-DI',
		description: `
			A dependency injection library for Python that I wrote. I created this library to have a simple
			yet powerful way to implement inversion of control in other Python projects. I took inspiration
			from other Python DI libraries and .Net's DI tool and tested it extensively.
		`,
		category: ProjectCategory.Libraries
	},
	{
		imgSrc:
			'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		projectLink: 'https://github.com/Billuc',
		label: 'Music-related libraries',
		description: `
			As I was working on a music related project, I needed to execute some operations and decided to create
			dedicated Python libraries to implement them. Those operations include fetching music metadata, fetching
			music lyrics and embedding metadata in music files.
		`,
		category: ProjectCategory.Libraries
	},
	{
		imgSrc: muninn,
		projectLink: 'https://billuc.github.io/Muninn',
		label: 'Muninn',
		description: `
			A selfmade productivity app to meet my needs. It has a journal, lists, events and notes.
			It was built as a PWA, so that it can be installed on every device regardless of the OS.
			Note: It is not stable yet, but I am not currently working on it...
		`,
		category: ProjectCategory.Websites
	},
	{
		imgSrc: ballAndStars,
		projectLink: 'https://github.com/Billuc/Ball-and-Stars',
		label: 'Ball and Stars',
		description: `
	        A simple game where you control a bouncing ball and have to catch all the stars.
	        I made it with Java during holidays. It was heavily inspired by a game we used
	        to play with a friend.
	    `,
		category: ProjectCategory.Games
	},
	{
		imgSrc: engine3D,
		projectLink: 'https://github.com/Billuc/3DEngine',
		label: '3D engine',
		description: `
	        I was interested in the way computers could show 3D objects on a 2D screen.
	        So I tried to develop a simple 3D engine that could display dots at certain
	        coordinates. The camera can move so we can see the dots get closer or further.
	    `,
		category: ProjectCategory.Others
	},
	{
		imgSrc: rayTracing,
		projectLink: 'https://github.com/Billuc/RayTracing2D',
		label: 'RayTracing2D',
		description: `
	        First experiment with ray tracing : tracing rays until they collide with an object.
	        It was a small experiment I did after learning the theory behind ray tracing and
	        computer graphics.
	    `,
		category: ProjectCategory.Others
	},
	{
		imgSrc: py2048,
		projectLink: 'https://github.com/Billuc/Py2048',
		label: 'Py2048',
		description: `
            My very first personal project : my own version of the game 2048 with Python. It 
            may be buggy and not very nice looking, since I made it with very limited coding
            experience.
        `,
		category: ProjectCategory.Games
	},
	{
		imgSrc: fractals,
		projectLink: 'https://github.com/Billuc/Fractals',
		label: 'Fractals',
		description: `
            This is a small project I did for fun. I like fractals (and other mathematical
            objects) and so I decided to create a project where I gradually draw different fractals.
        `,
		category: ProjectCategory.Others
	}
	// {
	// 	imgSrc: balistics,
	// 	projectLink: 'https://github.com/Billuc/Balistics',
	// 	label: 'Balistics',
	// 	description: `
	//         A very simplist game using basic balistics. The goal is to touch the 'target' -
	//         a square on the ground - with a ball. This was one my first attempt at dynamics.
	//     `
	// },
];
