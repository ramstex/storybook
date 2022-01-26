<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<UiButton @click="onAlertClick">alert</UiButton>
			<UiButton @click="onContactsClick">storybook</UiButton>
		</MarkupContainer>
	</div>
</template>

<script>
	import UiButton	from '../../../src/components/ui/button/index.vue';
	import MarkupContainer from '../../../src/components/markup/container/index.vue';

	export default {
		name: 'PageHome',

		components: {
			UiButton,
			MarkupContainer,
		},

		methods: {
			onAlertClick() {
				alert('ALERT');
			},

			onContactsClick() {
				this.$router.push({ name: 'storybook' });
			},
		},
	}
</script>

<style lang="scss">
	@import '../../style/globals/src';

	.page-home {
		&__title {
			@include text_h1;
		}
	}
</style>
