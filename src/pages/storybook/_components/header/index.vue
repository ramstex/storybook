<template>
	<div class="storybook-header">
		<MarkupContainer>
			<Grid>
				<GridRow>
					<GridCol
						v-for="item in nav"
						:key="item.name"
					>
						<p>
							<BaseLink
								:href="item.name"
								v-html="item.title"
							/>
						</p>
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
	name: 'StorybookHeader',

	components: {
		BaseLink,
		MarkupContainer,
		Grid,
		GridRow,
		GridCol,
	},

	setup() {
		const nav = ref([
			{
				title: 'Типографика',
				name: 'storybook.typography'
			}
		]);
		return {
			nav,
		};
	},
}
</script>

<style lang="scss">
	@use '/src/style/modules/base/src.scss' as base;

	.storybook-header {
		padding: base.$gap;
	}
</style>
