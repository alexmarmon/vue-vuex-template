// initial state
const state = {
  person: { first_name: 'Alex', last_name: 'Marmon', phone: '0123456789' },
};

// getters
const getters = {
  fullName: state => (
    `${state.person.first_name} ${state.person.last_name}`
  ),
};

// mutations
const mutations = {
  changeUser(state, data) {
    state.person = { first_name: data.first_name, last_name: data.last_name, phone: data.phone };
  },
};

// actions
const actions = {
  getUser({ commit }) {
    fetch('/api/users').then(response => response.json())
      .then((response) => {
        commit('changeUser', { first_name: response.first_name, last_name: response.last_name, phone: response.phone });
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
