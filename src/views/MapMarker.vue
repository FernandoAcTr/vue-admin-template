<template>
  <div id="myMap2" style="height: 85vh"></div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { loadGoogleMaps } from '@/plugins/googleMaps'

  let mapData: google.maps.Map<HTMLElement> | null = null
  const myLatLng = { lat: -25.363, lng: 131.044 }

  async function initMap() {
    const google = await loadGoogleMaps()
    mapData = new google.maps.Map(document.getElementById('myMap2')!, {
      center: myLatLng,
      zoom: 7,
    })
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: mapData,
      title: 'Hello World!',
      icon: "https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png"
    })
  }

  onMounted(() => initMap())
</script>

<style scoped></style>
