(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{a5e146f1f3de3987ce62:function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),a=n.n(r),i=n("0d7f0986bcd2f33d8a2a"),c=n("57ffd1ecfa030d8529e7"),s=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("6938d226fd372a75cbf9")),l=n("4dd2a92e69dcbe1bab10"),u=n("387190e83edf0e5eb8f6"),p=n("b989cec74a4c48e91050"),d=n("ad4fea5d1d5c5e03445f"),b=n.n(d),y=n("e799c547a20a503b338f"),m=n.n(y),v=n("c87810b6e820b5433784"),h=n.n(v),g=n("ab7ebb4f5c369f043e8f");function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=r;else if(i>1){for(var c=new Array(i),s=0;s<i;s++)c[s]=arguments[s+3];t.children=c}if(t&&a)for(var f in a)void 0===t[f]&&(t[f]=a[f]);else t||(t=a||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=w(n.n(g).a,{fontSize:"inherit"}),F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,o,r=_(a);function a(){var e;k(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return A(P(e=r.call.apply(r,[this].concat(n))),"state",{valueForm:[],openSnackbar:!1,type:"",message:"",loading:!1,msg:!1}),e}return t=a,(n=[{key:"submitForm",value:function(e){var t=this;this.setState({loading:!0}),this.setState({openSnackbar:!1});var n={email:e,domain:window.location.origin};Object(p.m)("send_link_reset_password",n).then((function(e){var n=e.data;t.setState({loading:!1}),n.error?t.setState({openSnackbar:!0,type:"error",message:"Estamos fazendo manuten\xe7\xe3o na fun\xe7\xe3o de redefinir senha."}):(t.setState({msg:!0}),t.setState({openSnackbar:!1}))})).catch((function(e){t.setState({loading:!1}),t.setState({loading:!1}),t.setState({openSnackbar:!0,type:"error",message:e.msg}),console.log(e)}))}},{key:"closeAlert",value:function(){this.setState({openSnackbar:!1})}},{key:"render",value:function(){var e=this,t=s.a[s.a.whitelabel].name+" - Redefinir Senha",n=s.a[s.a.whitelabel].desc,o=this.props.classes,r=this.state,a=r.openSnackbar,c=r.type,f=r.message,u=r.loading,p=r.msg;return w("div",{className:o.root},void 0,w(i.Helmet,{},void 0,w("title",{},void 0,t),w("meta",{name:"description",content:n}),w("meta",{property:"og:title",content:t}),w("meta",{property:"og:description",content:n}),w("meta",{property:"twitter:title",content:t}),w("meta",{property:"twitter:description",content:n})),w("div",{className:o.container},void 0,w("div",{className:o.userFormWrap},void 0,w(h.a,{in:a},void 0,w(b.a,{className:"alert-login",style:{borderTopRightRadius:"8px",borderTopLeftRadius:"8px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"},severity:c,action:w(m.a,{"aria-label":"close",color:c,size:"small",onClick:function(){return e.closeAlert()}},void 0,E)},void 0,f)),w(l.Kb,{loading:u,msg:p,styleAlert:a,submitting:function(t){return e.submitForm(t)}}))))}}])&&O(t.prototype,n),o&&O(t,o),a}(a.a.Component);t.default=Object(f.withStyles)(u.a)(F)}}]);