import engine3D from '$lib/assets/images/3d.png';
import balistics from '$lib/assets/images/balistics.png';
import ballAndStars from '$lib/assets/images/ball-and-stars.png';
import fractals from '$lib/assets/images/fractals.png';
import git from '$lib/assets/images/GIT.png';
import py2048 from '$lib/assets/images/py2048.png';
import rayTracing from '$lib/assets/images/ray-tracing.png';
import triSelectIF from '$lib/assets/images/TriSelectIF.jpg';

export interface Project {
	imgSrc: string;
	projectLink: string;
	label: string;
	description: string;
}

export const Projects: Project[] = [
	{
		imgSrc: ballAndStars,
		projectLink: 'https://github.com/Billuc/Ball-and-Stars',
		label: 'Ball and Stars',
		description: `
            A simple game where you control a bouncing ball and have to catch all the stars. 
            I made it with Java during holidays. It was heavily inspired by a game we used 
            to play with a friend.
        `
	},
	{
		imgSrc: engine3D,
		projectLink: 'https://github.com/Billuc/3DEngine',
		label: '3D engine',
		description: `
            I was interested in the way computers could show 3D objects on a 2D screen. 
            So I tried to develop a simple 3D engine that could display dots at certain 
            coordinates. The camera can move so we can see the dots get closer or further.
        `
	},
	{
		imgSrc: rayTracing,
		projectLink: 'https://github.com/Billuc/RayTracing2D',
		label: 'RayTracing2D',
		description: `
            First experiment with ray tracing : tracing rays until they collide with an object.
            It was a small experiment I did after learning the theory behind ray tracing and 
            computer graphics.
        `
	},
	{
		imgSrc: triSelectIF,
		projectLink: 'https://hexanome-thermopropulsif.gitlab.io/tri-selectif/',
		label: "Tri Select'IF",
		description: `
            A university project we did as a team of 6. Tri Select'IF is a mobile game whose intent
            is to help children learn how to sort waste. It was made with Unity with an Agile project
            management.
        `
	},
	{
		imgSrc: git,
		projectLink: '',
		label: "Gaming Insa Tournament's website",
		description: `
            I was part of an association at my university which organized each year an academic e-sport
            tournament. I was the leader of the Dev team and we built the registration website to this
            tournament.
        `
	}
];
