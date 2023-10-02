import { createApp } from 'vue'
import App from './components/app/App.vue'
import uiComponenents from './ui-componenents'
const app = createApp(App)
uiComponenents.map(component => app.component(component.name, component))


app.mount('#app')
