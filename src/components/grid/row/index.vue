<template>
	<div class="grid-row" :class="rootClass">
		<slot />
	</div>
</template>

<script>
	const alignValues = [
		'start',
		'end',
		'center',
		'stretch',
	];

	const justifyValues = [
		'start',
		'end',
		'center',
		'stretch',
	];

	export default {
		name: 'GridRow',

		props: {
			align: {
				type: String,
				default: alignValues[0],

				validator(value) {
					return alignValues.indexOf(value) >= 0;
				},
			},

			justify: {
				type: String,
				default: justifyValues[0],

				validator(value) {
					return justifyValues.indexOf(value) >= 0;
				},
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_align_start': this.align === 'start' },
					{ '_align_end': this.align === 'end' },
					{ '_align_center': this.align === 'center' },
					{ '_align_stretch': this.align === 'stretch' },

					{ '_justify_start': this.align === 'start' },
					{ '_justify_end': this.align === 'end' },
					{ '_justify_center': this.align === 'center' },
					{ '_justify_stretch': this.align === 'stretch' },
				]
			},
		},
	};
</script>

<style lang="scss">
	.grid-row {
		display: flex;
		flex-wrap: wrap;
		margin-left: calc(-1 * var(--gap) / 2);
		margin-right: calc(-1 * var(--gap) / 2);

		&._align_start {
			align-items: flex-start;
		}

		&._align_end {
			align-items: flex-end;
		}

		&._align_center {
			align-items: center;
		}

		&._align_stretch {
			 align-items: stretch;
		}

		&._justify_start {
			justify-content: flex-start;
		}

		&._justify_end {
			justify-content: flex-end;
		}

		&._justify_center {
			justify-content: center;
		}

		&._justify_stretch {
			justify-content: stretch;
		}
	}
</style>
