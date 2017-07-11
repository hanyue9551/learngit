<template>
  <div class="mine_headerall">
    <MineHeader txt="音乐"></MineHeader>
    <div class="router_a music">
      <router-link to="/mine_music/mine_music_want">想听</router-link>
      <router-link to="/mine_music/mine_music_listening">在听</router-link>
      <router-link to="/mine_music/mine_music_listened">听过</router-link>
      <router-link to="/mine_music/mine_music_musicreview">乐评</router-link>
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
      this.$router.push('/mine_music/mine_music_want')
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
  .mine_headerall .router_a{padding-top:20px;}
  .mine_headerall .music a{color:#999;display:inline-block;width:calc(100% / 5);padding-bottom:10px;}
  .mine_headerall a.router-link-active{color:#42bd56;border-bottom:2px solid #42bd56;}
</style>
