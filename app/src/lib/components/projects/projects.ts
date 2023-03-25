import engine3D from '$lib/assets/projects/3d.png';
import balistics from '$lib/assets/projects/balistics.png';

export interface Project {
    imgSrc: string;
    label: string;
    description: string;
}

export const projects : Project[] = [
    { 
        imgSrc: engine3D, 
        label: "3D engine", 
        description: `
            I was interested in the way computers could show 3D objects on a 2D screen. 
            So I tried to develop a simple 3D engine that could display dots at certain 
            coordinates. The camera can move so we can see the dots get closer or further.
        `
    },
    {
        imgSrc: balistics,
        label: "Balistics",
        description: `
            A very simplist game using basic balistics. The goal is to touch the 'target' -
            a square on the ground - with a ball. This was one my first attempt at dynamics.
        `
    }
]