<template>
  <q-scroll-area class="fit">
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

  <div class="q-mini-drawer-hide absolute" style="top: 60px; right: -17px">
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
  const uiStore = useUIStore()
</script>
