<template>
	<div>
		<MyHeader col='#42c055'>
			<router-link to="/search"><img src="../../assets/images/ic_search.png"/></router-link>
			<input type="text" placeholder="影视 图书 唱片 小组等"/>
			<img src="../../assets/images/ic_scan_gray.png" class="header_img_sao"/>
      <router-link to="/chat"><img src="../../assets/images/ic_chat_white.png" class="header_img_chat" /></router-link>
      <router-view></router-view>
    </MyHeader>
    <div style="padding:4rem 0;">
      <HomeBanner>
        <div class="swiper-slide"><img src="../../assets/images/banner/01.jpg"/></div>
        <div class="swiper-slide"><img src="../../assets/images/banner/02.jpg"/></div>
        <div class="swiper-slide"><img src="../../assets/images/banner/03.jpg"/></div>
      </HomeBanner>
      <div class="home_cmain">
        <HomeCmain col="#ff8447" bor="5px solid #ff8447">
          <span>热点</span>
        </HomeCmain>
        <HomeContent v-for="item in arr" :title="item.title" :home_inner="item.target.desc" :author='"作者："+item.target.author.name' :url='item.target.cover_url' >
        </HomeContent>
      </div>
      <div class="home_cmain">
        <HomeCmain>
          <span>豆瓣时间</span>
        </HomeCmain>
        <HomeContent v-for="item in arr" :title="item.title" :home_inner="item.target.desc" :author='"作者："+item.target.author.name' :url='item.target.cover_url' >
        </HomeContent>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../../components/header'
import HomeBanner from '../../components/home/home_banner'
import HomeCmain from '../../components/home/home_hot'
import HomeContent from '../../components/home/home_content'

export default {
	components: {
		MyHeader,
		HomeBanner,
		HomeCmain,
		HomeContent
	},
  data:function () {
    return {
       title:"/home",
        arr:[
          /*{
            url:require('../../assets/images/ic_group_shortcut.png'),
            title:"卡姆乐屋:北京第一家游戏机店的29年",
            home_inner:'四个人,一群老顾客,还有一只猫',
            author:'作者：触乐'
          },
          {
            url:require('../../assets/images/ic_group_shortcut.png'),
            title:"卡姆乐屋:北京第一家游戏机店的29年",
            home_inner:'四个人,一群老顾客,还有一只猫',
            author:'作者：触乐'
          }*/
        ]
    }
  },
  mounted(){
    this.search();
  },
  methods:{
    search(){
      this.axios.get('/api/homeData').then((response)=>{
        this.arr=response.data.data.recommend_feeds;
        this.arr=this.arr.splice(0,3);
        //console.log(response.data.data.recommend_feeds);
    })
    }
  }
}
</script>

<style>
.headerWrap input{border:none;width:18.375rem;border-radius:5px;height:2rem;padding:0 33px;line-height:2rem;margin-top:1.35rem;margin-left:-1.5rem;outline:none;}
.headerWrap img{width:1rem;position:absolute;top:1.87rem;left:1.5rem;}
.headerWrap .header_img_sao{left:21.85rem;}
.headerWrap .header_img_chat{top:1.6rem;left:24rem;width:1.5rem;}
.home_cmain{position:relative;}
.home_cmain .hot{height:1.25rem;text-align:left;padding-left:1rem;position:relative;margin:1rem 0;}
</style>
