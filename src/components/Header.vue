<template>
  <q-header reveal class="bg-white text-dark q-py-md">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="uiStore.toggleDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useUIStore } from '@/stores/ui'

  const uiStore = useUIStore()
</script>
