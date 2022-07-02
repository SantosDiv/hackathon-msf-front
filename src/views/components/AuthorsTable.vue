<style scoped>
  .column {
    padding: .75rem 1.5rem !important;
  }
  .space {
    margin-right: .50em !important;
  }
</style>

<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Atores</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Nome do Ator
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
              >
                Cargo
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Redes Sociais
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Apoiador
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Gestão de Atores
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stakeholder in stakeholders" :key="stakeholder.id">
              <td class="column align-middle">
                <p class="text-sm m-0">{{stakeholder.name}}</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{stakeholder.position}}</p>
                <p class="text-sm text-secondary mb-0">{{stakeholder.organization}}</p>
              </td>
              <td class="column align-middle text-center text-sm">
                <a
                  href="https://www.instagram.com/{{stakeholder.instagram_handler}}"
                >
                  <i class="fa fa-brands fa-instagram space fs-2"></i>
                </a>
                <a
                  href="https://twitter.com/{{stakeholder.twitter_handler}}"
                >
                <i class="fa fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm font-weight-bold">
                  {{stakeholder.role}}
                </span>
              </td>
              <td class="align-middle text-center">
                <a
                  href="https://localhost:3000/stakeholder/{{stakeholder.id}}/edit"
                >
                  <i class="fa fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </a>
                <a>
                  <i class="fa fa-solid fa-trash" aria-hidden="true" @click="deleteStakeholder(stakeholder.id)"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from '../../axios/index'

export default {
  name: "authors-table",
  data() {
    return {
      stakeholders: []
    };
  },
  methods: {
    async setAllStakeholders(){
      const response = await Axios.get('/stakeholder')
      this.stakeholders = response.data
    },
    async deleteStakeholder(id){
      await Axios.delete(`{/stakeholder/${id}`)
    }
  },
  created() {
    this.setAllStakeholders()
  }
};
</script>
