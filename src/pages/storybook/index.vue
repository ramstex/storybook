<template>
	<div class="page-storybook">
		<LocalHeader />
	</div>
</template>

<script>
import { ref } from 'vue';

import BaseLink from '/src/components/base/link/index.vue';
import MarkupContainer from '/src/components/markup/container/index.vue';
import Grid, { GridRow, GridCol } from '/src/components/grid/index.vue';
import LocalHeader from './_components/header/index.vue';

export default {
	name: 'PageStorybook',

	components: {
		BaseLink,
		MarkupContainer,
		Grid,
		GridRow,
		GridCol,
		LocalHeader,
	},

	setup() {
		const sbNav = ref([
			{
				title: 'Типографика',
				href: ''
			}
		]);
		return {};
	},
}
</script>

<style lang="scss">
.page-home {

}
</style>
