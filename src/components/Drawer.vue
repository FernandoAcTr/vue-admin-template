<template>
  <q-drawer
    show-if-above
    v-model="uiStore.drawer"
    :mini="uiStore.miniState"
    @mouseover="uiStore.maximizeDrawer"
    @mouseout="uiStore.minifyDrawer"
    :width="200"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
  >
    <DrawerContent />
  </q-drawer>
</template>

<script setup lang="ts">
  import DrawerContent from './DrawerContent.vue'
  import { useUIStore } from '@/stores/ui'

  const uiStore = useUIStore()
</script>
