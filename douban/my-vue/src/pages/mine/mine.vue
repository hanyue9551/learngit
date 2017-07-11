<template>
	<div>
		<MyHeader>
			<span>我的</span>
			<img src="../../assets/images/ic_settings.png" class="header_img_right"/>
		</MyHeader>
    <div style="padding:4rem 0;">
      <IdName></IdName>
      <div style="background:#f8f8f8;">
        <MineRemine></MineRemine>
        <MineTabbar></MineTabbar>
      </div>
    </div>
	</div>
</template>

<script>
import MyHeader from '../../components/header'
import IdName from '../../components/mine/mine_idname'
import MineRemine from '../../components/mine/mine_remine'
import MineTabbar from '../../components/mine/mine_tabbar'

export default {
	components: {
		MyHeader,
		IdName,
		MineRemine,
		MineTabbar
	}
}
</script>

<style>
.headerWrap .header_img_right{top:1.6rem;left:23rem;width:1.5rem;}
</style>
