<template>
  <div class="mine_headerall">
    <MineHeader txt="我的喜欢"></MineHeader>
    <Willbe todo="你还没有添加喜欢的东西"></Willbe>
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
