<template>
	<div class="results">
		<transition name="slide-fade" mode="out-in">
			<div v-if="gameFinished">
				<div class="tokens">
					<div class="player">
						<h2>YOU PICKED</h2>
						<Token :name="playerToken" :src="playerSrc" />
					</div>
					<div class="player">
						<h2>HOUSE PICKED</h2>
						<Token :name="computerToken" :src="computerSrc" />
					</div>
				</div>
				<h2 class="game-result">
					{{ gameResult }}
				</h2>
				<button class="reset" @click="$emit('reset')">
					PLAY AGAIN
				</button>
			</div>
			<p v-else class="loading">
				Rock... Paper... Scissors... Lizard... Spock...
			</p>
		</transition>
	</div>
</template>

<script>
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
	import VueTypes from 'vue-types';
	import { mapMutations } from 'vuex';

	import { SET_SCORE } from '@/store/modules/score/mutations';
	import { randomToken, getResult } from '@/utils';

	import Token from '@/components/Token/Token.vue';

	export default {
		name: 'Result',
		components: {
			Token,
		},
		props: {
			playerToken: VueTypes.string.isRequired,
		},
		data() {
			return {
				gameFinished: false,
				computerToken: '',
			};
		},
		computed: {
			playerSrc() {
				return require(`@/assets/icon-${this.playerToken}.svg`);
			},
			computerSrc() {
				return require(`@/assets/icon-${this.computerToken}.svg`);
			},
			gameResult() {
				const results = {
					0: 'DRAW',
					1: 'YOU WIN',
					'-1': 'YOU LOSE',
				};

				return results[this.results];
			},
		},
		created() {
			this.computerToken = randomToken();
			setTimeout(() => {
				this.gameFinished = true;
				this.results = getResult(this.playerToken, this.computerToken);
				this.updateScore(this.results);
			}, 1000);
		},
		methods: {
			...mapMutations('Score', {
				updateScore: SET_SCORE,
			}),
		},
	};
</script>

<style lang="scss" scoped>
    .results {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .slide-fade-enter-active {
            transition: all .3s ease;
        }

        .slide-fade-leave-active {
            transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }

        .slide-fade-enter, .slide-fade-leave-to {
            transform: translateX(10px);
            opacity: 0;
        }

        .tokens {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .player {
                display: flex;
                flex-direction: column;
								align-items: center;
								margin: rfs(15px);


				h2 {
					font-size: rfs(1.25rem);
					margin-bottom: rfs(30px);
				}

				/deep/ .token {
					/* possível graças ao vue-loader. Estudar! */
					width: 280px;
					height: 280px;

					&:hover,
					&:focus {
						transform: unset;
						cursor: default;
					}

					&::after {
						width: 230px;
						height: 230px;
					}

					&--image {
						width: 90px;
						height: 95px;
					}

					@media(max-width: 700px) {
						width: 200px;
						height: 200px;

						&::after {
							width: 160px;
							height: 160px;
						}

						&--image {
							width: 70px;
							height: 75px;
						}
					}

					@media(max-width: 460px) {
						width: 130px;
						height: 130px;

						&::after {
							width: 100px;
							height: 100px;
						}

						&--image {
							width: 40px;
							height: 45px;
						}
					}

				}
            }
		}

		.game-result {
			font-size: rfs(5rem);
			margin-top: rfs(50px);
		}

		.reset {
			font-size: rfs(1.25rem);
			font-weight: 600;
			background-color: $white;
			color: $dark-text;
			padding: rfs(10px 25px);
			width: 180px;
			border: 2px solid transparent;
			border-radius: 10px;
			transition: background-color 0.3s linear, color 0.3 linear;

			&:hover,
			&:focus {
				outline: none;
				background-color: transparent;
				color: $white;
				border: $white;
			}
		}

		.loading {
			text-align: center;
			font-size: rfs(1.5rem);
			font-weight: bold;
		}
  }
</style>
