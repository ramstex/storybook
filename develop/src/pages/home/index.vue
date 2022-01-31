<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<button @click="onAlertClick">alert</button>
			<button @click="onContactsClick">storybook</button>
			<UiInput>имя</UiInput>
		</MarkupContainer>
	</div>
</template>

<script>
import MarkupContainer from '../../../src/components/markup/container/index.vue';
import UiInput from '../../../src/components/ui/input/index.vue';

export default {
	name: 'PageHome',

	data() {
		return {
			name: '',
		};
	},

	components: {
		MarkupContainer,
		UiInput,
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
