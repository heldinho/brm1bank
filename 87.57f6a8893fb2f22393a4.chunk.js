(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{bff5a6a3704ae26a5687:function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),c=n("57ffd1ecfa030d8529e7"),u=n.n(c),f=(n("8a2d1b95e05b6a321e74"),n("921c0b8c557fe6ba5da8")),l=n.n(f),s=n("9b4cf02f7f3c4453e043"),p=n.n(s),b=n("6938d226fd372a75cbf9"),d=n("4dd2a92e69dcbe1bab10"),y=n("387190e83edf0e5eb8f6");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}if(t&&i)for(var f in i)void 0===t[f]&&(t[f]=i[f]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=P(e);if(t){var r=P(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,o,r=S(i);function i(){var e;h(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return _(j(e=r.call.apply(r,[this].concat(n))),"state",{valueForm:[]}),e}return t=i,(n=[{key:"submitForm",value:function(e){var t=this,n=this.state.valueForm;setTimeout((function(){t.setState({valueForm:e}),console.log("You submitted:\n\n".concat(n)),window.location.href="/app"}),500)}},{key:"render",value:function(){var e=this,t=u.a[u.a.whitelabel].name+" - Login Version 2",n=u.a[u.a.whitelabel].desc,o=this.props.classes;return v("div",{className:o.rootFull},void 0,v(a.Helmet,{},void 0,v("title",{},void 0,t),v("meta",{name:"description",content:n}),v("meta",{property:"og:title",content:t}),v("meta",{property:"og:description",content:n}),v("meta",{property:"twitter:title",content:t}),v("meta",{property:"twitter:description",content:n})),v("div",{className:o.containerSide},void 0,v(p.a,{smDown:!0},void 0,v("div",{className:o.opening},void 0,v(l.a,{variant:"h3",component:"h1",className:o.opening,gutterBottom:!0},void 0,"Welcome to\xa0",u.a[u.a.whitelabel].name),v(l.a,{variant:"h6",component:"p",className:o.subpening},void 0,"Please sign in to continue"))),v("div",{className:o.sideFormWrap},void 0,v(d.ib,{onSubmit:function(t){return e.submitForm(t)}}))))}}])&&w(t.prototype,n),o&&w(t,o),i}(i.a.Component);t.default=Object(b.withStyles)(y.a)(F)}}]);