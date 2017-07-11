<template>
  <div class="swiper-container" :class="swipeId">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div :class='{"swiper-pagination":pagination}' :style='{textAlign:paginationDirection}'></div>
  </div>
</template>

<script>
import '../../assets/libs/swiper/js/swiper.js'
export default{
  props:{
    swipeId:{
      type:String,
      default:"swiper-container"
    },
    pagination:{
      type:Boolean,
      default:true
    },
    paginationDirection:{
      type:String,
      default:'center'
    },
    effect:{
      type:String,
      default:'slide'
    },
    loop:{
      type:Boolean,
      default:true
    },
    direction:{
      type:String,
      default:'horizontal'
    },
    autoplay:{
      type:Number,
      default:2000
    },
    paginationType:{
      type:String,
      default:'bullets'
    }
  },
  mounted(){
    var that=this;
    new Swiper('.'+that.swipeId,{
      loop:that.loop,
      autoplay:that.autoplay,
      pagination:'.swiper-pagination'
    })
  }

};

</script>



<style>
  @import '../../assets/libs/swiper/css/swiper.min.css';
  .swiper-container{height:8.6rem;border-bottom:1px solid #dfdfdf;}
  .swiper-slide img{width:100%;}
  .swiper-pagination-bullet-active{background:white;}
</style>
