<template>
  <q-card class="text-white" style="background-color: #181c4d">
    <q-card-section>
      <div class="text-h6 q-pa-sm">
        {{ name }}
      </div>
      <div class="q-pa-sm">
        {{ text }}
      </div>
      <div class="q-pa-sm text-red-6">
        {{ des }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
    },
    text: {
      type: String,
    },
    des: {
      type: String,
    },
  })
</script>

<style scoped></style>
