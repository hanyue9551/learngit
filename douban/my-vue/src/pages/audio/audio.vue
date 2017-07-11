<template>
	<div>
		<MyHeader>
			<span>书影音</span>
			<img src="../../assets/images/ic_group_search.png" class="header_img_left"/>
      <img src="../../assets/images/ic_chat_green.png" class="header_img_chat" />
		</MyHeader>
    <div style="padding:4rem 0;background:#f8f8f8;">
      <div class="audio_nav">
        <Item @change="audio_nav_change" v-for="item in arr" :txt="item.txt" :id="item.id"></Item>
      </div>
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
import MyHeader from '../../components/header'
import Item from '../../components/item'

export default {
	components: {
		MyHeader,
		Item
	},
  data:function () {
    return {
        sel:'audio/audio_film',
        arr:[
          {txt:'电影',id:'audio/audio_film'},
          {txt:'读书',id:'audio/audio_read'},
          {txt:'电视',id:'audio/audio_tv'},
          {txt:'同城',id:'audio/audio_city'},
          {txt:'音乐',id:'audio/audio_music'}
       ]
    }
  },
  created:function () {
    this.$router.push('audio/audio_film')
  },
	methods:{
	  audio_nav_change(val){
      this.sel=val
	  }
	}
}
</script>

<style>
.headerWrap span{position:relative;top:0.5rem;}
.headerWrap .header_img_left{width:1.5rem;left:20rem;top:1.6rem;}
.headerWrap .header_img_right{top:1.6rem;left:23rem;width:1.5rem;}
.audio_nav{height:2.5rem;border-bottom:2px solid transparent;}
.audio_nav .itemWrap{height:2.375rem;width:20%;line-height:2.375rem;float: left}
.audio_nav span{color: #969696;font-size:0.875rem;}
.audio_nav .green{border-bottom:2px solid #68cc74;}
</style>
