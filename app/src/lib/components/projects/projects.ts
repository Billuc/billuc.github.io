import engine3D from '$lib/assets/images/3d.png';
import balistics from '$lib/assets/images/balistics.png';
import ballAndStars from '$lib/assets/images/ball-and-stars.png';
import py2048 from '$lib/assets/images/py2048.png';
import rayTracing from '$lib/assets/images/ray-tracing.png';
import fractals from '$lib/assets/images/fractals.png';
import triSelectIF from '$lib/assets/images/TriSelect\'if.jpg';
import git from '$lib/assets/images/GIT.png';

export interface Project {
    imgSrc: string;
    projectLink: string;
    label: string;
    description: string;
}

export const projects : Project[] = [
    { 
        imgSrc: engine3D,
        projectLink: "https://github.com/Billuc/3DEngine",
        label: "3D engine", 
        description: `
            I was interested in the way computers could show 3D objects on a 2D screen. 
            So I tried to develop a simple 3D engine that could display dots at certain 
            coordinates. The camera can move so we can see the dots get closer or further.
        `
    },
    {
        imgSrc: balistics,
        projectLink: "https://github.com/Billuc/Balistics",
        label: "Balistics",
        description: `
            A very simplist game using basic balistics. The goal is to touch the 'target' -
            a square on the ground - with a ball. This was one my first attempt at dynamics.
        `
    },
    {
        imgSrc: ballAndStars,
        projectLink: "https://github.com/Billuc/Ball-and-Stars",
        label: "Ball and Stars",
        description: `
            A simple game where you control a bouncing ball and have to catch all the stars. 
            I made it with Java during holidays. It was heavily inspired by a game we used 
            to play with a friend.
        `
    },
    {
        imgSrc: py2048,
        projectLink: "https://github.com/Billuc/Py2048",
        label: "Py2048",
        description: `
            My very first personal project : my own version of the game 2048 with Python. It 
            may be buggy and not very nice looking, since I made it with very limited coding
            experience.
        `
    },
    {
        imgSrc: rayTracing,
        projectLink: "https://github.com/Billuc/RayTracing2D",
        label: "RayTracing2D",
        description: `
            First experiment with ray tracing : tracing rays until they collide with an object.
            It was a small experiment I did after learning the theory behind ray tracing and 
            computer graphics.
        `
    },
    {
        imgSrc: fractals,
        projectLink: "https://github.com/Billuc/Fractals",
        label: "Fractals",
        description: `
            This is a small project I did for fun. I like fractals (and other special mathematical
            objects) and so I decided to create a project where I gradually draw different fractals.
        `
    },
    {
        imgSrc: triSelectIF,
        projectLink: "https://hexanome-thermopropulsif.gitlab.io/tri-selectif/",
        label: "Tri Select'IF",
        description: `
            A university project we did as a team of 6. Tri Select'IF is a mobile game whose intent
            is to help children learn how to sort waste. It was made with Unity with an Agile project
            management.
        `
    }, 
    {
        imgSrc: git,
        projectLink: "",
        label: "Gaming Insa Tournament's website",
        description: `
            I was part of an association at my university which organized each year an academic e-sport
            tournament. I was the leader of the Dev team and we built the registration website to this
            tournament.
        `
    }
]