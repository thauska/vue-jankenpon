export const SET_SCORE = 'SET_SCORE';

export default {
	[SET_SCORE](state, score = 0) {
		state.score += score;
	},
};
