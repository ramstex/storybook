<template>
	<div
		class="ui-input"
		:class="rootClass"
	>
		<span class="ui-input__caption">
			<slot />
		</span>

		<textarea
			class="ui-input__input"
			v-if="textarea"
			ref="input"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
			@mouseenter="onMouseEnter"
			@mouseleave="onMouseLeave"
		/>

		<input
			class="ui-input__input"
			v-else
			ref="input"
			v-model="inputValue"
			:type="type"
			v-bind="$attrs"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
			@mouseenter="onMouseEnter"
			@mouseleave="onMouseLeave"
		/>
	</div>
</template>

<script>
	import { ref, watch } from 'vue';

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

		emits: [
			'update:modelValue',
			'input',
			'change',
			'focus',
			'blur',
			'mouseenter',
			'mouseleave',
		],

		props: {
			modelValue: {
				type: [String, Number],
			},

			type: {
				type: String,
				default: defaultType,
				validator(value) {
					return availableTypes.indexOf(value) >= 0;
				},
			},

			placeholder: {
				type: String,
			},

			textarea: {
				type: Boolean,
			},

			float: {
				type: Boolean,
			},

			disabled: {
				type: Boolean,
			},

			required: {
				type: Boolean,
			},
		},

		setup(props) {
			const inputValue = ref(props.modelValue);
			watch(() => props.modelValue, (value) => {
				inputValue.value = value;
			});

			const focused = ref(false);
			const hovered = ref(false);

			return {
				inputValue,
				focused,
				hovered,
			};
		},

		computed: {
			rootClass() {
				return [
					{ '_float': this.float },
					{ '_textarea': this.textarea },
					{ '_disabled': this.disabled },
					{ '_required': this.required },
					{ '_focused': this.focused },
					{ '_hovered': this.hovered },
				]
			},
		},

		watch: {
			inputValue(value) {
				this.$emit('update:modelValue', value);
			},

			disabled(value) {
				if (value) {
					this.$emit('disable');
				} else {
					this.$emit('enable');
				}
			},

			focused(value) {
				if (value) {
					this.$emit('focus');
				} else {
					this.$emit('blur');
				}
			},

			hovered(value) {
				if (value) {
					this.$emit('mouseenter');
				} else {
					this.$emit('mouseleave');
				}
			},
		},

		methods: {
			onInput() {
				this.$emit('input', this.inputValue);
				this.$emit('update:modelValue', this.inputValue);
			},

			onChange() {
				this.$emit('change', this.inputValue);
				this.$emit('update:modelValue', this.inputValue);
			},

			onFocus() {
				this.focused = true;
			},

			onBlur() {
				this.focused = false;
			},

			onMouseEnter() {
				this.hovered = true;
			},

			onMouseLeave() {
				this.hovered = false;
			},
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
