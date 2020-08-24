<template>
	<div class="home">
		<RouterLink to="/play" class="start">
			START GAME
		</RouterLink>
		<RulesButton />
	</div>
</template>

<script>
	import RulesButton from '@/components/Buttons/Rules.vue';

	export default {
		name: 'Home',
		components: {
			RulesButton,
		},
	};
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: rfs(-50px);

		.start {
			font-size: rfs(4rem);
			font-weight: bold;
			text-decoration: none;
			color: $white;
			transition: transform .3s linear, letter-spacing .3s linear;

			&:visited {
				color: $white;
			}

			&:hover,
			&:focus {
				outline: none;
				transform: scale(1.25);
				letter-spacing: 5px;
				text-decoration: underline;
			}
		}
	}
</style>
