<template>
  <div class="q-mb-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el label="Components" />
      <q-breadcrumbs-el label="Toolbar" />
      <q-breadcrumbs-el label="Toolbar" />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
  console.log(route.matched)
</script>
