(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"8ae150df78789a41359f":function(t,e,n){(t.exports=n("0e326f80368fd0b1333e")(!1)).push([t.i,".box-loading {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 50px;\r\n}\r\n\r\n.mlpx-14 {\r\n  margin-left: 14px;\r\n}\r\n\r\n.ml-2 {\r\n  margin-left: 20px;\r\n}\r\n\r\n.ml-3 {\r\n  margin-left: 30px;\r\n}\r\n",""])},"97df1c885cfc49fdc3e1":function(t,e,n){"use strict";n.r(e);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=n("0d7f0986bcd2f33d8a2a"),c=n("57ffd1ecfa030d8529e7"),l=n.n(c),u=(n("4dd2a92e69dcbe1bab10"),n("0d939196e59ed73c94e6")),s=n("6e7cb9018586e5f4d7d3"),f=n.n(s),d=n("3a2f446b954122b49275"),p=n("c82f135c42c3c148fae5"),y=n.n(p),v=n("b989cec74a4c48e91050"),b=n("a43cfba951f5d80cd159");n("f3c8283614e05023992d");function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];e.children=c}if(e&&a)for(var u in a)void 0===e[u]&&(e[u]=a[u]);else e||(e=a||{});return{$$typeof:r,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function g(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function w(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){g(a,r,o,i,c,"next",t)}function c(t){g(a,r,o,i,c,"throw",t)}i(void 0)}))}}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?O(t):e}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=h(f.a,{}),A=h(f.a,{}),B=h(f.a,{}),C=h("div",{className:"box-loading"},void 0,h("span",{className:"mlpx-14"},void 0,"Nenhuma movimenta\xe7\xe3o encontrada.")),D=h("div",{className:"box-loading"},void 0,h(y.a,{}),h("span",{className:"mlpx-14"},void 0,"Carregando extrato...")),N=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(s,t);var e,n,r,o,a,c=R(s);function s(){var t;x(this,s);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return P(O(t=c.call.apply(c,[this].concat(n))),"state",{loading:!1,loadingExtract:!1,balance:0,dataExtract:[]}),t}return e=s,(n=[{key:"fnShowBalance",value:(a=w(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0,loadingExtract:!0}),t.next=3,Object(v.h)().then(function(){var t=w(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=4;break}return e.setState({balance:0}),e.setState({loading:!1}),t.abrupt("return");case 4:if(0!=n.assets.length){t.next=9;break}return e.setState({balance:0}),e.setState({loading:!1}),t.abrupt("return");case 9:e.setState({balance:n?n.assets[0].balance:0}),e.setState({loading:!1});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"fnShowExtractAccount",value:(o=w(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],this.setState({loadingExtract:!0}),t.next=4,Object(v.f)().then(function(){var t=w(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({loadingExtract:!1}),r.map((function(t){0!=t.payments.length&&e.push([t.payments[0].type,"Descri\xe7\xe3o",t.payments[0].amount,t.payments[0]])}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:this.setState({dataExtract:e});case 5:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"componentDidMount",value:function(){this.fnShowBalance(),this.fnShowExtractAccount()}},{key:"render",value:function(){var t=l.a[l.a.whitelabel].name+" - Blank Page",e=l.a[l.a.whitelabel].desc,n=this.state,r=n.balance,o=n.loading,a=n.dataExtract,c=n.loadingExtract;return h("div",{},void 0,h(i.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(u.Paper,{elevation:3},void 0,h("div",{style:{display:"flex",justifyContent:"space-between",padding:14,margin:20,fontWeight:"600",color:"#000",fontSize:24,backgroundColor:"rgba(0, 0, 0, 0.1)",borderBottomLeftRadius:8,borderBottomRightRadius:8}},void 0,h("div",{style:{width:"100%"}},void 0,"Saldo Total"),h("div",{style:{width:"100%",textAlign:"right"}},void 0,o?_:Object(b.b)(parseFloat(r)))),h("div",{style:{display:"flex",justifyContent:"space-between",padding:14,margin:20,marginBottom:0,color:"#444"}},void 0,h("div",{style:{width:"100%"}},void 0,"Saldo Bloqueado"),h("div",{style:{width:"100%",textAlign:"right"}},void 0,o?A:Object(b.b)(parseFloat(0)))),h("div",{style:{display:"flex",justifyContent:"space-between",padding:14,margin:20,marginTop:0,color:"#444"}},void 0,h("div",{style:{width:"100%"}},void 0,"Saldo Dispon\xedvel"),h("div",{style:{width:"100%",textAlign:"right"}},void 0,o?B:Object(b.b)(parseFloat(r))))),h(u.Paper,{elevation:3},void 0,c?D:0!=a.length?h(d.a,{dataExtract:a,title:"Extrato",viewDetail:!1}):C))}}])&&S(e.prototype,n),r&&S(e,r),s}(a.a.Component);e.default=N},f3c8283614e05023992d:function(t,e,n){var r=n("8ae150df78789a41359f");"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("1e4534d1d62a11482e97")(r,o);r.locals&&(t.exports=r.locals)}}]);