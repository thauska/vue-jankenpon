<template>
	<div class="score">
		<h3 class="score-label">
			<span class="score-label--text">SCORE</span>
			<span class="score-label--number"> {{ score }} </span>
		</h3>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'Score',
		computed: {
			...mapState('Score', {
				score: ({ score }) => score,
			}),
		},
	};
</script>

<style lang="scss">
    .score {
        background-color: $white;
        border-radius: 10px;
        padding: rfs(20px 50px);

        @media (max-width: 400px) {
            padding: 20px;
        }

        &-label {
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1;

            &--text {
                font-size: rfs(1rem);
                letter-spacing: 2.5px;
                color: $score-text;
            }

            &--number {
                font-size: rfs(5rem);
                color: $dark-text;
            }
        }
    }
</style>
