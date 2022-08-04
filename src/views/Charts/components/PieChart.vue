<template>
  <div>
    <q-card>
      <q-card-section class="text-h6"> Pie Chart </q-card-section>
      <q-card-section>
        <div ref="piechart" id="pieChart" style="height: 300px"></div>
      </q-card-section>
      <q-resize-observer @resize="onResize" />
    </q-card>
  </div>
</template>

<script lang="ts" setup>
  import { useQuasar } from 'quasar'
  import { onMounted, watch } from 'vue'
  import echarts, { type ECOption } from '@/plugins/eacharts'

  const $q = useQuasar()
  const model = false
  let pie_chart: echarts.ECharts | null = null

  const options: ECOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      top: 'bottom',
      bottom: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access source',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '35%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct access' },
          { value: 580, name: 'Email marketing' },
          { value: 484, name: 'Affiliate Advertising' },
          { value: 300, name: 'Video ad' },
        ],
      },
    ],
  }

  function init() {
    let pieChart = document.getElementById('pieChart')
    echarts.dispose(pieChart!)
    let theme = model ? 'dark' : 'light'
    pie_chart = echarts.init(pieChart!, theme)
    pie_chart.setOption(options)
  }

  function onResize() {
    pie_chart?.resize()
  }

  watch(
    () => $q.dark.isActive,
    () => init()
  )

  onMounted(() => init())
</script>

<style scoped></style>
