(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{d21d9057ef8d2329d711:function(e,t,o){"use strict";o.r(t);var n,r=o("8af190b70a6bc55c6f1b"),a=o.n(r),i=o("0d7f0986bcd2f33d8a2a"),c=o("57ffd1ecfa030d8529e7"),l=o.n(c),u=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),f=o("4dd2a92e69dcbe1bab10"),s=o("387190e83edf0e5eb8f6"),p=o("ad4fea5d1d5c5e03445f"),d=o.n(p),b=o("e799c547a20a503b338f"),y=o.n(b),m=o("c87810b6e820b5433784"),v=o.n(m),h=o("ab7ebb4f5c369f043e8f"),g=o.n(h),S=o("b989cec74a4c48e91050");o("cd14dd320aea12da86a1");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=P(e);if(t){var r=P(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return j(this,o)}}function j(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function F(e,t,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}var T=F(g.a,{fontSize:"inherit"}),D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(c,e);var t,o,n,r=_(c);function c(){var e;k(this,c);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return x(A(e=r.call.apply(r,[this].concat(o))),"state",{valueForm:[],openSnackbar:!1,type:"info",message:"",loading:!1,codeActive:!1}),x(A(e),"submitForm",(function(t){e.setState({loading:!0}),e.setState({openSnackbar:!1}),Object(S.a)(t).then((function(t){var o=t.data,n=o.access_token,r=o.user_id;localStorage.setItem("access_token",n),localStorage.setItem("user_id",r),setTimeout((function(){window.location.href="/app"}),1e3),e.setState({openSnackbar:!0,type:"success",message:"Login efetuado com sucesso."})})).catch((function(t){console.log(t),e.setState({loading:!1}),e.setState({openSnackbar:!0,type:"error",message:"Erro, ao efetuar login."})}))})),e}return t=c,(o=[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"closeAlert",value:function(){this.setState({openSnackbar:!1})}},{key:"render",value:function(){var e=this,t=l.a[l.a.whitelabel].name+" - Login",o=l.a[l.a.whitelabel].desc,n=this.props,r=n.classes,c=(n.logoResult,n.logoDispatch,this.state),u=c.openSnackbar,s=c.type,p=c.message,b=c.loading,m=c.codeActive;return F(a.a.Fragment,{},void 0,F("div",{className:r.root},void 0,F(i.Helmet,{},void 0,F("title",{},void 0,t),F("meta",{name:"description",content:o}),F("meta",{property:"og:title",content:t}),F("meta",{property:"og:description",content:o}),F("meta",{property:"twitter:title",content:t}),F("meta",{property:"twitter:description",content:o})),F("div",{className:r.container},void 0,F("div",{className:r.userFormWrap},void 0,F(v.a,{in:u},void 0,F(d.a,{className:"alert-login",style:{borderTopRightRadius:"8px",borderTopLeftRadius:"8px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"},severity:s,action:F(y.a,{"aria-label":"close",size:"small",onClick:function(){return e.closeAlert()}},void 0,T)},void 0,p)),F(f.hb,{codeActive:m,loading:b,styleAlert:u,onSubmit:function(t){return e.submitForm(t)}})))))}}])&&O(t.prototype,o),n&&O(t,n),c}(a.a.Component);t.default=Object(u.withStyles)(s.a)(D)}}]);