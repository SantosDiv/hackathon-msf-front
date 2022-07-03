<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-row">
            <div class="form-group">
              <label for="inputName">Nome</label>
              <input type="text" class="form-control" id="inputName" v-model="stakeholder.name" placeholder="">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPosition">Cargo</label>
              <input type="text" class="form-control" id="inputPosition" v-model="stakeholder.position" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPosition">Empresa</label>
              <input type="text" class="form-control" id="inputPosition" v-model="stakeholder.organization" placeholder="">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputInstagram">Instagram</label>
              <input type="text" class="form-control" id="inputInstagram" v-model="stakeholder.instagram_handle" placeholder="">
            </div>
            <div class="form-group col-md-4">
              <label for="inputTwitter">Twitter</label>
              <input type="text" class="form-control" id="inputTwitter" v-model="stakeholder.twitter_handler" placeholder="">
            </div>
            <div class="form-group col-md-4 col-md-4">
              <label for="inputRole">Apoiador</label>
              <select id="inputRole" class="form-control">
                <!-- fazer v-for -->
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "stakeholderEdit",
  data(){
    return{
      position: this.stakeholder.position,
      organization: this.stakeholder.organization,
      instagram_handle: this.stakeholder.instagram_handle,
      twitter_handler: this.stakeholder.twitter_handler
    }
  },
  computed:{
    ...mapState("stakeholdersStore", ["stakeholder"])
  },
};
</script>