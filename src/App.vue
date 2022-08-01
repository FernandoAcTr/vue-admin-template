<template>
  <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
    <Header />
    <Drawer />

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import Drawer from './components/Drawer.vue'
  import Header from './components/Header.vue'
</script>
