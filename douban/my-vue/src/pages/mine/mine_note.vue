<template>
  <div class="mine_headerall">
    <MineHeader txt="我的日记" txt2="写日记" bol="true"></MineHeader>
    <Willbe todo="你还没有写过日记" willsmall="写日记,分享你的故事" bol="true" note="写日记"></Willbe>
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
