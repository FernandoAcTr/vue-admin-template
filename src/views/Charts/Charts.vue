<template>
  <q-page class="q-pa-sm">
    <h5 class="q-mt-none">Charts</h5>
    <div class="row q-col-gutter-sm q-py-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <bar-chart></bar-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <line-chart></line-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <scatter-plot></scatter-plot>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <pie-chart></pie-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <area-chart></area-chart>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <guage-chart></guage-chart>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import PieChart from './components/PieChart.vue'
  import ScatterPlot from './components/ScatterPlot.vue'
  import LineChart from './components/LineChart.vue'
  import BarChart from './components/BarChart.vue'
  import AreaChart from './components/AreaChart.vue'
  import GuageChart from './components/GuageChart.vue'
</script>

<style scoped></style>
