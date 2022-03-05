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
@import "../../../style/modules/src.scss";

.block-header {
	padding: 16px 0;
}
</style>
