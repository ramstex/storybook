<template>
	<div class="app">
		<Layout>
			<div class="app__container">
				<BaseLink :to="{ name: 'home' }">home</BaseLink>
				<BaseLink :to="{ name: 'storybook' }" active-class="bebebe">storybook</BaseLink>
				<BaseLink to="https://google.com">External Link</BaseLink>
				<RouterView></RouterView>
			</div>
		</Layout>
	</div>
</template>

<script>
import Layout from './layouts/index.vue';
import BaseLink	from './components/base/link/index.vue';

export default {
	name: 'App',

	components: {
		Layout,
		BaseLink,
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
