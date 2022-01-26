<template>
	<BaseLink
		class="ui-button"
		v-if="isLink"
		v-bind="$attrs"
	>
		<slot></slot>
	</BaseLink>
	<button
		class="ui-button"
		v-else
	>
		<slot></slot>
	</button>
</template>

<script>
	import BaseLink from '../../base/link/index.vue';

	const templates = [
		'default',
		'ghost',
		'text',
	];
	const templateDefault = templates[0];

	export default {
		name: 'UiButton',
		inheritAttrs: false,

		components: {
			BaseLink,
		},

		props: {
			template: {
				type: String,
				default: templateDefault,
				validator(value) {
					return templates.indexOf(value) >= 0;
				},
			},
		},

		computed: {
			rootClass() {
				return [
					`_template_${this.template}`,
				];
			},

			isLink() {
				return !!this.$attrs.to;
			},
		},
	}
</script>

<style lang="scss">
.ui-button {

}
</style>
