(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{85:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(127),r=t(220),o=t(120),c=t(149),m=t(117),g=t(115);function i({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(g.usePluralForm)();return a=>e(a,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return l.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:s}=e,{allTagsPath:u,name:p,count:d}=a;return l.a.createElement(n.a,{title:`Posts tagged "${p}"`,description:`Blog | Tagged "${p}"`,wrapperClassName:g.ThemeClassNames.wrapper.blogPages,pageClassName:g.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:s})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(i,{count:d,tagName:p})),l.a.createElement(o.a,{href:u},l.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((({content:e})=>l.a.createElement(r.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.a.createElement(e,null)))))))))}}}]);