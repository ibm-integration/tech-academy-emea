(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("NmYn"),b=a.n(i),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),A=a.n(s),m=a("QH2O"),p=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(u.b)("div",{className:A()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===r,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,i=n.baseUrl,b=n.subDirectory,c=i+"/edit/"+n.branch+b+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),x=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===n,c=new RegExp(n+"/?(#.*)?$"),l=r.replace(c,a);return Object(u.b)("li",{key:e,className:A()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(u.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},i))))))},t}(n.a.Component),N=a("MjG9"),k=a("CzIb"),y=a("Asxa"),w=a("OIbQ"),v=a.n(w),E=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(y.c,{className:v.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,A=t.relativePagePath,m=t.titleType,p=s.tabs,g=s.title,h=s.theme,x=s.description,y=s.keywords,w=s.date,v=Object(k.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=T?r.pathname.replace(T,""):r.pathname,C=p?P.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",Q=h||v;return Object(u.b)(l.a,{tabs:p,homepage:!1,theme:Q,pageTitle:g,pageDescription:x,pageKeywords:y,titleType:m},Object(u.b)(d,{title:n?Object(u.b)(n,null):g,label:"label",tabs:p,theme:Q}),p&&Object(u.b)(f,{title:g,slug:P,tabs:p,currentTab:C}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:A}),Object(u.b)(E,{date:w})),Object(u.b)(O.a,{pageContext:t,location:r,slug:P,tabs:p,currentTab:C}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XZFa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("qKvR"),["components"]),c={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=l("AnchorLinks"),A=l("AnchorLink"),m={_frontmatter:c},p=b.a;function u(e){var t=e.components,a=Object(n.a)(e,o);return Object(i.b)(p,Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"AnchorLinks"},Object(i.b)(A,{mdxType:"AnchorLink"},"Synopsis"),Object(i.b)(A,{mdxType:"AnchorLink"},"Resources & Presentations"),Object(i.b)(A,{mdxType:"AnchorLink"},"Deliverables"),Object(i.b)(A,{mdxType:"AnchorLink"},"Goals"),Object(i.b)(A,{mdxType:"AnchorLink"},"Guardrails"),Object(i.b)(A,{mdxType:"AnchorLink"},"Scoring Criteria"),Object(i.b)(A,{mdxType:"AnchorLink"},"Supporting Assets")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Synopsis"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Working in teams of five (5), ",Object(i.b)("strong",{parentName:"li"},"evaluate a set of client requirements"),", problem statements, goals/outcomes (PoC simulation) to ",Object(i.b)("strong",{parentName:"li"},"create a recommended CP4i & integration component configurations"),"."),Object(i.b)("li",{parentName:"ul"},"Develop documentation that reflects your recommendations and captures ",Object(i.b)("strong",{parentName:"li"},"key assumptions")," and key ",Object(i.b)("strong",{parentName:"li"},"design decisions"),"."),Object(i.b)("li",{parentName:"ul"},"Calculate the cluster(s) ",Object(i.b)("strong",{parentName:"li"},"sizing requirements")," and CP4i licensing ",Object(i.b)("strong",{parentName:"li"},"entitlement estimates"),"."),Object(i.b)("li",{parentName:"ul"},"Prepare specific technical recommendations that counter a competitive PoC scenario ",Object(i.b)("strong",{parentName:"li"},"against MuleSoft"),"."),Object(i.b)("li",{parentName:"ul"},"Each team will be evaluated on the following ",Object(i.b)("a",{href:"https://ibm.ent.box.com/file/969024649659",target:"_blank"},"Scorecard criteria"),". ",Object(i.b)("strong",{parentName:"li"},"A passing grade is 75%."))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Resources & Presentations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/uken0xfa1i7n1i7cutroc1efp4k7x642",target:"_blank"},"Session Overview Presentation"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Deliverables"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create key ",Object(i.b)("a",{href:"https://ibm.box.com/s/kjgq175mvpr36bigr1u3u0g1558mrr43"},"Architecture Diagrams")," that Illustrate the core elements of the proposed solution. This could include any of the following work product types (these are suggestions only)."),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Architecture Overview Diagram(s)"),Object(i.b)("li",{parentName:"ol"},"Network Diagrams"),Object(i.b)("li",{parentName:"ol"},"Topology Diagrams"),Object(i.b)("li",{parentName:"ol"},"System Context Diagram"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{href:"https://ibm.box.com/s/5kz0q0e33hfrlr5s9rgxlne6ixnbgd1u"},"Architecture Decisions")," and key assumptions document"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Sizing and Entitlement Calculation Estimates.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Completive Talking Points and Key Design Points to Debunk MuleSoft")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Suggested Next Steps, Action Items and Milestones Outline"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Goals"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Develop deeper skills at assessing a complex client scenario, with complex requirements, with a focus on capturing key design points, architecture decisions and deployment preparation.  ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Develop deeper skills focused on RHOCP cluster design recommendations, CP4i design, component design, workload placement recommendations and sizing recommendations.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Developer deeper skills for documenting a set of solution design artifacts which describe the proposed solution (i.e., Architecture Overview Diagram (AoD), Context Diagrams, Topology Views, Architecture Decisions document).  ",Object(i.b)("a",{href:"https://ibm.ent.box.com/folder/164383017863?s=kjgq175mvpr36bigr1u3u0g1558mrr43"},"Templates & Examples Can Be Found Here"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Develop deeper skills for using the IBM Sales Configurator platform, or other sizing tools, to estimate CP4i licensing entitlement.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Harvest asset examples, best practices and repeating design issues. Community Driven. ",Object(i.b)("a",{href:"https://ibm.box.com/s/6b2re2si75a4lqy5avxsfbg97mnlq20c"},"Place your work products here"),".  Locate your Team Number sub-folder."))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Guardrails"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Approach this exercise as if this is a ",Object(i.b)("strong",{parentName:"p"},"simulated client requested PoC")," activity.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Teams can use a ",Object(i.b)("strong",{parentName:"p"},"live client opportunity")," or PoC engagement as a source for requirements. A ",Object(i.b)("strong",{parentName:"p"},"fictions scenario")," can be provided if necessary.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We are asking for ",Object(i.b)("strong",{parentName:"p"},"~8 hours")," of effort on this exercise; 4 hours in the Academy followed by ~4 hours  post Academy.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Submit your deliverables ",Object(i.b)("strong",{parentName:"p"},"5 business days")," after Tech Academy (",Object(i.b)("strong",{parentName:"p"},"June 30"),").")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Five ",Object(i.b)("strong",{parentName:"p"},"(5) key design points")," are required with two ",Object(i.b)("strong",{parentName:"p"},"(2) optional design")," recommendations."))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Scoring Criteria"),Object(i.b)("p",null,"  ",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARASEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwECBP/aAAwDAQACEAMQAAAB0lW1KwLig8UM5P/EABkQAAMBAQEAAAAAAAAAAAAAAAABAhIQQf/aAAgBAQABBQJToyjKIHyUeH//xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BI//EABgRAQEAAwAAAAAAAAAAAAAAAAEAAhEx/9oACAECAQE/AWcncz2//8QAFhAAAwAAAAAAAAAAAAAAAAAAECBB/9oACAEBAAY/AjG//8QAHRAAAgIBBQAAAAAAAAAAAAAAAQARITEQQWGRsf/aAAgBAQABPyHfeudEFT2hmkFGgjCKUgS5On//2gAMAwEAAgADAAAAEEsXQP/EABgRAQEBAQEAAAAAAAAAAAAAAAEAMREh/9oACAEDAQE/EA8gcyMjL//EABgRAQEBAQEAAAAAAAAAAAAAAAEAIREx/9oACAECAQE/EE9irb1HV//EAB0QAQADAAMAAwAAAAAAAAAAAAERACExQVFhcaH/2gAIAQEAAT8QiLPHTE2MQoj65+2Akj7UIgm9tMbtNGwhkZxZzlh9psuCakMfF//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scoring",title:"scoring",src:"/tech-academy-emea/static/a77affd5a0a50d7fde11b44c3fb4ab02/2e753/scoring-criteria.jpg",srcSet:["/tech-academy-emea/static/a77affd5a0a50d7fde11b44c3fb4ab02/69549/scoring-criteria.jpg 288w","/tech-academy-emea/static/a77affd5a0a50d7fde11b44c3fb4ab02/473e3/scoring-criteria.jpg 576w","/tech-academy-emea/static/a77affd5a0a50d7fde11b44c3fb4ab02/2e753/scoring-criteria.jpg 1152w","/tech-academy-emea/static/a77affd5a0a50d7fde11b44c3fb4ab02/97583/scoring-criteria.jpg 1580w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Supporting Assets"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/db3lyzo87d1hnxs30n97wblsotniyvfj",target:"_blank"},"Supporting Resources:  Architecture, Sizing, Documentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/kjgq175mvpr36bigr1u3u0g1558mrr43",target:"_blank"},"Sample Architecture Diagrams")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/5kz0q0e33hfrlr5s9rgxlne6ixnbgd1u",target:"_blank"},"Architecture Decisions Template")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/dynuohz6d0kjtc6nrrwq69pqx5bru8bz",target:"_blank"},"Evaluation & Scoring Outline Here.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/1ysnbuk60rb5lbn1dnsfp522c3ll2xpe",target:"_blank"},"Place your work products here.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/ccyfzdr0oxgibrebdz5izd9be5gu81sa",target:"_blank"},"Fictious DoU Example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/dynuohz6d0kjtc6nrrwq69pqx5bru8bz",target:"_blank"},"Scorecard criteria")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/h8le0ntg7pxbe9dwpaoig28a26ejbd7i",target:"_blank"},"Place Your Deliverable Work Products Here"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-index-mdx-495c42eaf367444823e6.js.map