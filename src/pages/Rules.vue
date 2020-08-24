<template>
	<div class="rules">
		<h1 class="title">RULES</h1>
		<img src="@/assets/image-rules-bonus.svg" alt="Game rules" class="image">
		<BackButton />
	</div>
</template>

<script>
	import BackButton from '@/components/Buttons/Back.vue';

	export default {
		name: 'Rules',
		components: {
			BackButton,
		},
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

        .title {
            letter-spacing: 2px;
        }

        .image {
            width: 55%;

            @media (max-width: 768px) {
                width: 80%;
            }
        }

        .image {
            margin-top: rfs(50px);
        }
    }
</style>
