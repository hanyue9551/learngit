<template>
  <div class="mine_headerall">
    <MineHeader txt="我的相册" txt2="上传照片" bol="true"></MineHeader>
    <Willbe todo="你还没有上传过照片" willsmall="把照片放进相册,与友邻分享" bol="true" note="创建相册"></Willbe>
  </div>
</template>

<script>
  import MineHeader from '../../components/mine/mine_header'
  import Willbe from '../../components/mine/mine_doing'
  export default{
    components:{
      MineHeader,
      Willbe
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
</style>
