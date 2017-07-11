<template>
  <div class="mine_header">
    <router-link to="/mine"><i><</i></router-link>
    <span>{{txt}}</span>
    <em :class="{em:bol}">{{txt2}}</em>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    props:['txt','txt2','bol']
  }
</script>

<style>
  .mine_header{height:50px;border-bottom:1px solid #eee;text-align:left;line-height:50px;}
  .mine_header i{color:#42bd56;font-family:consolas;padding:0 40px 0 20px;font-size:24px;}
  .mine_header em{color:#42bd56;font-size:12px;float:right;line-height:15px;padding:6px;border:1px solid transparent;border-radius:4px;margin:12px 10px 0 0;}
  .mine_header .em{border:1px solid #42bd56;}
</style>
