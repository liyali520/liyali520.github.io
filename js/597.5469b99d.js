"use strict";(self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[]).push([[597],{2597:function(n,e,a){a.r(e),a.d(e,{default:function(){return m}});var t=function(){var n=this,e=n._self._c;return e("div",{staticClass:"homepage"},[e("header",[e("nav",[e("van-tabs",{on:{change:n.onTabChange},model:{value:n.activeChannel,callback:function(e){n.activeChannel=e},expression:"activeChannel"}},n._l(n.channels,(function(n){return e("van-tab",{key:n.id,attrs:{title:n.name}})})),1)],1),e("van-icon",{staticClass:"icon",attrs:{name:"search",color:"#999",size:"20"},on:{click:n.onSearch}}),e("van-icon",{staticClass:"icon",attrs:{name:"more-o",color:"#999",size:"20"},on:{click:n.onPopupOpen}})],1),e("article-list",{attrs:{data:n.results,req:n.onReq,closeable:!0},on:{close:n.onArticleClose}}),e("van-popup",{staticClass:"popup",style:{height:"100vh",width:"100%"},attrs:{closeable:"",position:"left"},model:{value:n.popupVisible,callback:function(e){n.popupVisible=e},expression:"popupVisible"}},[e("header",[n._v(" 我的频道： "),e("span",{staticClass:"tip"},[n._v("点击进入频道")]),e("van-button",{attrs:{plain:!n.isEdit,round:"",type:"primary",size:"mini"},on:{click:n.compile}},[n._v(" "+n._s(n.isEdit?"完成":"编辑")+" ")])],1),e("div",{staticClass:"channels"},n._l(n.channels,(function(a,t){return e("div",{key:a.id,staticClass:"channel",class:{active:n.activeChannel===a.id},on:{click:function(e){n.isEdit&&n.closeChannel(a.id)}}},[e("span",{on:{click:function(e){!n.isEdit&&n.onChannelClick(t)}}},[n._v(n._s(a.name))]),e("van-icon",{directives:[{name:"show",rawName:"v-show",value:n.isEdit,expression:"isEdit"}],staticClass:"close",attrs:{name:"cross"}})],1)})),0),e("header",[n._v("可选频道：")]),e("div",{staticClass:"channels"},n._l(n.restChannels,(function(a){return e("div",{key:a.id,staticClass:"channel",on:{click:function(e){return n.addChannel(a)}}},[n._v(" + "+n._s(a.name)+" ")])})),0)])],1)},s=[],i=(a(768),a(7510));function l(){return(0,i.Z)({url:"/user/channels"})}function c(n){return(0,i.Z)({url:`/user/channels/${n}`,method:"DELETE"})}function o(n){return(0,i.Z)({url:"/user/channels",method:"PATCH",data:n})}var r=a(2284),h=a(6218);let u;var p={components:{ArticleList:h.Z},data(){return{channels:[],allChannels:[],popupVisible:!1,isEdit:!1,activeChannel:0,results:[],options:[]}},computed:{restChannels(){return this.allChannels.filter((n=>!this.channels.some((e=>e.id===n.id))))}},created(){this.refreshChannelList()},methods:{onPopupOpen(){this.popupVisible=!0},onSearch(){this.$router.push("/search")},compile(){this.isEdit=!this.isEdit},refreshChannelList(){l().then((n=>{this.channels=n.data.data.channels}))},onArticleClose(){console.log(123)},async onTabChange(n){const e=await r.UO(n,Date.now());u=e.data.data.pre_timestamp,this.results=e.data.data.results},async onReq(){const n=await r.UO(this.activeChannel,u||Date.now());return u=n?.data?.data?.pre_timestamp,this.results=this.results.concat(n.data.data.results),!0},async closeChannel(n){await c(n),this.refreshChannelList()},async addChannel(n){item.id,item.name;await o(n),this.refreshChannelList()},onChannelClick(n){this.popupVisible=!1,this.activeChannel=n}}},d=p,C=a(8081),v=(0,C.Z)(d,t,s,!1,null,"19782254",null),m=v.exports}}]);
//# sourceMappingURL=597.5469b99d.js.map