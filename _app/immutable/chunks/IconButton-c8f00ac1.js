import{S as m,i as d,s as h,k as _,w as b,l as g,m as B,x as w,h as u,n as f,b as y,y as k,M as N,f as j,t as F,z as I,N as S}from"./index-6fdcaf31.js";import{F as T}from"./fa-a9968f3c.js";function q(s){let t,n,a,r,c,i;return n=new T({props:{icon:s[1]}}),{c(){t=_("button"),b(n.$$.fragment),this.h()},l(e){t=g(e,"BUTTON",{class:!0});var o=B(t);w(n.$$.fragment,o),o.forEach(u),this.h()},h(){f(t,"class",a=`
		${s[2]?"":"border-2 border-current"} rounded
		w-8 h-8 flex justify-center items-center 
		${s[0]}`)},m(e,o){y(e,t,o),k(n,t,null),r=!0,c||(i=N(t,"click",s[3]),c=!0)},p(e,[o]){const l={};o&2&&(l.icon=e[1]),n.$set(l),(!r||o&5&&a!==(a=`
		${e[2]?"":"border-2 border-current"} rounded
		w-8 h-8 flex justify-center items-center 
		${e[0]}`))&&f(t,"class",a)},i(e){r||(j(n.$$.fragment,e),r=!0)},o(e){F(n.$$.fragment,e),r=!1},d(e){e&&u(t),I(n),c=!1,i()}}}function v(s,t,n){let{class:a=""}=t,{icon:r}=t,{noBorder:c=!1}=t;function i(e){S.call(this,s,e)}return s.$$set=e=>{"class"in e&&n(0,a=e.class),"icon"in e&&n(1,r=e.icon),"noBorder"in e&&n(2,c=e.noBorder)},[a,r,c,i]}class E extends m{constructor(t){super(),d(this,t,v,q,h,{class:0,icon:1,noBorder:2})}}export{E as I};
