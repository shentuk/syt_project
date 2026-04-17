import { createApp } from 'vue'

import VueRouter from '@/router/index.ts'

// 消除全局默认样式
import '@/style/reset.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
// 引入顶部、底部组件注册为全局组件
import hospitalTop from '@/components/hospital_top/index.vue'
import hospitalBottom from '@/components/hospital_bottom/index.vue'

const app = createApp(App);

app.component('hospitalTop', hospitalTop);
app.component('hospitalBottom', hospitalBottom);

app.use(VueRouter)
app.use(ElementPlus)
app.mount('#app')
