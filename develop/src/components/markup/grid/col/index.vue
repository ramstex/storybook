<template>
	<div
		class="markup-grid-col"
		:class="rootClass"
	>
		<slot />
	</div>
</template>

<script>
	const colValues = [ 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

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
		name: 'MarkupGridCol',

		props: {
			col: {
				type: [ Number, String ],
				validator(value) {
					return !value || colValues.indexOf(value) >= 0;
				},
			},

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
		},

		computed: {
			rootClass() {
				return [
					`_col_${this.col}`,
					{ [`_align-h_${this.alignH}`]: this.alignH !== alignHDefault },
					{ [`_align-v_${this.alignV}`]: this.alignV !== alignVDefault },
				]
			},
		},
	}
</script>

<style lang="scss">
	@use 'sass:math';
	@import '../../../../style/globals/src.scss';

	.markup-grid-col {
		padding-left: math.div($gutter, 2);
		padding-right: math.div($gutter, 2);

		&._align-h_start {
			justify-self: flex-start;
		}

		&._align-h_end {
			justify-self: flex-end;
		}

		&._align-h_center {
			justify-self: center;
		}

		&._align-h_stretch {
			justify-self: stretch;
		}

		&._align-v_start {
			align-self: flex-start;
		}

		&._align-v_end {
			align-self: flex-end;
		}

		&._align-v_center {
			align-self: center;
		}

		&._align-v_stretch {
			align-self: stretch;
		}
	}
</style>
