import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'

import App from './App.vue'
import router from './router'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import './assets/css/main.css'

const app = createApp(App)
app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
})
app.use(createPinia())
app.use(router)

app.mount('#app')
