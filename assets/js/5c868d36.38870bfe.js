(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{109:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return a?n.a.createElement(m,i(i({ref:t},p),{},{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(109),n=(a(0),a(113));const o={sidebar_position:1},c={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/fluent-wallet-doc/docs/tutorial-basics/create-a-page",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-basics/create-a-page.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/fluent-wallet-doc/docs/intro"},next:{title:"Create a Document",permalink:"/fluent-wallet-doc/docs/tutorial-basics/create-a-document"}},i=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],l={toc:i};function p({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Add ",Object(n.b)("strong",{parentName:"p"},"Markdown or React")," files to ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages")," to create a ",Object(n.b)("strong",{parentName:"p"},"standalone page"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/foo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),Object(n.b)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),Object(n.b)("p",null,"Create a file at ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react'\nimport Layout from '@theme/Layout'\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  )\n}\n")),Object(n.b)("p",null,"A new page is now available at ",Object(n.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),Object(n.b)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),Object(n.b)("p",null,"Create a file at ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),Object(n.b)("p",null,"A new page is now available at ",Object(n.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}p.isMDXComponent=!0}}]);