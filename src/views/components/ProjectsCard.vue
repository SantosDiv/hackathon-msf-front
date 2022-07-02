<style scoped>
  .theme {
    cursor: pointer;
  }

  .rowTheme:hover {
    background-color: rgb(246, 246, 246);
  }
</style>
<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="row">
        <div class="col-lg-6 col-7">
          <h6>Temas</h6>
          <p class="text-sm mb-0">
            <!-- <i class="fa fa-check text-info" aria-hidden="true"></i> -->
            <span>Todos os temas cadastrados</span>
          </p>
        </div>
        <div class="col-lg-6 col-5 my-auto text-end">
          <div class="dropdown float-lg-end pe-4">
            <a
              class="cursor-pointer"
              id="dropdownTable"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
            </a>
            <ul
              class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
              aria-labelledby="dropdownTable"
            >
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Action</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Another action</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Something else here</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div class="table-responsive table-hover">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Título
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Data de criação
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="agenda in agendas" :key="agenda.id" class="rowTheme">
              <td @click="showTheme(agenda.id)" class="theme">
                <div class="d-flex px-2 py-1">
                  <div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{agenda.title}}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="text-xs font-weight-bold">{{createdAt(agenda.created_at)}}</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import img1 from "../../assets/img/small-logos/logo-xd.svg";
import axios from '../../axios';
import moment from 'moment';

export default {
  name: "projects-card",
  data() {
    return {
      img1,
      agendas: [],
    };
  },
  components: {
  },
  computed:{
  },
  created() {
    this.getAgendas();
  },
  methods: {
    async getAgendas() {
      const response = await axios.get('/api/v1/agendas');
      const { result } = response.data;
      this.agendas = result;
    },
    createdAt(date) {
      return moment(date).format('DD/MM/yyyy')
    },
    showTheme(id) {
      console.log(id)
    }

  },

  mounted() {
    setTooltip();
  },
};
</script>
