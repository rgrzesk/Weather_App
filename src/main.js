import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
import BaseBlock from './components/BaseBlock.vue'
import BaseError from './components/BaseError.vue'
const app = createApp(App)


app.use(router);
app.component('base-error',BaseError);
app.component('base-block', BaseBlock);

app.mount('#app');
