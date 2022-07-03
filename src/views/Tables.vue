<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <stakeholders-table />
      </div>
    </div>
  </div>
</template>

<script>
import StakeholdersTable from "./components/StakeholdersTable.vue";

export default {
  name: "tables",
  components: {
    StakeholdersTable,
  },
};
</script>
