<template>
	<div class="page-storybook">
		<MarkupSection class="page-storybook__section">
			<h1>Storybook page</h1>
		</MarkupSection>
		<MarkupSection class="page-storybook__section">
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton>Обычная кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton ghost>Кнопка-призрак</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton theme="primary">Primary кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton theme="primary" ghost>Кнопка-призрак Primary</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton theme="secondary">Secondary кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton theme="secondary" ghost>Кнопка-призрак Secondary</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col _full">
					<UiButton full>Кнопка на всю ширину</UiButton>
				</div>
			</div>
		</MarkupSection>
		<MarkupSection class="page-storybook__section _inverse">
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton invert>Инвертированная кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton invert ghost>Инвертированная кнопка-призрак</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton theme="primary" invert>Инвертированная Primary кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton theme="primary" invert ghost>Инвертированная кнопка-призрак Primary</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col">
					<UiButton theme="secondary" invert>Инвертированная Secondary кнопка</UiButton>
				</div>
				<div class="page-storybook__col">
					<UiButton theme="secondary" invert ghost>Инвертированная кнопка-призрак Secondary</UiButton>
				</div>
			</div>
			<div class="page-storybook__row">
				<div class="page-storybook__col _full">
					<UiButton full ghost theme="primary">Кнопка на всю ширину</UiButton>
				</div>
			</div>
		</MarkupSection>
	</div>
</template>

<script>
	import UiButton from '../../../src/components/ui/button/index.vue';
	import MarkupSection from '../../../src/components/markup/section/index.vue';

	export default {
		name: 'PageStorybook',

		components: {
			UiButton,
			MarkupSection,
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

		&__section {
			& + & {
				margin-top: $gutter*2;
			}

			&._inverse {
				padding-top: $gutter * 2;
				padding-bottom: $gutter * 2;
				background-color: var(--color-back--invert);
			}
		}
	}
</style>
