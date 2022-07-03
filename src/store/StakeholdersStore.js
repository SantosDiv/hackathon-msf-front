import axios from "axios"

const StakeholdersStore = {
  namespaced: true,
  state: {
    stakeholder: null,
    stakeholdersList: [],
  },

  mutations:{
    // verificar com diogenes se isso funciona
    setstakeholder(state, payload){
      state.stakeholder = payload.stakeholder
    },
    setStakeholdersList(state, payload){
      state.StakeholdersList = payload.result
    },
    deletestakeholder(state, deletingStakeholdersId){
      state.StakeholdersList = state.StakeholdersList.filter((stakeholder) => stakeholder.id != deletingStakeholdersId)
    },
  },

  actions:{
    loadStakeholdersList({commit}) {
      setAllStakeholders()
        .then( stakeholdersList => commit('setStakeholdersList', stakeholdersList))
    },
    loadStakeholderToEdit(){
      setStakeholderToEdit(id)
        .then( stakeholder => commit('setStakeholder', stakeholder))
    },
    deleteStakeholder({commit}, deletingStakeholdersId){
      return this.deleteStakeholder(deletingStakeholdersId)
        .then( () => commit('deleteStakeholder', deletingStakeholdersId))
    },
  },

  methods: {
    async setStakeholderToEdit(id){
      const response = await axios.get(`stakeholder/${id}/edit`)
      return response.data
    },
    async setAllStakeholders(){
      const response = await axios.get('/stakeholder')
      return response.data
    },
    async deleteStakeholder(id){
      return await axios.delete(`{/stakeholder/${id}`)
    }
  },
}

export default StakeholdersStore