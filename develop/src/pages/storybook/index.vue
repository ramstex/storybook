<template>
	<div class="page-storybook">
		<MarkupContainer>
			<h1>Storybook page</h1>
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton>Обычная кнопка</UiButton>
				</div>
			</div>
		</MarkupContainer>
	</div>
</template>

<script>
	import UiButton from '../../../src/components/ui/button/index.vue';
	import MarkupContainer from '../../../src/components/markup/container/index.vue';

	export default {
		name: 'PageStorybook',

		components: {
			UiButton,
			MarkupContainer,
		},

		methods: {

		},
	}
</script>

<style lang="scss">
	@import '../../../src/style/globals/src.scss';

	.page-storybook {
		&__row {
			display: flex;
			flex-wrap: wrap;
			margin-left: -$gutter*0.5;
			margin-right: -$gutter*0.5;

			&:not(:first-child) {
				margin-top: $gutter;
			}
		}

		&__col {
			padding-left: $gutter*0.5;
			padding-right: $gutter*0.5;

			&._full {
				width: 100%;
			}
		}
	}
</style>
