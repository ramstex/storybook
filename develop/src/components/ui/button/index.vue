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

			ghost: {
				type: Boolean,
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
					{ '_ghost': this.ghost },
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
		border: 1px solid var(--color-back--invert);
		cursor: pointer;
		-webkit-appearance: none;
		text-align: center;
		text-decoration: none;
		color: var(--color-text--invert);
		//noinspection CssInvalidFunction
		font-size: math.div($gutter, 2);
		background-color: var(--color-back--invert);
		transition: all $duration ease;

		&:hover,
		&:focus,
		&._hover,
		&._focus {
			border-color: var(--color-back--hover--invert);
			background-color: var(--color-back--hover--invert);
		}

		&._full {
			width: 100%;
		}

		&._ghost {
			&:not(:hover):not(:focus):not(._hover):not(._focus) {
				border-color: var(--color-back--invert);
				color: var(--color-text);
				background-color: transparent;
			}
		}

		&._invert {
			border-color: var(--color-back);
			color: var(--color-text);
			background-color: var(--color-back);

			&._ghost {
				&:not(:hover):not(:focus):not(._hover):not(._focus) {
					border-color: var(--color-basic-back--dark);
					color: var(--color-basic-back--dark);
				}
			}

			&:hover,
			&:focus,
			&._hover,
			&._focus {
				border-color: var(--color-back--hover);
				background-color: var(--color-back--hover);
			}
		}

		&._theme_primary {
			border-color: var(--color-primary);
			color: var(--color-text--on-primary);
			background-color: var(--color-primary);

			&:hover,
			&:focus,
			&._hover,
			&._focus {
				border-color: var(--color-primary--hover);
				background-color: var(--color-primary--hover);
			}

			&._ghost {
				&:not(:hover):not(:focus):not(._hover):not(._focus) {
					border-color: var(--color-primary);
					color: var(--color-primary);
				}
			}

			&._invert {
				border-color: var(--color-back);
				color: var(--color-text--on-primary--invert);
				background-color: var(--color-back);

				&._ghost {
					&:not(:hover):not(:focus):not(._hover):not(._focus) {
						border-color: var(--color-text--on-primary--invert);
						color: var(--color-text--on-primary--invert);
					}
				}

				&:hover,
				&:focus,
				&._hover,
				&._focus {
					border-color: var(--color-back--hover);
					background-color: var(--color-back--hover);
				}
			}
		}

		&._theme_secondary {
			border-color: var(--color-secondary);
			color: var(--color-text--on-secondary);
			background-color: var(--color-secondary);

			&:hover,
			&:focus,
			&._hover,
			&._focus {
				border-color: var(--color-secondary--hover);
				background-color: var(--color-secondary--hover);
			}

			&._ghost {
				&:not(:hover):not(:focus):not(._hover):not(._focus) {
					border-color: var(--color-secondary);
					color: var(--color-secondary);
				}
			}

			&._invert {
				border-color: var(--color-back);
				color: var(--color-text--on-secondary--invert);
				background-color: var(--color-back);

				&._ghost {
					&:not(:hover):not(:focus):not(._hover):not(._focus) {
						border-color: var(--color-text--on-secondary--invert);
						color: var(--color-text--on-secondary--invert);
					}
				}

				&:hover,
				&:focus,
				&._hover,
				&._focus {
					border-color: var(--color-back--hover);
					background-color: var(--color-back--hover);
				}
			}
		}
	}
</style>
