<template>
	<div class="home">
		<RouterLink to="/play" class="start">
			START GAME
		</RouterLink>
		<RouterLink to="/rules" class="rules">
			RULES
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

		.rules {
			font-size: rfs(1.5rem);
			text-align: center;
			text-decoration: none;
			border: 3px solid $header-outline;
			border-radius: 10px;
			padding: rfs(5px 10px);
			width: 150px;
			color: $white;
			font-weight: 500;
			margin-top: rfs(50px);
			transition: background .3s linear;

			&:hover,
			&:focus {
				outline: none;
				background: $header-outline;
			}
		}
	}
</style>
