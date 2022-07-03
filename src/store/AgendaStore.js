const AgendaStore = {
  namespaced: true,
  state: {
    agendaSelected: {},
    agendas: [],
    allNews: [
      {
        "title": "Fortes chuvas escancaram negligência do Brasil diante da crise climática",
        "link": "https://www.greenpeace.org/brasil/blog/fortes-chuvas-escancaram-negligencia-do-brasil-diante-da-crise-climatica/",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Há três anos sem receber novos recursos de países europeus, Fundo tem chances de ser oficializado em Comissão desta quarta-feira.",
        "content": null,
        "pubDate": "2022-02-04 07:07:01",
        "image_url": "https://www.greenpeace.org/static/planet4-brasil-stateless/2022/01/9d6b6cfd-51741896352_7fdd531438_k-1-1024x683.jpg",
        "source_id": "greenpeace",
        "language": "pt-br"
      },
      {
        "title": "ESG: Código Florestal faz 10 anos, a passos lentos e sob ameaças",
        "link": "https://exame.com/bussola/esg-codigo-florestal-faz-10-anos-a-passos-lentos-e-sob-ameacas/",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "ESG: Código Florestal faz 10 anos, a passos lentos e sob ameaças",
        "content": null,
        "pubDate": "09/06/2022 09:05",
        "image_url": "https://classic.exame.com/wp-content/uploads/2022/03/AMBIPAR-SITE.jpg?quality=70&strip=info&w=1024",
        "source_id": "exame",
        "language": "pt-br"
      },
      {
        "title": "Senado decide hoje se Fundo Amazônia sairá do papel",
        "link": "https://exame.com/esg/senado-decide-hoje-se-fundo-amazonia-saira-do-papel/",
        "keywords": null,
        "creator": null,
        "video_url": null,
        "description": "Há três anos sem receber novos recursos de países europeus, Fundo tem chances de ser oficializado em Comissão desta quarta-feira.",
        "content": null,
        "pubDate": "2022-02-04 07:07:01",
        "image_url": "https://classic.exame.com/wp-content/uploads/2021/03/FOTO6_PantanalMT.jpg?quality=70&strip=info&w=1024",
        "source_id": "exame",
        "language": "pt-br"
      },
    ],
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