const AgendaStore = {
  namespaced: true,
  state: {
    agendas: [],
  },

  mutations:{
    setAgendas(state, payload){
      state.agendas = payload;
    },
    // deleteAuthor(state, deletingAuthorsId){
    //   state.AuthorsList = state.AuthorsList.filter((author) => author.id != deletingAuthorsId)
    // },
  },

  actions:{
    setAgendas({commit}, data) {
      commit('setAgendas', data);
    },
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