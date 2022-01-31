<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<button @click="onAlertClick">alert</button>
			<button @click="onContactsClick">storybook</button>
		</MarkupContainer>
	</div>
</template>

<script>
import MarkupContainer from '../../../src/components/markup/container/index.vue';

export default {
	name: 'PageHome',

	components: {
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
@import "../../style/globals/src";

.page-home {
	&__title {
		@include text_h1;
	}
}
</style>
