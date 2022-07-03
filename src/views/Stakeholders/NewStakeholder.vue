<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-row">
            <div class="form-group">
              <div class="row">
                <div class="form-group col-md-5">
                  <label for="inputName">Nome</label>
                  <input required type="text" class="form-control" id="inputName" @input="({target}) => _updateName(target.value)" placeholder="">
                </div>
                <div class="form-group col-md-3">
                  <label for="inputRole">Apoiador</label>
                  <select id="inputRole" class="form-select" @input="({target}) => _updateRole(target.value)" >
                    <option selected value="supporter">Apoiador</option>
                    <option value="opposition">Opositor</option>
                    <option value="undecided">Indeciso</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputAgenda">Tema relacionado</label>
                  <select id="inputAgenda" class="form-select" @input="({target}) => _updateAgenda(target.value)" required>
                    <option v-for="agenda in agendas" :key="agenda.id" :value="agenda.id">{{agenda.title}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputPosition">Cargo</label>
              <input
                type="text"
                class="form-control"
                id="inputPosition" @input="({target}) => _updatePosition(target.value)" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPosition">Empresa</label>
              <input
                type="text"
                class="form-control"
                id="inputPosition"  @input="({target}) => _updateOrganization(target.value)" placeholder="">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputInstagram">Instagram</label>
              <input type="text" class="form-control" id="inputInstagram" @input="({target}) => _updateInstagram(target.value)" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="inputTwitter">Twitter</label>
              <input type="text" class="form-control" id="inputTwitter" @input="({target}) => _updateTwitter(target.value)" placeholder="">
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary float-right" @click.prevent="createAthor">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../axios';
import { mapState } from 'vuex';

export default {
  name: "NewStakeholder",
  data(){
    return{
      name: '',
      position: '',
      organization: '',
      instagram_handle: '',
      twitter_handler: '',
      role: '',
      agendaIdSelected: null,
      agendas: [],
    }
  },
  created() {
    this.getAgendas();
  },
  computed:{
    ...mapState("stakeholdersStore", ["stakeholder"]),
  },
  methods: {
    _updateName(name) {
      this.name = name;
    },
    _updatePosition(position) {
      this.position = position;
    },
    _updateOrganization(organization) {
      this.organization = organization;
    },
    _updateInstagram(instagram_handle) {
      this.instagram_handle = instagram_handle;
    },
    _updateTwitter(twitter_handler) {
      this.twitter_handler = twitter_handler;
    },
    _updateRole(role) {
      this.role = role;
    },
    _updateAgenda(agenda) {
      this.agendaIdSelected = agenda;
    },
    async getAgendas() {
      const response = await axios.get('/api/v1/agendas');
      const { result } = response.data;
      this.agendas = result;
    },
    async createAthor() {
      const params = {
        name: this.name,
        position: this.position,
        organization: this.organization,
        instagram_handle: this.instagram_handle,
        twitter_handler: this.twitter_handler,
        role: this.role,
        agenda_id: this.agendaIdSelected
      }
      await axios.post('/api/v1/stakeholders', params)
      this.$router.push('/tables');

    }
  }
};
</script>