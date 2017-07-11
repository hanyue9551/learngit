<template>
  <div class="mine_headerall">
    <MineHeader txt="聊天"></MineHeader>
    <Willbe todo="快去找别人聊天吧~"></Willbe>
  </div>
</template>

<script>
  import MineHeader from './chat_header'
  import Willbe from '../components/mine/mine_doing'
  export default{
    components:{
      MineHeader,
      Willbe
    },
    props:['toWhere']
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
</style>
