<template>
  <div class="mine_headerall">
    <MineHeader txt="豆瓣时间" txt2="我的礼物"></MineHeader>
    <div class="router_a time">
      <router-link to="/mine_time/mine_time_doutime">我的订阅</router-link>
      <router-link to="/mine_time/mine_time_download">我的下载</router-link>
    </div>
  </div>
</template>

<script>
  import MineHeader from '../../components/mine/mine_header'
  export default{
    components:{
      MineHeader
    },
    created(){
      this.$router.push('/mine_time/mine_time_doutime')
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
  .mine_headerall .router_a{padding-top:20px;}
  .mine_headerall .time a{color:#999;display:inline-block;width:calc(100% / 3);padding-bottom:10px;}
  .mine_headerall a.router-link-active{color:black;border-bottom:2px solid black;}
</style>
