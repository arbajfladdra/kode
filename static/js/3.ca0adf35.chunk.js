(this["webpackJsonpreact-kode"]=this["webpackJsonpreact-kode"]||[]).push([[3],{13:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return p})),n.d(e,"getFCP",(function(){return S})),n.d(e,"getFID",(function(){return k})),n.d(e,"getLCP",(function(){return F})),n.d(e,"getTTFB",(function(){return C}));var i,a,r,o,u=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){if("first-input"===t&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},f=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(t,e,n){var i;return function(){e.value>=0&&(n||d.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},p=function(t,e){var n,i=u("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=c("layout-shift",a);r&&(n=m(t,i,e),f((function(){r.takeRecords().map(a),n()})),s((function(){i=u("CLS",0),n=m(t,i,e)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){f((function(t){var e=t.timeStamp;v=e}),!0)},g=function(){return v<0&&(v=l(),h(),s((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},S=function(t,e){var n,i=g(),a=u("FCP"),r=function(t){"first-contentful-paint"===t.name&&(f&&f.disconnect(),t.startTime<i.timeStamp&&(a.value=t.startTime,a.entries.push(t),d.add(a),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",r);(o||f)&&(n=m(t,a,e),o&&r(o),s((function(i){a=u("FCP"),n=m(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))})))},y={passive:!0,capture:!0},E=new Date,w=function(t,e){i||(i=e,a=t,r=new Date,b(removeEventListener),L())},L=function(){if(a>=0&&a<r-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(e){e(t)})),o=[]}},T=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){w(t,e),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(e,t):w(e,t)}},b=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,y)}))},k=function(t,e){var n,r=g(),p=u("FID"),v=function(t){t.startTime<r.timeStamp&&(p.value=t.processingStart-t.startTime,p.entries.push(t),d.add(p),n())},l=c("first-input",v);n=m(t,p,e),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&s((function(){var r;p=u("FID"),n=m(t,p,e),o=[],a=-1,i=null,b(addEventListener),r=v,o.push(r),L()}))},F=function(t,e){var n,i=g(),a=u("LCP"),r=function(t){var e=t.startTime;e<i.timeStamp&&(a.value=e,a.entries.push(t)),n()},o=c("largest-contentful-paint",r);if(o){n=m(t,a,e);var p=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach((function(t){addEventListener(t,p,{once:!0,capture:!0})})),f(p,!0),s((function(i){a=u("LCP"),n=m(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))}))}},C=function(t){var e,n=u("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();if(n.value=n.delta=e.responseStart,n.value<0)return;n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.ca0adf35.chunk.js.map