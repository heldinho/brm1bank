(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"6a2c125250038bfdb240":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),c=n("57ffd1ecfa030d8529e7"),f=n.n(c),l=n("b78ee477e6ac6a65dd83"),u=n.n(l),d=n("40d978c4bb449333872a"),b=n("f84a5334c4512e25b746"),p=n.n(b),s=n("031191083d7a21fda934"),y=n.n(s),v=n("9b4cf02f7f3c4453e043"),h=n.n(v),m=n("0c1f845924d0a380f5ed"),w=n.n(m),g=n("f45f4b4db7d91d6fbde9"),O=n.n(g),C=n("09d9825c6a907a151090"),S=n.n(C),j=n("9de15f4f50e7c18f356d"),P=n.n(j),_=n("6938d226fd372a75cbf9"),T=n("ab4cb61bcb2dc161defb"),R=n("d7dd51e1bf6bfc2c9c3d"),k=n("4dd2a92e69dcbe1bab10"),A=n("5df79c82a80d7ca8e003"),D=n.n(A),E=n("48d4affa2730b4d50a05"),N=n("48843b0f5e2ffb968b58"),x=n("5c80717ff75b7003b798");function I(e){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=z(e);if(t){var r=z(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==I(t)&&"function"!==typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),f=0;f<i;f++)c[f]=arguments[f+3];t.children=c}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function L(e){return H("div",{style:{paddingTop:24}},void 0,e.children)}var V=H(y.a,{icon:H(w.a,{})}),q=H(y.a,{icon:H(O.a,{})}),G=H(y.a,{icon:H(S.a,{})}),K=H(y.a,{icon:H(P.a,{})}),Q=H(y.a,{icon:H(w.a,{}),label:"ABOUT"}),X=H(y.a,{icon:H(O.a,{}),label:"20 CONNECTIONS"}),Y=H(y.a,{icon:H(S.a,{}),label:"18 FAVORITES"}),Z=H(y.a,{icon:H(P.a,{}),label:"4 ALBUMS"}),ee=H(L,{},void 0,H(k.o,{})),te=H(L,{},void 0,H(k.N,{})),ne=H(L,{},void 0,H(k.f,{})),oe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(a,e);var t,n,o,r=M(a);function a(){var e;U(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return F($(e=r.call.apply(r,[this].concat(n))),"state",{value:0}),F($(e),"handleChange",(function(t,n){e.setState({value:n})})),e}return t=a,(n=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(N.a)}},{key:"render",value:function(){var e=f.a[f.a.whitelabel].name+" - Profile",t=f.a[f.a.whitelabel].desc,n=this.props,o=n.dataProps,r=n.classes,a=this.state.value;return H("div",{},void 0,H(i.Helmet,{},void 0,H("title",{},void 0,e),H("meta",{name:"description",content:t}),H("meta",{property:"og:title",content:e}),H("meta",{property:"og:description",content:t}),H("meta",{property:"twitter:title",content:e}),H("meta",{property:"twitter:description",content:t})),H(k.z,{coverImg:D.a,avatar:d.a.user.avatar,name:d.a.user.name,desc:"Consectetur adipiscing elit."}),H(u.a,{position:"static",className:r.profileTab},void 0,H(h.a,{mdUp:!0},void 0,H(p.a,{value:a,onChange:this.handleChange,variant:"fullWidth",indicatorColor:"primary",textColor:"primary",centered:!0},void 0,V,q,G,K)),H(h.a,{smDown:!0},void 0,H(p.a,{value:a,onChange:this.handleChange,variant:"fullWidth",indicatorColor:"primary",textColor:"primary",centered:!0},void 0,Q,X,Y,Z))),0===a&&H(L,{},void 0,H(k.a,{data:o})),1===a&&ee,2===a&&te,3===a&&ne)}}])&&B(t.prototype,n),o&&B(t,o),a}(a.a.Component),re=Object(R.connect)((function(e){return{force:e,dataProps:e.getIn(["socmed","dataTimeline"])}}),(function(e){return{fetchData:Object(T.bindActionCreators)(x.b,e)}}))(oe);t.default=Object(_.withStyles)(E.a)(re)}}]);