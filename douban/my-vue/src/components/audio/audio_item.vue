<template>
  <div class="li">
    <slot name="filmBig"></slot>
    <p v-text="txtsmall"></p>
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props:['txtsmall']
  }

</script>
