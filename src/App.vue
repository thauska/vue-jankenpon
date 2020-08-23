<template>
	<div
		id="app"
		:style="backgroundGradient"
		@mousemove="redefinePositions"
		@mouseleave="resetPositions"
	>
		<Header />
		<div class="view">
			<router-view />
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header/Header.vue';

	import { bgColorFrom, bgColorTo } from './styles/variables.scss';

	export default {
		name: 'App',
		components: {
			Header,
		},
		data() {
			return {
				gradientX: '50%',
				gradientY: '0%',
			};
		},
		computed: {
			backgroundGradient() {
				return {
					background: `radial-gradient(circle at ${this.gradientX} ${this.gradientY}, ${bgColorFrom}, ${bgColorTo})`,
				};
			},
		},
		methods: {
			redefinePositions({ clientX, clientY }) {
				this.gradientX = `${clientX}px`;
				this.gradientY = `${clientY}px`;
			},
			resetPositions() {
				this.gradientX = '50%';
				this.gradientY = '0%';
			},
		},
	};
</script>

<style lang="scss">
@import './styles/reset';

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Barlow Semi Condensed', Helvetica, Arial, sans-serif;

  .view {
	width: 100%;
	height: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: rfs(30px);
  }
}
</style>
