<template>
  <q-page>
    <q-card class="bg-transparent no-shadow no-border">
      <q-card-section class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
          <!--          <div class="text-h6 float-left q-ml-md q-mt-sm">Pagination With Filters</div>-->
          <q-space />
          <q-select
            dense
            outlined
            style="min-width: 200px"
            v-model="type"
            :options="['All', 'Free', 'Paid']"
            class="float-right"
            label="Category"
          />
        </div>
      </q-card-section>
      <q-card-section class="q-mx-sm">
        <div class="row q-col-gutter-lg">
          <div class="col-lg-3 col-sm-12 col-xs-12 col-md-3" v-for="data in filteredData2">
            <q-card style="background-color: #292845" class="text-white">
              <q-img :src="data.img">
                <template v-slot:loading>
                  <div class="text-subtitle1 text-white">Loading...</div>
                </template>
              </q-img>
              <q-separator></q-separator>
              <q-card-section class="text-h5 text-center">{{ data.title }}</q-card-section>
              <q-card-section class="text-justify">
                <div>{{ data.text }}</div>
              </q-card-section>
              <q-card-actions>
                <q-btn icon="remove_red_eye" class="bg-transparent text-capitalize" flat label="200 Views" />

                <q-space />

                <q-btn icon="chat_bubble" class="bg-transparent" flat label="56" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-pagination
          v-model="page"
          :min="currentPage"
          :max="Math.ceil(filteredData.length / totalPages)"
          :input="true"
          input-class="text-orange-10"
        >
        </q-pagination>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
  import { computed, defineComponent } from 'vue'
  import { ref } from 'vue'

  const type = ref('All')
  const page = ref(1)
  const currentPage = ref(1)
  const nextPage = ref(null)
  const totalPages = ref(4)

  const cards_data = [
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 1',
    },
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'paid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 2',
    },
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 3',
    },
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 4',
    },
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'paid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 5',
    },
    {
      img: 'https://placeimg.com/500/300/nature?t=' + Math.random(),
      type: 'free',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      title: 'Title 6',
    },
  ]

  const filteredData = computed(() => {
    if (type.value == 'All') return cards_data

    return cards_data.filter(function (item) {
      return item.type.toLowerCase() == type.value.toLowerCase()
    })
  })

  const filteredData2 = computed(() => {
    return filteredData.value.slice(
      (page.value - 1) * totalPages.value,
      (page.value - 1) * totalPages.value + totalPages.value
    )
  })
</script>

<style scoped></style>
