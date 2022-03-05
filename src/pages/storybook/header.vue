<template>
	<div class="storybook-header">
		<h1
			class="storybook-header__title"
			v-html="titleText"
		></h1>

		<MarkupGrid class="storybook-header__nav">
			<MarkupGridRow>
				<MarkupGridCol>
					<BaseLink :to="{ name: 'storybook-text' }">Стили текста</BaseLink>
				</MarkupGridCol>

				<MarkupGridCol>
					<BaseLink :to="{ name: 'storybook-color' }">Цвета</BaseLink>
				</MarkupGridCol>

				<MarkupGridCol>
					<BaseLink :to="{ name: 'storybook-input' }">UI - инпуты</BaseLink>
				</MarkupGridCol>
			</MarkupGridRow>
		</MarkupGrid>
	</div>
</template>

<script>
import { computed } from 'vue';
import BaseLink from '../../components/base/link/index.vue';
import MarkupGrid, { MarkupGridRow, MarkupGridCol } from '../../components/markup/grid/index.vue';

export default {
	name: 'StorybookHeader',

	components: {
		BaseLink,
		MarkupGrid,
		MarkupGridRow,
		MarkupGridCol,
	},

	props: {
		title: {
			type: String,
		},
	},

	setup(props) {
		const titleText = computed(() => {
			const rootPageName = 'Storybook';
			if (props.title) {
				return `${rootPageName} - ${props.title}`;
			}
			return rootPageName;
		});

		return {
			titleText,
		}
	},
}
</script>

<style lang="scss">
@import '../../style/modules/src.scss';

.storybook-header {
	&__title {
		margin-top: 32px;
	}

	&__nav {
		margin-top: 32px;
		margin-bottom: 32px;
	}
}
</style>
