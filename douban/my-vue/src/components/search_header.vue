<template>
  <div class='searchItem' :style='{background: col}'>
    <slot></slot>
  </div>
</template>

<script>


  export default {
    props: {
      col: {
        default:'#f7f7f7'
      }
    }
  }
</script>

<style>
  .searchItem{width:100%;height:4rem;line-height:4rem;font-weight:bold;position:relative;border-bottom:1px solid #b2b2b2;position:fixed;z-index:10;}
</style>
