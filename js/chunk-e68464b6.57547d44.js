(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e68464b6"],{3732:function(t,s,a){"use strict";a("4945")},4945:function(t,s,a){},"4fa6":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"man_wrap"},[a("div",{staticClass:"clth_title"},[t._v("Men's collection:")]),a("div",{staticClass:"shop_list"},t._l(t.men_list,(function(s){return a("div",{key:s.id,staticClass:"shop_box"},[a("div",{staticClass:"img_title"},[a("div",{staticClass:"img_wrap"},[a("img",{attrs:{src:s.image,alt:s.title}})])]),a("div",{staticClass:"product_info"},[a("h3",[t._v(t._s(s.title.substr(0,22)))]),a("div",{staticClass:"price"},[t._v(t._s(s.price)+"$")]),a("button",{staticClass:"btnn",attrs:{type:"button"},on:{click:function(a){return t.detail(s.id)}}},[t._v(" Buy ")])])])})),0),a("vodal",{staticClass:"buy_modal",attrs:{show:t.show,animation:"rotate"},on:{hide:function(s){t.show=!1}}},[a("h2",{staticClass:"modal_title"},[t._v("Cart")]),a("hr"),a("div",{staticClass:"modal_wrap"},[a("div",{staticClass:"modal_product"},[a("div",{staticClass:"modal_img"},[a("img",{attrs:{src:t.details.image,alt:t.details.title}})]),a("div",{staticClass:"modal_product_info"},[a("h3",[t._v(t._s(t.details.title))]),a("div",{staticClass:"modal_descrip_prod"},[t._v(" "+t._s(t.details.description)+" ")]),a("div",{staticClass:"modal_price"},[t._v(t._s(t.details.price)+"$")])])]),a("hr"),a("form",{attrs:{method:"GET"}},[a("div",{staticClass:"mb-3 form_row"},[a("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name:")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"namee",name:"name","aria-describedby":"emailHelp","data-required":""}}),a("div",{staticClass:"form-text text-danger",attrs:{id:"name_err"}})]),a("div",{staticClass:"mb-3 form_row"},[a("label",{staticClass:"form-label",attrs:{for:"phone"}},[t._v("Phone number:")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"phone",name:"phone","aria-describedby":"emailHelp"}}),a("div",{staticClass:"form-text",attrs:{id:"phone_err"}})]),a("button",{staticClass:"btnn",attrs:{type:"submit"}},[t._v("Buy")])])])])],1)},e=[],l=a("b85c"),r=a("7486"),n={data:function(){return{show:!1,list:[],men_list:[],details:[]}},created:function(){var t,s=Object(l["a"])(r);try{for(s.s();!(t=s.n()).done;){var a=t.value;"men's clothing"==a.category&&this.men_list.push(a)}}catch(i){s.e(i)}finally{s.f()}},methods:{detail:function(t){var s,a=Object(l["a"])(this.list);try{for(a.s();!(s=a.n()).done;){var i=s.value;i.id==t&&(this.details=i,this.show=!0)}}catch(e){a.e(e)}finally{a.f()}}}},o=n,c=(a("3732"),a("2877")),d=Object(c["a"])(o,i,e,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-e68464b6.57547d44.js.map