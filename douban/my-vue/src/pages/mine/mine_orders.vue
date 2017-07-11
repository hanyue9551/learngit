<template>
  <div class="mine_headerall">
    <MineHeader txt="我的订单"></MineHeader>
  </div>
</template>

<script>
  import MineHeader from '../../components/mine/mine_header'
  export default{
    components:{
      MineHeader
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
</style>
