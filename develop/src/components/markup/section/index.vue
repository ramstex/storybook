<template>
	<section class="markup-section">
		<MarkupContainer
			:wide="$attrs.wide"
			:tight="$attrs.tight"
		>
			<slot></slot>
		</MarkupContainer>
	</section>
</template>

<script>
	import MarkupContainer from '../container/index.vue';

	export default {
		name: 'MarkupSection',
		inheritAttrs: false,

		components: {
			MarkupContainer,
		},
	}
</script>

<style lang="scss">
	.markup-section {

	}
</style>
