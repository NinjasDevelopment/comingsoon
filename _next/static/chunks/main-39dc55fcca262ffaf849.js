_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/a9y":function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),u=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(r("q1tI")),s=f(r("mLbm"));function f(e){return e&&e.__esModule?e:{default:e}}var d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var m=function(e){a(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:v.error},l.default.createElement(s.default,null,l.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:v.h1},e):null,l.default.createElement("div",{style:v.desc},l.default.createElement("h2",{style:v.h2},this.props.title||e?t:l.default.createElement(l.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),r}(l.default.Component);m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p,t.default=m;var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},"1yEr":function(e,t,r){(function(t){e.exports=function(){var e={770:function(e,t){!function(e){"use strict";var t,r,n,o,a=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},i=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},u=function(e,t){var r=function r(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||(e(n),t&&(removeEventListener("visibilitychange",r,!0),removeEventListener("pagehide",r,!0)))};addEventListener("visibilitychange",r,!0),addEventListener("pagehide",r,!0)},c=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},l=function(e,t,r){var n;return function(o){t.value>=0&&(o||r)&&(t.delta=t.value-(n||0),(t.delta||void 0===n)&&(n=t.value,e(t)))}},s=-1,f=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){u((function(e){var t=e.timeStamp;s=t}),!0)},p=function(){return s<0&&(s=f(),d(),c((function(){setTimeout((function(){s=f(),d()}),0)}))),{get firstHiddenTime(){return s}}},m=function(e,t){var r,n=p(),o=a("FCP"),u=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<n.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),r(!0)))},s=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=s?null:i("paint",u);(s||f)&&(r=l(e,o,t),s&&u(s),c((function(n){o=a("FCP"),r=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-n.timeStamp,r(!0)}))}))})))},v=!1,h=-1,y={passive:!0,capture:!0},g=new Date,b=function(e,o){t||(t=o,r=e,n=new Date,w(removeEventListener),E())},E=function(){if(r>=0&&r<n-g){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var r=function(){b(e,t),o()},n=function(){o()},o=function(){removeEventListener("pointerup",r,y),removeEventListener("pointercancel",n,y)};addEventListener("pointerup",r,y),addEventListener("pointercancel",n,y)}(t,e):b(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,y)}))},_=new Set;e.getCLS=function(e,t){v||(m((function(e){h=e.value})),v=!0);var r,n=function(t){h>-1&&e(t)},o=a("CLS",0),s=0,f=[],d=function(e){if(!e.hadRecentInput){var t=f[0],n=f[f.length-1];s&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,f.push(e)):(s=e.value,f=[e]),s>o.value&&(o.value=s,o.entries=f,r())}},p=i("layout-shift",d);p&&(r=l(n,o,t),u((function(){p.takeRecords().map(d),r(!0)})),c((function(){s=0,h=-1,o=a("CLS",0),r=l(n,o,t)})))},e.getFCP=m,e.getFID=function(e,n){var s,f=p(),d=a("FID"),m=function(e){e.startTime<f.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),s(!0))},v=i("first-input",m);s=l(e,d,n),v&&u((function(){v.takeRecords().map(m),v.disconnect()}),!0),v&&c((function(){var i;d=a("FID"),s=l(e,d,n),o=[],r=-1,t=null,w(addEventListener),i=m,o.push(i),E()}))},e.getLCP=function(e,t){var r,n=p(),o=a("LCP"),s=function(e){var t=e.startTime;t<n.firstHiddenTime&&(o.value=t,o.entries.push(e)),r()},f=i("largest-contentful-paint",s);if(f){r=l(e,o,t);var d=function(){_.has(o.id)||(f.takeRecords().map(s),f.disconnect(),_.add(o.id),r(!0))};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0})})),u(d,!0),c((function(n){o=a("LCP"),r=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-n.timeStamp,_.add(o.id),r(!0)}))}))}))}},e.getTTFB=function(e){var t,r=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();if(r.value=r.delta=t.responseStart,r.value<0)return;r.entries=[t],e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},a=!0;try{e[t].call(o.exports,o,o.exports,n),a=!1}finally{a&&delete r[t]}return o.exports}return n.ab=t+"/",n(770)}()}).call(this,"/")},"3jzF":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.setConfig=function(e){n=e},t.default=void 0;t.default=function(){return n}},"85TV":function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.initScriptLoader=function(e){e.forEach(v)},t.default=void 0;var o=r("q1tI"),a=r("CM2u"),i=r("DqTX"),u=r("0G5g");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=new Map,d=new Set,p=["onLoad","dangerouslySetInnerHTML","children","onError","strategy"],m=function(e){var t=e.src,r=e.id,o=e.onLoad,a=void 0===o?function(){}:o,u=e.dangerouslySetInnerHTML,c=e.children,l=void 0===c?"":c,s=e.strategy,m=void 0===s?"afterInteractive":s,v=e.onError,h=r||t;if(!h||!d.has(h)){if(f.has(t))return d.add(h),void f.get(t).then(a,v);var y=document.createElement("script"),g=new Promise((function(e,t){y.addEventListener("load",(function(t){e(),a&&a.call(this,t)})),y.addEventListener("error",(function(e){t(e)}))})).catch((function(e){v&&v(e)}));t&&f.set(t,g),d.add(h),u?y.innerHTML=u.__html||"":l?y.textContent="string"===typeof l?l:Array.isArray(l)?l.join(""):"":t&&(y.src=t);for(var b=0,E=Object.entries(e);b<E.length;b++){var S=n(E[b],2),w=S[0],_=S[1];if(void 0!==_&&!p.includes(w)){var x=i.DOMAttributeNames[w]||w.toLowerCase();y.setAttribute(x,_)}}y.setAttribute("data-nscript",m),document.body.appendChild(y)}};function v(e){var t=e.strategy,r=void 0===t?"afterInteractive":t;"afterInteractive"===r?m(e):"lazyOnload"===r&&window.addEventListener("load",(function(){u.requestIdleCallback((function(){return m(e)}))}))}var h=function(e){var t=e.src,r=void 0===t?"":t,n=e.onLoad,i=void 0===n?function(){}:n,c=(e.dangerouslySetInnerHTML,e.strategy),f=void 0===c?"afterInteractive":c,p=e.onError,v=s(e,["src","onLoad","dangerouslySetInnerHTML","strategy","onError"]),h=o.useContext(a.HeadManagerContext),y=h.updateScripts,g=h.scripts,b=h.getIsSsr;return o.useEffect((function(){"afterInteractive"===f?m(e):"lazyOnload"===f&&function(e){"complete"===document.readyState?u.requestIdleCallback((function(){return m(e)})):window.addEventListener("load",(function(){u.requestIdleCallback((function(){return m(e)}))}))}(e)}),[e,f]),"beforeInteractive"===f&&(y?(g.beforeInteractive=(g.beforeInteractive||[]).concat([l({src:r,onLoad:i,onError:p},v)]),y(g)):b&&b()?d.add(v.id||r):b&&!b()&&m(e)),null};t.default=h},BMP1:function(e,t,r){"use strict";var n=r("IKlv");window.next={version:n.version,get router(){return n.router},emitter:n.emitter,render:n.render,renderError:n.renderError},n.initNext().catch(console.error)},CQWR:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=void 0;var o,a=(o=r("q1tI"))&&o.__esModule?o:{default:o},i=r("i8i4");t.Portal=function(e){var t=e.children,r=e.type,o=a.default.useRef(null),u=a.default.useState(),c=n(u,2)[1];return a.default.useEffect((function(){return o.current=document.createElement(r),document.body.appendChild(o.current),c({}),function(){o.current&&document.body.removeChild(o.current)}}),[r]),o.current?i.createPortal(t,o.current):null}},DqTX:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){"link"===e.type&&e.props["data-optimized-fonts"]&&!document.querySelector('style[data-href="'.concat(e.props["data-href"],'"]'))&&(e.props.href=e.props["data-href"],e.props["data-href"]=void 0);var t=n[e.type]||[];t.push(e),n[e.type]=t}));var a=n.title?n.title[0]:null,i="";if(a){var u=a.props.children;i="string"===typeof u?u:Array.isArray(u)?u.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var a=Number(n.content),i=[],u=0,c=n.previousElementSibling;u<a;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var l=t.map(o).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return r.insertBefore(e,n)})),n.content=(a-i.length+l.length).toString()}(e,n[e]||[])}))}}))}}},t.DOMAttributeNames=void 0;var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){var t=e.type,r=e.props,o=document.createElement(t);for(var a in r)if(r.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==r[a]){var i=n[a]||a.toLowerCase();"script"!==t||"async"!==i&&"defer"!==i&&"noModule"!==i?o.setAttribute(i,r[a]):o[i]=!!r[a]}var u=r.children,c=r.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),o}t.DOMAttributeNames=n},IKlv:function(e,t,r){"use strict";var n=r("o0o1"),o=r("lwsE"),a=r("W8MJ"),i=r("7W2i"),u=r("a1gu"),c=r("Nsbk"),l=r("J4zp");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.initNext=function(){return ue.apply(this,arguments)},t.render=le,t.renderError=se,t.emitter=t.version=t.router=void 0,r("0sNQ");var f=O(r("q1tI")),d=O(r("i8i4")),p=r("CM2u"),m=O(r("Gz+c")),v=r("DOCy"),h=r("Sgtc"),y=r("K6cs"),g=r("IBeh"),b=r("3jzF"),E=r("52bY"),S=r("CQWR"),w=O(r("DqTX")),_=O(r("zmvN")),x=O(r("bGXG")),P=r("oAez"),T=r("nOHt");function C(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){C(a,n,o,i,u,"next",e)}function u(e){C(a,n,o,i,u,"throw",e)}i(void 0)}))}}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){return e&&e.__esModule?e:{default:e}}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){A(e,t,r[t])}))}return e}var k=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=k;t.version="11.1.2";var N=function(e){return[].slice.call(e)},I=k.props,R=k.err,j=k.page,D=k.query,q=k.buildId,B=k.assetPrefix,F=k.runtimeConfig,H=k.dynamicIds,z=k.isFallback,G=k.locale,X=k.locales,W=k.domainLocales,J=k.isPreview,U=k.defaultLocale,Q=B||"";r.p="".concat(Q,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var V=E.getURL();(h.hasBasePath(V)&&(V=h.delBasePath(V)),k.scriptLoader)&&(0,r("85TV").initScriptLoader)(k.scriptLoader);var K=new _.default(q,Q),Y=function(e){var t=l(e,2),r=t[0],n=t[1];return K.routeLoader.onEntrypoint(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return Y(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=Y;var $,Z,ee,te,re=w.default(),ne=document.getElementById("__next");t.router=Z,re.getIsSsr=function(){return Z.isSsr};var oe,ae=function(e){i(r,e);var t=s(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),Z.isSsr&&"/404"!==j&&"/_error"!==j&&(z||k.nextExport&&(y.isDynamicRoute(Z.pathname)||location.search)||I&&I.__N_SSG&&location.search)&&Z.replace(Z.pathname+"?"+String(g.assign(g.urlQueryToSearchParams(Z.query),new URLSearchParams(location.search))),V,{_h:1,shallow:!z})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(f.default.Component),ie=m.default();function ue(){return(ue=L(n.mark((function e(){var r,o,a,i,u,c,l=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>0&&void 0!==l[0]?l[0]:{},r=R,e.prev=3,e.next=6,K.routeLoader.whenEntrypoint("/_app");case 6:if(!("error"in(o=e.sent))){e.next=9;break}throw o.error;case 9:a=o.component,i=o.exports,ee=a,i&&i.reportWebVitals&&(te=function(e){var t,r=e.id,n=e.name,o=e.startTime,a=e.value,u=e.duration,c=e.entryType,l=e.entries,s="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);l&&l.length&&(t=l[0].startTime),i.reportWebVitals({id:r||s,name:n,startTime:o||t,value:null==a?u:a,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),e.next=16;break;case 16:return e.next=18,K.routeLoader.whenEntrypoint(j);case 18:e.t0=e.sent;case 19:if(!("error"in(u=e.t0))){e.next=22;break}throw u.error;case 22:oe=u.component,e.next=27;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(3),r=e.t1;case 32:if(!window.__NEXT_PRELOADREADY){e.next=36;break}return e.next=36,window.__NEXT_PRELOADREADY(H);case 36:return t.router=Z=T.createRouter(j,D,V,{initialProps:I,pageLoader:K,App:ee,Component:oe,wrapApp:ye,err:r,isFallback:Boolean(z),subscription:function(e,t,r){return le(Object.assign({},e,{App:t,scroll:r}))},locale:G,locales:X,defaultLocale:U,domainLocales:W,isPreview:J}),le(c={App:ee,initial:!0,Component:oe,props:I,err:r}),e.abrupt("return",ie);case 43:return e.abrupt("return",{emitter:ie,renderCtx:c});case 44:case"end":return e.stop()}}),e,null,[[3,29]])})))).apply(this,arguments)}function ce(){return(ce=L(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,se(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ge(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,se(M({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function le(e){return ce.apply(this,arguments)}function se(e){var t=e.App,n=e.err;return console.error(n),console.error("A client-side exception has occurred, see here for more info: https://nextjs.org/docs/messages/client-side-exception-occurred"),K.loadPage("/_error").then((function(e){var t=e.page,n=e.styleSheets;return(null===he||void 0===he?void 0:he.Component)===t?Promise.resolve().then((function(){return function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r("/a9y"))})).then((function(e){return{ErrorComponent:e.default,styleSheets:[]}})):{ErrorComponent:t,styleSheets:n}})).then((function(r){var o=r.ErrorComponent,a=r.styleSheets,i=ye(t),u={Component:o,AppTree:i,router:Z,ctx:{err:n,pathname:j,query:D,asPath:V,AppTree:i}};return Promise.resolve(e.props?e.props:E.loadGetInitialProps(t,u)).then((function(t){return ge(M({},e,{err:n,Component:o,styleSheets:a,props:t}))}))}))}t.emitter=ie;var fe=!0;function de(){E.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),te&&performance.getEntriesByName("Next.js-hydration").forEach(te),me())}function pe(){if(E.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),te&&(performance.getEntriesByName("Next.js-render").forEach(te),performance.getEntriesByName("Next.js-route-change-to-render").forEach(te)),me(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function me(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ve(e){var t=e.children;return f.default.createElement(ae,{fn:function(e){return se({App:ee,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},f.default.createElement(v.RouterContext.Provider,{value:T.makePublicRouterInstance(Z)},f.default.createElement(p.HeadManagerContext.Provider,{value:re},t)))}var he,ye=function(e){return function(t){var r=M({},t,{Component:oe,err:R,router:Z});return f.default.createElement(ve,null,f.default.createElement(e,Object.assign({},r)))}};function ge(e){var t=e.App,r=e.Component,n=e.props,o=e.err,a="initial"in e?void 0:e.styleSheets;r=r||he.Component;var i=M({},n=n||he.props,{Component:r,err:o,router:Z});he=i;var u,c=!1,l=new Promise((function(e,t){$&&$(),u=function(){$=null,e()},$=function(){c=!0,$=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));function s(){u()}!function(){if(!a)return!1;var e=N(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")}))),r=document.querySelector("noscript[data-n-css]"),n=null===r||void 0===r?void 0:r.getAttribute("data-n-css");a.forEach((function(e){var r=e.href,o=e.text;if(!t.has(r)){var a=document.createElement("style");a.setAttribute("data-n-href",r),a.setAttribute("media","x"),n&&a.setAttribute("nonce",n),document.head.appendChild(a),a.appendChild(document.createTextNode(o))}}))}();var p=f.default.createElement(f.default.Fragment,null,f.default.createElement(Ee,{callback:function(){if(a&&!c){for(var t=new Set(a.map((function(e){return e.href}))),r=N(document.querySelectorAll("style[data-n-href]")),n=r.map((function(e){return e.getAttribute("data-n-href")})),o=0;o<n.length;++o)t.has(n[o])?r[o].removeAttribute("media"):r[o].setAttribute("media","x");var i=document.querySelector("noscript[data-n-css]");i&&a.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(i.parentNode.insertBefore(r,i.nextSibling),i=r)})),N(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}e.scroll&&window.scrollTo(e.scroll.x,e.scroll.y)}}),f.default.createElement(ve,null,f.default.createElement(t,Object.assign({},i)),f.default.createElement(S.Portal,{type:"next-route-announcer"},f.default.createElement(P.RouteAnnouncer,null))));return function(e,t){E.ST&&performance.mark("beforeRender");var r=t(fe?de:pe);fe?(d.default.hydrate(r,e),fe=!1):d.default.render(r,e)}(ne,(function(e){return f.default.createElement(be,{callbacks:[e,s]},f.default.createElement(f.default.StrictMode,null,p))})),l}function be(e){var t=e.callbacks,r=e.children;return f.default.useLayoutEffect((function(){return t.forEach((function(e){return e()}))}),[t]),f.default.useEffect((function(){x.default(te)}),[]),r}function Ee(e){var t=e.callback;return f.default.useLayoutEffect((function(){return t()}),[t]),null}},bGXG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r("1yEr"),a=(location.href,!1);function i(e){n&&n(e)}t.default=function(e){n=e,a||(a=!0,o.getCLS(i),o.getFID(i),o.getFCP(i),o.getLCP(i),o.getTTFB(i))}},oAez:function(e,t,r){"use strict";var n=r("J4zp");Object.defineProperty(t,"__esModule",{value:!0}),t.RouteAnnouncer=u,t.default=void 0;var o,a=(o=r("q1tI"))&&o.__esModule?o:{default:o},i=r("nOHt");function u(){var e=i.useRouter().asPath,t=a.default.useState(""),r=n(t,2),o=r[0],u=r[1],c=a.default.useRef(!1);return a.default.useEffect((function(){if(c.current){var t,r=document.querySelector("h1");r&&(t=r.innerText||r.textContent),t||(t=document.title?document.title:e),u(t)}else c.current=!0}),[e]),a.default.createElement("p",{"aria-live":"assertive",id:"__next-route-announcer__",role:"alert",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},o)}var c=u;t.default=c},zmvN:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=r("Sgtc"),u=(a=r("HUwO"))&&a.__esModule?a:{default:a},c=r("K6cs"),l=r("2BLr"),s=r("X24+"),f=r("Nh2W");var d=function(){function e(t,r){n(this,e),this.routeLoader=f.createRouteLoader(r),this.buildId=t,this.assetPrefix=r,this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return f.getClientBuildManifest().then((function(e){return e.sortedPages}))}},{key:"getDataHref",value:function(e,t,r,n){var o=this,a=l.parseRelativeUrl(e),f=a.pathname,d=a.query,p=a.search,m=l.parseRelativeUrl(t).pathname,v=function(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}(f),h=function(e){var t=u.default(s.removePathTrailingSlash(i.addLocale(e,n)),".json");return i.addBasePath("/_next/data/".concat(o.buildId).concat(t).concat(r?"":p))},y=c.isDynamicRoute(v),g=y?i.interpolateAs(f,m,d).result:"";return y?g&&h(g):h(v)}},{key:"_isSsg",value:function(e){return this.promisedSsgManifest.then((function(t){return t.has(e)}))}},{key:"loadPage",value:function(e){return this.routeLoader.loadRoute(e).then((function(e){if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((function(e){return{href:e.href,text:e.content}}))};throw e.error}))}},{key:"prefetch",value:function(e){return this.routeLoader.prefetch(e)}}]),e}();t.default=d}},[["BMP1",1,0,2]]]);