const AgendaStore = {
  namespaced: true,
  state: {
    agendaSelected: {},
    agendas: [],
    allNews: [],
    keywords: [],
    stakeholders: [],
  },

  mutations:{
    setAgendas(state, payload){
      state.agendas = payload;
    },
    setAgendaSelected(state, { result }) {
      state.agendaSelected = result;
      state.keywords = result.keywords;
      state.stakeholders = result.stakeholders;
    },
    setNewKeyword(state, keyword) {
      state.keywords = [...state.keywords, keyword];
    },
    removeKeyword(state, keywrodId) {
      const keywords = state.keywords;
      keywords.splice(keywrodId, 1);
      state.keywords = keywords;
    },
    setAllNews(state, news) {
      state.allNews = news
    }
  },

  actions:{
    setAgendas({commit}, data) {
      commit('setAgendas', data);
    },
    setAgendaSelected({commit}, agendaSelected) {
      commit('setAgendaSelected', agendaSelected);
    },
    setNewKeyword({ commit }, newKeyword) {
      commit('setNewKeyword', newKeyword);
    },
    removeKeyword({state, commit}, keyword) {
      const keywrodId = state.keywords.indexOf(keyword);
      commit('removeKeyword', keywrodId);
    },
    setAllNews({commit}, news) {
      commit('setAllNews', news);
    }
  },

  methods: {
  },
}

export default AgendaStore;