<template>
	<BaseLink
		class="ui-button"
		:class="rootClass"
		v-if="isLink"
		v-bind="$attrs"
	>
		<slot></slot>
	</BaseLink>
	<button
		class="ui-button"
		:class="rootClass"
		v-else
	>
		<slot></slot>
	</button>
</template>

<script>
	import BaseLink from '../../base/link/index.vue';

	const templates = [
		'default',
		'ghost',
		'text',
	];
	const templateDefault = templates[0];

	const themes = [
		'default',
		'primary',
		'secondary',
	];
	const themeDefault = themes[0];

	const sizes = [
		'sm',
		'md',
		'lg',
	];
	const sizeDefault = sizes[1];

	export default {
		name: 'UiButton',
		inheritAttrs: false,

		components: {
			BaseLink,
		},

		props: {
			template: {
				type: String,
				default: templateDefault,
				validator(value) {
					return templates.indexOf(value) >= 0;
				},
			},

			theme: {
				type: String,
				default: themeDefault,
				validator(value) {
					return themes.indexOf(value) >= 0;
				},
			},

			size: {
				type: String,
				default: sizeDefault,
				validator(value) {
					return sizes.indexOf(value) >= 0;
				},
			},

			disabled: {
				type: Boolean,
			},

			hover: {
				type: Boolean,
			},

			focus: {
				type: Boolean,
			},

			square: {
				type: Boolean,
			},

			invert: {
				type: Boolean,
			},

			full: {
				type: Boolean,
			},
		},

		computed: {
			rootClass() {
				return [
					{ [`_template_${this.template}`]: this.template !== templateDefault },
					{ [`_theme_${this.theme}`]: this.theme !== themeDefault },
					{ [`_size_${this.size}`]: this.size !== sizeDefault },
					{ '_disabled': this.disabled },
					{ '_hover': this.hover },
					{ '_focus': this.focus },
					{ '_square': this.square },
					{ '_invert': this.invert },
					{ '_full': this.full },
				];
			},

			isLink() {
				return !!this.$attrs.to;
			},
		},
	}
</script>

<style lang="scss">
	@use 'sass:math';
	@import '../../../style/globals/src.scss';

	.ui-button {
		width: fit-content;
		//noinspection CssInvalidFunction
		padding: math.div($gutter, 2) $gutter;
		border: none;
		cursor: pointer;
		-webkit-appearance: none;
		color: var(--color-text--inverse);
		//noinspection CssInvalidFunction
		font-size: math.div($gutter, 2);
		background-color: var(--color-back--inverse);
		transition: all $duration ease;

		&:hover {
			background-color: var(--color-back--hover--inverse);
		}
	}
</style>
