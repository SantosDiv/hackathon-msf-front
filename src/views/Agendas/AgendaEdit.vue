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
              <div class="form-group col-md-4 position-relative">
                <label for="keywords">Adicionar palavras chaves</label>
                <div class="row">
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      id="keyword"
                      placeholder="digite uma nova palavra chave"
                      :value="keyword"
                      @input="({target}) => _updateKeyword(target.value)"
                    >
                  </div>
                  <div class="col-sm-3">
                    <button type="button" class="btn btn-primary" @click="setKeywordInStore"><i class="fa fa-solid fa-plus"></i></button>
                  </div>
                </div>
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
                        <i class="fa fa-solid fa-trash" style="cursor: pointer;" @click="deletKeyword(keyword)"></i>
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

export default {
  name: "agenda-edit",
  data() {
    return {
      title: '',
      disabled: true,
      keyword: ''
    };
  },
  components: {
    // vSelect
  },
  computed:{
    ...mapState('AgendaStore', ['agendaSelected', 'keywords']),
    setTitle() {
      return this.agendaSelected.title;
    },
  },
  created() {
    this.showTheme();
  },
  methods: {
    ...mapActions('AgendaStore', ['setAgendaSelected', 'setNewKeyword', 'removeKeyword']),
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
    _updateKeyword(keyword) {
      this.keyword = keyword;
    },
    enableInputKeyword() {
      this.disabled = !this.disabled;
    },
    setKeywordInStore() {
      this.setNewKeyword(this.keyword)
    },
    deletKeyword(keyword) {
      this.removeKeyword(keyword);
    },
    async editAgenda() {
      const array = JSON.parse(JSON.stringify(this.keywords));
      const params = {
        title: this.title || this.agendaSelected.title,
        keywords: array,
      }
      try {
        await axios.put(`/api/v1/agendas/${this.agendaSelected.id}`, params);
        this.$router.push(`/agenda/${this.agendaSelected.id}`);
      } catch (error) {
        console.log(error);
      }

    }

  },

  mounted() {
    setTooltip();
  },
};
</script>
