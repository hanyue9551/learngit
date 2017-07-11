<template>
	<div>
		<MyHeader>
			<span>推荐广播</span>
			<img src="../../assets/images/ic_status_search_user.png" class="header_img_left"/>
      <router-link to="/chat"><img src="../../assets/images/ic_chat_green.png" class="header_img_chat" /></router-link>
      <router-view></router-view>
		</MyHeader>
    <div style="background:#f8f8f8;padding:4rem 0;">
      <StatusFind></StatusFind>
      <StatusPeople>
        <StatusPeopleWho><img src="../../assets/images/media.jpg"/></StatusPeopleWho>
        <StatusPeopleRight user_name="陆大鹏Hans" num="7658" num2="65" num3="12">
          <StatusItem>
            <p>今天上午签的</p>
            <img src="../../assets/images/ic_ad_leshi_market.png"/>
          </StatusItem>
        </StatusPeopleRight>
      </StatusPeople>
      <StatusPeople>
        <StatusPeopleWho><img src="../../assets/images/media.jpg"/></StatusPeopleWho>
        <StatusPeopleRight user_name="格里高尔" num="6967" num2="10" num3="9">
          <StatusItem>
            <p>#一句话毁鸡汤#努力了也不一定会成功.但不努力肯定会很舒服!</p>
          </StatusItem>
        </StatusPeopleRight>
      </StatusPeople>
       <StatusPeople>
        <StatusPeopleWho><img src="../../assets/images/media.jpg"/></StatusPeopleWho>
        <StatusPeopleRight user_name="脑菇" num="8901" num2="27" num3="4">
          <StatusItem>
            <img src="../../assets/images/ic_ad_huawei_market.png"/>
          </StatusItem>
        </StatusPeopleRight>
      </StatusPeople>
    </div>
	</div>
</template>

<script>
import MyHeader from '../../components/header'
import StatusFind from '../../components/broadcast/status_find'
import StatusPeople from '../../components/broadcast/status_people'
import StatusPeopleWho from '../../components/broadcast/status_people_who'
import StatusPeopleRight from '../../components/broadcast/status_people_right'
import StatusItem from '../../components/broadcast/status_people_right_item'

export default {
	components: {
		MyHeader,
		StatusFind,
		StatusPeople,
    StatusPeopleWho,
    StatusPeopleRight,
    StatusItem
	}
}
</script>

<style>
  .headerWrap .header_img_left{width:1.5rem;left:20rem;top:1.6rem;}
  .headerWrap .header_img_right{top:1.6rem;left:23rem;width:1.5rem;}
  .status_wrap{border-radius:4px;width:24.23rem;background:white;margin:0.8rem;position:relative;box-shadow:0 0 0.38rem 0 #e9e9e9;overflow:hidden;max-height:20rem;}
  .status_wrap .status_w_left{width:16%;float:left;margin-right:2rem;height:100%;}
  .status_wrap .status_w_left img{width:3.5rem;border-radius:50%;margin:1.5rem 0 0 1rem;}
  .status_wrap .status_w_right{text-align:left;padding-top:2rem;float:left;width:75%;}
  .status_w_right .status_w_top span{padding:0.4rem 1.6rem;color:white;background:#42bd56;border-radius:0.2rem;position:absolute;right:2rem;top:2.2rem;}
  .status_w_right .status_w_top img{position:absolute;right:0.8rem;top:0.5rem;width:0.7rem;}
  .status_w_right .status_w_bot{margin-top:1rem;}
  .status_w_right .status_w_bot img{max-width:16rem;margin:1rem 0;}
  .status_w_right .sw_bottom{margin:1rem 0;}
  .status_w_right .sw_bottom img{width:1rem;margin:0 0.2rem;}
  .status_w_right .sw_bottom span{margin-right:1.2rem;}
</style>
