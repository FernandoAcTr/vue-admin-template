<template>
  <div class="absolute row full-width" style="top: 20px; left: 15px">
    <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" class="img" />
    <h6 class="q-ma-none q-pa-none q-ml-md" v-show="!uiStore.miniState || showTitle">CRM Admin</h6>
  </div>

  <q-scroll-area class="fit" style="padding-top: 80px">
    <q-separator />

    <q-list padding class="menu-list">
      <q-item clickable v-ripple :to="{ name: Routes.Dashboard }">
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>

        <q-item-section> Dashboard </q-item-section>
      </q-item>

      <q-expansion-item expand-separator icon="map" label="Maps" :content-inset-level="0.6">
        <q-item clickable :to="{ name: Routes.Map }">
          <q-item-section>
            <q-item-label>Map</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: Routes.MapMarker }">
          <q-item-section>
            <q-item-label>Map Marker</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: Routes.StreetView }">
          <q-item-section>
            <q-item-label>Street View</q-item-label>
          </q-item-section>
        </q-item>
      </q-expansion-item>

      <q-item clickable v-ripple :to="{ name: Routes.Tables }">
        <q-item-section avatar>
          <q-icon name="table_chart" />
        </q-item-section>

        <q-item-section> Tables </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Charts }">
        <q-item-section avatar>
          <q-icon name="table_chart" />
        </q-item-section>

        <q-item-section> Charts </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Cards }">
        <q-item-section avatar>
          <q-icon name="style" />
        </q-item-section>

        <q-item-section> Cards </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Contact }">
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>

        <q-item-section> Contact </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Calendar }">
        <q-item-section avatar>
          <q-icon name="calendar_month" />
        </q-item-section>

        <q-item-section> Calendar </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Taskboard }">
        <q-item-section avatar>
          <q-icon name="task_alt" />
        </q-item-section>

        <q-item-section> Taskboard </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Pagination }">
        <q-item-section avatar>
          <q-icon name="calendar_view_week" />
        </q-item-section>

        <q-item-section> Pagination </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: Routes.Products }">
        <q-item-section avatar>
          <q-icon name="shopping_cart" />
        </q-item-section>

        <q-item-section> Product Catalogues </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

  <div class="q-mini-drawer-hide absolute" style="top: 90px; right: -17px">
    <q-btn
      dense
      round
      unelevated
      color="accent"
      @click="uiStore.togglePinDrawer"
      :icon="uiStore.pinDrawer ? 'chevron_left' : 'chevron_right'"
    />
  </div>
</template>

<script setup lang="ts">
  import { useUIStore } from '@/stores/ui'
  import { ref } from 'vue'
  import { useMatchMedia } from '@/composables/useMatchMedia'
  import { Routes } from '@/router/routes'
  const uiStore = useUIStore()

  const showTitle = ref(false)

  useMatchMedia(640, (isBelowSize) => (showTitle.value = isBelowSize))
</script>

<style scoped>
  .img {
    min-width: 32px;
    width: 32px;
  }
</style>
