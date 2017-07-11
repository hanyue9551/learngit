<template>
  <div class="searchWrap">
    <SearchHeader col="#42c055">
      <div class="searchAll">
        全部
      </div>
      <input type="text" placeholder="搜索" class="searchInput" />
      <router-link to="/home"><span class="searchSpan">取消</span></router-link>
    </SearchHeader>
  </div>
</template>

<script>
  import SearchHeader from '../components/search_header'
  export default{
    components:{
      SearchHeader
    }
  }
</script>

<style>
  .searchWrap + .tabbarWrap{display:none;}
  .searchWrap{text-align:left;position:relative;}
  .searchWrap .searchInput{outline:none;height:1.2rem;border:none;border-radius:4px;width:65%;margin-left:15%;padding:5px 8px;}
  .searchWrap .searchSpan{color:white;font-weight:500;float:right;padding-right:20px;padding-top:2px;}
  .searchAll{position:absolute;color:#42c055;width:3rem;height:1.8rem;background:white;border-radius:4px;top:1.1rem;font-weight:500;}
</style>
