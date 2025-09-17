import"../chunks/DsnmJJEf.js";import"../chunks/DRoFOHEh.js";import{p as L,f as v,d as a,s as n,r as t,t as k,e as y,b as u,c as S,a as D,Z as P,R as b}from"../chunks/BzqehAlX.js";import{s as j,e as _,i as I}from"../chunks/DiTWgRFJ.js";import{i as C}from"../chunks/B821ZvVs.js";import{i as U}from"../chunks/B9xvzWmP.js";import{s as O,w as F,F as R,d as T}from"../chunks/CglE_25W.js";import{L as B}from"../chunks/DWv5lCqw.js";const A=""+new URL("../assets/3d.BK06l5mq.png",import.meta.url).href,M=""+new URL("../assets/GIT.B9b26zQl.png",import.meta.url).href,Q=""+new URL("../assets/Muninn.DIRr8qfu.png",import.meta.url).href,W=""+new URL("../assets/py2048.zOkGlQjf.png",import.meta.url).href,z=""+new URL("../assets/ray-tracing.DKcmhov8.png",import.meta.url).href,q=""+new URL("../assets/taipan-di.CSopxW1e.jpeg",import.meta.url).href,K=""+new URL("../assets/TriSelectIF._CY9QgdY.jpg",import.meta.url).href,Y=["Libraries","Games","Websites","Others"],E=[{imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Cigogne_%28Oberbronn%29_%2836129332332%29.jpg/330px-Cigogne_%28Oberbronn%29_%2836129332332%29.jpg",projectLink:"https://github.com/Billuc/cigogne",label:"Cigogne",description:"Cigogne is a SQL migration tool for Gleam projects. It relies on SQL files to define migrations and apply them.",category:"Libraries"},{imgSrc:Q,projectLink:"https://billuc.github.io/Muninn",label:"Muninn",description:`
			A selfmade productivity app. It only has lists and notes for now.
			It was built as a PWA, so that it can be installed on every device regardless of the OS.
I am currently working on a new version.
		`,category:"Websites"},{imgSrc:K,projectLink:"https://hexanome-thermopropulsif.gitlab.io/tri-selectif/",label:"Tri Select'IF",description:`
            A university project we did as a team of 6. Tri Select'IF is a mobile game whose intent
            is to help children learn how to sort waste. It was made with Unity with an Agile project
            management.
        `,category:"Games"},{imgSrc:M,projectLink:"",label:"Gaming Insa Tournament's website",description:`
            I was part of an association at my university which organized each year an academic e-sport
            tournament. I was the leader of the Dev team and we built the registration website to this
            tournament.
        `,category:"Websites"},{imgSrc:q,projectLink:"https://github.com/Billuc/Taipan-DI",label:"Taipan-DI",description:`
			A dependency injection library for Python. I created this library to have a simple
			yet powerful way to implement inversion of control in other Python projects.
		`,category:"Libraries"},{imgSrc:A,projectLink:"https://github.com/Billuc/3DEngine",label:"3D engine",description:`
	        I was interested in the way computers could show 3D objects on a 2D screen.
	        So I tried to develop a simple 3D engine that could display dots at certain
	        coordinates.
	    `,category:"Others"},{imgSrc:z,projectLink:"https://github.com/Billuc/RayTracing2D",label:"RayTracing2D",description:`
	        It was a small experiment I did after learning the theory behind ray tracing and
	        computer graphics. It traces rays from the mouse in all directions until they hit
	        a shape.
	    `,category:"Others"},{imgSrc:W,projectLink:"https://github.com/Billuc/Py2048",label:"Py2048",description:`
            My very first personal project : my own version of the game 2048 with Python. It 
            may be buggy and not very nice looking, since I made it with very limited coding
            experience, but I am still proud I made it !
        `,category:"Games"}];var Z=v("<!> See code",1),H=v('<div><img class="rounded-sm h-20 w-20 object-cover shrink-0 mx-auto"/> <div class="flex flex-col gap-2"><span class="text-xl font-black"> </span> <div class="justify-around text-sm text-justify px-2"> </div> <!></div></div>');function J(m,e){L(e,!0);var i=H();O(i,1,F(["bg-slate-800 text-slate-100","flex flex-row items-center gap-2","px-4 py-2 rounded-sm max-w-xl shadow-md"]));var c=a(i),p=n(c,2),d=a(p),g=a(d,!0);t(d);var o=n(d,2),r=a(o,!0);t(o);var s=n(o,2);{var f=l=>{B(l,{get to(){return e.project.projectLink},class:"mx-4",children:(h,w)=>{var x=Z(),G=D(x);R(G,{get icon(){return T},class:"mr-2"}),P(),u(h,x)},$$slots:{default:!0}})};U(s,l=>{e.project.projectLink&&l(f)})}t(p),t(i),k(()=>{j(c,"src",e.project.imgSrc),j(c,"alt",`Image for project ${e.project.label}`),y(g,e.project.label),y(r,e.project.description)}),u(m,i),S()}var N=v('<div><div class="text-2xl font-bold my-4"> </div> <div class="flex flex-row flex-wrap justify-evenly gap-2"></div></div>'),V=v("More on my Github <!>",1),X=v('<div class="py-16 text-center w-full"><div class="flex flex-col items-center"><span class="text-4xl font-black text-slate-900">Some of my projects</span> <div class="my-4 border-b-2 border-red-600 border-opacity-30 w-40"></div> <!> <!></div></div>');function $(m,e){L(e,!1),C();var i=X(),c=a(i),p=n(a(c),4);_(p,1,()=>Y,I,(g,o)=>{var r=N(),s=a(r),f=a(s,!0);t(s);var l=n(s,2);_(l,5,()=>E.filter(h=>h.category==b(o)),I,(h,w)=>{J(h,{get project(){return b(w)}})}),t(l),t(r),k(()=>y(f,b(o))),u(g,r)});var d=n(p,2);B(d,{to:"https://github.com/Billuc",class:"mt-8 mx-auto",children:(g,o)=>{P();var r=V(),s=n(D(r));R(s,{get icon(){return T},class:"ml-2"}),u(g,r)},$$slots:{default:!0}}),t(c),t(i),u(m,i),S()}function ce(m){$(m,{})}export{ce as component};
