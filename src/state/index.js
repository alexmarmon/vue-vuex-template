import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

// use store
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
