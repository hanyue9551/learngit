<template>
<div class="hot" :style='{color:col,borderLeft:bor}'>
  <slot></slot>
</div>
</template>


<script>
export default {
	props: {
		col: {
			default:'#42bd56'
		},
		bor:{
		  default:'5px solid #42bd56'
		}
	}
}
</script>
