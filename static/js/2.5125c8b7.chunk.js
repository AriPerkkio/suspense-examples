(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(262),c=t(258),s=Object(c.a)(l.a.getUsers()),u=function(){var e=s.read();return r.a.createElement("section",null,r.a.createElement("h3",null,"Users"),r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},e.name)}))))},i=t(263),m=t(20),o=t(264);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Suspense"),r.a.createElement("h2",null,"Load before rendering"),r.a.createElement(o.a,{initiallyMounted:!0},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading users...")},r.a.createElement(i.a,{fallback:r.a.createElement("div",null,"Error loading users...")},r.a.createElement(u,null)))),r.a.createElement("div",null,r.a.createElement(m.a,{fileName:"views/LoadBeforeRendering.js",text:"Wrapper"}),r.a.createElement(m.a,{fileName:"components/UserList/UserList.js",text:"UserList"}),r.a.createElement(m.a,{fileName:"utils/create-resource.js",text:"create-resource"})))}}}]);