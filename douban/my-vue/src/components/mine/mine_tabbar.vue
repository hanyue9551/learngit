<template>
  <div class="mineTabbarWrap">
    <router-link v-for="item in arr" :to="item.toWhere">
      <MineItem :txt="item.TXT" :url="item.url"></MineItem>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import MineItem from './mine_item'
  export default{
    components: {
    		MineItem
    	},
    data(){
      return {
        arr:[
          {
            url:require('../../assets/images/ic_my_likes.png'),
            toWhere:"/mine_likes",
            TXT:'喜欢'
          },
          {
            url:require('../../assets/images/ic_my_note.png'),
            toWhere:'/mine_note',
            TXT:'日记'
          },
          {
            url:require('../../assets/images/ic_my_album.png'),
            toWhere:"/mine_album",
            TXT:'相册'
          },
          {
            url:require('../../assets/images/ic_my_status.png'),
            toWhere:"/mine_status",
            TXT:'我的广播'
          },
          {
            url:require('../../assets/images/ic_my_movies_tvs.png'),
            toWhere:"/mine_movies_tvs",
            TXT:'电影·电视'
          },
          {
            url:require('../../assets/images/ic_my_books.png'),
            toWhere:"/mine_books",
            TXT:'读书'
          },
          {
            url:require('../../assets/images/ic_my_music.png'),
            toWhere:"/mine_music",
            TXT:'音乐'
          },
          {
            url:require('../../assets/images/ic_my_events.png'),
            toWhere:"/mine_events",
            TXT:'同城活动'
          },
          {
            url:require('../../assets/images/ic_my_likes.png'),
            toWhere:"/mine_time",
            TXT:'豆瓣时间'
          },
          {
            url:require('../../assets/images/ic_my_doulist.png'),
            toWhere:"/mine_doulist",
            TXT:'豆列'
          },
          {
            url:require('../../assets/images/ic_my_orders.png'),
            toWhere:"/mine_orders",
            TXT:'订单'
          },
          {
            url:require('../../assets/images/ic_my_wallet.png'),
            toWhere:"/mine_wallet",
            TXT:'钱包'
          }
        ]
      }
    }
  }
</script>

<style>
  .mineTabbarWrap .itemWrap{float:left;width:25%;border-bottom:1px solid #dfdfdf;height:7rem;}
  .mineTabbarWrap .itemWrap img{width:1.8rem;margin-top:30px;}
  .mineTabbarWrap .itemWrap span{display:block;margin-top:0.5rem;color:black;}
</style>
