<template>
  <div class="home_content">
    <div class="home_c_left">
      <h4 v-text="title"></h4>
      <p v-text="home_inner"></p>
      <span v-text="author"></span>
    </div>
      <div class="home_c_right"><img :src="url"></div>
  </div>
</template>

<script>
  export default{
      props:['title','home_inner','author','url']
  }
</script>

<style>
.home_content{padding:1rem;text-align:left;border-bottom:1px solid #dfdfdf;}
.home_content .home_c_left{width:16rem;display:inline-block}
.home_content .home_c_left p{font-size:0.75rem;color: #bdbdbd;padding-top:0.875rem;padding-bottom:1.125rem;}
.home_content .home_c_left h4{font-family: '宋体';line-height:1.31rem;}
.home_content .home_c_left span{font-size:0.75rem;color:#dedede}
.home_content .home_c_right{width:5.62rem;height:5.62rem;float:right;}
.home_content .home_c_right img{width:5.62rem;}
</style>
