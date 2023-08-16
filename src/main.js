import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'
import './assets/tailwind.css'
import './index.css'
import vex from 'vex-js'
import vexDialog from 'vex-dialog'

// Main css
import 'vex-js/dist/css/vex.css'

// Themes
import 'vex-js/dist/css/vex-theme-top.css'
import 'vex-js/dist/css/vex-theme-default.css'

// Options
vex.defaultOptions.className = 'vex-theme-default'

// Register vex-dialog
vex.registerPlugin(vexDialog)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('vex', vex)

app.mount('#app')
