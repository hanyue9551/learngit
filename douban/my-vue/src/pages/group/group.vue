<template>
	<div>
		<MyHeader>
			<span>小组</span>
			<img src="../../assets/images/ic_group_search.png" class="header_img_left"/>
      <img src="../../assets/images/ic_chat_green.png" class="header_img_right"/>
		</MyHeader>
    <div style="padding:4rem 0;">
      <GroupH num="418909" style="padding-top:4rem;"></GroupH>
      <GroupList group_nav="影视">
        <GroupListItem :hfour=item.hfour :pp=item.pp :num=item.num :url="item.url" v-for="item in arr">
        </GroupListItem>
      </GroupList>
      <GroupList group_nav="读书">
        <GroupListItem hfour="小抄" pp="只言片语,残障断句" num="102413">
          <img src="../../assets/images/media.jpg"/>
        </GroupListItem>
      </GroupList>
    </div>
	</div>
</template>

<script>
import MyHeader from '../../components/header'
import GroupH from '../../components/group/group_header'
import GroupList from '../../components/group/group_listwrap'
import GroupListItem from '../../components/group/group_listwrap_item'

export default {
	components: {
		MyHeader,
		GroupH,
		GroupList,
		GroupListItem
	},
  data(){
    return {
      arr:[
        {
          hfour:'电视剧欢乐颂',
          pp:'属于五个女孩的都市欢乐颂,欢迎进组讨论角色、剧情、花絮',
          num:536,
          url:require("../../assets/images/media.jpg")
        },
        {
          hfour:"剪刀手电影",
          pp:'让我们对比世界各地,balabalabala',
          num:'7679',
          url:require("../../assets/images/media.jpg")
        }
      ]
    }
  }
}
</script>

<style>
.headerWrap .header_img_left{width:1.5rem;left:20rem;top:1.6rem;}
.headerWrap .header_img_right{top:1.6rem;left:23rem;width:1.5rem;}
</style>
