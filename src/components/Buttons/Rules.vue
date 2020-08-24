<template>
	<RouterLink to="/rules" class="rules">
		RULES
	</RouterLink>
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
        width: 150px;
        font-weight: 500;
        margin-top: rfs(50px);
        transition: background .3s linear;

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
