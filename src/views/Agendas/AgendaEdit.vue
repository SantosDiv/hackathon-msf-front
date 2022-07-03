<style scoped>
  .bg-orange {
    background-color: orange;
  }

  .bg-red {
    background-color: rgb(208, 0, 90);
  }

  .bg-green {
    background-color: rgb(0, 151, 126);
  }
</style>
<template>
  <div class="container-fluid py-4">
    <div class="row my-4">
      <div class="col-md-10">
        <div class="card">
          <form class="p-5">
            <div class="row">
              <div class="form-group col-md-8">
                <label for="agendaTitle">Nome do assunto</label>
                <input
                  type="text"
                  class="form-control"
                  id="agendaTitle"
                  placeholder=""
                  :value="agendaSelected.title"
                  @input="({target}) => _updateTitle(target.value)"
                >
              </div>
              <div class="form-group col-md-4">
                <label for="keywords">Adicionar palavras chaves</label>
                                <input
                  type="text"
                  class="form-control"
                  id="keyword"
                  placeholder="digite uma nova palavra chave"
                  @input="({target}) => _updateTitle(target.value)"
                >
              </div>
            </div>

            <div class="row">
              <div class="col-md-8">
              </div>
              <div class="col-md-4">
                <h5>Palavras chaves</h5>
                <table class="table">
                  <tbody>
                    <tr v-for="keyword in keywords" :key="keyword" class="pt-3">
                      <td class="p-0">
                        <input type="text" name="keyword" id="" :value="keyword" :disabled="disabled">
                      </td>
                      <td class="d-flex" style="gap: 1em;">
                        <i class="fa fa-solid fa-pen" style="cursor: pointer;" @click="enableInputKeyword"></i>
                        <i class="fa fa-solid fa-trash" style="cursor: pointer;"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button type="button" class="btn btn-primary" @click="editAgenda">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import axios from '../../axios';
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
import "vue-select/dist/vue-select.css";

export default {
  name: "agenda-edit",
  data() {
    return {
      title: '',
      keywords: [],
      disabled: true
    };
  },
  components: {
    // vSelect
  },
  computed:{
    ...mapState('AgendaStore', ['agendaSelected']),
    setTitle() {
      return this.agendaSelected.title;
    },
  },
  created() {
    this.showTheme();
    this.setKeyword();
  },
  methods: {
    ...mapActions('AgendaStore', ['setAgendaSelected']),
    createdAt(date) {
      return moment(date).format('DD/MM/yyyy')
    },
    async showTheme() {
      const id = this.$route.params.id;
      const response = await axios.get(`/api/v1/agendas/${id}`);
      this.setAgendaSelected(response.data);
    },
    _updateTitle(newTitle) {
      this.title = newTitle;
    },
    _setKeyword(keywords) {
      this.keywords = keywords
    },
    enableInputKeyword() {
      this.disabled = !this.disabled;
    },
    setKeyword() {
      this.keywords = this.agendaSelected.keywords
    }

  },

  mounted() {
    setTooltip();
  },
};
</script>
