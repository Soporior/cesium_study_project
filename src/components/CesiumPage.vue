<!--
 * @Author: soporior
 * @Date: 2023-01-10 13:13:53
 * @LastEditors: soporior
 * @LastEditTime: 2023-01-10 16:58:45
 * @FilePath: \cesium_study_project\src\components\cesiumPage.vue
-->
<template>
  <div id="cesiumContainer"></div>
  <el-switch
    v-model="value2"
    class="ml-2 optional"
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
  />
</template>
<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import {CesiumWidget} from 'cesium'
const value2 = ref(true)
onMounted(() => {
  const viewer = new CesiumWidget('cesiumContainer')
  window.viewer = viewer
  viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(104.06,30.67,10000)})
  



})

</script>
<style scoped>
.optional{
  position: absolute;
  top:50px;
  left: 0;
}
</style>
