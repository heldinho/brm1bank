(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"327a01f248cead644865":function(e,t,n){"use strict";n.r(t);var a,r=n("8af190b70a6bc55c6f1b"),c=(n("8a2d1b95e05b6a321e74"),n("57ffd1ecfa030d8529e7")),o=n.n(c),i=n("0d7f0986bcd2f33d8a2a"),u=n("6938d226fd372a75cbf9"),s=n("435859b6b76fb67a754a"),l=n.n(s),f=n("b27e083e7741c2dccb3f"),b=n.n(f),p=n("4dd2a92e69dcbe1bab10"),d=n("e2ef4ad969c690980b85"),m=n("b989cec74a4c48e91050"),y=n("d7dd51e1bf6bfc2c9c3d"),g=n("ab4cb61bcb2dc161defb"),h=n("6d8795e7c94125bdf5e5");function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),u=0;u<o;u++)i[u]=arguments[u+3];t.children=i}if(t&&c)for(var s in c)void 0===t[s]&&(t[s]=c[s]);else t||(t=c||{});return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e,t,n,a,r,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(a,r)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){S(c,a,r,o,i,"next",e)}function i(e){S(c,a,r,o,i,"throw",e)}o(void 0)}))}}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=N(e);if(t){var r=N(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=localStorage,J=w(p.Vb,{}),A=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,a,r,c=_(u);function u(){var e;x(this,u);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return P(B(e=c.call.apply(c,[this].concat(n))),"state",{account:{balance:0,ag:"",cc:""},loading:!1,loadingBalance:!1}),e}return t=u,(n=[{key:"componentDidMount",value:(r=O(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(m.i)(),!I.getItem("wallet_account")){e.next=5;break}this.setState({account:JSON.parse(I.getItem("wallet_account"))}),e.next=11;break;case 5:return this.setState({loading:!0,loadingBalance:!0}),e.next=8,Object(m.f)();case 8:return e.sent,e.next=11,Object(m.g)().then(function(){var e=O(regeneratorRuntime.mark((function e(n){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=6;break}return a={fullname:"",balance:0,ag:"0000",cc:"00000000"},t.setState({account:a}),I.setItem("wallet_account",JSON.stringify(a)),t.setState({loading:!1,loadingBalance:!1}),e.abrupt("return");case 6:if(0!=n.assets.length){e.next=13;break}return r={fullname:"",balance:0,ag:"0000",cc:"00000000"},t.setState({account:r}),I.setItem("wallet_account",JSON.stringify(r)),t.setState({loading:!1,loadingBalance:!1}),e.abrupt("return");case 13:return e.next=15,Object(m.h)().then((function(e){var a,r=(P(a={fullname:e[0].name,balance:n?n.assets[0].balance:0},"balance",0),P(a,"ag",e[0].account.agency),P(a,"cc",e[0].account.number),a);t.setState({account:r}),I.setItem("wallet_account",JSON.stringify(r)),t.setState({loading:!1,loadingBalance:!1})}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=o.a[o.a.whitelabel].name+" - Open Bank",n=o.a[o.a.whitelabel].desc,a=this.props.classes,r=this.state,c=r.account,u=r.loading,s=r.loadingBalance,f=this,d=function(){var t=O(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.setState({loadingBalance:!0}),t.next=3,Object(m.g)().then(function(){var t=O(regeneratorRuntime.mark((function t(n){var a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=6;break}return a={fullname:"",balance:0,ag:"0000",cc:"00000000"},e.setState({account:a}),I.setItem("wallet_account",JSON.stringify(a)),e.setState({loading:!1}),t.abrupt("return");case 6:if(0!=n.assets.length){t.next=13;break}return r={fullname:"",balance:0,ag:"0000",cc:"00000000"},e.setState({account:r}),I.setItem("wallet_account",JSON.stringify(r)),e.setState({loading:!1}),t.abrupt("return");case 13:return t.next=15,Object(m.h)().then((function(e){var t={fullname:e[0].name,balance:n?n.assets[0].balance:0,ag:e[0].account.agency,cc:e[0].account.number};f.setState({account:t}),I.setItem("wallet_account",JSON.stringify(t)),f.setState({loadingBalance:!1})}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return w("div",{},void 0,w(i.Helmet,{},void 0,w("title",{},void 0,t),w("meta",{name:"description",content:n}),w("meta",{property:"og:title",content:t}),w("meta",{property:"og:description",content:n}),w("meta",{property:"twitter:title",content:t}),w("meta",{property:"twitter:description",content:n})),w(l.a,{container:!0,spacing:3,className:a.root},void 0,w(l.a,{item:!0,md:7,sm:12,xs:12},void 0,w(p.ab,{account:c,loading:u,loadingBalance:s,fnBalanceRefresh:d})),w(l.a,{item:!0,md:5,sm:12,xs:12},void 0,w("div",{className:a.sliderWrap},void 0,J))),w(b.a,{className:a.divider}),w(l.a,{container:!0,spacing:3,className:a.root},void 0,w(l.a,{item:!0,md:4,sm:12,xs:12}),w(l.a,{item:!0,md:4,sm:6,xs:12}),w(l.a,{item:!0,md:4,sm:6,xs:12})))}}])&&j(t.prototype,n),a&&j(t,a),u}(r.PureComponent);Object(y.connect)((function(e){return{force:e,account:e.getIn(["account","account"])}}),(function(e){return{getAccount:Object(g.bindActionCreators)(h.a,e)}}))(A);t.default=Object(u.withStyles)(d.a)(A)}}]);