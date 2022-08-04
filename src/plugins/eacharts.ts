import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, GaugeChart, PieChart, ScatterChart } from 'echarts/charts'
import type {
  BarSeriesOption,
  LineSeriesOption,
  GaugeSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
} from 'echarts/charts'
import type {
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
} from 'echarts/components'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  GaugeChart,
  PieChart,
  ScatterChart,
])

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | GaugeSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
>

export default echarts
