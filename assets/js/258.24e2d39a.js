(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[258,2565],{72565:function(e,r){var n,t,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,t=[e],n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",n="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",t=e=>{const t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(t).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=e=>e&&"object"==typeof e&&"function"==typeof e.then,i=(r,n)=>(...t)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):n.singleCallbackArg||t.length<=1&&!1!==n.singleCallbackArg?r.resolve(t[0]):r.resolve(t)},o=e=>1==e?"argument":"arguments",g=(e,r)=>function(n,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise(((s,a)=>{if(r.fallbackToNoCallback)try{n[e](...t,i({resolve:s,reject:a},r))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,o),n[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,s()}else r.noCallback?(n[e](...t),s()):n[e](...t,i({resolve:s,reject:a},r))}))},m=(e,r,n)=>new Proxy(r,{apply:(r,t,s)=>n.call(t,e,...s)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const c=(e,r={},n={})=>{let t=Object.create(null),s={has:(r,n)=>n in e||n in t,get(s,a,i){if(a in t)return t[a];if(!(a in e))return;let o=e[a];if("function"==typeof o)if("function"==typeof r[a])o=m(e,e[a],r[a]);else if(l(n,a)){let r=g(a,n[a]);o=m(e,e[a],r)}else o=o.bind(e);else if("object"==typeof o&&null!==o&&(l(r,a)||l(n,a)))o=c(o,r[a],n[a]);else{if(!l(n,"*"))return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:()=>e[a],set(r){e[a]=r}}),o;o=c(o,r[a],n["*"])}return t[a]=o,o},set:(r,n,s,a)=>(n in t?t[n]=s:e[n]=s,!0),defineProperty:(e,r,n)=>Reflect.defineProperty(t,r,n),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)},a=Object.create(e);return new Proxy(a,s)},A=e=>({addListener(r,n,...t){r.addListener(e.get(n),...t)},hasListener:(r,n)=>r.hasListener(e.get(n)),removeListener(r,n){r.removeListener(e.get(n))}}),u=new s((e=>"function"!=typeof e?e:function(r){const n=c(r,{},{getContent:{minArgs:0,maxArgs:0}});e(n)}));let d=!1;const x=new s((e=>"function"!=typeof e?e:function(r,t,s){let i,o,g=!1,m=new Promise((e=>{i=function(r){d||(console.warn(n,(new Error).stack),d=!0),g=!0,e(r)}}));try{o=e(r,t,i)}catch(A){o=Promise.reject(A)}const l=!0!==o&&a(o);if(!0!==o&&!l&&!g)return!1;const c=e=>{e.then((e=>{s(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",s({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return c(l?o:m),!0})),f=({reject:n,resolve:t},s)=>{e.runtime.lastError?e.runtime.lastError.message===r?t():n(new Error(e.runtime.lastError.message)):s&&s.__mozWebExtensionPolyfillReject__?n(new Error(s.message)):t(s)},p=(e,r,n,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise(((e,r)=>{const s=f.bind(null,{resolve:e,reject:r});t.push(s),n.sendMessage(...t)}))},w={devtools:{network:{onRequestFinished:A(u)}},runtime:{onMessage:A(x),onMessageExternal:A(x),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},c(e,w,t)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=t(chrome)}else e.exports=browser},void 0===(s="function"==typeof n?n.apply(r,t):n)||(e.exports=s)},40258:function(e,r,n){"use strict";n.r(r),n.d(r,{badge:function(){return a},browser:function(){return A},commands:function(){return I},idle:function(){return i},notifications:function(){return s},popup:function(){return t},runtime:function(){return g},tab:function(){return o}});var t={};n.r(t),n.d(t,{onFocusChanged:function(){return k},onRemoved:function(){return y},remove:function(){return C},removePopup:function(){return b},show:function(){return w}});var s={};n.r(s),n.d(s,{create:function(){return P}});var a={};n.r(a),n.d(a,{clear:function(){return S},set:function(){return L}});var i={};n.r(i),n.d(i,{isIdle:function(){return M},isLocked:function(){return j},listen:function(){return R},query:function(){return F}});var o={};n.r(o),n.d(o,{getCurrent:function(){return $}});var g={};n.r(g),n.d(g,{reload:function(){return B}});var m,l=n(67927),c=n(5548),A=n(72565),u=n(7070),d=null,x=null,f=function(){var e=(0,l.Z)(c.mark((function e(r){return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=7;break}d=function(){return f(r)},x=function(e){e===r&&(A.windows.onFocusChanged.hasListener(d)&&A.windows.onFocusChanged.removeListener(d),d=null,A.windows.onRemoved.hasListener(x)&&A.windows.onRemoved.removeListener(x),x=null)},A.windows.onRemoved.addListener(x),A.windows.onFocusChanged.addListener(d),e.next=19;break;case 7:return e.prev=7,e.next=10,A.windows.get(r);case 10:if(!e.sent){e.next=14;break}return e.next=14,A.windows.update(r,{focused:!0});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),d&&(A.windows.onFocusChanged.hasListener(d)&&A.windows.onFocusChanged.removeListener(d),d=null);case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,l.Z)(c.mark((function e(r){var n,t,s,a;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.url,t=r.alwaysOnTop,e.next=3,A.windows.getLastFocused({windowTypes:["normal"]}).catch((function(){}));case 3:return s=e.sent,e.next=6,A.windows.create({type:"popup",focused:!0,url:n,width:372,height:628,left:null==s?void 0:s.left,top:null==s?void 0:s.top});case 6:return a=e.sent,t&&f(a.id),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,l.Z)(c.mark((function e(r){var n,t,s,a,i,o,g,m,l,u,d;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r&&(r={}),a=(s=r).url,i=s.alwaysOnTop,o=void 0!==i&&i,g=s.mode,m=void 0===g?{}:g,a=a||(m.isProd?"popup/notification.html":"notification.html"),null!=A&&null!=(n=A.windows)&&n.getAll){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,A.windows.getAll();case 7:if(e.t0=t=e.sent.filter((function(e){return"popup"===e.type})),null!=e.t0){e.next=12;break}e.t1=void 0,e.next=13;break;case 12:e.t1=t[0];case 13:if(!(l=e.t1)){e.next=36;break}return e.prev=15,e.next=18,A.windows.update(l.id,{focused:!0});case 18:e.next=34;break;case 20:return e.prev=20,e.t2=e.catch(15),e.t3=l.id,e.next=25,A.windows.getAll();case 25:if(e.t4=u=e.sent.filter((function(e){return"popup"===e.type})),null!=e.t4){e.next=30;break}e.t5=void 0,e.next=31;break;case 30:e.t5=null==(d=u[0])?void 0:d.id;case 31:if(e.t6=e.t5,e.t3===e.t6){e.next=34;break}w(r);case 34:e.next=39;break;case 36:return e.next=38,p({url:a,alwaysOnTop:o});case 38:l=e.sent;case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e,null,[[15,20]])})));return function(r){return e.apply(this,arguments)}}(),b=function(){var e=(0,l.Z)(c.mark((function e(){var r,n,t;return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=A&&null!=(r=A.windows)&&r.getAll){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,A.windows.getAll();case 5:if(e.t0=n=e.sent.filter((function(e){return"popup"===e.type})),null!=e.t0){e.next=10;break}e.t1=void 0,e.next=11;break;case 10:e.t1=n[0];case 11:if(!(t=e.t1)){e.next=15;break}return e.next=15,C(t.id);case 15:return e.abrupt("return",!0);case 18:e.prev=18,e.t2=e.catch(2);case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),h=[],v=[];null!=A&&null!=(m=A.windows)&&m.onFocusChanged&&(A.windows.onFocusChanged.addListener((function(e){h=h.reduce((function(r,n){try{if(n(e))return r.concat(n)}catch(t){}return r}),[])})),A.windows.onRemoved.addListener((function(e){v=v.reduce((function(r,n){try{if(!0===n(e))return r.concat(n)}catch(t){}return r}),[])})));var k=function(e,r){if(!(0,u.mf)(r))throw new Error("Invalid callback, must be a function");h.push((function(n){return e!==n||r(n)}))},y=function(e,r){if(!(0,u.mf)(r))throw new Error("Invalid callback, must be a function");v.push((function(n){if(e===n)try{return r(n)}catch(t){}return!0}))},C=function(){try{for(var e,r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return null==(e=A.windows)?void 0:e.remove.apply(e,n)}catch(s){}};function T(e){e.startsWith("https://")&&A.tabs.create({url:e})}function P(e,r){void 0===r&&(r={});var n=r,t=n.type,s=void 0===t?"basic":t,a=n.message,i=void 0===a?"":a,o=n.title,g=void 0===o?"Fluent wallet":o,m=n.iconUrl,l=void 0===m?"images/icon-64.png":m;return"undefined"!=typeof window&&"undefined"==typeof global&&(A.notifications.onClicked.hasListener(T)||A.notifications.onClicked.addListener(T)),A.notifications.create(null!=e?e:void 0,Object.assign({},r,{type:s,message:i,title:g,iconUrl:l}))}var E,L=function(e){var r=e.text,n=void 0===r?"":r,t=e.color,s=void 0===t?"#037DD6":t;return Promise.all([A.browserAction.setBadgeText({text:null==n?void 0:n.toString()}),A.browserAction.setBadgeBackgroundColor({color:s})])},S=function(){return A.browserAction.setBadgeText({text:""})};null==A||null==(E=A.idle)||E.setDetectionInterval(15);var F=function(){return A.idle.queryState(15)},j=function(){var e=(0,l.Z)(c.mark((function e(){return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.t0=e.sent,e.abrupt("return","locked"===e.t0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,l.Z)(c.mark((function e(){return c.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.t0=e.sent,e.abrupt("return","idle"===e.t0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){A.idle.onStateChanged.addListener((function(r){return(null==r?void 0:r.newState)&&"active"!==(null==r?void 0:r.newState)&&e(r.newState)}))},$=function(){return A.tabs.query({active:!0})};function B(){return A.runtime.reload()}var I=A.commands}}]);