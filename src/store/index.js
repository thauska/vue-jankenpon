import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import modules from './modules';
import persistenceConfig from './persistence.config';

Vue.use(Vuex);

export default new Vuex.Store({
	modules,
	plugins: [
		createPersistedState(persistenceConfig),
	],
});
