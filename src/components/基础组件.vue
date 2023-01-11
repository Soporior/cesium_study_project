<!--
 * @Author: soporior
 * @Date: 2023-01-10 13:13:53
 * @LastEditors: soporior
 * @LastEditTime: 2023-01-10 16:18:11
 * @FilePath: \cesium_study_project\src\components\基础组件.vue
-->
<template>
  <div id="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import {CesiumWidget} from 'cesium'
onMounted(() => {
  const viewer = new CesiumWidget('cesiumContainer')
  window.viewer = viewer
  viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(104.06,30.67,10000)})
  



})

</script>
<style scoped></style>
