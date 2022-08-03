<template>
  <div class="q-mb-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el v-for="route in matched" :label="route.name?.toString()" />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRoute, type RouteLocationMatched } from 'vue-router'

  const matched = ref<RouteLocationMatched[]>([])

  const route = useRoute()

  watch(
    () => route.path,
    () => {
      console.log(route.matched)
      matched.value = route.matched
    }
  )
</script>
