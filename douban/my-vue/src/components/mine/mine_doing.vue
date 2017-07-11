<template>
  <div class="mine_willbe">
    <img src="../../assets/images/ic_empty.png" class="empty">
    <span class="willbe">{{todo}}</span>
    <small class="mine_willbe_small">{{willsmall}}</small>
    <span :class="{willbe_bol:bol}">{{note}}</span>
  </div>
</template>

<script>
  export default{
    props:['todo','willsmall','note','bol']
  }
</script>

<style>
  .mine_willbe{text-align:center;}
  .mine_willbe .empty{width:200px;padding-top:80px;}
  .mine_willbe .willbe{display:block;padding:30px 0 20px;}
  .mine_willbe .mine_willbe_small{color:#ccc;display:block;padding-bottom:20px;}
  .mine_willbe .willbe_bol{padding:10px 75px;border:1px solid #42bd56;border-radius:4px;}
</style>
