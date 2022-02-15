<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<button @click="onAlertClick">alert</button>
			<button @click="onStoryBookClick">storybook</button>
		</MarkupContainer>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';

import MarkupContainer from '../../../src/components/markup/container/index.vue';

export default {
	name: 'PageHome',

	components: {
		MarkupContainer,
	},

	setup() {
		const router = useRouter();

		const onAlertClick = () => {
			alert('ALERT');
		};

		const onStoryBookClick = () => {
			router.push({ name: 'storybook' });
		};

		return {
			onAlertClick,
			onStoryBookClick,
		};
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
