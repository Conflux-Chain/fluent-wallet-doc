(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,g=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(g,c(c({ref:t},u),{},{components:r})):a.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(109),a=(r(0),r(112));const o={sidebar_position:3},i={unversionedId:"tutorial-basics/create-a-blog-post",id:"tutorial-basics/create-a-blog-post",isDocsHomePage:!1,title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/tutorial-basics/create-a-blog-post.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-blog-post",permalink:"/fluent-wallet-doc/docs/tutorial-basics/create-a-blog-post",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-basics/create-a-blog-post.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/fluent-wallet-doc/docs/tutorial-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/fluent-wallet-doc/docs/tutorial-basics/markdown-features"}},c=[{value:"Create your first Post",id:"create-your-first-post",children:[]}],s={toc:c};function u({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Docusaurus creates a ",Object(a.b)("strong",{parentName:"p"},"page for each blog post"),", but also a ",Object(a.b)("strong",{parentName:"p"},"blog index page"),", a ",Object(a.b)("strong",{parentName:"p"},"tag system"),", an ",Object(a.b)("strong",{parentName:"p"},"RSS")," feed..."),Object(a.b)("h2",{id:"create-your-first-post"},"Create your first Post"),Object(a.b)("p",null,"Create a file at ",Object(a.b)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthor: Steven Hansel\nauthor_title: Docusaurus Contributor\nauthor_url: https://github.com/ShinteiMai\nauthor_image_url: https://github.com/ShinteiMai.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),Object(a.b)("p",null,"A new blog post is now available at ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."))}u.isMDXComponent=!0}}]);