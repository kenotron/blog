(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(149),i=t(155);a.default=function(){return n.a.createElement(i.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("article",{className:"content",style:{textAlign:"center"}},n.a.createElement("h1",{className:"content-title"},"Error 404"),n.a.createElement("section",{className:"content-body"},"Page not found, ",n.a.createElement(s.a,{to:"/"},"return home")," to start over"))))}},149:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var r=t(0),n=t.n(r),s=t(4),i=t.n(s),l=t(33),o=t.n(l);t.d(a,"a",function(){return o.a});t(154);var c=n.a.createContext({}),m=function(e){return n.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,a){e.exports={siteUrl:"https://gatsby.ghost.org",postsPerPage:12,siteTitleMeta:"Ghost Gatsby Starter",siteDescriptionMeta:"A starter template to build amazing static websites with Ghost and Gatbsy",shareImageWidth:1e3,shareImageHeight:523,shortTitle:"Ghost",siteIcon:"favicon.png",backgroundColor:"#e9e9e9",themeColor:"#15171A"}},154:function(e,a,t){var r;e.exports=(r=t(158))&&r.default||r},155:function(e,a,t){"use strict";t(34),t(163),t(35);var r=t(157),n=t(0),s=t.n(n),i=t(4),l=t.n(i),o=t(153),c=t.n(o),m=t(149),d=t(165),u=t.n(d),g=t(151),p=t.n(g),f=(t(166),function(e){var a=e.data,t=e.children,r=e.bodyClass,n=e.isHome,i=a.allGhostSettings.edges[0].node,l=i.twitter?"https://twitter.com/"+i.twitter.replace(/^@/,""):null,o=i.facebook?"https://www.facebook.com/"+i.facebook.replace(/^\//,""):null;return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement("html",{lang:i.lang}),s.a.createElement("body",{className:r})),s.a.createElement("div",{className:"viewport"},s.a.createElement("div",{className:"viewport-top"},s.a.createElement("header",{className:"site-head"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"site-mast"},s.a.createElement("div",{className:"site-mast-left"},s.a.createElement(m.a,{to:"/"},i.logo?s.a.createElement("img",{className:"site-logo",src:i.logo,alt:i.title}):s.a.createElement(u.a,{fixed:a.file.childImageSharp.fixed,alt:i.title}))),s.a.createElement("div",{className:"site-mast-right"},i.twitter&&s.a.createElement("a",{href:l,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/twitter.svg",alt:"Twitter"})),i.facebook&&s.a.createElement("a",{href:o,className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/facebook.svg",alt:"Facebook"})),s.a.createElement("a",{className:"site-nav-item",href:"https://feedly.com/i/subscription/feed/"+p.a.siteUrl+"/rss/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"site-nav-icon",src:"/images/icons/rss.svg",alt:"RSS Feed"})))),n?s.a.createElement("div",{className:"site-banner"},s.a.createElement("h1",{className:"site-banner-title"},i.title),s.a.createElement("p",{className:"site-banner-desc"},i.description)):null,s.a.createElement("nav",{className:"site-nav"},s.a.createElement("div",{className:"site-nav-left"},s.a.createElement(q,{data:i.navigation,navClass:"site-nav-item"})),s.a.createElement("div",{className:"site-nav-right"},s.a.createElement(m.a,{className:"site-nav-button",to:"/about"},"About"))))),s.a.createElement("main",{className:"site-main"},t)),s.a.createElement("div",{className:"viewport-bottom"},s.a.createElement("footer",{className:"site-foot"},s.a.createElement("div",{className:"site-foot-nav container"},s.a.createElement("div",{className:"site-foot-nav-left"},s.a.createElement(m.a,{to:"/"},i.title)," © 2019 — Published with ",s.a.createElement("a",{className:"site-foot-nav-item",href:"https://ghost.org",target:"_blank",rel:"noopener noreferrer"},"Ghost")),s.a.createElement("div",{className:"site-foot-nav-right"},s.a.createElement(q,{data:i.navigation,navClass:"site-foot-nav-item"})))))))});f.propTypes={children:l.a.node.isRequired,bodyClass:l.a.string,isHome:l.a.bool,data:l.a.shape({allGhostSettings:l.a.object.isRequired}).isRequired};var h=function(e){return s.a.createElement(m.b,{query:"2417764204",render:function(a){return s.a.createElement(f,Object.assign({data:a},e))},data:r})},v=(t(152),t(167)),E=t(161),b=function(e){var a=e.post,t="/"+a.slug+"/",r=Object(E.a)(a);return s.a.createElement(m.a,{to:t,className:"post-card"},s.a.createElement("header",{className:"post-card-header"},a.feature_image&&s.a.createElement("div",{className:"post-card-image",style:{backgroundImage:"url("+a.feature_image+")"}}),a.tags&&s.a.createElement("div",{className:"post-card-tags"}," ",s.a.createElement(v.Tags,{post:a,visibility:"public",autolink:!1})),a.featured&&s.a.createElement("span",null,"Featured"),s.a.createElement("h2",{className:"post-card-title"},a.title)),s.a.createElement("section",{className:"post-card-excerpt"},a.excerpt),s.a.createElement("footer",{className:"post-card-footer"},s.a.createElement("div",{className:"post-card-footer-left"},s.a.createElement("div",{className:"post-card-avatar"},a.primary_author.profile_image?s.a.createElement("img",{className:"author-profile-image",src:a.primary_author.profile_image,alt:a.primary_author.name}):s.a.createElement("img",{className:"default-avatar",src:"/images/icons/avatar.svg",alt:a.primary_author.name})),s.a.createElement("span",null,a.primary_author.name)),s.a.createElement("div",{className:"post-card-footer-right"},s.a.createElement("div",null,r))))};b.propTypes={post:l.a.shape({title:l.a.string.isRequired,feature_image:l.a.string,featured:l.a.bool,tags:l.a.arrayOf(l.a.shape({name:l.a.string})),excerpt:l.a.string.isRequired,primary_author:l.a.shape({name:l.a.string.isRequired,profile_image:l.a.string}).isRequired}).isRequired};var N=b,A=function(e){var a=e.pageContext,t=a.previousPagePath,r=a.nextPagePath,n=a.humanPageNumber,i=a.numberOfPages;return s.a.createElement("nav",{className:"pagination",role:"navigation"},s.a.createElement("div",null,t&&s.a.createElement(m.a,{to:t,rel:"prev"},"Previous")),i>1&&s.a.createElement("div",{className:"pagination-location"},"Page ",n," of ",i),s.a.createElement("div",null,r&&s.a.createElement(m.a,{to:r,rel:"next"},"Next")))};A.propTypes={pageContext:l.a.object.isRequired};var y=A,R=(t(75),function(e){var a=e.data,t=e.navClass;return s.a.createElement(s.a.Fragment,null,a.map(function(e,a){return e.url.match(/^\s?http(s?)/gi)?s.a.createElement("a",{className:t,href:e.url,key:a,target:"_blank",rel:"noopener noreferrer"},e.label):s.a.createElement(m.a,{className:t,to:e.url,key:a},e.label)}))});R.defaultProps={navClass:"site-nav-item"},R.propTypes={data:l.a.arrayOf(l.a.shape({label:l.a.string.isRequired,url:l.a.string.isRequired}).isRequired).isRequired,navClass:l.a.string};var q=R;t.d(a,"a",function(){return h}),t.d(a,"d",function(){return N}),t.d(a,"c",function(){return y}),t.d(a,"b",function(){return q})},157:function(e){e.exports={data:{allGhostSettings:{edges:[{node:{title:"Crash Test Dev",description:"Thoughts, stories and ideas.",logo:"https://static.ghost.org/v1.0.0/images/ghost-logo.svg",icon:null,cover_image:"https://static.ghost.org/v1.0.0/images/blog-cover.jpg",facebook:null,twitter:"@kenneth_chau",lang:"en",timezone:"Etc/UTC",codeinjection_head:null,codeinjection_foot:null,navigation:[{label:"Home",url:"/"},{label:"Tag",url:"/tag/getting-started/"},{label:"Author",url:"/author/ghost/"},{label:"Help",url:"https://docs.ghost.org"}]}}]},file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoElEQVQ4y61V6UpCQRj1dYLUSqP06r2WV8slC1fELW2RDHqPFqJFRYmw5RGCsCQtBSl6pLTTzHiviEV61R+HmWFmzpz5vjPfqPSC2Cb4nhBaKr1gpR1MBta2SmLGWMp4SRQv/iIcVZ28929CHW9l7bzF1oU8J/flNQMJ5YVz5mWoF81daDkLm1MbeDbXR/q/QrrBIDrgiyXhj6cQTGxj1Rti6nzRJDi7q0s6kJBu0hgFrIWiKL+84qn6hnrzA0fnOQgODx4rVQQSW0x1TyiGiyFndzI1phU3G0/pDTAS5ZRo6BhSzJB4iR4fDs+yOL7IE3VZnFzmcZorEhTI9YNsjSJC+0YA2asS8te3KJTuGHJkXLy5h9MfhpaERbFtaGLolekBGoMAzuZkV1ZkGxofero7GMFDuYLG+yeSmQOWiFqjiedaHd7oJrPP0EmhljASNeFUGvH0PiyudZhJYmK7GUR29kiSFNim19jTxBrTCybMmpY6Y9KnUGzs/qfX++wUP71JF4eRoOOlcHUKrDi5AsvqIS+2pG9gHLRIkSWt9esHk33LmVXII3sAAAAASUVORK5CYII=",width:30,height:30,src:"/static/1f5512e171759c8fa66fde174ad5e09e/8b337/ghost-icon.png",srcSet:"/static/1f5512e171759c8fa66fde174ad5e09e/8b337/ghost-icon.png 1x,\n/static/1f5512e171759c8fa66fde174ad5e09e/d8589/ghost-icon.png 1.5x,\n/static/1f5512e171759c8fa66fde174ad5e09e/3370f/ghost-icon.png 2x,\n/static/1f5512e171759c8fa66fde174ad5e09e/58db0/ghost-icon.png 3x"}}}}}},158:function(e,a,t){"use strict";t.r(a);t(34);var r=t(0),n=t.n(r),s=t(4),i=t.n(s),l=t(56),o=t(2),c=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return n.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c}}]);
//# sourceMappingURL=component---src-pages-404-js-b4f593c63d71b365806e.js.map