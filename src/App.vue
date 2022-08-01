<template>
  <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
    <Header />
    <DrawerMobile v-if="drawerMobile" />
    <Drawer v-else />

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Drawer from './components/Drawer.vue'
  import DrawerMobile from './components/DrawerMobile.vue'
  import Header from './components/Header.vue'
  const drawerMobile = ref(false)

  const x = window.matchMedia('(max-width: 640px)')
  function myFunction(x: any) {
    drawerMobile.value = x.matches
  }
  x.addEventListener('change', myFunction)
</script>
