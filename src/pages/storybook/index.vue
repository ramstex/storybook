<template>
	<div class="page-storybook">
		<MarkupContainer>
			<StorybookHeader />
		</MarkupContainer>
	</div>
</template>

<script>
import StorybookHeader from './header.vue';
import MarkupContainer from '../../components/markup/container/index.vue';

export default {
	name: 'PageStorybook',

	components: {
		StorybookHeader,
		MarkupContainer,
	},
};
</script>

<style lang="scss">
@import '../../style/globals/src.scss';

.page-storybook {
	&__nav {
		margin-top: $gutter;
	}
}
</style>
