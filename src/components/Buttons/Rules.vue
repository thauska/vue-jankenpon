<template>
  <RouterLink to="/rules" class="rules">Rules</RouterLink>
</template>

<script>
  export default {
    name: 'RuleButton',
  };
</script>

<style lang="scss" scoped>
    .rules {
      font-size: rfs(1.5rem);
      text-align: center;
      text-decoration: none;
      border: 3px solid $header-outline;
      border-radius: 10px;
      padding: rfs(5px 10px);
      font-weight: 500;
      margin-top: rfs(50px);
      transition: background .3s linear;
      box-shadow: 0 4px darken($background-to, 15);

      &:visited {
        color: $white
      }

      &:hover,
      &:focus {
        outline: none;
        background: $header-outline;
      }
    }
</style>
