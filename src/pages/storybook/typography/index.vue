<template>
	<div class="page-home">
		<MarkupContainer>
			<Grid>
				<GridRow>
					<GridCol>

					</GridCol>
				</GridRow>
			</Grid>
		</MarkupContainer>
	</div>
</template>

<script>
import { ref } from 'vue';

import BaseLink from '/src/components/base/link/index.vue';
import MarkupContainer from '/src/components/markup/container/index.vue';
import Grid, { GridRow, GridCol } from '/src/components/grid/index.vue';


export default {
	name: 'PageStorybook',

	components: {
		BaseLink,
		MarkupContainer,
		Grid,
		GridRow,
		GridCol,
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
