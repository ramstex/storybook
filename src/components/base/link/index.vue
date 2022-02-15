<template>
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
		v-else-if="isExternal"
		:href="$attrs.to"
		target="_blank"
		@click="onClick"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		<slot />
	</a>

	<component
		class="base-link"
		v-else
		:is="tag"
		@click="onClick"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		<slot />
	</component>
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
			return this.isLink && !isAbsoluteUrl(this.$attrs.to);
		},

		isExternal() {
			return this.isLink && isAbsoluteUrl(this.$attrs.to);
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
