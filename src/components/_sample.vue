<template>
	<div class="sample"></div>
</template>

<script>
	import { ref } from 'vue';
	import MarkupContainer from '/src/components/markup/container/index.vue';
	import Grid, { GridRow, GridCol } from '/src/components/grid/index.vue';

	export default {
		name: 'Sample',

		setup() {
			return {};
		},
	}
</script>

<style lang="scss">
	@use '/src/style/modules/base/src.scss' as base;
	@use '/src/style/modules/media/src.scss' as media;

	.sample {

	}
</style>
