<template>
	<div class="results">
		<template v-if="gameFinished">
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
		</template>
		<p v-else class="loading">
			Rock... Paper... Scissors... Lizard... Spock...
		</p>
	</div>
</template>

<script>
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
	import VueTypes from 'vue-types';

	import Token from '@/components/Token/Token.vue';
	import { randomToken } from '@/utils';

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
				return 'YOU WIN';
			},
		},
		created() {
			this.computerToken = randomToken();
			setTimeout(() => {
				this.gameFinished = true;
			}, 1000);
		},
	};
</script>

<style lang="scss" scoped>
    .results {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .tokens {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .player {
                display: flex;
                flex-direction: column;
				align-items: center;

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
			font-size: rfs(1.25rem);
			font-weight: bold;
		}
    }
</style>
