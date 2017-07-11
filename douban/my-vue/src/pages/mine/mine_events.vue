<template>
  <div class="mine_headerall">
    <MineHeader txt="同城活动"></MineHeader>
    <div class="router_a city">
      <router-link to="/mine_events/mine_events_city">感兴趣</router-link>
      <router-link to="/mine_events/mine_events_watching">要参加</router-link>
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
      this.$router.push('/mine_events/mine_events_city')
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
  .mine_headerall .router_a{padding-top:20px;}
  .mine_headerall .city a{color:#999;display:inline-block;width:calc(100% / 3);padding-bottom:10px;}
  .mine_headerall a.router-link-active{color:#42bd56;border-bottom:2px solid #42bd56;}
</style>
