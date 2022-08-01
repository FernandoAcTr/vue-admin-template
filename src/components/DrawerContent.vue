<template>
  <div class="absolute row full-width" style="top: 20px; left: 15px">
    <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" class="img"> </q-img>
    <h6 class="q-ma-none q-pa-none q-ml-md" v-show="!uiStore.miniState || showTitle">CRM Admin</h6>
  </div>

  <q-scroll-area class="fit" style="padding-top: 80px">
    <q-separator />

    <q-list padding class="menu-list">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section> Inbox </q-item-section>
      </q-item>

      <q-item active clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="drafts" />
        </q-item-section>

        <q-item-section> Drafts </q-item-section>
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
  const uiStore = useUIStore()

  const showTitle = ref(false)

  var x = window.matchMedia('(max-width: 640px)')
  const definedIfShowTitle = () => (showTitle.value = x.matches)
  definedIfShowTitle()
  x.addEventListener('change', definedIfShowTitle)
</script>

<style scoped>
  .img {
    min-width: 32px;
    width: 32px;
  }

  .menu-list .q-item .q-icon {
    font-size: 20px;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    color: gray;
    box-shadow: -3px 4px 20px -7px rgba(0, 0, 0, 0.6);
  }

  .q-drawer .q-item {
    justify-content: left !important;
    padding-left: 15px !important;
  }

  .menu-list .q-item {
    border-radius: 0 32px 32px 0;
  }
</style>
