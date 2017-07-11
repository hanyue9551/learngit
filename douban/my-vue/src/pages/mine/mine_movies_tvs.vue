<template>
  <div class="mine_headerall">
    <MineHeader txt="电影·电视"></MineHeader>
    <div class="router_a movies">
      <router-link to="/mine_movies_tvs/mine_movietv_want">想看</router-link>
      <router-link to="/mine_movies_tvs/mine_movietv_watching">在看</router-link>
      <router-link to="/mine_movies_tvs/mine_movietv_watched">看过</router-link>
      <router-link to="/mine_movies_tvs/mine_movietv_filmreview">影评</router-link>
      <router-link to="/mine_movies_tvs/mine_movietv_film">影人</router-link>
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
      this.$router.push('/mine_movies_tvs/mine_movietv_want')
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
  .mine_headerall .router_a{padding-top:20px;}
  .mine_headerall .movies a{color:#999;display:inline-block;width:calc(100% / 6);padding-bottom:10px;}
  .mine_headerall a.router-link-active{color:#42bd56;border-bottom:2px solid #42bd56;}
</style>
