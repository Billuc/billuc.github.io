import{S as G,i as J,s as K,e as L,b as k,B as P,h as y,O as d,P as C,m as O,n as r,L as b,I as j}from"./index-6fdcaf31.js";const E=parseFloat;function z(t,e=";"){let l;if(Array.isArray(t))l=t.filter(i=>i);else{l=[];for(const i in t)t[i]&&l.push(`${i}:${t[i]}`)}return l.join(e)}function M(t,e,l,i){let u,o;const s="1em";let h,_,c,g="-.125em";const a="visible";return i&&(c="center",o="1.25em"),l&&(u=l),e&&(e=="lg"?(_="1.33333em",h=".75em",g="-.225em"):e=="xs"?_=".75em":e=="sm"?_=".875em":_=e.replace("x","em")),z([z({float:u,width:o,height:s,"line-height":h,"font-size":_,"text-align":c,"vertical-align":g,"transform-origin":"center",overflow:a}),t])}function Q(t,e,l,i,u,o=1,s="",h=""){let _=1,c=1;return u&&(u=="horizontal"?_=-1:u=="vertical"?c=-1:_=c=-1),z([`translate(${E(e)*o}${s},${E(l)*o}${s})`,`scale(${_*E(t)},${c*E(t)})`,i&&`rotate(${i}${h})`]," ")}function D(t){let e,l,i,u,o,s,h,_;function c(n,m){return typeof n[10][4]=="string"?T:R}let g=c(t),a=g(t);return{c(){e=d("svg"),l=d("g"),i=d("g"),a.c(),this.h()},l(n){e=C(n,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var m=O(e);l=C(m,"g",{transform:!0,"transform-origin":!0});var v=O(l);i=C(v,"g",{transform:!0});var w=O(i);a.l(w),w.forEach(y),v.forEach(y),m.forEach(y),this.h()},h(){r(i,"transform",t[12]),r(l,"transform",u="translate("+t[10][0]/2+" "+t[10][1]/2+")"),r(l,"transform-origin",o=t[10][0]/4+" 0"),r(e,"id",s=t[1]||void 0),r(e,"class",h="svelte-fa "+t[0]+" svelte-1cj2gr0"),r(e,"style",t[11]),r(e,"viewBox",_="0 0 "+t[10][0]+" "+t[10][1]),r(e,"aria-hidden","true"),r(e,"role","img"),r(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"pulse",t[4]),b(e,"spin",t[3])},m(n,m){k(n,e,m),j(e,l),j(l,i),a.m(i,null)},p(n,m){g===(g=c(n))&&a?a.p(n,m):(a.d(1),a=g(n),a&&(a.c(),a.m(i,null))),m&4096&&r(i,"transform",n[12]),m&1024&&u!==(u="translate("+n[10][0]/2+" "+n[10][1]/2+")")&&r(l,"transform",u),m&1024&&o!==(o=n[10][0]/4+" 0")&&r(l,"transform-origin",o),m&2&&s!==(s=n[1]||void 0)&&r(e,"id",s),m&1&&h!==(h="svelte-fa "+n[0]+" svelte-1cj2gr0")&&r(e,"class",h),m&2048&&r(e,"style",n[11]),m&1024&&_!==(_="0 0 "+n[10][0]+" "+n[10][1])&&r(e,"viewBox",_),m&17&&b(e,"pulse",n[4]),m&9&&b(e,"spin",n[3])},d(n){n&&y(e),a.d()}}}function R(t){let e,l,i,u,o,s,h,_,c,g;return{c(){e=d("path"),s=d("path"),this.h()},l(a){e=C(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),O(e).forEach(y),s=C(a,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),O(s).forEach(y),this.h()},h(){r(e,"d",l=t[10][4][0]),r(e,"fill",i=t[6]||t[2]||"currentColor"),r(e,"fill-opacity",u=t[9]!=!1?t[7]:t[8]),r(e,"transform",o="translate("+t[10][0]/-2+" "+t[10][1]/-2+")"),r(s,"d",h=t[10][4][1]),r(s,"fill",_=t[5]||t[2]||"currentColor"),r(s,"fill-opacity",c=t[9]!=!1?t[8]:t[7]),r(s,"transform",g="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(a,n){k(a,e,n),k(a,s,n)},p(a,n){n&1024&&l!==(l=a[10][4][0])&&r(e,"d",l),n&68&&i!==(i=a[6]||a[2]||"currentColor")&&r(e,"fill",i),n&896&&u!==(u=a[9]!=!1?a[7]:a[8])&&r(e,"fill-opacity",u),n&1024&&o!==(o="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&r(e,"transform",o),n&1024&&h!==(h=a[10][4][1])&&r(s,"d",h),n&36&&_!==(_=a[5]||a[2]||"currentColor")&&r(s,"fill",_),n&896&&c!==(c=a[9]!=!1?a[8]:a[7])&&r(s,"fill-opacity",c),n&1024&&g!==(g="translate("+a[10][0]/-2+" "+a[10][1]/-2+")")&&r(s,"transform",g)},d(a){a&&y(e),a&&y(s)}}}function T(t){let e,l,i,u;return{c(){e=d("path"),this.h()},l(o){e=C(o,"path",{d:!0,fill:!0,transform:!0}),O(e).forEach(y),this.h()},h(){r(e,"d",l=t[10][4]),r(e,"fill",i=t[2]||t[5]||"currentColor"),r(e,"transform",u="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(o,s){k(o,e,s)},p(o,s){s&1024&&l!==(l=o[10][4])&&r(e,"d",l),s&36&&i!==(i=o[2]||o[5]||"currentColor")&&r(e,"fill",i),s&1024&&u!==(u="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&r(e,"transform",u)},d(o){o&&y(e)}}}function V(t){let e,l=t[10][4]&&D(t);return{c(){l&&l.c(),e=L()},l(i){l&&l.l(i),e=L()},m(i,u){l&&l.m(i,u),k(i,e,u)},p(i,[u]){i[10][4]?l?l.p(i,u):(l=D(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:P,o:P,d(i){l&&l.d(i),i&&y(e)}}}function W(t,e,l){let{class:i=""}=e,{id:u=""}=e,{style:o=""}=e,{icon:s}=e,{size:h=""}=e,{color:_=""}=e,{fw:c=!1}=e,{pull:g=""}=e,{scale:a=1}=e,{translateX:n=0}=e,{translateY:m=0}=e,{rotate:v=""}=e,{flip:w=!1}=e,{spin:B=!1}=e,{pulse:X=!1}=e,{primaryColor:Y=""}=e,{secondaryColor:A=""}=e,{primaryOpacity:S=1}=e,{secondaryOpacity:F=.4}=e,{swapOpacity:N=!1}=e,q,H,I;return t.$$set=f=>{"class"in f&&l(0,i=f.class),"id"in f&&l(1,u=f.id),"style"in f&&l(13,o=f.style),"icon"in f&&l(14,s=f.icon),"size"in f&&l(15,h=f.size),"color"in f&&l(2,_=f.color),"fw"in f&&l(16,c=f.fw),"pull"in f&&l(17,g=f.pull),"scale"in f&&l(18,a=f.scale),"translateX"in f&&l(19,n=f.translateX),"translateY"in f&&l(20,m=f.translateY),"rotate"in f&&l(21,v=f.rotate),"flip"in f&&l(22,w=f.flip),"spin"in f&&l(3,B=f.spin),"pulse"in f&&l(4,X=f.pulse),"primaryColor"in f&&l(5,Y=f.primaryColor),"secondaryColor"in f&&l(6,A=f.secondaryColor),"primaryOpacity"in f&&l(7,S=f.primaryOpacity),"secondaryOpacity"in f&&l(8,F=f.secondaryOpacity),"swapOpacity"in f&&l(9,N=f.swapOpacity)},t.$$.update=()=>{t.$$.dirty&16384&&l(10,q=s&&s.icon||[0,0,"",[],""]),t.$$.dirty&237568&&l(11,H=M(o,h,g,c)),t.$$.dirty&8126464&&l(12,I=Q(a,n,m,v,w,512))},[i,u,_,B,X,Y,A,S,F,N,q,H,I,o,s,h,c,g,a,n,m,v,w]}class U extends G{constructor(e){super(),J(this,e,W,V,K,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}export{U as F};
