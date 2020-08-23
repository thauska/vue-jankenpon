<template>
  <div
    id="app"
    :style="backgroundGradient"
    @mousemove="redefinePositions"
    @mouseleave="resetPositions"
  >
    <div class="nav" />
    <router-view/>
  </div>
</template>

<script>
import { bgColorFrom, bgColorTo } from './styles/variables.scss';

export default {
  name: 'App',
  data() {
    return {
      gradientX: '50%',
      gradientY: '0%',
    };
  },
  computed: {
    backgroundGradient() {
      return {
        background: `radial-gradient(circle at ${this.gradientX} ${this.gradientY}, ${bgColorFrom}, ${bgColorTo})`,
      };
    },
  },
  methods: {
    redefinePositions({ clientX, clientY }) {
      this.gradientX = `${clientX}px`;
      this.gradientY = `${clientY}px`;
    },
    resetPositions() {
      this.gradientX = '50%';
      this.gradientY = '0%';
    },
  },
};
</script>

<style lang="scss">
@import './styles/reset';

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Barlow Semi Condensed', Helvetica, Arial, sans-serif;
}
</style>
