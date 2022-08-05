<template>
  <h5 class="q-mt-none">Pagination</h5>
  <div class="text-h6 q-ma-md">Pagination and Filters</div>
  <q-separator />

  <CardPagination></CardPagination>

  <list-pagination></list-pagination>

  <basic-filter></basic-filter>
</template>

<script setup lang="ts">
  import BasicFilter from './components/BasicFilter.vue'
  import ListPagination from './components/ListPagination.vue'
  import CardPagination from './components/CardPagination.vue'
</script>
