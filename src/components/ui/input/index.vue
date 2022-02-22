<template>
	<div
		class="ui-input"
		:class="rootClass"
	>
		<span v-if="!!$slots.default" class="ui-input__caption">
			<slot />
		</span>

		<textarea
			class="ui-input__input"
			v-if="textarea"
			ref="input"
			v-bind="$attrs"
			:placeholder="placeholder"
			:required="required"
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
			v-bind="$attrs"
			v-model="inputValue"
			:type="type"
			:placeholder="placeholder"
			:required="required"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
			@mouseenter="onMouseEnter"
			@mouseleave="onMouseLeave"
			@invalid="onInvalid"
		/>

		<span v-if="!!$slots.help" class="ui-input__help">
			<slot name="help" />
		</span>
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
			'invalid',
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

			invalid: {
				type: Boolean,
			},
		},

		setup(props, {emit}) {
			//	Значение инпута
			const inputValue = ref(props.modelValue);

			watch(() => props.modelValue, (value) => {
				inputValue.value = value;
			});

			watch(inputValue, (value) => {
				emit('update:modelValue', value);
			});

			//	Фокус
			const focused = ref(false);

			watch(focused, (value) => {
				if (value) {
					emit('focus');
				} else {
					emit('blur');
				}
			});

			//	Ховер
			const hovered = ref(false);

			watch(hovered, (value) => {
				if (value) {
					emit('mouseenter');
				} else {
					emit('mouseleave');
				}
			});

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
					{ '_invalid': this.invalid },
				]
			},
		},

		watch: {
			disabled(value) {
				if (value) {
					this.$emit('disable');
				} else {
					this.$emit('enable');
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

			onInvalid(event) {
				this.$emit('invalid', {
					event,
					input: this,
				});
			},
		},
	}
</script>

<style lang="scss">
	@use 'sass:math';
	@import './src/style/globals/src.scss';

	.ui-input {
		width: 100%;

		&__input {
			display: block;
			width: 100%;
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

		&__help {

		}

		&._invalid &__input {
			border-color: var(--color-basic-danger);
		}
	}
</style>
