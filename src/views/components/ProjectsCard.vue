<style scoped>
  .theme {
    cursor: pointer;
    padding-left: 1em!important;
  }
</style>
<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="row">
        <div class="col-lg-6 col-7">
          <h4>Temas</h4>
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
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div class="table-responsive">
        <table class="table align-items-center mb-0 table-hover">
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
            <tr v-for="agenda in agendas" :key="agenda.id" class="rowTheme" @click="$router.push(`/agenda/${agenda.id}`)" >
              <td class="theme">
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
import { mapState, mapActions } from 'vuex';
import moment from 'moment';

export default {
  name: "projects-card",
  data() {
    return {
      img1,
    };
  },
  components: {
  },
  computed:{
    ...mapState('AgendaStore', ['agendas'])
  },
  created() {
    this.getAgendas();
  },
  methods: {
    ...mapActions('AgendaStore', ['setAgendas', 'setAgendaSelected']),
    async getAgendas() {
      const response = await axios.get('/api/v1/agendas');
      const { result } = response.data;
      this.setAgendas(result);
    },
    createdAt(date) {
      return moment(date).format('DD/MM/yyyy')
    },
    async showTheme(id) {
      const response = await axios.get(`/api/v1/agendas/${id}`);
      this.setAgendaSelected(response.data);
    },

  },

  mounted() {
    setTooltip();
  },
};
</script>
