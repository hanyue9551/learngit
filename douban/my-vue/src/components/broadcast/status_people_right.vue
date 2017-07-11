<template>
  <div class="status_w_right">
    <div class="status_w_top">
      <h3>{{user_name}}</h3>
      <small><em>{{num}}</em>人关注</small>
      <span>关注</span>
      <img src="../../assets/images/ic_search_delete_gray.png" @click="del()"/>
    </div>
    <slot></slot>
    <div class="sw_bottom">
      <img src="../../assets/images/ic_like_full.png"/>
      <span>{{num2}}</span>
      <img src="../../assets/images/ic_comment_full.png"/>
      <span>{{num3}}</span>
    </div>
  </div>
</template>

<script>
export default{
  props:['user_name','num','num2','num3']
}
</script>
