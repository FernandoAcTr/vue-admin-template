<template>
  <div class="q-mb-md" :class="{ 'q-mt-md': $q.screen.lt.lg }">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Home" />
      <q-breadcrumbs-el v-for="route in matched" :label="route.name?.toString()" />
    </q-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRoute, type RouteLocationMatched } from 'vue-router'
  import { useQuasar } from 'quasar'

  const matched = ref<RouteLocationMatched[]>([])
  const route = useRoute()
  const $q = useQuasar()

  watch(
    () => route.path,
    () => {
      matched.value = route.matched
    }
  )
</script>
