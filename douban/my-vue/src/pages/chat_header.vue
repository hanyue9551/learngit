<template>
  <div class="chat_header">
    <router-link to='/home'><i><</i></router-link>
    <span>{{txt}}</span>
    <img src="../assets/images/ic_add_chat.png" class="em">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    props:['txt','er']
  }
</script>

<style>
  .chat_header{height:50px;border-bottom:1px solid #eee;text-align:left;line-height:50px;}
  .chat_header i{color:#42bd56;font-family:consolas;padding:0 40px 0 20px;font-size:24px;}
  .chat_header .em{float:right;width:25px;padding:14px 15px 0 0;}
</style>
