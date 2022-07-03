<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-row">
            <div class="form-group">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="inputName">Nome</label>
                  <input type="text" class="form-control" id="inputName" v-model="stakeholder.name" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="inputRole">Apoiador</label>
                  <select id="inputRole" class="form-control" v-model="stakeholder.role">
                    <option selected value="supporter">Apoiador</option>
                    <option value="opposition">Opositor</option>
                    <option value="undecided">Indeciso</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputPosition">Cargo</label>
              <input type="text" class="form-control" id="inputPosition" v-model="stakeholder.position" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPosition">Empresa</label>
              <input type="text" class="form-control" id="inputPosition" v-model="stakeholder.organization" placeholder="">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputInstagram">Instagram</label>
              <input type="text" class="form-control" id="inputInstagram" v-model="stakeholder.instagram_handle" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="inputTwitter">Twitter</label>
              <input type="text" class="form-control" id="inputTwitter" v-model="stakeholder.twitter_handler" placeholder="">
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary float-right">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NewStakeholder",
  data(){
    return{
      position: this.stakeholder.position,
      organization: this.stakeholder.organization,
      instagram_handle: this.stakeholder.instagram_handle,
      twitter_handler: this.stakeholder.twitter_handler
    }
  },
  computed:{
    ...mapState("stakeholdersStore", ["stakeholder"]),

    supporter() { return 'supporter' },
    opposition() { return 'opposition' },
    undecided() { return 'undecided' },
  },
};
</script>