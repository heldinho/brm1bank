(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"327a01f248cead644865":function(t,e,n){"use strict";n.r(e);var r,o=n("8af190b70a6bc55c6f1b"),a=(n("8a2d1b95e05b6a321e74"),n("57ffd1ecfa030d8529e7")),c=n.n(a),i=n("0d7f0986bcd2f33d8a2a"),u=n("6938d226fd372a75cbf9"),f=n("435859b6b76fb67a754a"),s=n.n(f),l=n("b27e083e7741c2dccb3f"),p=n.n(l),b=n("4dd2a92e69dcbe1bab10"),d=n("e2ef4ad969c690980b85"),m=n("b989cec74a4c48e91050"),y=n("d7dd51e1bf6bfc2c9c3d"),v=n("ab4cb61bcb2dc161defb"),h=n("6d8795e7c94125bdf5e5");function g(t){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=o;else if(c>1){for(var i=new Array(c),u=0;u<c;u++)i[u]=arguments[u+3];e.children=i}if(e&&a)for(var f in a)void 0===e[f]&&(e[f]=a[f]);else e||(e=a||{});return{$$typeof:r,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function O(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function S(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function c(t){O(a,r,o,c,i,"next",t)}function i(t){O(a,r,o,c,i,"throw",t)}c(void 0)}))}}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==g(e)&&"function"!==typeof e?R(t):e}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=localStorage,J=w(b.Vb,{}),B=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(u,t);var e,n,r,o,a=k(u);function u(){var t;j(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return A(R(t=a.call.apply(a,[this].concat(n))),"state",{account:{balance:0,ag:"",cc:""},loading:!1}),t}return e=u,(n=[{key:"componentDidMount",value:(o=S(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!I.getItem("wallet_account")){t.next=4;break}this.setState({account:JSON.parse(I.getItem("wallet_account"))}),t.next=10;break;case 4:return this.setState({loading:!0}),t.next=7,Object(m.d)();case 7:return t.sent,t.next=10,Object(m.e)().then(function(){var t=S(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.f)().then((function(t){var r={fullname:t[0].name,balance:n.assets[0].authorizableBalance,ag:t[0].account.agency,cc:t[0].account.number};e.setState({account:r}),I.setItem("wallet_account",JSON.stringify(r)),e.setState({loading:!1})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var t=c.a[c.a.whitelabel].name+" - Open Bank",e=c.a[c.a.whitelabel].desc,n=this.props.classes,r=this.state,o=r.account,a=r.loading,u=this;return w("div",{},void 0,w(i.Helmet,{},void 0,w("title",{},void 0,t),w("meta",{name:"description",content:e}),w("meta",{property:"og:title",content:t}),w("meta",{property:"og:description",content:e}),w("meta",{property:"twitter:title",content:t}),w("meta",{property:"twitter:description",content:e})),w(s.a,{container:!0,spacing:3,className:n.root},void 0,w(s.a,{item:!0,md:7,sm:12,xs:12},void 0,w(b.ab,{account:o,loading:a,fnBalanceRefresh:function(){u.setState({loading:!0}),Object(m.k)("show_balance").then((function(t){var e=t.data;u.setState({loading:!1}),e.error||u.setState({account:{balance:e.balance,ag:e.ag,cc:e.cc}})}))}})),w(s.a,{item:!0,md:5,sm:12,xs:12},void 0,w("div",{className:n.sliderWrap},void 0,J))),w(p.a,{className:n.divider}),w(s.a,{container:!0,spacing:3,className:n.root},void 0,w(s.a,{item:!0,md:4,sm:12,xs:12}),w(s.a,{item:!0,md:4,sm:6,xs:12}),w(s.a,{item:!0,md:4,sm:6,xs:12})))}}])&&x(e.prototype,n),r&&x(e,r),u}(o.PureComponent);Object(y.connect)((function(t){return{force:t,account:t.getIn(["account","account"])}}),(function(t){return{getAccount:Object(v.bindActionCreators)(h.a,t)}}))(B);e.default=Object(u.withStyles)(d.a)(B)}}]);