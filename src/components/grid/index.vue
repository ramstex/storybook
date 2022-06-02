<template>
	<div class="grid">
		<slot />
	</div>
</template>

<script>
	import GridRow from './row/index.vue';
	import GridCol from './col/index.vue';

	export {
		GridRow,
		GridCol
	};

	export default {
		name: 'Grid',
	}
</script>

<style lang="scss">
	.grid {

	}
</style>
