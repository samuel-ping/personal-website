(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{9376:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),i=r(6156),s=r(1163),o=r(9008),c=[{title:"Home",route:"/"},{title:"Resume",route:"/resume"},{title:"About Me",route:"/about"},{title:"Experience",route:"/work"},{title:"Projects",route:"/projects"},{title:"Involvement",route:"/involvement"}],l=r(1664),a=r(3280);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.isAnimated,r=e.color,i=e.size;if(!t)return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:.65*i,height:i,viewBox:"0 0 14.249 22.02",stroke:r,strokeWidth:2.425,children:(0,n.jsxs)("g",{fill:"none",children:[(0,n.jsx)("path",{d:"M10.188 1.993C6.663.943 4.293.881 2.64 2.248 1.544 3.133.985 4.243 1.295 5.314 1.728 6.604 3.632 7.3 5.361 7.65c2.112.478 4.378.843 6.166 1.787 1.623.84 1.875 3.113 1.031 4.344-.76 1.244-2.23 1.752-4.273 2.03l-5.888-.078"}),(0,n.jsx)("path",{d:"M3.354 11.296V22.02"})]})});var s={hidden:{pathLength:0},visible:{pathLength:1,transition:{duration:2,ease:"easeInOut"}}},o=h(h({},s),{},{visible:h(h({},s.visible),{},{transition:h(h({},s.visible.transition),{},{delay:.6})})});return(0,n.jsxs)(a.E.svg,{xmlns:"http://www.w3.org/2000/svg",width:.65*i,height:i,viewBox:"0 0 14.249 22.02",stroke:r,strokeWidth:2.425,initial:"hidden",animate:"visible",children:[(0,n.jsx)(a.E.path,{fill:"none",variants:s,d:"M10.188 1.993C6.663.943 4.293.881 2.64 2.248 1.544 3.133.985 4.243 1.295 5.314 1.728 6.604 3.632 7.3 5.361 7.65c2.112.478 4.378.843 6.166 1.787 1.623.84 1.875 3.113 1.031 4.344-.76 1.244-2.23 1.752-4.273 2.03l-5.888-.078"}),(0,n.jsx)(a.E.path,{fill:"none",variants:o,d:"M3.354 11.296V22.02"})]})},d=function(e){var t=e.isAnimated,r=e.size;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.default,{href:"/",children:(0,n.jsx)("div",{className:"cursor-pointer mx-10 my-3",children:(0,n.jsx)(f,{isAnimated:t,color:"#000000",size:r})})})})},p=function(e){var t=e.title,r=e.route,i=(0,s.useRouter)();return(0,n.jsx)(l.default,{href:r,children:(0,n.jsx)("div",{className:"flex items-center justify-center cursor-pointer hover:underline text-xl",children:(0,n.jsx)("span",{className:i.pathname===r?"underline":"",children:t})})})};function j(e){var t=e.navbarButtons;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"grid grid-flow-row grid-cols-7 grid-rows-1 justify-items-center my-5",children:[t.slice(0,t.length/2).map((function(e,t){return(0,n.jsx)(p,{title:e.title,route:e.route},t)})),(0,n.jsx)(d,{isAnimated:!0,size:"75"}),t.slice(t.length/2,t.length).map((function(e,t){return(0,n.jsx)(p,{title:e.title,route:e.route},t)}))]})})}var m=function(){return(0,n.jsxs)("div",{className:"font-light text-sm",children:["Made by Samuel Ping |"," ",(0,n.jsx)(l.default,{href:"mailto:samuel.y.ping@gmail.com",children:"samuel.y.ping@gmail.com"})]})};function v(e){var t=e.children,r=e.title;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsxs)("title",{children:["Samuel Ping",r]}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("div",{className:"flex flex-col h-screen items-center justify-between bg-green-50",children:[(0,n.jsx)(j,{navbarButtons:c}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(m,{})]})]})}r(4299);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t,r=e.Component,i=e.pageProps,o=(0,s.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v,{title:(t=o.pathname,("/"===t?"":" | ")+t.charAt(1).toLocaleUpperCase()+t.substring(1).slice(1)),children:(0,n.jsx)(r,x({},i))})})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9376)}])},4453:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,908,757,433,761],(function(){return t(1780),t(2441)}));var r=e.O();_N_E=r}]);