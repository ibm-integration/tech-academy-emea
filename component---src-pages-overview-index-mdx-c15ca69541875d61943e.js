(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,o=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,o=new RegExp(i+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(p.b)(b.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},r))))))},t}(i.a.Component),f=a("MjG9"),T=a("CzIb"),k=a("Asxa"),w=a("OIbQ"),P=a.n(w),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:P.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,x=s.theme,N=s.description,k=s.keywords,w=s.date,P=Object(T.a)().interiorTheme,A=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=A?n.pathname.replace(A,""):n.pathname,I=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",D=x||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:D,pageTitle:j,pageDescription:N,pageKeywords:k,titleType:u},Object(p.b)(O,{title:i?Object(p.b)(i,null):j,label:"label",tabs:m,theme:D}),m&&Object(p.b)(v,{title:j,slug:C,tabs:m,currentTab:I}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(y,{date:w})),Object(p.b)(h.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:I}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},fPf4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("AnchorLinks"),d=c("AnchorLink"),u={_frontmatter:o},m=l.a;function p(e){var t=e.components,a=Object(i.a)(e,b);return Object(r.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"Goals"),Object(r.b)(d,{mdxType:"AnchorLink"},"Resources & Presentations"),Object(r.b)(d,{mdxType:"AnchorLink"},"Key Focus Areas and Targeted Skill Sets"),Object(r.b)(d,{mdxType:"AnchorLink"},"Agenda")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Slack channel"),": #sko-tech-academy-integration-emea"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Join slack channel here"),": ",Object(r.b)("a",{parentName:"p",href:"https://ibm-cloud.slack.com/archives/C03LS27TLNL"},"https://ibm-cloud.slack.com/archives/C03LS27TLNL")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Goals"),Object(r.b)("p",null,"  – Develop skill to effectively plan and run a Client Facing PoC / MVP engagementusing CP4i."),Object(r.b)("p",null,"  – Develop skills to demonstrate IBMs marketplace differentiation in cloud-native deploymentand GitOpsAutomation."),Object(r.b)("p",null,"  – Develop skills for MVP Development of multi-style integration with  focus on EDA patterns."),Object(r.b)("p",null,"  – Develop techniques to compete with MuleSoft in a PoC activity."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Resources & Presentations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://ibm.box.com/s/df8xo8aow1dzyi8irhkt1vo8wz4sv03b",target:"_blank"},"Integration Sub-Track Overview Presentation"))),Object(r.b)("hr",null),Object(r.b)("h2",null,"Key Focus Areas and Targeted Skill Sets"),Object(r.b)("p",null,"Strategic capabilities and skills we will focus on:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CP4i/RHOCP Design, Architecture, and Sizing Skill & tools"),Object(r.b)("li",{parentName:"ul"},"IBM Event Streams, A-to-Z Demo asset & MVP Development"),Object(r.b)("li",{parentName:"ul"},"GitOpsAutomation with RedHat GitOps & Pipeline Operators w/ ArgoCD and open-source components.")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Agenda"),Object(r.b)("p",null,"The high-level view of the agenda is shown in the table below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The agenda is primarily divided into 3 sessions spanning approximately 12 hours of training.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Each session contains it’s own agenda with a set of activities with 4 hours duration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Using the left navigator, you can view the individual sessions details."))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Time"),Object(r.b)("th",{parentName:"tr",align:null},"Topic"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"10 min")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Kickoff:")," Welcome, Introduction and overview of the training activities for the Integration Portfolio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Architectute Session:")," Designing, Architecting & Sizing an Enterprise Grade CP4I Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"EDA Session:")," MVP Development Using Event Driven Architecture Practices, Real-time Inventory Management")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"4 hours")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"GitOps Automation Session:")," Agile Integration Best Practices Using an IBM GitOps Automation Framework")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"20 min")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Wrap-up:")," Selection of short demos from teams & Wrap-up")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-c15ca69541875d61943e.js.map