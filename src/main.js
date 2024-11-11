import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';  // Import the i18n instance
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import 'bootstrap'; // Optional: for Bootstrap’s JS components if needed
const app = createApp(App);
app.use(i18n);  // Register i18n
app.mount('#app');
