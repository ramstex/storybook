<template>
	<BaseLink
		class="base-logo"
		v-bind="$attrs"
		@click="onClick"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
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
	import BaseLink from '/src/components/base/link/index.vue';

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
	.base-logo {
		display: block;

		&__image {
			width: 100%;
		}
	}
</style>
