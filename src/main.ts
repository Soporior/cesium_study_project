import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import {Ion} from "cesium"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

Ion.defaultAccessToken = config.defaultAccessToken
createApp(App).use(ElementPlus).mount('#app')
