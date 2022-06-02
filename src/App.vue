<template>
	<div class="app">
<!--		<Layout>-->
<!--			<BlockHeader>-->
<!--				<MarkupContainer>-->
<!--					<BaseLink :to="{ name: 'home' }">home</BaseLink>-->
<!--					<BaseLink :to="{ name: 'storybook' }" active-class="bebebe">storybook</BaseLink>-->
<!--					<BaseLink to="https://google.com">External Link</BaseLink>-->
<!--				</MarkupContainer>-->
<!--			</BlockHeader>-->
			<RouterView />
<!--		</Layout>-->
	</div>
</template>

<script>
// import Layout from '/src/layouts/index.vue';
// import BaseLink	from '/src/components/base/link/index.vue';
// import MarkupContainer from '/src/components/markup/container/index.vue';
// import BlockHeader from '/src/components/block/header/index.vue';

export default {
	name: 'App',

	components: {
		// Layout,
		// BaseLink,
		// MarkupContainer,
		// BlockHeader,
	},
}
</script>

<style lang="scss">
	.app {

	}
</style>
