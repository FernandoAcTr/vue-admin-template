<template>
  <q-header reveal class="bg-white text-dark q-py-md">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="uiStore.toggleDrawer" />

      <q-toolbar-title> Title </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useUIStore } from '@/stores/ui'

  const uiStore = useUIStore()
</script>
