<template>
	<div class="markup-grid">
		<slot />
	</div>
</template>

<script>
	import MarkupGridRow from './row/index.vue';
	import MarkupGridCol from './col/index.vue';

	export {
		MarkupGridRow,
		MarkupGridCol
	};

	export default {
		name: 'MarkupGrid',
	}
</script>

<style lang="scss">
	.markup-grid {

	}
</style>
