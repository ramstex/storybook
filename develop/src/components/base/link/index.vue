<template>
	<component
		class="base-link"
		v-if="isLink"
		:is="tag"
	>
		<slot />
	</component>
	<template
		v-else
	>
		<router-link
			class="base-link"
			v-if="isInternal"
			:to="$attrs.to"
			v-bind="$attrs"
			@click="onClick"
			@mouseenter="onMouseEnter"
			@mouseleave="onMouseLeave"
		>
			<slot />
		</router-link>
		<a
			class="base-link"
			v-else
			:href="$attrs.to"
			target="_blank"
			@click="onClick"
			@mouseenter="onMouseEnter"
			@mouseleave="onMouseLeave"
		>
			<slot />
		</a>
	</template>
</template>

<script>
import { isAbsoluteUrl } from '../../../plugins/helper.js';

export default {
	name: 'BaseLink',
	inheritAttrs: false,

	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},

	computed: {
		isLink() {
			return !!this.$attrs.to;
		},

		isInternal() {
			return !isAbsoluteUrl(this.$attrs.to);
		},
	},

	methods: {
		onClick(event) {
			this.$emit('click', event);
		},

		onMouseEnter(event) {
			this.$emit('mouseenter', event);
		},

		onMouseLeave(event) {
			this.$emit('mouseleave', event);
		},
	},
}
</script>

<style lang="scss">
.base-link {

}
</style>
