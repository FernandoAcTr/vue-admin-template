<template>
  <div class="row q-col-gutter-sm q-py-sm">
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card class="q-ma-xs" style="background-color: #38b1c5">
        <q-card-section class="text-h6 text-white"> Today's View </q-card-section>
        <q-card-section class="q-pa-none">
          <div ref="linechart" id="linechart" style="height: 250px"></div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card class="q-ma-xs" style="background-color: #ea4b64">
        <q-card-section class="text-h6 text-white"> Daily Sales </q-card-section>
        <q-card-section class="q-pa-none">
          <div ref="barchart" id="barchart" style="height: 250px"></div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <q-card class="q-ma-xs" style="background-color: #1e88e5">
        <q-card-section class="text-h6 text-white"> Today's User Visit </q-card-section>
        <q-card-section class="q-pa-none">
          <div ref="linechart2" id="linechart2" style="height: 250px"></div>
        </q-card-section>
      </q-card>
    </div>

    <q-resize-observer @resize="onResize" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import echarts, { type ECOption } from '@/plugins/eacharts'

  const BarChartOptions: ECOption = {
    tooltip: { show: true },
    title: { show: true, textStyle: { color: 'rgba(0, 0, 0 , .87)', fontFamily: 'sans-serif' } },
    grid: { containLabel: true, bottom: '10%', top: '5%' },
    xAxis: {
      show: false,
      type: 'category',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
      axisLabel: { show: false },
    },
    yAxis: {
      show: false,
      type: 'value',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisLabel: { show: false },
      splitLine: { lineStyle: { type: 'dashed' } },
      axisTick: {
        show: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
    },
    series: [
      {
        type: 'bar',
        barGap: '-100%',
        itemStyle: { color: 'rgba(0,0,0,0.1)' },
        barWidth: '50%',
      },
      { barWidth: '50%', type: 'bar', itemStyle: { color: '#ffffff' } },
    ],
    dataset: {
      source: [
        { label: '0D', max: 500, sales: 220 },
        {
          label: '1D',
          max: 500,
          sales: 182,
        },
        { label: '2D', max: 500, sales: 191 },
        {
          label: '3D',
          max: 500,
          sales: 234,
        },
        { label: '4D', max: 500, sales: 290 },
        {
          label: '5D',
          max: 500,
          sales: 330,
        },
        { label: '6D', max: 500, sales: 310 },
        {
          label: '7D',
          max: 500,
          sales: 123,
        },
        { label: '8D', max: 500, sales: 442 },
        {
          label: '9D',
          max: 500,
          sales: 321,
        },
        { label: '10D', max: 500, sales: 90 },
        {
          label: '11D',
          max: 500,
          sales: 149,
        },
        { label: '12D', max: 500, sales: 210 },
        {
          label: '13D',
          max: 500,
          sales: 122,
        },
        { label: '14D', max: 500, sales: 133 },
        {
          label: '15D',
          max: 500,
          sales: 334,
        },
        { label: '16D', max: 500, sales: 198 },
        {
          label: '17D',
          max: 500,
          sales: 123,
        },
        { label: '18D', max: 500, sales: 125 },
        { label: '19D', max: 500, sales: 220 },
      ],
    },
  }

  const LineChartOptions: ECOption = {
    tooltip: { show: true },
    title: { show: true, textStyle: { color: 'rgba(0, 0, 0 , .87)', fontFamily: 'sans-serif' } },
    grid: { containLabel: true, left: '0', bottom: '0', right: '0' },
    xAxis: {
      show: false,
      type: 'category',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
      axisLabel: { show: false },
      boundaryGap: false,
    },
    yAxis: {
      show: false,
      type: 'value',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisLabel: { show: false },
      splitLine: { lineStyle: { type: 'dashed' } },
      axisTick: {
        show: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
    },
    series: [{ type: 'line', areaStyle: {}, smooth: true }],
    dataset: {
      source: [
        { month: 'Jan', 'Unique Visit': 296, 'Page View': 548 },
        {
          month: 'Feb',
          'Unique Visit': 1181,
          'Page View': 714,
        },
        { month: 'Mar', 'Unique Visit': 235, 'Page View': 961 },
        {
          month: 'Apr',
          'Unique Visit': 294,
          'Page View': 580,
        },
        { month: 'May', 'Unique Visit': 765, 'Page View': 730 },
        {
          month: 'Jun',
          'Unique Visit': 412,
          'Page View': 1249,
        },
        { month: 'Jul', 'Unique Visit': 1125, 'Page View': 267 },
        {
          month: 'Aug',
          'Unique Visit': 800,
          'Page View': 251,
        },
        { month: 'Sep', 'Unique Visit': 948, 'Page View': 1043 },
        {
          month: 'Oct',
          'Unique Visit': 1046,
          'Page View': 1118,
        },
        { month: 'Nov', 'Unique Visit': 363, 'Page View': 573 },
        {
          month: 'Dec',
          'Unique Visit': 909,
          'Page View': 283,
        },
      ],
    },
    color: ['#2196f3'],
  }

  const LineChart2Options: ECOption = {
    tooltip: { show: true },
    title: { show: true, textStyle: { color: 'rgba(0, 0, 0 , .87)', fontFamily: 'sans-serif' } },
    grid: { containLabel: true, left: '0', bottom: '0', right: '0' },
    xAxis: {
      show: false,
      type: 'category',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
      axisLabel: { show: false },
      boundaryGap: false,
    },
    yAxis: {
      show: false,
      type: 'value',
      axisLine: { lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' } },
      axisLabel: { show: false },
      splitLine: { lineStyle: { type: 'dashed' } },
      axisTick: {
        show: true,
        lineStyle: { color: 'rgba(0, 0, 0 , .54)', type: 'dashed' },
      },
    },
    series: [{ type: 'line', areaStyle: {}, smooth: false }],
    dataset: {
      source: [
        { month: 'Jan', 'Unique Visit': 296, 'Page View': 548 },
        {
          month: 'Feb',
          'Unique Visit': 1181,
          'Page View': 714,
        },
        { month: 'Mar', 'Unique Visit': 235, 'Page View': 961 },
        {
          month: 'Apr',
          'Unique Visit': 294,
          'Page View': 580,
        },
        { month: 'May', 'Unique Visit': 765, 'Page View': 730 },
        {
          month: 'Jun',
          'Unique Visit': 412,
          'Page View': 1249,
        },
        { month: 'Jul', 'Unique Visit': 1125, 'Page View': 267 },
        {
          month: 'Aug',
          'Unique Visit': 800,
          'Page View': 251,
        },
        { month: 'Sep', 'Unique Visit': 948, 'Page View': 1043 },
        {
          month: 'Oct',
          'Unique Visit': 1046,
          'Page View': 1118,
        },
        { month: 'Nov', 'Unique Visit': 363, 'Page View': 573 },
        {
          month: 'Dec',
          'Unique Visit': 909,
          'Page View': 283,
        },
      ],
    },
    color: ['#45c2c5'],
  }

  let line_chart: echarts.ECharts | null = null
  let line_chart_2: echarts.ECharts | null = null
  let bar_chart: echarts.ECharts | null = null

  function init() {
    let lineChart = document.getElementById('linechart')
    echarts.dispose(lineChart!)
    let theme = 'light' || 'dark'
    line_chart = echarts.init(lineChart!, theme)
    line_chart.setOption(LineChart2Options)

    let barchart = document.getElementById('barchart')
    echarts.dispose(barchart!)
    bar_chart = echarts.init(barchart!, theme)
    bar_chart.setOption(BarChartOptions)

    let linechart = document.getElementById('linechart2')
    echarts.dispose(linechart!)
    line_chart_2 = echarts.init(linechart!, theme)
    line_chart_2.setOption(LineChartOptions)
  }

  function onResize() {
    line_chart?.resize()
    bar_chart?.resize()
    line_chart_2?.resize()
  }

  onMounted(() => init())
</script>
