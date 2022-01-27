<template>
	<BaseLink
		class="base-logo"
		v-bind="$attrs"
		@click="onClick"
	>
		<img
			class="base-logo__image"
			:src="src"
			:alt="alt"
			:title="title"
		/>
	</BaseLink>
</template>

<script>
	import BaseLink from '../link/index.vue';

	export default {
		name: 'BaseLogo',
		inheritAttrs: false,

		components: {
			BaseLink,
		},

		props: {
			src: {
				type: String,
				required: true,
			},

			alt: {
				type: String,
			},

			title: {
				type: String,
			},
		},

		methods: {
			onClick() {
				this.$emit('click');
			},
		},
	}
</script>

<style lang="scss">
	.base-logo {
		display: block;

		&__image {
			width: 100%;
		}
	}
</style>
