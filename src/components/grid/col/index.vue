<template>
	<div class="grid-col" :class="rootClass">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'GridCol',

		props: {
			col: {
				type: [Number, String],

				validator(value) {
					return !value ||
						(
							parseInt(value) >= 1 &&
							parseInt(value) <= 12
						);
				},
			},
		},

		computed: {
			rootClass() {
				return [
					{ [`_col_${this.col}`]: this.col },
				]
			},
		},
	};
</script>

<style lang="scss">
	.grid-col {
		flex-shrink: 0;
		padding-left: calc(var(--gap) / 2);
		padding-right: calc(var(--gap) / 2);

		@for $i from 1 through 12 {
			&._col_#{$i} {
				width: calc(#{$i} * 100% / 12);
			}
		}
	}
</style>
