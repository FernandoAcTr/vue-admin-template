<template>
  <h5 class="q-mt-none">Dashboard</h5>
  <card-social icon_position="left" />
  <card-social icon_position="right" class="q-mt-sm" />

  <card-charts />

  <div class="row q-col-gutter-sm q-py-sm">
    <tab-social />
    <card-with-image />
  </div>

  <div class="row q-col-gutter-sm q-pb-sm">
    <todo-list />
    <card-time-line />
  </div>

  <table-visits />
</template>

<script setup lang="ts">
  import CardSocial from './components/CardSocial.vue'
  import CardCharts from './components/CardCharts.vue'
  import TabSocial from './components/TabSocial.vue'
  import CardWithImage from './components/CardWithImage.vue'
  import CardTimeLine from './components/CardTimeLine.vue'
  import TodoList from './components/TodoList.vue'
  import TableVisits from './components/TableVisits.vue'
</script>
