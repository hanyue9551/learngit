<template>
<div class="film_hot">
  <div class="film_hot_top">
    <h3 v-text="txtbig"></h3>
    <span class="more">更多></span>
    <div class="film_haibao">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default{
  props:['txtbig']

}

</script>



