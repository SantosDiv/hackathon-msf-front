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
    ]
  },

  mutations:{
    setAgendas(state, payload){
      state.agendas = payload;
    },
    setAgendaSelected(state, payload) {
      state.agendaSelected = payload.result;
    }
    // deleteAuthor(state, deletingAuthorsId){
    //   state.AuthorsList = state.AuthorsList.filter((author) => author.id != deletingAuthorsId)
    // },
  },

  actions:{
    setAgendas({commit}, data) {
      commit('setAgendas', data);
    },
    setAgendaSelected({commit}, agendaSelected) {
      commit('setAgendaSelected', agendaSelected);
    }
    // deletePrinter({commit}, deletingAuthorsId){
    //   return deleteStakeholder(deletingAuthorsId)
    //     .then( () => commit('deletePrinter', deletingAuthorsId))
    // },
  },

  methods: {
    // async setAllStakeholders(){
    //   const response = await Axios.get('/stakeholder')
    //   return response.data
    // },
    // async deleteStakeholder(id){
    //   return await Axios.delete(`{/stakeholder/${id}`)
    // }
  },
}

export default AgendaStore;