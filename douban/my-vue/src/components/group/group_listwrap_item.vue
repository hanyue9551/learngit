<template>
  <div class="item_li">
    <div class="list_left_pic">
      <slot></slot>
      <img :src=url alt="">
    </div>
    <div class="list_content">
      <h4>{{hfour}}</h4>
      <p>{{pp}}</p>
    </div>
    <small>{{num}}人</small>
    <img src="../../assets/images/ic_group_check_anonymous.png" class="group_get"/>
  </div>
</template>

<script>
export default{
  props:['hfour','pp','num','url']
}
</script>


<style>
.group_listwrap .item_li{margin:1rem 0;position:relative;}
.group_listwrap .item_li .list_left_pic{width:5.24rem;float:left;padding-top:1rem;padding-right:1rem;}
.group_listwrap .item_li .list_left_pic img{width:3.45rem;border-radius:4px;}
.group_listwrap .item_li .list_content{text-align:left;}
.group_listwrap .item_li .list_content h4{padding:0.7rem 0 0.5rem;}
.group_listwrap .item_li .list_content p{width:80%;font-size:0.69rem;color:#9b9b9b;}
.group_listwrap .item_li small{position:absolute;top:1.8rem;right:2.5rem;color:#ccc;}
.group_listwrap .group_get{width:1.5rem;position:absolute;right:0rem;top:1.8rem;}
</style>
