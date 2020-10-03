<template>
  <div class="game">
    <transition name="fade" mode="out-in">
      <div v-if="!gameStart" >
        <div class="tokens">
          <Token
            v-for="tokenInfo in tokens"
            :key="tokenInfo.name"
            v-bind="tokenInfo"
            @click="startGame($event)"
          />
        </div>
        <div class="buttons">
          <RulesButton />
          <BackButton />
        </div>
      </div>
      <Result v-else :player-token="playerToken" @reset="gameStart = false" />
    </transition>
  </div>
</template>

<script>
  import Token from '@/components/Token/Token.vue';
  import RulesButton from '@/components/Buttons/Rules.vue';
  import BackButton from '@/components/Buttons/Back.vue';
  import Result from '@/components/Result/Result.vue';

  import { TOKEN_LIST } from '@/utils';

  const {
    ROCK,
    PAPER,
    SCISSORS,
    LIZARD,
    SPOCK,
  } = TOKEN_LIST;

  export default {
    name: 'Game',
    components: {
      Token,
      RulesButton,
      BackButton,
      Result,
    },
    data() {
      return {
        tokens: [
          /* eslint-disable global-require */
          { name: SCISSORS, src: require('@/assets/icon-scissors.svg') },
          { name: PAPER, src: require('@/assets/icon-paper.svg') },
          { name: ROCK, src: require('@/assets/icon-rock.svg') },
          { name: LIZARD, src: require('@/assets/icon-lizard.svg') },
          { name: SPOCK, src: require('@/assets/icon-spock.svg') },
        ],
        playerToken: '',
        gameStart: false,
      };
    },
    methods: {
      startGame(token) {
        this.playerToken = token;
        this.gameStart = true;
      },
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
		width: 100%;

		.fade-enter-active, .fade-leave-active {
			transition: opacity .4s;
		}

		.fade-enter, .fade-leave-to {
			opacity: 0;
		}

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

    .buttons {
      margin-top: rfs(50px);
      width: 120px;
      display: block;
    }
  }
</style>
