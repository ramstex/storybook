<template>
	<div class="page-home">

	</div>
</template>

<script>
import BaseLink from '/src/components/base/link/index.vue';
import MarkupContainer from '/src/components/markup/container/index.vue';
import Grid, { GridRow, GridCol } from '/src/components/grid/index.vue';


export default {
	name: 'PageHome',

	components: {
		BaseLink,
		MarkupContainer,
		Grid,
		GridRow,
		GridCol,
	},

	setup() {
		return {};
	},
}
</script>

<style lang="scss">
	.page-home {

	}
</style>
