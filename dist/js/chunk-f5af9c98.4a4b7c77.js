(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f5af9c98"],{

/***/ "6cfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e0c5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "74bf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7a4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c2d4ff5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/blog/detail.vue?vue&type=template&id=4c0546d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog blog_detail"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"blog_wrap"},[_c('div',{staticClass:"blog_details"},[_c('h2',[_vm._v(_vm._s(_vm.list_blog.title))]),_c('div',{staticClass:"description"},[_vm._v(_vm._s(_vm.list_blog.description))]),_c('div',{staticClass:"author"},[_vm._v(_vm._s(_vm.list_blog.author))]),_c('div',{staticClass:"date"},[_vm._v(_vm._s(_vm.list_blog.date))])]),_c('div',{staticClass:"blog_img_wrap"},[_c('img',{attrs:{"src":_vm.list_blog.image,"alt":_vm.list_blog.title}})])]),_c('hr'),_c('div',{staticClass:"coments"},[_vm._v("Comments:")]),_c('blogComments',{staticClass:"blog_comments",attrs:{"blog_id":_vm.id}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/blog/detail.vue?vue&type=template&id=4c0546d8&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js + 2 modules
var createForOfIteratorHelper = __webpack_require__("b85c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c2d4ff5e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/blog_comments.vue?vue&type=template&id=bc0b5c88&
var blog_commentsvue_type_template_id_bc0b5c88_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"comment_list"},_vm._l((_vm.list),function(item){return _c('li',{key:item.id,staticClass:"comment_item"},[_c('div',{staticClass:"user_data"},[_vm._m(0,true),_c('div',{staticClass:"email"},[_vm._v(_vm._s(item.email))])]),_c('div',{staticClass:"comment"},[_c('h5',[_vm._v(_vm._s(item.name))]),_c('p',[_vm._v(_vm._s(item.body))])])])}),0)])}
var blog_commentsvue_type_template_id_bc0b5c88_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user_pic"},[_c('img',{attrs:{"src":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png","alt":""}})])}]


// CONCATENATED MODULE: ./src/components/blog_comments.vue?vue&type=template&id=bc0b5c88&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/blog_comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blog_commentsvue_type_script_lang_js_ = ({
  name: "blogComments",
  props: ["blog_id"],
  data: function data() {
    return {
      list: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios_default.a.get("https://jsonplaceholder.typicode.com/posts/" + this.blog_id + "/comments").then(function (resp) {
      _this.list = resp.data;
    });
  }
});
// CONCATENATED MODULE: ./src/components/blog_comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blog_commentsvue_type_script_lang_js_ = (blog_commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/blog_comments.vue?vue&type=style&index=0&lang=scss&
var blog_commentsvue_type_style_index_0_lang_scss_ = __webpack_require__("afc3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/blog_comments.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blog_commentsvue_type_script_lang_js_,
  blog_commentsvue_type_template_id_bc0b5c88_render,
  blog_commentsvue_type_template_id_bc0b5c88_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var blog_comments = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/blog/detail.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import axios from "axios";


var blogData = __webpack_require__("f4d0");

/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  name: "blog_detail",
  components: {
    blogComments: blog_comments
  },
  data: function data() {
    return {
      //   id: this.$route.params.id,
      id: 0,
      item: {},
      list_blog: []
    };
  },
  created: function created() {
    this.id = this.$route.params.id;
    this.item = blogData;

    var _iterator = Object(createForOfIteratorHelper["a" /* default */])(this.item),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;

        if (i.id == this.id) {
          this.list_blog = i;
          console.log(this.list_blog);
        } // this.list_blog.push(i);

      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } // mounted() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
  //     .then((resp) => {
  //       this.item = resp.data;
  //       console.log(this.item);
  //     });
  // },

});
// CONCATENATED MODULE: ./src/views/blog/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/blog/detail.vue?vue&type=style&index=0&lang=scss&
var detailvue_type_style_index_0_lang_scss_ = __webpack_require__("6cfe");

// CONCATENATED MODULE: ./src/views/blog/detail.vue






/* normalize component */

var detail_component = Object(componentNormalizer["a" /* default */])(
  blog_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (detail_component.exports);

/***/ }),

/***/ "afc3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_comments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("74bf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_comments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_comments_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e0c5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f4d0":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"author\":\"Artur Daley\",\"date\":\"15.09.2020\",\"title\":\"What is affiliate marketing?\",\"image\":\"https://systema-markirovki.ru/wp-content/uploads/2020/05/markirovka-odezhdy.jpg\",\"short_decription\":\"Who inspires you the most?\",\"description\":\"Is there anything more stylish than the perfect black dress? Black doesn’t have to be boring, and there are plenty of ways to express yourself whilst wearing this most fashionable shade. Stylish, easy to wear, and always on trend, the black dress is officially back in vogue, so why not give it a go? This article will show you how to wear a little black dress for any occasion.\"},{\"id\":2,\"author\":\"Luis Searle\",\"date\":\"18.11.2020\",\"title\":\"Clothing Paradise\",\"image\":\"https://la-mansh.com.ua/images/kartinki/kartinki_articles/clothes.jpg\",\"short_decription\":\"Did you buy something recently?\",\"description\":\"A new season means new outfits, and we couldn’t be more excited about that. But what do you do when the weather’s cold in the morning, hot in the day… and cold again at night? The trick to putting a stylish spring outfit together is starting out with chic basics, and then updating your style for the season.\"},{\"id\":3,\"author\":\"Oran Campbell\",\"date\":\"12.03.2020\",\"title\":\"Style beyond Imagination\",\"image\":\"https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"short_decription\":\"Your favorite item of clothing at the moment\",\"description\":\"For the modern woman, the comfort and versatility of leggings cannot be underestimated. One of the few items in our wardrobe able to transition from office to gym to cocktails, today’s leggings are available in a plethora of styles and colours. This article will show you how to style leggings to look and feel like a million bucks.\"},{\"id\":4,\"author\":\"Bret Ford\",\"date\":\"23.07.2020\",\"title\":\"Lights portraying trend\",\"image\":\"https://optomby.com/wp-content/uploads/2019/06/Semka-tovara-dlya-magazina.jpg\",\"short_decription\":\"How did you find the perfect pair of jeans?\",\"description\":\"Hot spiced drinks, comfy sweaters and crisp frosty mornings– this winter season is all about stepping out in luxurious textures, bold colours and time-honoured silhouettes. Look no further for your winter style guide to 2016/2017. We’ve got you covered for all the essential trends of this chilly season.\"},{\"id\":5,\"author\":\"Tahmid Cantu\",\"date\":\"25.02.2020\",\"title\":\"Worldwide Designs\",\"image\":\"https://www.be-in.ru/media/beingallery/gallery/userdata/user_12133/img23278.jpg\",\"short_decription\":\"How do people dress, where did you shop?\",\"description\":\"This winter embrace 50 shades of grey. Treat yourself to a new coat but step outside of the box and opt for a sleek grey color. The right grey coat can give any outfit a Parisian twist and instantly turn your look from plain to effortlessly chic. It’s official; this season grey is the new black so why not give it a go.\"},{\"id\":6,\"author\":\"Ariya Burch\",\"date\":\"11.05.2020\",\"title\":\"Selected Costumes\",\"image\":\"https://img.freepik.com/free-photo/shop-for-clothing-clothes-shop-on-hanger-at-the-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616198400\",\"short_decription\":\"What's your favorite local boutique?\",\"description\":\"If you think it’s hard to dress cute in winter, you’re not the only one. But winter style doesn’t have to mean dressing like a marshmallow. With a few winter fashion tips, it’s easy to look stylish and stay warm at the same time.\"},{\"id\":7,\"author\":\"Kalvin Fischer\",\"date\":\"12.08.2020\",\"title\":\"Fashion she loves\",\"image\":\"https://101oblik.ru/wp-content/uploads/2019/08/delovaya-odezhda-foto-1024x769.jpg\",\"short_decription\":\"What did you wear to your graduation?\",\"description\":\"A timeless feminine symbol, lately the choker necklace is seeing a serious revival. One of the signature styles of 2016, this important moment in fashion can’t be missed. We’ll show you how to play up this versatile accessory to express yourself and join the league of fashion royalty.\"},{\"id\":8,\"author\":\"Bruno Davey\",\"date\":\"30.12.2020\",\"title\":\"Clothing Cupcakes\",\"image\":\"https://apollo-8.ru/wp-content/uploads/2018/01/prodvizhenie-internet-magazinov-odezhdy.jpg\",\"short_decription\":\"Do you wear a uniform?\",\"description\":\"Coats are practical items that may require a reasonable investment – choose wisely and your coat will protect you this winter and in the years to come. More classical styles are probably best for this purpose – think camel, black, navy or grey. Look for classic shapes, tailored silhouettes with fitted sleeve caps.\"},{\"id\":9,\"author\":\"Peter Slater\",\"date\":\"19.07.2020\",\"title\":\"Fashion Hub\",\"image\":\"https://parado.com.ua/image/data/Parado_Office_Reima_odezhda_oficialniy_magazin_2018_2019.jpg\",\"short_decription\":\"How do you dress for your work identity?\",\"description\":\"Recognised for the beauty it can add to understated garments, embroidery can make your outfit really come to life. Designers have added motifs to denim jackets, jeans, leather skirts and little black dresses. Accessories haven’t escaped the trend either. Look for handbags, shoes and belts that have embroidered embellishments to add interest to your outfit.\"},{\"id\":10,\"author\":\"Caroline East\",\"date\":\"12.10.2020\",\"title\":\"Styling mindset\",\"image\":\"https://netmus.ru/image/data/modd.1.jpg\",\"short_decription\":\"What were the costumes like?\",\"description\":\"The crisp autumn breeze has us running to our closets for the coziest sweaters. This season, pair your favourite knits with a skirt for a playful and feminine look. With infinite combinations of texture, contrast and fit, we’ll show you how this look is sure to brighten even the rainiest day.\"},{\"id\":11,\"author\":\"Melina Shah\",\"date\":\"26.04.2020\",\"title\":\"Tropical Stylist\",\"image\":\"https://ukroptmarket.com.ua/images/companies/1/futbolkioptom.jpg?1618914131504\",\"short_decription\":\"Comfortable and cute.\",\"description\":\"Struggling to figure out how to look chic in the rain? This season, wellies are no longer relegated just to muddy festivals – British footwear favourite Hunter Boots are hitting the streets. Stylish, practical and comfortable, with our outfit ideas you’ll be jumping happily in puddles in no time.\"},{\"id\":12,\"author\":\"Jan Gordon\",\"date\":\"24.10.2020\",\"title\":\"Colorful Advices\",\"image\":\"https://st3.depositphotos.com/2433223/17499/i/600/depositphotos_174990066-stock-photo-mans-classic-clothes-outfit-flat.jpg\",\"short_decription\":\"How did you find the perfect pair of jeans?\",\"description\":\"Are you sick of stilettos? Tired of plain winter coats and drowning in layers to keep warm? Good news, Fall 2016 is bringing back the block heel, cosy shearling coats and new fun versions of the classic choker. Read on if you want tips and tricks on how to beat the cold whilst looking like you just stepped of a runway\"}]");

/***/ })

}]);
//# sourceMappingURL=chunk-f5af9c98.4a4b7c77.js.map