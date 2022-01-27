<template>
	<div class="page-home">
		<MarkupContainer>
			<h2 class="page-home__title">Home page</h2>
			<MarkupGrid>
				<MarkupGridRow>
					<MarkupGridCol>
						<h3>aaaaaaaaaaa</h3>
					</MarkupGridCol>
					<MarkupGridCol col="4">
						<h3>eeeeeeeeeee</h3>
						<h3>eeeeeeeeeee</h3>
						<h3>eeeeeeeeeee</h3>
						<h3>eeeeeeeeeee</h3>
					</MarkupGridCol>
					<MarkupGridCol>
						<h3>ooooooooooo</h3>
						<h3>ooooooooooo</h3>
					</MarkupGridCol>
				</MarkupGridRow>
			</MarkupGrid>
			<button @click="onAlertClick">alert</button>
			<button @click="onContactsClick">storybook</button>
		</MarkupContainer>
	</div>
</template>

<script>
import MarkupContainer from '../../../src/components/markup/container/index.vue';
import MarkupGrid, { MarkupGridRow, MarkupGridCol } from '../../../src/components/markup/grid/index.vue';

export default {
	name: 'PageHome',

	components: {
		MarkupContainer,
		MarkupGrid,
		MarkupGridRow,
		MarkupGridCol,
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
