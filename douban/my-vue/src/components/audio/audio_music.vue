<template>
  <div class="audio_film">
    <Wrap txtbig="华语新碟榜">
      <Item :txtsmall="item.txtsmall" v-for="item in arr">
        <img src="../../assets/images/live_player_bg.jpg" slot="filmBig" class="film_big">
        <div class="film_small">
          <img src="../../assets/images/rating_star_card_on.png"/>
          <img src="../../assets/images/rating_star_card_on.png"/>
          <img src="../../assets/images/rating_star_card_on.png"/>
          <img src="../../assets/images/rating_star_xsmall_half.png"/>
          <img src="../../assets/images/rating_star_card_off.png"/>
          <span class="span">{{item.score}}</span>
        </div>
      </Item>
    </Wrap>
  </div>
</template>

<script>
  import Wrap from './audio_wrap'
  import Item from './audio_item'
  export default{
    components:{
      Wrap,
      Item
    },
    data(){
      return {
        arr:[
          {txtsmall:'放&披风',score:'8.2'},
          {txtsmall:'猎户星座',score:'7.6'}
        ]
      }

    }
  }

</script>

<style>
  .film_hot .film_hot_top h3{float:left;padding-left:1rem;line-height:4.6rem;}
  .film_hot .film_hot_top .more{float:right;color:#42bd56;font-family:consolas;font-size:0.875rem;padding-right:1rem;line-height:4.6rem;}
  .film_hot .film_haibao{clear:both;width:200rem;overflow:hidden;}
  .film_hot .film_haibao p{font-weight:700;text-align:left;}
  .film_hot .film_haibao .li{float:left;margin:0 0.5rem;}
  .film_hot .film_hot_top .film_big{width:6.85rem;height:9.84rem;}
  .film_hot .film_small{float:left;}
  .film_hot .film_small img{width:1rem;float:left;}
  .film_hot .film_small .span{float:right;font-size:0.8rem;color:#9b9b9b;line-height:1.2rem;}
</style>
