webpackJsonp([1],{"1+H9":function(t,n){},EAon:function(t,n){},"Ey/Z":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},r,!1,function(t){e("zjr4"),e("adQk")},null,null).exports,i=e("/ocq"),s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"btn-group"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/Login"}},[t._v("Login with REST response")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/LoginQS"}},[t._v("Login with query string")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/LoginRes"}},[t._v("Login with response in Web")])],1)])},staticRenderFns:[]};var c=e("VU/8")({name:"Index",data:function(){return{title:"Select logins",msg:"Choice a logion option"}},methods:{}},s,!1,function(t){e("EAon")},"data-v-1816f520",null).exports,l=e("Xxa5"),u=e.n(l),p=e("exGp"),m=e.n(p),v=e("mtWM"),d=e.n(v),f=function(t){return d.a.create({baseURL:"https://login-fake-api-bc.herokuapp.com"}).post("api/login/",{token:t})},h={name:"Login",data:function(){return{msg:"Login Bancolombia with response in DOM",login:[],input:{token:""}}},methods:{sendToken:function(){var t=this;return m()(u.a.mark(function n(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t.input.token);case 2:e=n.sent,t.login=e.data;case 4:case"end":return n.stop()}},n,t)}))()}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h2",[t._v(t._s(t.msg))]),t._v(" "),e("form",{staticClass:"center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-md-12"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Enter token")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.token,expression:"input.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter token",required:""},domProps:{value:t.input.token},on:{input:function(n){n.target.composing||t.$set(t.input,"token",n.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(n){t.sendToken()}}},[t._v("Send")])])])]),t._v(" "),e("br"),t._v(" "),e("span",[t._v(t._s(t.login.token))])])},staticRenderFns:[]};var g=e("VU/8")(h,_,!1,function(t){e("1+H9")},"data-v-483480e3",null).exports,k={name:"Login",data:function(){return{msg:"Login Bancolombia with response in Query String",login:[],input:{token:""}}},methods:{sendToken:function(){var t=this;return m()(u.a.mark(function n(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f(t.input.token);case 2:e=n.sent,t.login=e.data,t.$router.push({name:"LoginQS",query:{token:t.login.token}});case 5:case"end":return n.stop()}},n,t)}))()}}},b={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h2",[t._v(t._s(t.msg))]),t._v(" "),e("form",{staticClass:"center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-md-12"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Enter token")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.token,expression:"input.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter token",required:""},domProps:{value:t.input.token},on:{input:function(n){n.target.composing||t.$set(t.input,"token",n.target.value)}}}),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(n){t.sendToken()}}},[t._v("Send")])])])])])},staticRenderFns:[]};var C=e("VU/8")(k,b,!1,function(t){e("XUq6")},"data-v-7cebfbef",null).exports,x={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[this._v(this._s(this.msg))]),this._v(" "),this._m(0),this._v(" "),n("br")])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("form",{staticClass:"center",attrs:{method:"POST",action:"http://login-fake-api-bc.herokuapp.com/api/login/"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-md-12"},[n("label",{attrs:{for:"exampleInputEmail1"}},[this._v("Enter token")]),this._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"token",placeholder:"Enter token",required:""}}),this._v(" "),n("br"),this._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Send")])])])])}]};var E=e("VU/8")({name:"Login",data:function(){return{msg:"Login Bancolombia with response in screen"}},methods:{}},x,!1,function(t){e("Ey/Z")},"data-v-06c33812",null).exports;o.a.use(i.a);var L=new i.a({routes:[{path:"/",name:"Index",component:c},{path:"/Login",name:"Login",component:g},{path:"/LoginQS",name:"LoginQS",component:C},{path:"/LoginRes",name:"LoginRes",component:E}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:L,components:{App:a},template:"<App/>"})},XUq6:function(t,n){},adQk:function(t,n){},zjr4:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.8b6ae1d2f900a732be85.js.map