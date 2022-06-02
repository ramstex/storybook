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
		name: 'MarkupContainer',

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
	//@import "../../../style/modules/src.scss";
	//
	.markup-container {
		width: 100%;
		//padding-left: vRel();
		//padding-right: vRel();
		margin-left: auto;
		margin-right: auto;

	//	@media (min-width: mediaTabletSm()) {
	//		padding-left: 32px;
	//		padding-right: 32px;
	//	}
	//
	//	@media (min-width: mediaDesktopSm()) {
	//		max-width: 1000px;
	//	}
	//
	//	@media (min-width: mediaDesktopMd()) {
			max-width: 1200px;
	//	}
	//
	//	@media (min-width: mediaDesktopLg()) {
	//		max-width: 1400px;
	//	}

		&._wide {
			max-width: none;
		}

		&._tight {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
