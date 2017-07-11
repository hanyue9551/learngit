<template>
  <div class="mine_noti">
    <router-link to="/mine_toRemain">
      <div class="mine_n_top">
        <img src="../../assets/images/ic_mine_notification.png"/>
        <span>提醒</span>
        <i>></i>
      </div>
      <div class="mine_n_bot">
        <span>暂无提醒</span>
      </div>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style>
  .mine_noti{height:6rem;background:white;margin:1rem 0rem;}
  .mine_n_top{border-bottom:1px solid #dfdfdf;height:3rem;text-align:left;}
  .mine_n_top img{width:1.8rem;float:left;margin:1rem;}
  .mine_n_top span{float:left;line-height:3.65rem;color:black;}
  .mine_n_top i{font-family:consolas;font-style:normal;float:right;line-height:3.65rem;margin-right:1rem;}
  .mine_n_bot span{color:#ccc;line-height:3rem;margin-right:4rem;}
</style>
