<template>
	<div class="page-storybook-color">
		<MarkupContainer>
			<StorybookHeader
				title="Color"
			/>

			<MarkupGrid>
				<MarkupGridRow wrap>
					<MarkupGridCol
						v-for="color in colors"
						col="4"
					>
						<LocalColor
							v-bind="color"
						></LocalColor>
					</MarkupGridCol>
				</MarkupGridRow>
			</MarkupGrid>
		</MarkupContainer>
	</div>
</template>

<script>
import StorybookHeader from '../header.vue';
import LocalColor from './color.vue';
import MarkupContainer from '../../../components/markup/container/index.vue';
import MarkupGrid, { MarkupGridRow, MarkupGridCol } from '../../../components/markup/grid/index.vue';

export default {
	name: 'PageStorybookColor',

	components: {
		LocalColor,
		StorybookHeader,
		MarkupContainer,
		MarkupGrid,
		MarkupGridRow,
		MarkupGridCol,
	},

	setup() {
		const colors = [
			{
				slug: 'basic-primary',
				title: 'Основной',
				description: 'Преобладающий цвет на сайте.',
			},

			{
				slug: 'basic-primary--light',
				title: 'Основной светлый',
				description: 'Более светлый вариант основного цвета',
			},

			{
				slug: 'basic-primary--dark',
				title: 'Основной темный',
				description: 'Более темный вариант основного цвета',
			},

			{
				slug: 'basic-secondary',
				title: 'Вторичный',
				description: 'Второй по важности цвет на сайте.',
			},

			{
				slug: 'basic-secondary--light',
				title: 'Вторичный светлый',
				description: 'Более светлый вариант вторичного цвета',
			},

			{
				slug: 'basic-secondary--dark',
				title: 'Вторичный темный',
				description: 'Более темный вариант вторичного цвета',
			},
		];

		return {
			colors,
		};
	},
}
</script>

<style lang="scss">
@use 'sass:math';

@import '../../../style/modules/src.scss';

.page-storybook-color {
	.markup-grid-col {
		margin-bottom: 32px;
	}
}
</style>
