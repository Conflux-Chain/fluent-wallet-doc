(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1342,2565],{2565:function(e,r){var n,s,t;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,s=[e],void 0===(t="function"==typeof(n=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",n="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class t extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=e=>e&&"object"==typeof e&&"function"==typeof e.then,i=(r,n)=>(...s)=>{e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):n.singleCallbackArg||s.length<=1&&!1!==n.singleCallbackArg?r.resolve(s[0]):r.resolve(s)},o=e=>1==e?"argument":"arguments",g=(e,r)=>function(n,...s){if(s.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${s.length}`);if(s.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${s.length}`);return new Promise(((t,a)=>{if(r.fallbackToNoCallback)try{n[e](...s,i({resolve:t,reject:a},r))}catch(o){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,o),n[e](...s),r.fallbackToNoCallback=!1,r.noCallback=!0,t()}else r.noCallback?(n[e](...s),t()):n[e](...s,i({resolve:t,reject:a},r))}))},m=(e,r,n)=>new Proxy(r,{apply:(r,s,t)=>n.call(s,e,...t)});let l=Function.call.bind(Object.prototype.hasOwnProperty);const A=(e,r={},n={})=>{let s=Object.create(null),t={has:(r,n)=>n in e||n in s,get(t,a,i){if(a in s)return s[a];if(!(a in e))return;let o=e[a];if("function"==typeof o)if("function"==typeof r[a])o=m(e,e[a],r[a]);else if(l(n,a)){let r=g(a,n[a]);o=m(e,e[a],r)}else o=o.bind(e);else if("object"==typeof o&&null!==o&&(l(r,a)||l(n,a)))o=A(o,r[a],n[a]);else{if(!l(n,"*"))return Object.defineProperty(s,a,{configurable:!0,enumerable:!0,get:()=>e[a],set(r){e[a]=r}}),o;o=A(o,r[a],n["*"])}return s[a]=o,o},set:(r,n,t,a)=>(n in s?s[n]=t:e[n]=t,!0),defineProperty:(e,r,n)=>Reflect.defineProperty(s,r,n),deleteProperty:(e,r)=>Reflect.deleteProperty(s,r)},a=Object.create(e);return new Proxy(a,t)},c=e=>({addListener(r,n,...s){r.addListener(e.get(n),...s)},hasListener:(r,n)=>r.hasListener(e.get(n)),removeListener(r,n){r.removeListener(e.get(n))}}),u=new t((e=>"function"!=typeof e?e:function(r){const n=A(r,{},{getContent:{minArgs:0,maxArgs:0}});e(n)}));let x=!1;const d=new t((e=>"function"!=typeof e?e:function(r,s,t){let i,o,g=!1,m=new Promise((e=>{i=function(r){x||(console.warn(n,(new Error).stack),x=!0),g=!0,e(r)}}));try{o=e(r,s,i)}catch(c){o=Promise.reject(c)}const l=!0!==o&&a(o);if(!0!==o&&!l&&!g)return!1;const A=e=>{e.then((e=>{t(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",t({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return A(l?o:m),!0})),f=({reject:n,resolve:s},t)=>{e.runtime.lastError?e.runtime.lastError.message===r?s():n(new Error(e.runtime.lastError.message)):t&&t.__mozWebExtensionPolyfillReject__?n(new Error(t.message)):s(t)},p=(e,r,n,...s)=>{if(s.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${o(r.minArgs)} for ${e}(), got ${s.length}`);if(s.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${o(r.maxArgs)} for ${e}(), got ${s.length}`);return new Promise(((e,r)=>{const t=f.bind(null,{resolve:e,reject:r});s.push(t),n.sendMessage(...s)}))},w={devtools:{network:{onRequestFinished:c(u)}},runtime:{onMessage:c(d),onMessageExternal:c(d),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},A(e,w,s)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=s(chrome)}else e.exports=browser})?n.apply(r,s):n)||(e.exports=t)},1342:function(e,r,n){"use strict";n.r(r),n.d(r,{badge:function(){return a},browser:function(){return c},idle:function(){return i},notification:function(){return t},popup:function(){return s},tab:function(){return o}});var s={};n.r(s),n.d(s,{onFocusChanged:function(){return y},onRemoved:function(){return C},remove:function(){return T},removePopup:function(){return b},show:function(){return w}});var t={};n.r(t),n.d(t,{create:function(){return P}});var a={};n.r(a),n.d(a,{clear:function(){return L},set:function(){return E}});var i={};n.r(i),n.d(i,{isIdle:function(){return j},isLocked:function(){return S},listen:function(){return I},query:function(){return F}});var o={};n.r(o),n.d(o,{getCurrent:function(){return N}});var g,m,l=n(4795),A=n(7162),c=n(2565),u=n(7070),x=null,d=null,f=function(){var e=(0,l.Z)(A.mark((function e(r){return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=7;break}x=function(){return f(r)},d=function(e){e===r&&(c.windows.onFocusChanged.hasListener(x)&&c.windows.onFocusChanged.removeListener(x),x=null,c.windows.onRemoved.hasListener(d)&&c.windows.onRemoved.removeListener(d),d=null)},c.windows.onRemoved.addListener(d),c.windows.onFocusChanged.addListener(x),e.next=19;break;case 7:return e.prev=7,e.next=10,c.windows.get(r);case 10:if(!e.sent){e.next=14;break}return e.next=14,c.windows.update(r,{focused:!0});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),x&&(c.windows.onFocusChanged.hasListener(x)&&c.windows.onFocusChanged.removeListener(x),x=null);case 19:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,l.Z)(A.mark((function e(r){var n,s,t,a;return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.url,s=r.alwaysOnTop,e.next=3,c.windows.getLastFocused({windowTypes:["normal"]}).catch((function(){}));case 3:return t=e.sent,e.next=6,c.windows.create({type:"popup",focused:!0,url:n,width:360,height:620,left:null==t?void 0:t.left,top:null==t?void 0:t.top});case 6:return a=e.sent,s&&f(a.id),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,l.Z)(A.mark((function e(r){var n,s,t,a,i,o,g,m;return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(t=void 0===r?{}:r).url,i=void 0===a?"popup.html":a,o=t.alwaysOnTop,g=void 0!==o&&o,null!=c&&null!=(n=c.windows)&&n.getAll){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,c.windows.getAll();case 5:if(e.t0=s=e.sent.filter((function(e){return"popup"===e.type})),null!=e.t0){e.next=10;break}e.t1=void 0,e.next=11;break;case 10:e.t1=s[0];case 11:if(!(m=e.t1)){e.next=17;break}return e.next=15,c.windows.update(m.id,{focused:!0});case 15:e.next=20;break;case 17:return e.next=19,p({url:i,alwaysOnTop:g});case 19:m=e.sent;case 20:return e.abrupt("return",m);case 21:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),b=function(){var e=(0,l.Z)(A.mark((function e(){var r,n,s;return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=c&&null!=(r=c.windows)&&r.getAll){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,c.windows.getAll();case 5:if(e.t0=n=e.sent.filter((function(e){return"popup"===e.type})),null!=e.t0){e.next=10;break}e.t1=void 0,e.next=11;break;case 10:e.t1=n[0];case 11:if(!(s=e.t1)){e.next=15;break}return e.next=15,T(s.id);case 15:return e.abrupt("return",!0);case 18:e.prev=18,e.t2=e.catch(2);case 20:return e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),h=[],v=[];null!=c&&null!=(g=c.windows)&&g.onFocusChanged&&(c.windows.onFocusChanged.addListener((function(e){h=h.reduce((function(r,n){try{if(n(e))return r.concat(n)}catch(s){}return r}),[])})),c.windows.onRemoved.addListener((function(e){v=v.reduce((function(r,n){try{if(!0===n(e))return r.concat(n)}catch(s){}return r}),[])})));var k,y=function(e,r){if(!(0,u.mf)(r))throw new Error("Invalid callback, must be a function");h.push((function(n){return e!==n||r(n)}))},C=function(e,r){if(!(0,u.mf)(r))throw new Error("Invalid callback, must be a function");v.push((function(n){return e!==n||r(n)}))},T=null==(m=c.windows)?void 0:m.remove,P=function(e){void 0===e&&(e={});var r=e,n=r.id,s=void 0===n?"__FLUENT_NOTIFICATION__":n,t=r.type,a=void 0===t?"basic":t,i=r.message,o=void 0===i?"":i,g=r.title,m=void 0===g?"Fluent wallet":g,l=r.iconUrl,A=void 0===l?"images/icon-64.png":l;return c.notifications.create(s,Object.assign({},e,{type:a,message:o,title:m,iconUrl:A}))},E=function(e){var r=e.text,n=void 0===r?"":r,s=e.color,t=void 0===s?"green":s;return Promise.all([c.browserAction.setBadgeText({text:n}),c.browserAction.setBadgeBackgroundColor({color:t})])},L=function(){return c.browserAction.setBadgeText({text:""})};null==c||null==(k=c.idle)||k.setDetectionInterval(15);var F=function(){return c.idle.queryState(15)},S=function(){var e=(0,l.Z)(A.mark((function e(){return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.t0=e.sent,e.abrupt("return","locked"===e.t0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,l.Z)(A.mark((function e(){return A.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.t0=e.sent,e.abrupt("return","idle"===e.t0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){c.idle.onStateChanged.addListener((function(r){return(null==r?void 0:r.newState)&&"active"!==(null==r?void 0:r.newState)&&e(r.newState)}))},N=function(){return c.tabs.query({active:!0})}}}]);