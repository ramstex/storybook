<template>
	<header class="block-header">
		<slot></slot>
	</header>
</template>

<script>
export default {
	name: 'BlockHeader',
}
</script>

<style lang="scss">
@use "sass:math";
@import "./src/style/globals/src.scss";

.block-header {
	padding: math.div($gutter, 2) 0;
}
</style>
