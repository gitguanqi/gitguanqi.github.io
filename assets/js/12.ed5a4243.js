(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{285:function(t,e,n){},286:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return h})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));const i=/#.*$/,s=/\.(md|html)$/,o=/\/$/,c=/^(https?:|mailto:|tel:)/;function r(t){return c.test(t)}function l(t){return/^mailto:/.test(t)}function h(t){return/^tel:/.test(t)}function u(t){if(r(t))return t;const e=t.match(i),n=e?e[0]:"",c=function(t){return decodeURI(t).replace(i,"").replace(s,"")}(t);return o.test(c)?t:c+".html"+n}function a(t,e,n){if(!t)return n;let i,s=e;for(;(s=s.$parent)&&!i;)i=s.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},290:function(t,e,n){"use strict";n(285)},291:function(t,e,n){},295:function(t,e,n){"use strict";n.r(e);var i=n(286),s={props:["stick","tag"],data:()=>({needFloat:!1,stickBottom:0}),watch:{stick(){this.unStick(),this.stickHandle()}},mounted(){this.stickHandle()},beforeDestroy(){this.unStick()},methods:{stickHandle(){if(!this.stick)return;const t=Object(i.b)(this.stick,this);t&&(this._stickerScroll=()=>{const e=this.$el.getBoundingClientRect(),n=document.body.scrollTop+document.documentElement.scrollTop;this.needFloat=document.body.offsetHeight-n-e.height<t.offsetHeight,this.stickBottom=t.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))},unStick(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(290),n(4)),c=Object(o.a)(s,(function(){return(0,this._self._c)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);e.default=c.exports},297:function(t,e,n){"use strict";n(291)},320:function(t,e,n){"use strict";n.r(e);let i;function s(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var o={components:{Sticker:n(295).default},data:()=>({activeIndex:0}),computed:{visible(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex(){const t=(this.$refs.chairTocItem||[])[this.activeIndex];if(!t)return;const e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))},$route(){}},mounted(){const t=()=>{this.$emit("visible-change",this.visible)};t(),this.$watch("visible",t),setTimeout(()=>this.triggerEvt(),1e3),this._onScroll=()=>this.onScroll(),this._onHashChange=()=>{const t=decodeURIComponent(location.hash.substring(1)),e=(this.$page.headers||[]).findIndex(e=>e.slug===t);e>=0&&(this.activeIndex=e);const n=t&&document.getElementById(t);n&&window.scrollTo(0,s(n)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll(){void 0===i&&(i=s(this.$el));const t=document.body.scrollTop+document.documentElement.scrollTop,e=this.$page.headers||[];let n=0;const o=t=>{this.activeIndex=t};for(;n<e.length;n++){if(!(s(document.getElementById(e[n].slug))-50<t)){n||o(n);break}o(n)}},triggerEvt(){this._onScroll(),this._onHashChange()}}},c=(n(297),n(4)),r=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.visible?e("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(n,i){return e("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+n.level,{active:t.activeIndex===i}]},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])})),0):t._e()}),[],!1,null,null,null);e.default=r.exports}}]);