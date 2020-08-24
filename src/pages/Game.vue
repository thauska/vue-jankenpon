<template>
	<div class="game">
		<div class="tokens">
			<Token v-for="tokenInfo in tokens" :key="tokenInfo.name" v-bind="tokenInfo" />
		</div>
		<RulesButton />
		<BackButton />
	</div>
</template>

<script>
	import Token from '@/components/Token/Token.vue';
	import RulesButton from '@/components/Buttons/Rules.vue';
	import BackButton from '@/components/Buttons/Back.vue';

	export default {
		name: 'Game',
		components: {
			Token,
			RulesButton,
			BackButton,
		},
		data() {
			return {
				tokens: [
					/* eslint-disable global-require */
					{ name: 'scissors', src: require('@/assets/icon-scissors.svg') },
					{ name: 'paper', src: require('@/assets/icon-paper.svg') },
					{ name: 'rock', src: require('@/assets/icon-rock.svg') },
					{ name: 'lizard', src: require('@/assets/icon-lizard.svg') },
					{ name: 'spock', src: require('@/assets/icon-spock.svg') },
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: rfs(-50px);

        .tokens {
            display: grid;
            grid-template-areas:
            ". . . scissors scissors scissors . . ."
            "spock spock spock . . . paper paper paper"
            ". lizard lizard lizard . rock rock rock .";
            grid-template-columns: repeat(auto-fit, minmax(30px, auto));
            grid-template-rows: 120px 160px 120px;
            grid-column-gap: 15px;
            background: url('~@/assets/bg-pentagon.svg') no-repeat 50% 50% / 90%;

            @media(max-width: 430px) {
                grid-template-rows: 75px 105px 85px;
                grid-column-gap: unset;
                grid-row-gap: 10px;
            }
        }
    }
</style>
