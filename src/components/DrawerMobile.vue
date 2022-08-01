<template>
  <q-drawer show-if-above v-model="uiStore.drawer" bordered class="bg-grey-3">
    <DrawerContent />
  </q-drawer>
</template>

<script setup lang="ts">
  import DrawerContent from './DrawerContent.vue'
  import { useUIStore } from '@/stores/ui'

  const uiStore = useUIStore()
</script>
