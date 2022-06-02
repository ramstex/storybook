<template>
	<header class="header">
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
	@use "/src/style/modules/base/src.scss" as base;

	.header {
		padding: 16px 0;
	}
</style>
