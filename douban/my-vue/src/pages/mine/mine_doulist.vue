<template>
  <div class="mine_headerall">
    <MineHeader txt="豆列" txt2="创建"></MineHeader>
    <Willbe todo="你还没有创建任何豆列"></Willbe>
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
