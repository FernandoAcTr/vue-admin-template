<template>
  <q-page class="q-pa-sm">
    <div id="myMap" style="height: 85vh"></div>
  </q-page>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { loadGoogleMaps } from '@/plugins/googleMaps'

  let mapData: google.maps.Map<HTMLElement> | null = null

  async function initMap() {
    const google = await loadGoogleMaps()
    mapData = new google.maps.Map(document.getElementById('myMap')!, {
      center: { lat: 54.0682082, lng: -3.6191708 },
      zoom: 7,
    })
  }

  onMounted(() => initMap())
</script>

<style scoped></style>
