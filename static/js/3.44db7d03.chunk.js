(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{268:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},273:function(e,t,r){var n=r(276),o=r(268);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},274:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},275:function(e,t,r){var n=r(277);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},276:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},277:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},279:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(1),o=r.n(n),a=r(0),c=r.n(a),u=r(28),i=function(e){var t=e.initiallyMounted,r=e.children,n=Object(a.useReducer)((function(e){return!e}),!!t),i=o()(n,2),l=i[0],s=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{onClick:s},l?"Unmount":"Mount"),l&&r)}},283:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var n=r(270),o=r.n(n),a=r(271),c=r.n(a),u=r(268),i=r.n(u),l=r(273),s=r.n(l),f=r(274),p=r.n(f),m=r(275),y=r.n(m),b=r(4),h=r.n(b);function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var E=function(e){y()(n,e);var t,r=(t=n,function(){var e,r=p()(t);if(d()){var n=p()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s()(this,e)});function n(){var e;o()(this,n);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return e=r.call.apply(r,[this].concat(a)),h()(i()(e),"state",{hasError:!1}),e}return c()(n,[{key:"componentDidUpdate",value:function(e,t){var r=e.errorKey!==this.props.errorKey,n=t.hasError&&this.state.hasError;r&&n&&this.setState({hasError:!1})}},{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r(0).Component)},292:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(269),c=r(280),u=r(16),i=r(272),l=Object(c.b)(a.b.getUsers),s=function(){var e=l.read();return o.a.createElement("section",null,o.a.createElement(u.b,null,"Users"),o.a.createElement(i.a,null,e.map((function(e){return o.a.createElement(i.b,{key:e.id},e.name)}))))},f=r(283),p=r(17),m=r(278),y=r(279);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,"Load before rendering"),o.a.createElement(y.a,{initiallyMounted:!0},o.a.createElement(n.Suspense,{fallback:o.a.createElement(m.b,null)},o.a.createElement(f.a,{fallback:o.a.createElement(m.a,null)},o.a.createElement(s,null)))),o.a.createElement("div",null,o.a.createElement(p.a,{fileName:"views/LoadBeforeRendering.js",text:"Wrapper"}),o.a.createElement(p.a,{fileName:"components/load-before-rendering/UserList/UserList.js",text:"UserList"}),o.a.createElement(p.a,{fileName:"utils/create-resource.js",text:"create-resource"})))}}}]);