<template>
  <div class="py-4 container-fluid">
    <div class="row my-4">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <projects-card />
      </div>
      <div class="col-lg-4 col-md-6">
        <treands-topics/>
      </div>
    </div>
  </div>
</template>
<script>
// import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
// import ReportsBarChart from "@/examples/Charts/ReportsBarChart.vue";
// import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
// import TimelineList from "./components/TimelineList.vue";
import ProjectsCard from "./components/ProjectsCard.vue";
import TreandsTopics from './components/TreandsTopics.vue';
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";
import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "dashboard-default",
  data() {
    return {
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    // MiniStatisticsCard,
    // ReportsBarChart,
    // GradientLineChart,
    ProjectsCard,
    TreandsTopics,
  },
};
</script>
