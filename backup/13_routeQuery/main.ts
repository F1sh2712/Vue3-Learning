//  引入createApp创建应用
import {createApp} from 'vue'
//  引入App根组件
import App from './App.vue'
// import router
import router from './router'

// create an application
const app = createApp(App)
// use router 
app.use(router)
app.mount('#app')