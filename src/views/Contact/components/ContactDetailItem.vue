<template>
  <q-item clickable v-ripple>
    <q-item-section avatar top>
      <q-avatar :icon="icon" color="grey-2" :text-color="text_color" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines="1">{{ value }}</q-item-label>
      <q-item-label caption class="text-grey-8">{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts" setup>
  const props = defineProps({
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    text_color: {
      type: String,
      default: 'grey-2',
    },
  })
</script>

<style scoped></style>
