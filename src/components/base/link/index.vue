<template>
	<a
		class="base-link"
		:class="rootClass"
		v-if="isExternal"
		:href="href"
		target="_blank"
		v-bind="$attrs"
	>
		<slot />
	</a>

	<router-link
		class="base-link"
		:class="rootClass"
		v-else-if="isHref"
		:to="href"
		v-bind="$attrs"
	>
		<slot />
	</router-link>

	<span
		class="base-link"
		:class="rootClass"
		v-else
		v-bind="$attrs"
	>
		<slot />
	</span>
</template>

<script>
	export default {
		name: 'BaseLink',

		inheritAttrs: false,

		props: {
			href: {
				type: String,
				required: true,
			},
		},

		computed: {
			rootClass() {
				return [
					{ '_external': this.isExternal },
					{ '_internal': !this.isExternal },
				]
			},

			isHref() {
				return !!this.href;
			},

			isExternal() {
				const protocols = [
					'http://',
					'https://',
					'ssh://',
					'ftp://',
				];

				return this.isHref && !!protocols.find((protocol) => {
					return this.href.indexOf(protocol) === 0;
				});
			},
		},
	};
</script>

<style lang="scss">
	.base-link {}
</style>
