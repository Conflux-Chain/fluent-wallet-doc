"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3085],{71401:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(2784),l=n(6277),i=n(87669),c=n(30876),s=n(78751),r=n(43833),m=n(58024),o="mdxPageWrapper_1Rbk";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,N=n.hide_table_of_contents,g=d.permalink;return t.createElement(i.Z,{title:v,description:u,permalink:g,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!N&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!N&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},43833:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(28427),l=n(84397),i=n(2784),c=n(6277),s=n(19519),r="tableOfContents_2Tf-",m=["className"];var o=function(e){var a=e.className,n=(0,l.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},19519:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(28427),l=n(84397),i=n(2784),c=n(58024),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,g=(0,l.Z)(e,s),k=(0,c.LU)(),C=null!=f?f:k.tableOfContents.minHeadingLevel,_=null!=N?N:k.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,c.Si)(h),i.createElement(r,(0,t.Z)({toc:p,className:m,linkClassName:d},g))}}}]);