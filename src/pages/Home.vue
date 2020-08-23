<template>
	<div class="home">
		<RouterLink to="/play" class="start">
			START GAME
		</RouterLink>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	};
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;

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
