(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"67cc479335e196768c62":function(e,t,a){"use strict";a.r(t);var i,o=a("8af190b70a6bc55c6f1b"),n=a.n(o),r=(a("8a2d1b95e05b6a321e74"),a("6938d226fd372a75cbf9")),c=a("ab4cb61bcb2dc161defb"),s=a("d7dd51e1bf6bfc2c9c3d"),u=a("0d7f0986bcd2f33d8a2a"),d=a("57ffd1ecfa030d8529e7"),m=a.n(d),l=a("4dd2a92e69dcbe1bab10"),f=a("eebbc9f977e6e78f5b57"),b=a("65d62150e621c09b61db"),p=function(e){return{type:b.b,items:e}},y=function(e){return{type:b.e,person:e}},h={type:b.c},g=function(e){return{type:b.d,message:e}},v={type:b.a},w=a("68e566edc4c7d6d20638"),_=a("69cc412ededd061f5e6e"),M=[{with:"1",chat:[{id:"1_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"1_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"},{id:"1_3",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "},{id:"1_4",from:"me",date:"May, 30 2018",time:"09:55",message:"Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque"},{id:"1_5",from:"me",date:"May, 30 2018",time:"09:58",message:"Integer orci justo"},{id:"1_6",from:"contact",date:"May, 30 2018",time:"09:58",message:"Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero. Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada"}]},{with:"2",chat:[{id:"2_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"2_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"},{id:"2_3",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "}]},{with:"3",chat:[{id:"3_1",from:"contact",date:"May, 29 2018",time:"22:45",message:"Lorem ipsum dolor sit amet"},{id:"3_2",from:"me",date:"May, 29 2018",time:"22:45",message:"Pellentesque ac bibendum tortor"}]},{with:"4",chat:[{id:"4_1",from:"contact",date:"May, 30 2018",time:"09:20",message:"Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. "},{id:"4_2",from:"me",date:"May, 30 2018",time:"09:55",message:"Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque"},{id:"4_3",from:"me",date:"May, 30 2018",time:"09:58",message:"Integer orci justo"},{id:"4_4",from:"contact",date:"May, 30 2018",time:"09:58",message:"Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero. Quisque ut metus sit amet augue rutrum feugiat. Vestibulum bibendum nisi eget magna malesuada"}]},{with:"5",chat:[]},{with:"6",chat:[]}];function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,a,o){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var c=new Array(r),s=0;s<r;s++)c[s]=arguments[s+3];t.children=c}if(t&&n)for(var u in n)void 0===t[u]&&(t[u]=n[u]);else t||(t=n||{});return{$$typeof:i,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function D(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function S(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,O(t).apply(this,arguments))}var a,i,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),a=t,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchChatData,a=e.fetchContactData;t(M),a(_.a)}},{key:"render",value:function(){var e=m.a[m.a.whitelabel].name+" - Chat App",t=m.a[m.a.whitelabel].desc,a=this.props,i=a.classes,o=a.dataContact,n=a.showDetail,r=a.hideDetail,c=a.keyword,s=a.search,d=a.dataChat,f=a.chatSelected,b=a.sendMessage,p=a.remove,y=a.showMobileDetail;return j("div",{},void 0,j(u.Helmet,{},void 0,j("title",{},void 0,e),j("meta",{name:"description",content:t}),j("meta",{property:"og:title",content:e}),j("meta",{property:"og:description",content:t}),j("meta",{property:"twitter:title",content:e}),j("meta",{property:"twitter:description",content:t})),j("div",{className:i.root},void 0,j(l.r,{total:o.size,itemSelected:f,dataContact:o,showDetail:n,search:s,keyword:c}),j(l.l,{showMobileDetail:y,dataChat:d,chatSelected:f,dataContact:o,sendMessage:b,remove:p,hideDetail:r})))}}])&&D(a.prototype,i),o&&D(a,o),t}(n.a.Component),A=Object(s.connect)((function(e){return{force:e,dataContact:e.getIn(["contact","contactList"]),dataChat:e.getIn(["chat","activeChat"]),chatSelected:e.getIn(["chat","chatSelected"]),showMobileDetail:e.getIn(["chat","showMobileDetail"]),keyword:e.getIn(["contact","keywordValue"])}}),(function(e){return{fetchContactData:Object(c.bindActionCreators)(w.f,e),hideDetail:function(){return e(h)},fetchChatData:Object(c.bindActionCreators)(p,e),showDetail:Object(c.bindActionCreators)(y,e),search:Object(c.bindActionCreators)(w.i,e),sendMessage:Object(c.bindActionCreators)(g,e),remove:function(){return e(v)}}}))(k);t.default=Object(r.withStyles)(f.a)(A)}}]);