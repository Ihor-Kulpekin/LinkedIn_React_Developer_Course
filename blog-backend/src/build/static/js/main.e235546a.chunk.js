(this.webpackJsonpreact_linkein=this.webpackJsonpreact_linkein||[]).push([[0],{31:function(a,s,e){},32:function(a,s,e){},40:function(a,s,e){"use strict";e.r(s);var d=e(1),t=e(0),n=e.n(t),c=e(21),r=e.n(c),i=(e(31),e(7)),o=e(2),j=(e(32),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Hello, Welcome to my Blog!"}),Object(d.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend"})]})}),l=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"About me"}),Object(d.jsx)("p",{children:"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend"})]})},u=function(a){var s=a.articles;return Object(d.jsx)(d.Fragment,{children:s.map((function(a){return Object(d.jsxs)(i.b,{className:"articles-list-item",to:"/article/".concat(a.name),children:[Object(d.jsx)("h3",{children:a.title}),Object(d.jsx)("p",{children:a.content[0].substring(0,5)})]},a.name)}))})},b=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas"]},{name:"learn-node",title:"The Fastest Way to Learn Angular",content:["dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas"]},{name:"my-thoughts-on-resumes",title:"The Fastest Way to Learn Vue",content:["dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas","dasdassadadasdasdasdasdsadasdasdasdsadasdasdas"]}],h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Articles List"}),Object(d.jsx)(u,{articles:b})]})},x=e(9),O=e.n(x),p=e(13),m=e(25),f=function(){return Object(d.jsx)("h1",{children:"404:Page Not Found"})},v=function(a){var s=a.articleName,e=a.upvotes,t=a.setArticleInfo,n=function(){var a=Object(p.a)(O.a.mark((function a(){var e,d;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/articles/".concat(s,"/upvote"),{method:"post"});case 2:return e=a.sent,a.next=5,e.json();case 5:d=a.sent,t(d);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return n()},children:"Add Upvote"}),Object(d.jsxs)("p",{children:["This post has benn upvoted ",e," times"]})]})},g=function(a){var s=a.match.params.name,e=Object(t.useState)({upvotes:0,comments:[]}),n=Object(m.a)(e,2),c=n[0],r=n[1],i=b.filter((function(a){return a.name!==s}));return Object(t.useEffect)((function(){(function(){var a=Object(p.a)(O.a.mark((function a(){var e,d;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/articles/".concat(s));case 2:return e=a.sent,a.next=5,e.json();case 5:d=a.sent,console.log(d),r(d);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()().then()}),[s]),c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:c.title}),Object(d.jsx)(v,{articleName:s,upvotes:c.upvotes,setArticleInfo:r}),c.comments.map((function(a){return Object(d.jsx)("p",{children:a.text},a.username)})),Object(d.jsx)("h3",{children:"Other Articles"}),Object(d.jsx)(u,{articles:i})]}):Object(d.jsx)(f,{})},y=e(14),F=e(15);function A(){var a=Object(y.a)(["\n  border-bottom: 2px solid black;\n"]);return A=function(){return a},a}function k(){var a=Object(y.a)(["\n  width: 680px;\nmargin: 0 auto;\n"]);return k=function(){return a},a}function w(){var a=Object(y.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n"]);return w=function(){return a},a}var L=F.a.ul(w()),T=F.a.nav(k()),W=F.a.div(A()),N=function(){return Object(d.jsx)(W,{children:Object(d.jsx)(T,{children:Object(d.jsxs)(L,{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/articles-list",children:"Articles"})})]})})})};var P=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{id:"page-body",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(d.jsx)(o.a,{path:"/about",component:l}),Object(d.jsx)(o.a,{path:"/articles-list",component:h}),Object(d.jsx)(o.a,{path:"/article/:name",component:g}),Object(d.jsx)(o.a,{component:f})]})})]})})},C=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,41)).then((function(s){var e=s.getCLS,d=s.getFID,t=s.getFCP,n=s.getLCP,c=s.getTTFB;e(a),d(a),t(a),n(a),c(a)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.e235546a.chunk.js.map