<template>
  <q-card>
    <q-item>
      <q-item-section avatar>
        <q-avatar size="70px">
          <img :src="avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ name }}</q-item-label>
        <q-item-label caption>
          {{ des }}
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-btn label="add" size="sm" class="bg-indigo-8 text-capitalize text-white"></q-btn>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
    },
    des: {
      type: String,
    },
    avatar: {
      type: String,
    },
  })
</script>

<style scoped></style>
