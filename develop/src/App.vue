<template>
	<div class="app">
		<Layout>
			<MarkupContainer>
				<BaseLink :to="{ name: 'home' }">home</BaseLink>
				<BaseLink :to="{ name: 'storybook' }" active-class="bebebe">storybook</BaseLink>
				<BaseLink to="https://google.com">External Link</BaseLink>
			</MarkupContainer>
			<RouterView></RouterView>
		</Layout>
	</div>
</template>

<script>
import Layout from './layouts/index.vue';
import BaseLink	from './components/base/link/index.vue';
import MarkupContainer from './components/markup/container/index.vue';

export default {
	name: 'App',

	components: {
		Layout,
		BaseLink,
		MarkupContainer,
	},
}
</script>

<style lang="scss">
.app {
	width: 100%;
	&__container {
		width: 100%;
	}
}
</style>
