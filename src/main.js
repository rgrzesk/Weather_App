import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import BaseBlock from './components/BaseBlock.vue'
const app = createApp(App)


app.use(router);

app.component('base-block', BaseBlock);

app.mount('#app');
