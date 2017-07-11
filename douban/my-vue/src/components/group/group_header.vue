<template>
<div class="group_header">
  <div class="group_header_top">
    <h3>{{num}}个小组等你来玩</h3>
    <p>立即选择加入吧！</p>
    <small>根据你的兴趣推荐</small>
  </div>
  <div class="group_header_bot"></div>
</div>
</template>

<script>
  export default{
    props:['num']
  }
</script>

<style>
  .group_header_top{height:12.5rem;background:url(../../assets/images/ic_group_banner.png) no-repeat;background-size:contain;}
  .group_header_top h3{padding-top:2.5rem;}
  .group_header_top p{font-size:0.9rem;color:#9b9b9b;line-height:2rem;}
  .group_header_top small{float:left;margin-left:0.5rem;margin-top:3rem;color:#9b9b9b;}
  .group_header_bot{height:4rem;background:url(../../assets/images/ic_rec_group_banner_6.png) no-repeat;background-size:cover;width:96%;border-radius:4px;margin-left:0.5rem;}
</style>
