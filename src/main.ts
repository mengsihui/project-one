import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
<<<<<<< HEAD
=======
import { setup } from './setup'
>>>>>>> a74548e7471c3c029fdb6f2d4457f036bb9991c8

const app = createApp(App)

app.use(createPinia())
app.use(router)

<<<<<<< HEAD
=======
setup(app)

>>>>>>> a74548e7471c3c029fdb6f2d4457f036bb9991c8
app.mount('#app')
