(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{210:function(t,e,r){var content=r(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("0589e0a1",content,!0,{sourceMap:!1})},211:function(t,e,r){var content=r(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5513a4e0",content,!0,{sourceMap:!1})},214:function(t,e,r){var content=r(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("6e1b31d3",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";var n=r(210);r.n(n).a},228:function(t,e,r){(e=r(21)(!1)).push([t.i,"a[data-v-21abd4e6]{background:transparent;-webkit-transition:all .2s;transition:all .2s}a[data-v-21abd4e6]:hover{-webkit-transform:none;transform:none}a:hover .blog-post[data-v-21abd4e6]{-webkit-transition:all .2s;transition:all .2s;background:#c3f4d9}.blog-post[data-v-21abd4e6]{padding:1em 1.4rem;display:inline-block;border-radius:1em;border:3px solid #39507f}.meta[data-v-21abd4e6]{float:right;font-size:.95rem;line-height:1.25rem;text-align:right}.meta[data-v-21abd4e6],a.more[data-v-21abd4e6]{color:#39507f}a.more[data-v-21abd4e6]{margin-top:1.7rem;font-size:1.15rem;padding-left:0;margin-left:0}.text[data-v-21abd4e6]{font-size:.9rem;line-height:1.2rem}h2[data-v-21abd4e6]{font-size:2rem;margin-bottom:.5em;margin-top:2.8rem;width:100%}",""]),t.exports=e},229:function(t,e,r){"use strict";var n=r(211);r.n(n).a},230:function(t,e,r){(e=r(21)(!1)).push([t.i,"",""]),t.exports=e},237:function(t,e,r){"use strict";var n=r(214);r.n(n).a},238:function(t,e,r){(e=r(21)(!1)).push([t.i,".is-one-third[data-v-50fcebb6]{margin-bottom:.5rem}",""]),t.exports=e},245:function(t,e,r){"use strict";r.r(e);r(48),r(23);var n=r(2),o=(r(225),r(46)),l={props:["post"],data:function(){return{link:"",formattedDate:""}},name:"blog-widget",methods:{getFirstParagraph:function(t){var e=t.data.body,r="",n=!1;e.map((function(t){n||"text"!=t.slice_type||t.primary.text.forEach((function(t){"paragraph"!=t.type||n||(r+=t.text,n=!0)}))}));var o=r.substr(0,300);return r.length>300?o.substr(0,o.lastIndexOf(" "))+"...":r}},created:function(){this.link=Object(o.a)(this.post),this.formattedDate=Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(this.post.data.date))}},c=(r(227),r(32)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner"},[r("nuxt-link",{staticClass:"blog-link",attrs:{to:t.link}},[r("div",{staticClass:"blog-post"},[r("div",{staticClass:"meta alt"},[t.post.data.author_name?r("div",{staticClass:"author"},[t._v(t._s(t.post.data.author_name))]):r("div",{staticClass:"author"},[t._v("Olof Ekman")]),r("div",{staticClass:"date"},[t._v(t._s(t.formattedDate))])]),r("h2",[t._v(t._s(t.$prismic.asText(t.post.data.title)))]),t.post.data.excerpt.length?r("p",{staticClass:"text"},[r("prismic-rich-text",{attrs:{field:t.post.data.excerpt}})],1):r("p",{staticClass:"text"},[t._v(t._s(t.getFirstParagraph(t.post)))]),r("a",{staticClass:"more alt"},[t._v("Continue reading →")])])])],1)}),[],!1,null,"21abd4e6",null).exports,m={props:["slice"],name:"level",methods:{strong:function(t){var e=t.content[0].spans||!1;return e=!!e.length&&"strong"===(e=e[0].type||!1)}}},h=(r(229),Object(c.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inner"},[t.slice.primary.title.length?r("prismic-rich-text",{staticClass:"title",attrs:{field:t.slice.primary.title}}):t._e(),t.slice.primary.subtitle.length?r("prismic-rich-text",{staticClass:"title",attrs:{field:t.slice.primary.subtitle}}):t._e(),t._l(t.slice.items,(function(e,i){return r("div",{key:i,staticClass:"content"},[t.strong(e)?r("div",{staticClass:"alt"},[r("prismic-rich-text",{attrs:{field:e.content}})],1):r("div",[r("prismic-rich-text",{attrs:{field:e.content}})],1)])}))],2)}),[],!1,null,null,null).exports),f=r(231),v=r(236),x={name:"Home",components:{BlogWidget:d,Level:h},data:function(){return{selector:".viewer",options:{columnWidth:".is-one-third",percentPosition:!0,gutter:0,itemSelector:".item",horizontalOrder:!0}}},methods:{loaded:function(){var t=this;v(this.selector,(function(){t.$emit("masonry-images-loaded");var e=new f(t.selector,t.options);t.$emit("masonry-loaded",e)}))}},watch:{data:function(){this.loaded()}},mounted:function(){this.loaded()},computed:{HALF:function(){return 200}},transition:{mode:"out-in"},head:function(){return{title:"five degree change"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,n=t.error,e.prev=1,e.next=4,r.api.getSingle("homepage");case 4:return o=e.sent.data,e.next=7,r.api.query(r.predicates.at("document.type","post"),{orderings:"[my.post.date desc]"});case 7:return l=e.sent,o.body.forEach((function(t){t.primary.subtitle.length&&(t.primary.subtitle[0].text=t.primary.subtitle[0].text.replace(" — "," —\n"))})),e.abrupt("return",{homepage:o,posts:l.results});case 12:e.prev=12,e.t0=e.catch(1),n({statusCode:303,message:JSON.stringify(e.t0)});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()}},y=(r(237),Object(c.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"homepage"},[this._l(this.homepage.body,(function(t,i){return e("level",{key:"slice-"+i,staticClass:"homepage-section",class:"level-"+(i+1),attrs:{slice:t,"data-name":t.primary.title[0].text.trim()}})})),e("section",{staticClass:"section blog homepage-section"},[e("h1",[this._v("Blog ")]),0!==this.posts.length?e("div",{staticClass:"blog-main viewer columns is-multiline"},this._l(this.posts,(function(t){return e("section",{key:t.id,staticClass:"blog-post item column is-one-third",attrs:{post:t}},[e("div",{staticClass:"widget"},[e("blog-widget",{attrs:{post:t}})],1)])})),0):e("div",{staticClass:"blog-main"},[e("p",[this._v("No Posts published at this time.")])])])],2)}),[],!1,null,"50fcebb6",null));e.default=y.exports}}]);