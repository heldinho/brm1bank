(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"20504e143280025d2bfc":function(e,t,o){"use strict";o.r(t);var n,i=o("8af190b70a6bc55c6f1b"),r=o("0d7f0986bcd2f33d8a2a"),a=o("57ffd1ecfa030d8529e7"),c=o.n(a),s=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),l=o("435859b6b76fb67a754a"),u=o.n(l),d=o("4dd2a92e69dcbe1bab10"),f=o("188313d2a36e593a5011");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,o,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var c=new Array(a),s=0;s<a;s++)c[s]=arguments[s+3];t.children=c}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=g(e);if(t){var i=g(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return w(this,o)}}function w(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=b(f.g,{}),S=b(f.f,{}),O=b(f.d,{}),_=b(f.h,{}),x=b(f.a,{}),k=b(f.i,{}),L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,o,n,i=v(a);function a(){return m(this,a),i.apply(this,arguments)}return t=a,(o=[{key:"render",value:function(){var e=this.props.classes,t=c.a[c.a.whitelabel].name+" - Layout",o=c.a[c.a.whitelabel].desc,n="containers/Layouts/demos/";return b("div",{},void 0,b(r.Helmet,{},void 0,b("title",{},void 0,t),b("meta",{name:"description",content:o}),b("meta",{property:"og:title",content:t}),b("meta",{property:"og:description",content:o}),b("meta",{property:"twitter:title",content:t}),b("meta",{property:"twitter:description",content:o})),b(d.sb,{title:"Grid Spacing",icon:"ios-apps-outline",desc:"The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, or 40 pixel wide."},void 0,b("div",{},void 0,j,b(d.Wb,{componentName:n+"GridLayout.js"}))),b(d.sb,{title:"Full-width",icon:"ios-apps-outline",desc:"Full-width grids: use fluid columns and breakpoints to determine when a layout needs to change."},void 0,b("div",{},void 0,S,b(d.Wb,{componentName:n+"FullWidth.js"}))),b(d.sb,{title:"Centered Grid",icon:"ios-apps-outline",desc:"Centered grids: use fixed columns and re-flow the layout when all columns (plus a defined margin) no longer fit on the screen."},void 0,b("div",{},void 0,O,b(d.Wb,{componentName:n+"Centered.js"}))),b(d.sb,{title:"Interactive",icon:"ios-apps-outline",desc:"Below is an interactive demo that lets you explore the visual results of the different settings:"},void 0,b("div",{},void 0,_,b(d.Wb,{componentName:n+"Interactive.js"}))),b("div",{className:e.root},void 0,b(u.a,{container:!0,spacing:2},void 0,b(u.a,{item:!0,md:6,xs:12},void 0,b(d.sb,{title:"Auto Layout",icon:"ios-apps-outline",desc:"The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it."},void 0,b("div",{},void 0,x,b(d.Wb,{componentName:n+"AutoLayout.js"})))),b(u.a,{item:!0,md:6,xs:12},void 0,b(d.sb,{title:"Limitations",icon:"ios-apps-outline",overflowX:!0,desc:"There is one limitation with the negative margin we use to implement the spacing between items."},void 0,b("div",{},void 0,k,b(d.Wb,{componentName:n+"Limitation.js"})))))))}}])&&y(t.prototype,o),n&&y(t,n),a}(i.Component);t.default=Object(s.withStyles)({root:{flexGrow:1}})(L)}}]);