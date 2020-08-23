import mutations from './mutations';

export default {
	namespaced: true,
	state() {
		return {
			score: 0,
		};
	},
	mutations,
};
