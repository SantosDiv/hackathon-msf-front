<style scoped>
  .danger {
    color: #dc3545;
    transition: 0.5s;
  }

  .primary {
    color: #fd7e14;
  }

  .sucesss {
    background-color: #198754;
    color: white;
  }

  .sucesss:hover {
    color: white !important;
  }

  .icon {
    cursor: pointer;
    padding: 1em;
  }

  .column {
    padding: 0 1rem;
  }
</style>

<template>
  <div class="py-4 container-fluid">
    <div class="row my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header pb-0 d-flex justify-content-between">
            <h6>Fontes</h6>
            <button class="btn sucesss">Criar nova fonte</button>
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive table-hover p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      scope="col"
                    >
                      Fontes
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                      scope="col"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="column">
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">Estadão</h6>
                          <p class="text-xs text-secondary mb-0">
                            estadão.com.br
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <i class="fa fa-solid fa-pen icon primary p-0" @click="edit"></i>
                      <i class="fa fa-solid fa-trash icon danger pl-1"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../axios';
export default {
  name: "fonts",
  data() {
    return {
      iconBackground: "bg-gradient-success",
      fonts: [],
    };
  },
  components: {
  },
  methods: {
    async getfonts() {
      const response = await axios.get('/api/v1/fonts');
      console.log(response.data);
    }
    // edit(id) {
    //   const response = await Axios.get('stakeholders/{id}/edit');
    //   updateStake(response.data)
    // }
  }
};
</script>
