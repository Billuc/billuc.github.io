import{S as F,i as O,s as W,k as j,q as B,a as L,l as I,m as x,r as P,h as v,c as S,n as _,H as z,b as M,D as g,u as J,g as y,v as q,d as D,f as H,y as A,z as E,A as T,B as G,I as U,L as re}from"../chunks/index.7cfd5edb.js";import{F as ae,e as ne}from"../chunks/index.2284837b.js";import{L as se}from"../chunks/LinkButton.9ceee6de.js";const ie=""+new URL("../assets/3d.18c8a6e8.png",import.meta.url).href,le=""+new URL("../assets/ball-and-stars.f9429f51.png",import.meta.url).href,oe=""+new URL("../assets/fractals.54258848.png",import.meta.url).href,ce=""+new URL("../assets/GIT.45df2c61.png",import.meta.url).href,fe=""+new URL("../assets/Muninn.b08c2f6c.png",import.meta.url).href,ue=""+new URL("../assets/py2048.4fbdbbdb.png",import.meta.url).href,me=""+new URL("../assets/ray-tracing.8eb2f027.png",import.meta.url).href,de=""+new URL("../assets/taipan-di.e32d3716.jpeg",import.meta.url).href,pe=""+new URL("../assets/TriSelectIF.9f804c8a.jpg",import.meta.url).href,Y=["Libraries","Games","Websites","Others"],K=[{imgSrc:pe,projectLink:"https://hexanome-thermopropulsif.gitlab.io/tri-selectif/",label:"Tri Select'IF",description:`
            A university project we did as a team of 6. Tri Select'IF is a mobile game whose intent
            is to help children learn how to sort waste. It was made with Unity with an Agile project
            management.
        `,category:"Games"},{imgSrc:ce,projectLink:"",label:"Gaming Insa Tournament's website",description:`
            I was part of an association at my university which organized each year an academic e-sport
            tournament. I was the leader of the Dev team and we built the registration website to this
            tournament.
        `,category:"Websites"},{imgSrc:de,projectLink:"https://github.com/Billuc/Taipan-DI",label:"Taipan-DI",description:`
			A dependency injection library for Python that I wrote. I created this library to have a simple
			yet powerful way to implement inversion of control in other Python projects. I took inspiration
			from other Python DI libraries and .Net's DI tool and tested it extensively.
		`,category:"Libraries"},{imgSrc:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",projectLink:"https://github.com/Billuc",label:"Music-related libraries",description:`
			As I was working on a music related project, I needed to execute some operations and decided to create
			dedicated Python libraries to implement them. Those operations include fetching music metadata, fetching
			music lyrics and embedding metadata in music files.
		`,category:"Libraries"},{imgSrc:fe,projectLink:"https://billuc.github.io/Muninn",label:"Muninn",description:`
			A selfmade productivity app to meet my needs. It has a journal, lists, events and notes.
			It was built as a PWA, so that it can be installed on every device regardless of the OS.
			Note: It is not stable yet, but I am not currently working on it...
		`,category:"Websites"},{imgSrc:le,projectLink:"https://github.com/Billuc/Ball-and-Stars",label:"Ball and Stars",description:`
	        A simple game where you control a bouncing ball and have to catch all the stars.
	        I made it with Java during holidays. It was heavily inspired by a game we used
	        to play with a friend.
	    `,category:"Games"},{imgSrc:ie,projectLink:"https://github.com/Billuc/3DEngine",label:"3D engine",description:`
	        I was interested in the way computers could show 3D objects on a 2D screen.
	        So I tried to develop a simple 3D engine that could display dots at certain
	        coordinates. The camera can move so we can see the dots get closer or further.
	    `,category:"Others"},{imgSrc:me,projectLink:"https://github.com/Billuc/RayTracing2D",label:"RayTracing2D",description:`
	        First experiment with ray tracing : tracing rays until they collide with an object.
	        It was a small experiment I did after learning the theory behind ray tracing and
	        computer graphics.
	    `,category:"Others"},{imgSrc:ue,projectLink:"https://github.com/Billuc/Py2048",label:"Py2048",description:`
            My very first personal project : my own version of the game 2048 with Python. It 
            may be buggy and not very nice looking, since I made it with very limited coding
            experience.
        `,category:"Games"},{imgSrc:oe,projectLink:"https://github.com/Billuc/Fractals",label:"Fractals",description:`
            This is a small project I did for fun. I like fractals (and other mathematical
            objects) and so I decided to create a project where I gradually draw different fractals.
        `,category:"Others"}];function Q(l){let e,r;return e=new se({props:{to:l[0].projectLink,class:"mt-2",$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){A(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const p={};s&1&&(p.to=t[0].projectLink),s&2&&(p.$$scope={dirty:s,ctx:t}),e.$set(p)},i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function he(l){let e,r,t;return e=new ae({props:{icon:ne,class:"mr-2"}}),{c(){A(e.$$.fragment),r=B(`
					See code`)},l(s){E(e.$$.fragment,s),r=P(s,`
					See code`)},m(s,p){T(e,s,p),M(s,r,p),t=!0},p:U,i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){D(e.$$.fragment,s),t=!1},d(s){G(e,s),s&&v(r)}}}function ge(l){let e,r,t=l[0].label+"",s,p,m,b,k,h,o,$,a,u=l[0].description+"",n,f,c,i=l[0].projectLink&&Q(l);return{c(){e=j("div"),r=j("span"),s=B(t),p=L(),m=j("div"),b=j("img"),o=L(),$=j("div"),a=j("div"),n=B(u),f=L(),i&&i.c(),this.h()},l(d){e=I(d,"DIV",{class:!0});var w=x(e);r=I(w,"SPAN",{class:!0});var N=x(r);s=P(N,t),N.forEach(v),p=S(w),m=I(w,"DIV",{class:!0});var R=x(m);b=I(R,"IMG",{src:!0,alt:!0,class:!0}),o=S(R),$=I(R,"DIV",{class:!0});var V=x($);a=I(V,"DIV",{class:!0});var C=x(a);n=P(C,u),C.forEach(v),f=S(V),i&&i.l(V),V.forEach(v),R.forEach(v),w.forEach(v),this.h()},h(){_(r,"class","text-xl font-black mb-2"),z(b.src,k=l[0].imgSrc)||_(b,"src",k),_(b,"alt",h=`Image for project ${l[0].label}`),_(b,"class","rounded-sm h-40 w-40 object-contain shrink-0 mx-auto"),_(a,"class","text-sm text-justify px-4"),_($,"class","flex flex-col justify-around"),_(m,"class","flex flex-col md:flex-row gap-4"),_(e,"class","bg-slate-800 text-slate-100 flex flex-col p-4 rounded-sm max-w-xl shadow-md")},m(d,w){M(d,e,w),g(e,r),g(r,s),g(e,p),g(e,m),g(m,b),g(m,o),g(m,$),g($,a),g(a,n),g($,f),i&&i.m($,null),c=!0},p(d,[w]){(!c||w&1)&&t!==(t=d[0].label+"")&&J(s,t),(!c||w&1&&!z(b.src,k=d[0].imgSrc))&&_(b,"src",k),(!c||w&1&&h!==(h=`Image for project ${d[0].label}`))&&_(b,"alt",h),(!c||w&1)&&u!==(u=d[0].description+"")&&J(n,u),d[0].projectLink?i?(i.p(d,w),w&1&&y(i,1)):(i=Q(d),i.c(),y(i,1),i.m($,null)):i&&(q(),D(i,1,1,()=>{i=null}),H())},i(d){c||(y(i),c=!0)},o(d){D(i),c=!1},d(d){d&&v(e),i&&i.d()}}}function be(l,e,r){let{project:t}=e;return l.$$set=s=>{"project"in s&&r(0,t=s.project)},[t]}class $e extends F{constructor(e){super(),O(this,e,be,ge,W,{project:0})}}function X(l,e,r){const t=l.slice();return t[1]=e[r],t}function Z(l,e,r){const t=l.slice();return t[4]=e[r],t}function ee(l){let e,r;return e=new $e({props:{project:l[4]}}),{c(){A(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p:U,i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}function te(l){let e,r,t=l[1]+"",s,p,m,b;function k(...a){return l[0](l[1],...a)}let h=K.filter(k),o=[];for(let a=0;a<h.length;a+=1)o[a]=ee(Z(l,h,a));const $=a=>D(o[a],1,1,()=>{o[a]=null});return{c(){e=j("div"),r=j("div"),s=B(t),p=L(),m=j("div");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=I(a,"DIV",{});var u=x(e);r=I(u,"DIV",{class:!0});var n=x(r);s=P(n,t),n.forEach(v),p=S(u),m=I(u,"DIV",{class:!0});var f=x(m);for(let c=0;c<o.length;c+=1)o[c].l(f);f.forEach(v),u.forEach(v),this.h()},h(){_(r,"class","text-2xl font-bold my-4"),_(m,"class","flex flex-row flex-wrap justify-evenly gap-2")},m(a,u){M(a,e,u),g(e,r),g(r,s),g(e,p),g(e,m);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(m,null);b=!0},p(a,u){if(l=a,u&0){h=K.filter(k);let n;for(n=0;n<h.length;n+=1){const f=Z(l,h,n);o[n]?(o[n].p(f,u),y(o[n],1)):(o[n]=ee(f),o[n].c(),y(o[n],1),o[n].m(m,null))}for(q(),n=h.length;n<o.length;n+=1)$(n);H()}},i(a){if(!b){for(let u=0;u<h.length;u+=1)y(o[u]);b=!0}},o(a){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)D(o[u]);b=!1},d(a){a&&v(e),re(o,a)}}}function ve(l){let e,r,t;return r=new ae({props:{icon:ne,class:"ml-2"}}),{c(){e=B("More on my Github "),A(r.$$.fragment)},l(s){e=P(s,"More on my Github "),E(r.$$.fragment,s)},m(s,p){M(s,e,p),T(r,s,p),t=!0},p:U,i(s){t||(y(r.$$.fragment,s),t=!0)},o(s){D(r.$$.fragment,s),t=!1},d(s){s&&v(e),G(r,s)}}}function _e(l){let e,r,t,s,p,m,b,k,h,o,$=Y,a=[];for(let n=0;n<$.length;n+=1)a[n]=te(X(l,$,n));const u=n=>D(a[n],1,1,()=>{a[n]=null});return h=new se({props:{to:"https://github.com/Billuc",class:"mt-8 mx-auto",$$slots:{default:[ve]},$$scope:{ctx:l}}}),{c(){e=j("div"),r=j("div"),t=j("span"),s=B("Some of my projects"),p=L(),m=j("div"),b=L();for(let n=0;n<a.length;n+=1)a[n].c();k=L(),A(h.$$.fragment),this.h()},l(n){e=I(n,"DIV",{class:!0});var f=x(e);r=I(f,"DIV",{class:!0});var c=x(r);t=I(c,"SPAN",{class:!0});var i=x(t);s=P(i,"Some of my projects"),i.forEach(v),p=S(c),m=I(c,"DIV",{class:!0}),x(m).forEach(v),b=S(c);for(let d=0;d<a.length;d+=1)a[d].l(c);k=S(c),E(h.$$.fragment,c),c.forEach(v),f.forEach(v),this.h()},h(){_(t,"class","text-4xl font-black text-slate-900"),_(m,"class","my-4 border-b-2 border-red-600 border-opacity-30 w-40"),_(r,"class","flex flex-col items-center"),_(e,"class","py-16 text-center w-full")},m(n,f){M(n,e,f),g(e,r),g(r,t),g(t,s),g(r,p),g(r,m),g(r,b);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(r,null);g(r,k),T(h,r,null),o=!0},p(n,[f]){if(f&0){$=Y;let i;for(i=0;i<$.length;i+=1){const d=X(n,$,i);a[i]?(a[i].p(d,f),y(a[i],1)):(a[i]=te(d),a[i].c(),y(a[i],1),a[i].m(r,k))}for(q(),i=$.length;i<a.length;i+=1)u(i);H()}const c={};f&128&&(c.$$scope={dirty:f,ctx:n}),h.$set(c)},i(n){if(!o){for(let f=0;f<$.length;f+=1)y(a[f]);y(h.$$.fragment,n),o=!0}},o(n){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)D(a[f]);D(h.$$.fragment,n),o=!1},d(n){n&&v(e),re(a,n),G(h)}}}function ye(l){return[(r,t)=>t.category==r]}class we extends F{constructor(e){super(),O(this,e,ye,_e,W,{})}}function je(l){let e,r;return e=new we({}),{c(){A(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p:U,i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),r=!1},d(t){G(e,t)}}}class De extends F{constructor(e){super(),O(this,e,null,je,W,{})}}export{De as component};
