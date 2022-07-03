<style scoped>
  .news {
    padding-left: 1em!important;
  }

  .icon-papper-news {
    margin-right: 1em!important;
  }

  .icon-social, .rowNews {
    cursor: pointer;
  }

  .bg-orange {
    background-color: orange;
  }

  .bg-red {
    background-color: rgb(208, 0, 90);
  }

  .bg-green {
    background-color: rgb(0, 151, 126);
  }

  .position {
    font-size: 12px;
    color: white;
    padding: 0.5em;
    border-radius: 1.5em;
    margin-left: 0.5em;
  }
</style>
<template>
  <div class="container-fluid py-4">
    <div class="row my-4">
      <div class="col-md-7">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-9 col-9">
                <h4>{{agendaSelected.title}}</h4>
              </div>
              <div class="col-lg-3 col-3 my-auto text-end">
                <div class="dropdown float-lg-end pe-4">
                  <button type="button" @click="$router.push(`/agenda-edit/${agendaSelected.id}`)" class="btn btn-danger">Editar</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive">
              <p class="text-md mb-0 px-4">
                <i class="fa fa-solid fa-newspaper icon-papper-news"></i>
                <span>Notícias sobre o tema</span>
              </p>
              <table class="table align-items-center mb-0 table-hover">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-xxs font-weight-bolder opacity-7"
                    >
                      Data
                    </th>
                    <th
                      class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                    >
                      Título
                    </th>
                    <th
                      class="text-center text-uppercase text-xxs font-weight-bolder opacity-7"
                    >
                      Site
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="news in allNews" :key="news.id" class="rowNews" @click="goToPageNews(news.link)">
                    <td class="news">
                      <div class="d-flex px-2 py-1">
                        <div>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{createdAt(news.pubDate)}}</h6>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">{{news.title}}</span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-xs font-weight-bold">{{site(news.link)}}</span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h4>Atores relevantes</h4>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-uppercase text-xxs font-weight-bolder opacity-7">Nome</th>
                  <th class="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Cargo</th>
                  <th class="text-center text-uppercase text-xxs font-weight-bolder opacity-7">Redes sociais</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="stakeholder in stakeholders" :key="stakeholder.id">
                  <td class="text-md">
                    {{stakeholder.name}}<span class="position" :class="bgColorDefine(stakeholder.role)">{{position(stakeholder.role)}}</span>
                  </td>
                  <td class="text-center text-md">{{stakeholder.position}}</td>
                  <td class="d-flex justify-content-center align-items-center fs-5" style="gap: 1em; margin-top: 2px">
                    <a :href="`https://www.instagram.com/${stakeholder.instagram_handler}`" target="_blank" rel="noopener noreferrer"><i class="fa fa-brands fa-instagram icon-social"></i></a>
                    <a href="https://www.facebook.com/"><i class="fa fa-brands fa-facebook-square icon-social"></i></a>
                    <a :href="`https://twitter.com/${stakeholder.twitter_handler}`" target="_blank" rel="noopener noreferrer"><i class="fa fa-brands fa-twitter-square icon-social"></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
  name: "agenda-show",
  data() {
    return {
      img1,
    };
  },
  components: {
  },
  computed:{
    ...mapState('AgendaStore', ['agendaSelected', 'allNews', 'stakeholders'])
  },
  created() {
    this.showTheme();
  },
  methods: {
    ...mapActions('AgendaStore', ['setAgendaSelected']),
    createdAt(date) {
      return moment(date).format('DD/MM/yyyy')
    },
    async showTheme() {
      const id = this.$route.params.id;
      const response = await axios.get(`/api/v1/agendas/${id}`);
      console.log(response.data);
      this.setAgendaSelected(response.data);
    },
    goToPageNews(link) {
      window.open(link, '_blank');
    },
    bgColorDefine(position) {
      switch (position) {
        case 'supporter':
          return 'bg-green';
        case 'opposition':
          return 'bg-red';
        default:
          return 'bg-orange';
      }
    },
    position(stakeholder) {
      const positionTranslate = {
        "supporter": "Apoiador",
        "opposition": "Opositor",
        "undecided": "Indeciso",
      }

      return positionTranslate[stakeholder];
    },
    site(link) {
      console.log(link)
      const url = new URL(link)
      return url.host;
    }

  },

  mounted() {
    setTooltip();
  },
};
</script>
