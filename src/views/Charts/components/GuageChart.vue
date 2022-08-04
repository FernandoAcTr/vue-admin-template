<template>
  <div>
    <q-card>
      <q-card-section class="text-h6">
        Guage Chart

        <q-btn icon="fa fa-download" class="float-right" @click="SaveImage" flat dense>
          <q-tooltip>Download PNG</q-tooltip>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <div ref="guagechart" id="guageChart" style="height: 250px"></div>
      </q-card-section>
      <q-resize-observer @resize="onResize" />
    </q-card>
  </div>
</template>

<script lang="ts" setup>
  import echarts, { type ECOption } from '@/plugins/eacharts'
  import { useQuasar } from 'quasar'
  import { onMounted, watch } from 'vue'

  const $q = useQuasar()
  const model = false
  const options: ECOption = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  }
  let guage_chart: echarts.ECharts | null = null

  function SaveImage() {
    if (!guage_chart) return
    const linkSource = guage_chart.getDataURL()
    const downloadLink = document.createElement('a')
    document.body.appendChild(downloadLink)
    downloadLink.href = linkSource
    downloadLink.target = '_self'
    downloadLink.download = 'GuageChart.png'
    downloadLink.click()
  }

  function init() {
    let guageChart = document.getElementById('guageChart')
    echarts.dispose(guageChart!)
    let theme = model ? 'dark' : 'light'
    guage_chart = echarts.init(guageChart!, theme)
    guage_chart.setOption(options)
  }

  function onResize() {
    guage_chart?.resize()
  }

  watch(
    () => $q.dark.isActive,
    () => init()
  )

  onMounted(() => init())
</script>

<style scoped></style>
