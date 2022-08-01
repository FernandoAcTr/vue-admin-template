<template>
  <q-layout view="lHh Lpr lff">
    <Header />
    <Drawer />

    <q-page-container style="padding-top: 60px;">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import Drawer from './components/Drawer.vue'
  import Header from './components/Header.vue'
</script>
