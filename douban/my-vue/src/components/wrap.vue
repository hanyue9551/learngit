<template>
	<div class='wrap'>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['sel']
}

</script>

<style>
	.wrap{width:100%;height:4rem;border-top:1px solid #eee;position:fixed;bottom:0;left:0;padding-top:7px;background:#f7f7f7;}
</style>
