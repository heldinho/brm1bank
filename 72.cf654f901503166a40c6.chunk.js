(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"50b2b11ca44fa27cd2d4":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),c=n("b912ecc4473ae8a2ff0b"),l=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),u=n("6938d226fd372a75cbf9"),s=n("2aea235afd5c55b8b19b"),d=n.n(s),b=n("c7fd554010f79f6c0ef8"),p=n.n(b),m=n("921c0b8c557fe6ba5da8"),y=n.n(m),v=n("16c7abd7abc407b9f247"),h=n.n(v),g=n("e799c547a20a503b338f"),w=n.n(g),N=n("b02fe3f80d4238b52f20"),S=n.n(N),O=n("57ffd1ecfa030d8529e7"),j=n.n(O),_=(n("d1e396376256a54132c7"),n("387190e83edf0e5eb8f6"));function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return A(this,n)}}function A(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=P(y.a,{variant:"h5",gutterBottom:!0,align:"center"},void 0,"Will come with performance in design"),I=P("aside",{},void 0,P(d.a,{variant:"contained",color:"secondary",type:"submit"},void 0,"Notify me")),J=P("i",{className:"ion-social-facebook"}),T=P("i",{className:"ion-social-twitter"}),$=P("i",{className:"ion-social-github"}),G=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,o,r=W(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return B(E(e=r.call.apply(r,[this].concat(n))),"state",{email:""}),B(E(e),"handleChange",(function(t){return function(n){e.setState(B({},t,n.target.value))}})),e}return t=a,(n=[{key:"render",value:function(){var e=j.a[j.a.whitelabel].name+" - Coming Soon",t=j.a[j.a.whitelabel].desc,n=this.props,o=n.classes,r=n.deco,a=this.state.email;return P("div",{className:o.rootFull},void 0,P(i.Helmet,{},void 0,P("title",{},void 0,e),P("meta",{name:"description",content:t}),P("meta",{property:"og:title",content:e}),P("meta",{property:"og:description",content:t}),P("meta",{property:"twitter:title",content:e}),P("meta",{property:"twitter:description",content:t})),P("div",{className:o.container},void 0,P("div",{className:o.fullFormWrap},void 0,P(S.a,{className:l()(o.fullWrap,r&&o.petal,o.centerV)},void 0,P("div",{className:o.brandCenter},void 0,P("div",{className:o.brand},void 0,P("img",{src:localStorage.getItem("logo"),alt:j.a[j.a.whitelabel].name}),j.a[j.a.whitelabel].name)),P(y.a,{variant:"h2",className:o.titleGradient,gutterBottom:!0},void 0,"Coming Soon"),D,P("section",{className:o.pageFormWrap},void 0,P("div",{className:l()(o.notifyForm,o.centerAdornment)},void 0,P(h.a,{},void 0,P(p.a,{fullWidth:!0,id:"standard-name",label:"Email",className:o.textField,value:a,onChange:this.handleChange("email"),margin:"normal"})),I),P("div",{className:l()(o.lockForm,o.centerAdornment)},void 0,P(w.a,{color:"primary",className:o.button,href:"#"},void 0,J),P(w.a,{color:"primary",className:o.button,href:"#"},void 0,T),P(w.a,{color:"primary",className:o.button,href:"#"},void 0,$)))))))}}])&&F(t.prototype,n),o&&F(t,o),a}(a.a.Component),H=Object(f.connect)((function(e){return{force:e,deco:e.getIn(["ui","decoration"])}}))(G);t.default=Object(u.withStyles)(_.a)(H)}}]);