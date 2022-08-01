<template>
  <q-layout view="lHh Lpr lff">
    <Header />
    <Drawer />

    <q-page-container style="padding-top: 60px">
      <q-page padding>
        <Breadcrumbs />
        <router-view></router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import Breadcrumbs from './components/Breadcrumbs.vue'
  import Drawer from './components/Drawer.vue'
  import Header from './components/Header.vue'
</script>
