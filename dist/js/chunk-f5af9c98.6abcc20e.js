(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5af9c98"],{"6cfe":function(t,e,o){"use strict";o("e0c5")},"74bf":function(t,e,o){},"7a4f":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog blog_detail"},[o("div",{staticClass:"container"},[o("div",{staticClass:"blog_wrap"},[o("div",{staticClass:"blog_details"},[o("h2",[t._v(t._s(t.list_blog.title))]),o("div",{staticClass:"description"},[t._v(t._s(t.list_blog.description))]),o("div",{staticClass:"author"},[t._v(t._s(t.list_blog.author))]),o("div",{staticClass:"date"},[t._v(t._s(t.list_blog.date))])]),o("div",{staticClass:"blog_img_wrap"},[o("img",{attrs:{src:t.list_blog.image,alt:t.list_blog.title}})])]),o("hr"),o("div",{staticClass:"coments"},[t._v("Comments:")]),o("blogComments",{staticClass:"blog_comments",attrs:{blog_id:t.id}})],1)])},s=[],a=o("b85c"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"comment_list"},t._l(t.list,(function(e){return o("li",{key:e.id,staticClass:"comment_item"},[o("div",{staticClass:"user_data"},[t._m(0,!0),o("div",{staticClass:"email"},[t._v(t._s(e.email))])]),o("div",{staticClass:"comment"},[o("h5",[t._v(t._s(e.name))]),o("p",[t._v(t._s(e.body))])])])})),0)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user_pic"},[o("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png",alt:""}})])}],l=o("bc3a"),d=o.n(l),h={name:"blogComments",props:["blog_id"],data:function(){return{list:[]}},mounted:function(){var t=this;d.a.get("https://jsonplaceholder.typicode.com/posts/"+this.blog_id+"/comments").then((function(e){t.list=e.data}))}},c=h,u=(o("afc3"),o("2877")),p=Object(u["a"])(c,r,n,!1,null,null,null),m=p.exports,g=o("f4d0"),f={name:"blog_detail",components:{blogComments:m},data:function(){return{id:0,item:{},list_blog:[]}},created:function(){this.id=this.$route.params.id,this.item=g;var t,e=Object(a["a"])(this.item);try{for(e.s();!(t=e.n()).done;){var o=t.value;o.id==this.id&&(this.list_blog=o)}}catch(i){e.e(i)}finally{e.f()}}},y=f,b=(o("6cfe"),Object(u["a"])(y,i,s,!1,null,null,null));e["default"]=b.exports},afc3:function(t,e,o){"use strict";o("74bf")},e0c5:function(t,e,o){},f4d0:function(t){t.exports=JSON.parse('[{"id":1,"author":"Artur Daley","date":"15.09.2020","title":"What is affiliate marketing?","image":"https://systema-markirovki.ru/wp-content/uploads/2020/05/markirovka-odezhdy.jpg","short_decription":"Who inspires you the most?","description":"Is there anything more stylish than the perfect black dress? Black doesn’t have to be boring, and there are plenty of ways to express yourself whilst wearing this most fashionable shade. Stylish, easy to wear, and always on trend, the black dress is officially back in vogue, so why not give it a go? This article will show you how to wear a little black dress for any occasion."},{"id":2,"author":"Luis Searle","date":"18.11.2020","title":"Clothing Paradise","image":"https://la-mansh.com.ua/images/kartinki/kartinki_articles/clothes.jpg","short_decription":"Did you buy something recently?","description":"A new season means new outfits, and we couldn’t be more excited about that. But what do you do when the weather’s cold in the morning, hot in the day… and cold again at night? The trick to putting a stylish spring outfit together is starting out with chic basics, and then updating your style for the season."},{"id":3,"author":"Oran Campbell","date":"12.03.2020","title":"Style beyond Imagination","image":"https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","short_decription":"Your favorite item of clothing at the moment","description":"For the modern woman, the comfort and versatility of leggings cannot be underestimated. One of the few items in our wardrobe able to transition from office to gym to cocktails, today’s leggings are available in a plethora of styles and colours. This article will show you how to style leggings to look and feel like a million bucks."},{"id":4,"author":"Bret Ford","date":"23.07.2020","title":"Lights portraying trend","image":"https://optomby.com/wp-content/uploads/2019/06/Semka-tovara-dlya-magazina.jpg","short_decription":"How did you find the perfect pair of jeans?","description":"Hot spiced drinks, comfy sweaters and crisp frosty mornings– this winter season is all about stepping out in luxurious textures, bold colours and time-honoured silhouettes. Look no further for your winter style guide to 2016/2017. We’ve got you covered for all the essential trends of this chilly season."},{"id":5,"author":"Tahmid Cantu","date":"25.02.2020","title":"Worldwide Designs","image":"https://www.be-in.ru/media/beingallery/gallery/userdata/user_12133/img23278.jpg","short_decription":"How do people dress, where did you shop?","description":"This winter embrace 50 shades of grey. Treat yourself to a new coat but step outside of the box and opt for a sleek grey color. The right grey coat can give any outfit a Parisian twist and instantly turn your look from plain to effortlessly chic. It’s official; this season grey is the new black so why not give it a go."},{"id":6,"author":"Ariya Burch","date":"11.05.2020","title":"Selected Costumes","image":"https://img.freepik.com/free-photo/shop-for-clothing-clothes-shop-on-hanger-at-the-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.1377952299.1616198400","short_decription":"What\'s your favorite local boutique?","description":"If you think it’s hard to dress cute in winter, you’re not the only one. But winter style doesn’t have to mean dressing like a marshmallow. With a few winter fashion tips, it’s easy to look stylish and stay warm at the same time."},{"id":7,"author":"Kalvin Fischer","date":"12.08.2020","title":"Fashion she loves","image":"https://101oblik.ru/wp-content/uploads/2019/08/delovaya-odezhda-foto-1024x769.jpg","short_decription":"What did you wear to your graduation?","description":"A timeless feminine symbol, lately the choker necklace is seeing a serious revival. One of the signature styles of 2016, this important moment in fashion can’t be missed. We’ll show you how to play up this versatile accessory to express yourself and join the league of fashion royalty."},{"id":8,"author":"Bruno Davey","date":"30.12.2020","title":"Clothing Cupcakes","image":"https://apollo-8.ru/wp-content/uploads/2018/01/prodvizhenie-internet-magazinov-odezhdy.jpg","short_decription":"Do you wear a uniform?","description":"Coats are practical items that may require a reasonable investment – choose wisely and your coat will protect you this winter and in the years to come. More classical styles are probably best for this purpose – think camel, black, navy or grey. Look for classic shapes, tailored silhouettes with fitted sleeve caps."},{"id":9,"author":"Peter Slater","date":"19.07.2020","title":"Fashion Hub","image":"https://parado.com.ua/image/data/Parado_Office_Reima_odezhda_oficialniy_magazin_2018_2019.jpg","short_decription":"How do you dress for your work identity?","description":"Recognised for the beauty it can add to understated garments, embroidery can make your outfit really come to life. Designers have added motifs to denim jackets, jeans, leather skirts and little black dresses. Accessories haven’t escaped the trend either. Look for handbags, shoes and belts that have embroidered embellishments to add interest to your outfit."},{"id":10,"author":"Caroline East","date":"12.10.2020","title":"Styling mindset","image":"https://netmus.ru/image/data/modd.1.jpg","short_decription":"What were the costumes like?","description":"The crisp autumn breeze has us running to our closets for the coziest sweaters. This season, pair your favourite knits with a skirt for a playful and feminine look. With infinite combinations of texture, contrast and fit, we’ll show you how this look is sure to brighten even the rainiest day."},{"id":11,"author":"Melina Shah","date":"26.04.2020","title":"Tropical Stylist","image":"https://ukroptmarket.com.ua/images/companies/1/futbolkioptom.jpg?1618914131504","short_decription":"Comfortable and cute.","description":"Struggling to figure out how to look chic in the rain? This season, wellies are no longer relegated just to muddy festivals – British footwear favourite Hunter Boots are hitting the streets. Stylish, practical and comfortable, with our outfit ideas you’ll be jumping happily in puddles in no time."},{"id":12,"author":"Jan Gordon","date":"24.10.2020","title":"Colorful Advices","image":"https://st3.depositphotos.com/2433223/17499/i/600/depositphotos_174990066-stock-photo-mans-classic-clothes-outfit-flat.jpg","short_decription":"How did you find the perfect pair of jeans?","description":"Are you sick of stilettos? Tired of plain winter coats and drowning in layers to keep warm? Good news, Fall 2016 is bringing back the block heel, cosy shearling coats and new fun versions of the classic choker. Read on if you want tips and tricks on how to beat the cold whilst looking like you just stepped of a runway"}]')}}]);
//# sourceMappingURL=chunk-f5af9c98.6abcc20e.js.map