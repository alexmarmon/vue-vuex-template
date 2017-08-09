webpackJsonp([0],[function(e,t){e.exports=function(e,t,n,r,u){var a,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,s=e.default);var i="function"==typeof s?s.options:s;t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r);var l;if(u?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},i._ssrRegister=l):n&&(l=n),l){var c=i.functional,f=c?i.render:i.beforeCreate;c?i.render=function(e,t){return l.call(t),f(e,t)}:i.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:i}}},,,,function(e,t,n){"use strict";function r(e){n(16)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(17),a=n.n(u),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-module"},[n("button",{on:{click:e.getUser}},[e._v("Get User")]),n("p",[e._v(e._s(e.fullName))]),n("p",[e._v(e._s(e.person.phone))])])},o=[],i={render:s,staticRenderFns:o},l=i,c=n(0),f=r,d=c(a.a,l,f,"data-v-42306e47",null);t.default=d.exports},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(1),a=r(u),s=n(8),o=r(s),i=n(10),l=r(i),c=n(23),f=r(c);a.default.config.productionTip=!1,new a.default({router:l.default,store:o.default,render:function(e){return e(f.default)}}).$mount("#root")},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),s=n(2),o=r(s),i=n(9),l=r(i);a.default.use(o.default),t.default=new o.default.Store({modules:{user:l.default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={person:{first_name:"Alex",last_name:"Marmon",phone:"0123456789"}},u={fullName:function(e){return e.person.first_name+" "+e.person.last_name}},a={changeUser:function(e,t){e.person={first_name:t.first_name,last_name:t.last_name,phone:t.phone}}},s={getUser:function(e){var t=e.commit;fetch("/api/users").then(function(e){return e.json()}).then(function(e){t("changeUser",{first_name:e.first_name,last_name:e.last_name,phone:e.phone})})}};t.default={state:r,getters:u,mutations:a,actions:s}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),a=r(u),s=n(3),o=r(s),i=n(11),l=r(i),c=n(18),f=r(c);a.default.use(o.default),t.default=new o.default({mode:"history",routes:[{path:"/",component:l.default},{path:"/about",component:f.default}]})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),u=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home-page"}},[n("v-title"),n("v-user")],1)},s=[],o={render:a,staticRenderFns:s},i=o,l=n(0),c=l(u.a,i,null,null,null);t.default=c.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(13),a=r(u),s=n(4),o=r(s);t.default={components:{"v-title":a.default,"v-user":o.default}}},function(e,t,n){"use strict";function r(e){n(14)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(15),a=n.n(u),s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-module"},[n("img",{attrs:{src:"/static/windTurbine.svg",alt:"wind turbine"}}),n("h2",[e._v("Vue Vuex Template")]),n("h3",[e._v("A simple start.")]),n("h3",[e._v("Home Page")])])}],i={render:s,staticRenderFns:o},l=i,c=n(0),f=r,d=c(a.a,l,f,"data-v-190eb0a4",null);t.default=d.exports},function(e,t){},function(e,t,n){"use strict"},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(2);t.default={computed:r({},(0,u.mapState)({person:function(e){return e.user.person}}),(0,u.mapGetters)(["fullName"])),methods:r({},(0,u.mapActions)(["getUser"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),u=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"about-page"}},[n("h3",[e._v("About Page")]),n("v-text",{attrs:{text:e.text}}),n("v-user")],1)},s=[],o={render:a,staticRenderFns:s},i=o,l=n(0),c=l(u.a,i,null,null,null);t.default=c.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(20),a=r(u),s=n(4),o=r(s);t.default={components:{"v-text":a.default,"v-user":o.default},data:function(){return{text:"Notice that the selected user persists when api calls are working"}}}},function(e,t,n){"use strict";function r(e){n(21)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(22),a=n.n(u),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"text-module"},[e._v(e._s(e.text))])},o=[],i={render:s,staticRenderFns:o},l=i,c=n(0),f=r,d=c(a.a,l,f,"data-v-2535a960",null);t.default=d.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{text:{type:String,required:!0}}}},function(e,t,n){"use strict";function r(e){n(24)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(25),a=n.n(u),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),e._v(" "),n("router-view")],1)},o=[],i={render:s,staticRenderFns:o},l=i,c=n(0),f=r,d=c(a.a,l,f,null,null);t.default=d.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),u=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={components:{"v-header":u.default}}},function(e,t,n){"use strict";function r(e){n(27)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(28),a=n.n(u),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-module"},e._l(e.links,function(t){return n("router-link",{key:t.name,attrs:{to:t.path}},[e._v(e._s(t.name))])}))},o=[],i={render:s,staticRenderFns:o},l=i,c=n(0),f=r,d=c(a.a,l,f,"data-v-6c669f07",null);t.default=d.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{links:[{path:"/",name:"Home"},{path:"/about",name:"About"}]}}}}],[5]);
//# sourceMappingURL=main.js.map