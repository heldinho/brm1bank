(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"99e902f50c58347ec141":function(t,e,n){"use strict";n.r(e);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),c=n("0d7f0986bcd2f33d8a2a"),u=n("57ffd1ecfa030d8529e7"),a=n.n(u),f=n("6938d226fd372a75cbf9"),l=n("4dd2a92e69dcbe1bab10"),s=n("d1c56869180901f6ae86");function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,c=arguments.length-3;if(e||0===c||(e={children:void 0}),1===c)e.children=r;else if(c>1){for(var u=new Array(c),a=0;a<c;a++)u[a]=arguments[a+3];e.children=u}if(e&&i)for(var f in i)void 0===e[f]&&(e[f]=i[f]);else e||(e=i||{});return{$$typeof:o,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=S(t);if(e){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(i,t);var e,n,o,r=v(i);function i(){var t;y(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return O(w(t=r.call.apply(r,[this].concat(n))),"state",{valueForm:[]}),t}return e=i,(n=[{key:"showResult",value:function(t){var e=this;setTimeout((function(){e.setState({valueForm:t}),window.alert("You submitted:\n\n".concat(e.state.valueForm))}),500)}},{key:"render",value:function(){var t=this,e=a.a[a.a.whitelabel].name+" - Form",n=a.a[a.a.whitelabel].desc;return d("div",{},void 0,d(c.Helmet,{},void 0,d("title",{},void 0,e),d("meta",{name:"description",content:n}),d("meta",{property:"og:title",content:e}),d("meta",{property:"og:description",content:n}),d("meta",{property:"twitter:title",content:e}),d("meta",{property:"twitter:description",content:n})),d(l.sb,{title:"Redux Form",icon:"ios-list-box-outline",desc:"This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form."},void 0,d("div",{},void 0,d(s.w,{onSubmit:function(e){return t.showResult(e)}}),d(l.Wb,{componentName:"containers/Forms/demos/ReduxFormDemo.js"}))))}}])&&b(e.prototype,n),o&&b(e,o),i}(i.a.Component);e.default=Object(f.withStyles)({root:{flexGrow:1}})(g)}}]);