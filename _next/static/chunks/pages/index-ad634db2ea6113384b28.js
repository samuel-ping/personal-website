(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(1689),l=n(2441),c=n(5749),s={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],l=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):l||i}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var y=i.Children.only(v),x=y&&"object"===typeof y&&y.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),j=r(w,2),N=j[0],E=j[1],_=i.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,i.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,E,b,t,n]);var k={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:l}))}(e,n,d,p,h,m,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var O="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,O,n&&n.locales,n&&n.domainLocales);k.href=C||(0,a.addBasePath)((0,a.addLocale)(p,O,n&&n.defaultLocale))}return i.default.cloneElement(y,k)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),s=(0,o.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var l=new Map},2677:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return u}});var r=n(5893),o=n(3544),i=(n(1664),function(e){e.website;var t=e.url,n=e.icon;return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("span",{className:"flex rounded-full border-2 border-green-600 hover:bg-green-100 p-8 justify-center content-center cursor-pointer",children:n})})}),a=n(5155),l=[{website:"GitHub",url:"https://github.com/samuel-ping",icon:(0,r.jsx)(a.lfl,{size:30})},{website:"LinkedIn",url:"https://linkedin.com/in/samuelping",icon:(0,r.jsx)(a.juy,{size:30})},{website:"Resume",url:"/resume",icon:(0,r.jsx)(a.Pf5,{size:30})},{website:"LinkedIn",url:"mailto:samuel.y.ping@gmail.com",icon:(0,r.jsx)(a.tzA,{size:30})}],c=function(){return(0,r.jsx)("div",{className:"flex flex-row content-start justify-evenly my-7",children:l.map((function(e,t){return(0,r.jsx)(i,{index:t,website:e.website,url:e.url,icon:e.icon})}))})};var s=!0,u=(0,o.withSuperJSONPage)((function(e){var t=e.taglines;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{className:"leading-relaxed text-6xl font-bold",children:["Hi! I'm ",(0,r.jsx)("span",{className:"text-green-600",children:"Sam Ping"}),", a..."]}),(0,r.jsx)("ul",{className:"flex flex-col items-center",children:t.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsxs)("li",{className:"leading-normal text-lg",children:[e.position," @"," ",(0,r.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"font-bold hover:underline",children:e.place})]})},t)}))}),(0,r.jsx)(c,{})]})})}))},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2677)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4453:function(){}},function(e){e.O(0,[774,158,633,433],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);