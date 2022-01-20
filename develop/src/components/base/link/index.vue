<template>
	<router-link
		class="base-link"
		v-if="isInternal"
		:to="$attrs.to"
		v-bind="$attrs"
	>
		<slot />
	</router-link>
	<a
		class="base-link"
		v-else
		:href="$attrs.to"
		target="_blank"
	>
		<slot />
	</a>
</template>

<script>
import { isAbsoluteUrl } from '../../../plugins/helper.js';

export default {
	name: 'BaseLink',
	inheritAttrs: false,

	computed: {
		isRoot() {
			return !!this.$attrs.to;
		},

		isInternal() {
			return !isAbsoluteUrl(this.$attrs.to);
		},
	},
}
</script>

<style lang="scss">
.base-link {

}
</style>
