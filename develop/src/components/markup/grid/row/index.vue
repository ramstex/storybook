<template>
	<div
		class="markup-grid-row"
		:class="rootClass"
	>
		<slot />
	</div>
</template>

<script>
	const alignVValues = [
		'start',
		'end',
		'center',
		'stretch',
	];
	const alignVDefault = alignVValues[0];

	const alignHValues = [
		'start',
		'end',
		'center',
		'stretch',
	];
	const alignHDefault = alignHValues[0];

	export default {
		name: 'MarkupGridRow',

		props: {
			alignH: {
				type: String,
				default: alignHDefault,
				validator(value) {
					return alignHValues.indexOf(value) >= 0;
				},
			},

			alignV: {
				type: String,
				default: alignVDefault,
				validator(value) {
					return alignVValues.indexOf(value) >= 0;
				},
			},

			wrap: {
				type: Boolean,
			},

			reverse: {
				type: Boolean,
			},
		},

		computed: {
			rootClass() {
				return [
					{ [`_align-h_${this.alignH}`]: this.alignH !== alignHDefault },
					{ [`_align-v_${this.alignV}`]: this.alignV !== alignVDefault },
					{ '_wrap': this.wrap },
					{ '_reverse': this.reverse },
				]
			},
		},
	}
</script>

<style lang="scss">
	@use 'sass:math';
	@import '../../../../style/globals/src.scss';

	.markup-grid-row {
		display: flex;
		margin-left: math.div(-$gutter, 2);
		margin-right: math.div(-$gutter, 2);

		&._wrap {
			flex-wrap: wrap;
		}

		&._reverse {
			flex-direction: row-reverse;
		}

		&._align-h_start {
			justify-content: flex-start;
		}

		&._align-h_end {
			justify-content: flex-end;
		}

		&._align-h_center {
			justify-content: center;
		}

		&._align-h_stretch {
			justify-content: stretch;
		}

		&._align-v_start {
			align-items: flex-start;
		}

		&._align-v_end {
			align-items: flex-end;
		}

		&._align-v_center {
			align-items: center;
		}

		&._align-v_stretch {
			align-items: stretch;
		}
	}
</style>
