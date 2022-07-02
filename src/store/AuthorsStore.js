const AuthorsStore = {
  namespaced: true,
  state: {
    authorsList: [],
  },

  mutations:{
    setAuthorsList(state, payload){
      state.printersList = payload.result
    },
    deleteAuthor(state, deletingAuthorsId){
      state.AuthorsList = state.AuthorsList.filter((author) => author.id != deletingAuthorsId)
    },
  },

  actions:{
    loadAuthorsList({commit}) {
      setAllStakeholders()
        .then( authorsList => commit('setAuthorsList', authorsList))
    },
    deletePrinter({commit}, deletingAuthorsId){
      return deleteStakeholder(deletingAuthorsId)
        .then( () => commit('deletePrinter', deletingAuthorsId))
    },
  },

  methods: {
    async setAllStakeholders(){
      const response = await Axios.get('/stakeholder')
      return response.data
    },
    async deleteStakeholder(id){
      return await Axios.delete(`{/stakeholder/${id}`)
    }
  },
}

export default AuthorsStore