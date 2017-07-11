<template>
	<div class='itemWrap' @click='fn'>
	  <slot name="otherImg"></slot>
		<span v-show='bol'><slot name='normalImg'></slot></span>
		<span v-show='!bol'><slot name='activeImg'></slot></span>
		<span :class="{green:!bol}">{{txt}}</span>
	</div>
</template>

<script>
export default {
	props: ['txt','id'],
	computed: {
		bol(){
			if (this.$parent.sel == this.id) {
				return false;
			}
			return true;
		}
	},
	methods: {
		fn: function(){
			this.$router.push('/'+this.id);
			this.$emit('change',this.id);
		}
	}
}
</script>

<style>
.itemWrap{width:20%;float:left;}
.itemWrap span{display:block;font-size:0.75rem;color:#999;}
.itemWrap img{width:2.0625rem;}
.itemWrap .green{color:#42bd56;}
</style>
