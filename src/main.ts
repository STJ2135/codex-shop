import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reveal } from './directives/reveal'
import { imageFallback } from './directives/imageFallback'
import './assets/styles.css'

const app = createApp(App)
app.directive('reveal', reveal)
app.directive('image-fallback', imageFallback)
app.use(router)
app.mount('#app')
