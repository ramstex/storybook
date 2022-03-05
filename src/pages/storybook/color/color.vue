<template>
	<div class="page-storybook-color-item">
		<div class="page-storybook-color-item__canvas" :style="canvasStyle"></div>
		<div class="page-storybook-color-item__details">
			<h5 class="page-storybook-color-item__title" v-html="title"></h5>
			<p class="page-storybook-color-item__description _small" v-html="description"></p>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	name: 'PageStorybookColorItem',

	props: {
		slug: {
			type: String,
		},

		title: {
			type: String,
		},

		description: {
			type: String,
		},
	},

	setup(props) {
		const canvasColor = ref(`var(--color-${ props.slug })`);
		const canvasStyle = computed(() => {
			return {
				'background-color': canvasColor.value,
			}
		});

		return {
			canvasStyle,
		};
	},
}
</script>

<style lang="scss">
	@use 'sass:math';

	@import '/src/style/modules/src.scss';

	.page-storybook-color-item {
		display: flex;
		align-items: flex-start;

		&__canvas {
			flex-shrink: 0;
			width: 120px;
			height: 70px;
			margin-right: math.div(32px, 2);
		}

		&__details {

		}
	}
</style>
