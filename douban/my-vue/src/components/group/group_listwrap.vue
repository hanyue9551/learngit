<template>
  <div class="group_listwrap">
    <div class="list_header">
    <i>{{group_nav}}</i>
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default{
  props:['group_nav']
}
</script>
<style>
.group_listwrap{position:relative;}
.list_header{border-top:1px solid #ccc;width:95%;margin:2.3rem 0;margin-left:0.6rem;}
.group_listwrap .list_header i{position:absolute;top:-1rem;padding:0.5rem 2rem;background:white;left:38%;}
</style>
