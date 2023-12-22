
import { createApp } from 'vue'
import Vuex  from 'vuex'
import App from './App.vue'
import router from './router/index'
import {store} from './stores/store.vue'

const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app');
