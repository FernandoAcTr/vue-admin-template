<template>
  <div class="row">
    <div id="myMap" class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="height: 85vh"></div>
    <div id="pano" class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="height: 85vh"></div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { loadGoogleMaps } from '@/plugins/googleMaps'

  let mapData: google.maps.Map<HTMLElement> | null = null
  const myLatLng = { lat: 42.345573, lng: -71.098326 }

  async function initMap() {
    const google = await loadGoogleMaps()
    mapData = new google.maps.Map(document.getElementById('myMap')!, {
      center: myLatLng,
      zoom: 7,
    })

    let pano = new google.maps.StreetViewPanorama(document.getElementById('pano')!, {
      position: myLatLng,
      pov: {
        heading: 34,
        pitch: 10,
      },
    })
  }

  onMounted(() => initMap())
</script>

<style scoped></style>
