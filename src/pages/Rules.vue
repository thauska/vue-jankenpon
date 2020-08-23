<template>
	<div class="rules">
		<h1 class="title">RULES</h1>
		<img src="@/assets/image-rules-bonus.svg" alt="Game rules" class="image">
		<RouterLink to="/" class="back">
			BACK
		</RouterLink>
	</div>
</template>

<script>
	export default {
		name: 'Rules',
	};
</script>

<style lang="scss" scoped>
    .rules {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 100vh;

        .title,
        .back {
            color: $white;
            letter-spacing: 2px;
        }

        .back {
            text-decoration: none;
            font-size: rfs(1.25rem);

            &:hover,
            &:focus {
                outline: none;
                text-decoration: underline;
            }
        }

        .image {
            width: 55%;

            @media (max-width: 768px) {
                width: 80%;
            }
        }

        .image,
        .back {
            margin-top: rfs(50px);
        }
    }
</style>
