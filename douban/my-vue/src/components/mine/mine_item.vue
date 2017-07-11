<template>
  <div class='itemWrap'>
    <img :src="url"/>
    <span>{{txt}}</span>
  </div>
</template>

<script>
  export default {
    props: ['txt','url']
  }
</script>

