<template>
  <div class="card" :class="darkMode ? 'bg-gradient-dark' : ''">
    <div class="pb-0 card-header" :class="darkMode ? 'bg-transparent' : ''">
      <h6 :class="darkMode ? 'text-white' : ''">Assuntos em alta</h6>
      <!--  eslint-disable-next-line vue/no-v-html -->
      <p class="text-sm" v-html="description"></p>
    </div>
    <div class="p-3 card-body">
      <table class="table table-hover">
        <tbody>
          <tr v-for="trendingTopic in trendingTopics" :key="trendingTopic.name" @click="goToTwitter(trendingTopic.url)" style="cursor: pointer;">
            <td>{{trendingTopic.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from '../../axios';
export default {
  name: "TimelineList",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      trendingTopics: [],
    }
  },
  created() {
    this.getTrendingTopics();
  },
  methods: {
    async getTrendingTopics() {
      const response = await axios.get('api/v1/trending_topics');
      const { result } = response.data;
      this.trendingTopics = result.slice(0, 10);
    },
    goToTwitter(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
