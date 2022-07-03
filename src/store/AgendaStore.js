const AgendaStore = {
  namespaced: true,
  state: {
    agendaSelected: {},
    agendas: [],
    allNews: [
      {
        date: '02/04/2022',
        title: 'A doença de chagas é um grande problema no Brasil',
        site: 'G1',
        link: 'http://www.google.com.br',
        credibility: 'Alta'
      },
      {
        date: '02/04/2022',
        title: 'A doença de chagas é um grande problema no Brasil',
        site: 'G1',
        link: 'http://www.google.com.br',
        credibility: 'Média'
      },
      {
        date: '02/04/2022',
        title: 'A doença de chagas é um grande problema no Brasil',
        site: 'G1',
        link: 'http://www.google.com.br',
        credibility: 'Baixa'
      }
    ],
    keywords: [],
  },

  mutations:{
    setAgendas(state, payload){
      state.agendas = payload;
    },
    setAgendaSelected(state, { result }) {
      state.agendaSelected = result;
      state.keywords = result.keywords;
    },
    setNewKeyword(state, keyword) {
      state.keywords = [...state.keywords, keyword];
    },
    removeKeyword(state, keywrodId) {
      const keywords = state.keywords;
      keywords.splice(keywrodId, 1);
      state.keywords = keywords;
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
    }
    // deletePrinter({commit}, deletingAuthorsId){
    //   return deleteStakeholder(deletingAuthorsId)
    //     .then( () => commit('deletePrinter', deletingAuthorsId))
    // },
  },

  methods: {
  },
}

export default AgendaStore;