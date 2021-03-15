(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"3d45ec68a9dc1e62e252":function(e,t,o){"use strict";o.r(t);var n,i=o("8af190b70a6bc55c6f1b"),r=o.n(i),a=o("0d7f0986bcd2f33d8a2a"),l=o("57ffd1ecfa030d8529e7"),c=o.n(l),s=o("435859b6b76fb67a754a"),d=o.n(s),b=o("6938d226fd372a75cbf9"),f=(o("8a2d1b95e05b6a321e74"),o("4dd2a92e69dcbe1bab10")),p=o("05c8eb146240928faf44");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,o,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=i;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=g(e);if(t){var i=g(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return T(this,o)}}function T(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=m(p.xb,{}),S=m(p.Z,{}),x=m(p.E,{}),N=m(p.m,{}),O=m(p.M,{}),W=m(p.rb,{}),_=m(p.qb,{}),k=m(p.B,{}),I=m(p.y,{}),P=m(p.l,{}),C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,e);var t,o,n,i=w(r);function r(){return v(this,r),i.apply(this,arguments)}return t=r,(o=[{key:"render",value:function(){var e=c.a[c.a.whitelabel].name+" - UI Elements",t=c.a[c.a.whitelabel].desc,o=this.props.classes,n="containers/UiElements/demos/Tabs/";return m("div",{},void 0,m(a.Helmet,{},void 0,m("title",{},void 0,e),m("meta",{name:"description",content:t}),m("meta",{property:"og:title",content:e}),m("meta",{property:"og:description",content:t}),m("meta",{property:"twitter:title",content:e}),m("meta",{property:"twitter:description",content:t})),m("div",{className:o.root},void 0,m(f.sb,{title:"Simple Tabs",icon:"md-folder-open",desc:"A simple example with no frills."},void 0,m("div",{},void 0,j,m(f.Wb,{componentName:n+"SimpleTabs.js"}))),m(f.sb,{title:"Wrapped Labels",icon:"md-folder-open",desc:"Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text will not be visible."},void 0,m("div",{},void 0,S,m(f.Wb,{componentName:n+"LongTextTabs.js"}))),m(f.sb,{title:"Fixed Tabs",icon:"ios-folder-open-outline",desc:"Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle memory."},void 0,m("div",{},void 0,x,m(f.Wb,{componentName:n+"FixedTabs.js"}))),m(f.sb,{title:"Centered",icon:"ios-folder-open-outline",desc:"The centered property should be used for larger views."},void 0,m("div",{},void 0,N,m(f.Wb,{componentName:n+"CenteredTabs.js"}))),m(f.sb,{title:"Icon Tabs",icon:"ios-folder-open-outline",desc:"Tab labels may be either all icons or all text."},void 0,m("div",{},void 0,O,m(f.Wb,{componentName:n+"IconTabs.js"}))),m(f.sb,{title:"Scrollable Tabs",icon:"ios-folder-open-outline",desc:"Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)"},void 0,m("div",{},void 0,W,m(f.Wb,{componentName:n+"ScrollTabs.js"}))),m(f.sb,{title:"Scrollable Icon Tabs",icon:"ios-folder-open-outline",desc:""},void 0,m("div",{},void 0,_,m(f.Wb,{componentName:n+"ScrollIconTabs.js"}))),m(d.a,{container:!0,spacing:3},void 0,m(d.a,{item:!0,md:6},void 0,m(f.sb,{title:"Disabled Tab",icon:"ios-folder-open-outline",desc:"Tab may be disabled by setting disabled property."},void 0,m("div",{},void 0,k,m(f.Wb,{componentName:n+"DisabledTab.js"})))),m(d.a,{item:!0,md:6},void 0,m(f.sb,{title:"Customized Tabs",icon:"ios-folder-open",desc:"If you have been reading the overrides documentation page but you are not confident jumping in, here's an example of how you can change the main color of the Tabs."},void 0,m("div",{},void 0,I,m(f.Wb,{componentName:n+"CustomTabs.js"}))))),m(f.sb,{title:"Bottom Navigation",desc:"Bottom navigation bars make it easy to explore and switch between top-level views in a single tap."},void 0,m("div",{},void 0,P,m(f.Wb,{componentName:n+"BottomNav.js"})))))}}])&&y(t.prototype,o),n&&y(t,n),r}(r.a.Component);t.default=Object(b.withStyles)({root:{flexGrow:1}})(C)}}]);