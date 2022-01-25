<template>
	<div
		class="markup-container"
		:class="rootClass"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		wide: {
			type: Boolean,
		},

		tight: {
			type: Boolean,
		},
	},

	computed: {
		rootClass() {
			return [
				{ '_wide': this.wide },
				{ '_tight': this.tight },
			];
		}
	},
}
</script>

<style lang="scss">
@import "./src/style/globals/src.scss";

.markup-container {
	width: 100%;
	padding-left: 30px;
	padding-right: 30px;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: mediaBreakpoint($device: 'desktop')) {
		max-width: 1000px;
	}

	&._wide {
		max-width: none;
	}

	&._tight {
		padding-left: 0;
		padding-right: 0;
	}
}
</style>
