<template>
	<component :is="componentName">
		<slot />
	</component>
</template>

<script>
import LayoutDefault from "./default.vue";
import LayoutDEmpty from "./empty.vue";

export default {
	name: 'Layout',

	components: {
		LayoutDefault,
	},

	computed: {
		componentName() {
			return 'LayoutDefault';
		},
	},
}
</script>
