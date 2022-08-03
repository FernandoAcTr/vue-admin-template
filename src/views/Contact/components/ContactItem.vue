<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-avatar>
        <img :src="avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ name }}</q-item-label>
      <q-item-label caption lines="2">
        <span class="text-weight-bold">{{ position }}</span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
  const props = defineProps({
    avatar: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
  })
</script>

<style scoped></style>
