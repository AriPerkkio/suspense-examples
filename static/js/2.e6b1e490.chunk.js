(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},276:function(e,t,n){var r=n(277),a=n(270);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},277:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},278:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},279:function(e,t,n){var r=n(280);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},280:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4),a=n(6),o=r.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"zle9ph-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],a.b)},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(271),a=n.n(r),o=n(272),c=n.n(o),u=n(270),i=n.n(u),l=n(276),s=n.n(l),f=n(278),p=n.n(f),m=n(279),d=n.n(m),b=n(5),E=n.n(b);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=function(e){d()(r,e);var t,n=(t=r,function(){var e,n=p()(t);if(h()){var r=p()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s()(this,e)});function r(){var e;a()(this,r);for(var t=arguments.length,o=new Array(t),c=0;c<t;c++)o[c]=arguments[c];return e=n.call.apply(n,[this].concat(o)),E()(i()(e),"state",{hasError:!1}),e}return c()(r,[{key:"componentDidUpdate",value:function(e,t){var n=e.errorKey!==this.props.errorKey,r=t.hasError&&this.state.hasError;n&&r&&this.setState({hasError:!1})}},{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),r}(n(0).Component)},284:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),a=n.n(r),o=n(0),c=n.n(o),u=n(28),i=n(275),l=function(){var e=Object(o.useState)(0),t=a()(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){return i.a.subscribeCaches(r),function(){i.a.unSubscribeCaches(r)}}),[]),c.a.createElement("div",null,c.a.createElement(u.a,{onClick:i.a.clearCaches},"Reset ",n," resource caches"))}},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),u=n(5),i=n.n(u),l=n(16),s=n(269),f=n(273),p=n(268);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},b={user:null,isLoading:!1,error:!1},E=function(e){var t=e.id,n=Object(r.useReducer)(d,b),o=c()(n,2),u=o[0],i=o[1],m=u.user,E=u.isLoading,h=u.error;return Object(r.useEffect)((function(){i({isLoading:!0,error:!1}),p.b.getUser(t).then((function(e){return i({user:e,isLoading:!1})})).catch((function(){return i({error:!0,isLoading:!1})}))}),[t]),E?a.a.createElement(f.b,null,"Loading user ",t,"..."):h||!m?a.a.createElement(f.a,null,"Error loading user ",t,"."):a.a.createElement("section",null,a.a.createElement(l.c,null,m.name," (",m.id,") (props.id ",t,")"),a.a.createElement(s.a,null,a.a.createElement(s.b,null,"Username: ",m.username),a.a.createElement(s.b,null,"Email: ",m.email)))},h=n(282),y=n(274),v=Object(y.a)(p.b.getUser),g=function(e){var t=e.id,n=v.read(t);return a.a.createElement("section",null,a.a.createElement(l.c,null,n.name," (",n.id,") (props.id ",t,")"),a.a.createElement(s.a,null,a.a.createElement(s.b,null,"Username: ",n.username),a.a.createElement(s.b,null,"Email: ",n.email)))},O=function(e){var t=e.id;return a.a.createElement(r.Suspense,{fallback:a.a.createElement(f.b,null,"Loading user ",t,"...")},a.a.createElement(h.a,{fallback:a.a.createElement(f.a,null,"Error loading user ",t,"."),errorKey:t},a.a.createElement(g,{id:t})))},j=n(4).a.input.withConfig({displayName:"Input",componentId:"sc-1x00fhx-0"})(["margin-right:1rem;"]),w=function(e){var t=e.children,n=Object(r.useState)(1),o=c()(n,2),u=o[0],i=o[1];return a.a.createElement("div",null,a.a.createElement(j,{type:"number",value:u,onChange:function(e){return i(e.target.value)}}),t(u))},x=n(283),S=n(281),k=n(17),P=n(284);t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,"Race conditions"),a.a.createElement(S.a,null,a.a.createElement("div",null,a.a.createElement(l.b,null,"With hooks"),a.a.createElement(x.a,null,a.a.createElement(w,null,(function(e){return a.a.createElement(E,{id:e})})))),a.a.createElement("div",null,a.a.createElement(l.b,null,"With suspense"),a.a.createElement(x.a,null,a.a.createElement(w,null,(function(e){return a.a.createElement(O,{id:e})}))),a.a.createElement(P.a,null))),a.a.createElement("div",null,a.a.createElement(k.a,{fileName:"components/race-conditions/RaceConditionsHooks.js",text:"With Hooks"}),a.a.createElement(k.a,{fileName:"components/race-conditions/RaceConditionsSuspense.js",text:"With Suspense"}),a.a.createElement(k.a,{fileName:"utils/create-cached-resource.js",text:"create-cached-resource"})),a.a.createElement(p.a,null))}}}]);