<template>
  <div class="mine_headerall">
    <MineHeader txt="读书"></MineHeader>
    <div class="router_a books">
      <router-link to="/mine_books/mine_books_want">想读</router-link>
      <router-link to="/mine_books/mine_books_reading">在读</router-link>
      <router-link to="/mine_books/mine_books_readed">读过</router-link>
      <router-link to="/mine_books/mine_books_booksreview">书评</router-link>
      <router-link to="/mine_books/mine_books_note">笔记</router-link>
      <router-link to="/mine_books/mine_books_reader">作者</router-link>
    </div>

  </div>
</template>

<script>
  import MineHeader from '../../components/mine/mine_header'
  export default{
    components:{
      MineHeader
    },
    created(){
      this.$router.push('/mine_books/mine_books_want')
    }
  }
</script>

<style>
  .mine_headerall + .tabbarWrap{display:none;}
  .mine_headerall .router_a{padding-top:20px;}
  .mine_headerall .books a{color:#999;display:inline-block;width:calc(100% / 7);padding-bottom:10px;}
  .mine_headerall a.router-link-active{color:#42bd56;border-bottom:2px solid #42bd56;}
</style>
