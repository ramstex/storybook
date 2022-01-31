<template>
	<div
		class="ui-input"
		:class="rootClass"
	>
		<span class="ui-input__caption">
			<slot />
		</span>

		<input
			class="ui-input__input"
			v-model="inputValue"
			:type="type"
			v-bind="$attrs"
		>
	</div>
</template>

<script>
	const availableTypes = [
		'text',
		'email',
		'password',
		'number',
	];
	const defaultType = availableTypes[0];

	export default {
		name: 'UiInput',
		inheritAttrs: false,

		props: {
			value: {
				type: [String, Number],
			},

			type: {
				type: String,
				default: defaultType,
				validator(value) {
					return availableTypes.indexOf(value) >= 0;
				},
			},

			float: {
				type: Boolean,
			},

			disabled: {
				type: Boolean,
			},
		},

		data() {
			return {
				inputValue: this.value,
			};
		},

		computed: {
			rootClass() {
				return [
					{ '_float': this.float },
					{ '_disabled': this.disabled },
				]
			},
		},

		watch: {
			value(value) {
				this.inputValue = value;
			},

			inputValue(value) {
				this.$emit('change', value);
			},
		},

		methods: {

		},
	}
</script>

<style lang="scss">
	@use 'sass:math';
	@import './src/style/globals/src.scss';

	.ui-input {
		&__input {
			display: block;
			padding: math.div($gutter, 2) $gutter*0.75;
			border-radius: 0;
			border: 1px solid var(--color-back--inverse);
			-webkit-appearance: none;

			&:focus {
				outline: none;
			}
		}

		&__caption {
			display: block;
			margin-bottom: math.div($gutter, 6);
		}
	}
</style>
