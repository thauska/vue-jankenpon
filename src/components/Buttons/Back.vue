<template>
	<button class="back" @click="$router.back()">
		BACK
	</button>
</template>

<script>
	export default {
		name: 'BackButton',
	};
</script>

<style lang="scss" scoped>
    .back {
        letter-spacing: 2px;
        text-decoration: none;
        font-size: rfs(1.25rem);
        margin-top: rfs(50px);

        &:hover,
        &:focus {
            outline: none;
            text-decoration: underline;
        }
    }
</style>
