<template>
  <h5 class="q-mt-none">Tables</h5>
  <table-basic></table-basic>
  <table-actions class="q-mt-lg"></table-actions>
  <table-dark-mode class="q-mt-lg"></table-dark-mode>
  <table-progress class="q-mt-lg"></table-progress>
  <table-custom-grid class="q-mt-lg"></table-custom-grid>
</template>

<script lang="ts" setup>
  import TableProgress from './components/TableProgress.vue'
  import TableCustomGrid from './components/TableCustomGrid.vue'
  import TableDarkMode from './components/TableDarkMode.vue'
  import TableActions from './components/TableActions.vue'
  import TableBasic from './components/TableBasic.vue'
</script>

<style></style>
