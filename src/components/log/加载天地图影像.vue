<template>
  <div id="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
onMounted(() => {
  const viewer = new Cesium.CesiumWidget('cesiumContainer')
  window.viewer = viewer
  viewer.imageryLayers.removeAll()
  const layer1 = new Cesium.ImageryLayer(new Cesium.WebMapTileServiceImageryProvider({
    url : `http://t{s}.tianditu.gov.cn/vec_w/wmts?tk=${config.tiandituToken}`,
    layer : 'vec',//请求图像的名称(在一个服务器中会有多个底图)
    style : 'default',//The style name for WMTS requests.请求图像的样式
    format : 'tiles',//文件类型默认是'image/jpeg'
    tileMatrixSetID : 'w',//瓦片矩阵集合名称，通常为“EPSG:4326”或“EPSG:3857” 'EPSG:900913'
    ellipsoid:Cesium.Ellipsoid.WGS84,//地图影像的坐标系 默认是wgs84
    // tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],tileMatrixLabels参数的情况下等于tileMatrixLabels参数的值，也就是自定义的瓦片矩阵的名字；在没有设置tileMatrixLabels参数的情况下等于缩放级别的数字值。
    maximumLevel: 19,//请求的最深图级 解决影像的层级过深而产生瓦片缺失或者是提醒警告瓦片
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']

  }))
  const layer2 = new Cesium.ImageryLayer(new Cesium.WebMapTileServiceImageryProvider({
    url : `http://t{s}.tianditu.gov.cn/cva_w/wmts?tk=${config.tiandituToken}`,
    layer : 'cva',
    style : 'default',
    format : 'tiles',
    tileMatrixSetID : 'w',
    ellipsoid:Cesium.Ellipsoid.WGS84,

    // tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],
    maximumLevel: 19,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  }))

  viewer.imageryLayers.add(layer1)
  viewer.imageryLayers.add(layer2)
  viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(104.06,30.67,10000)})
  









})

</script>
<style scoped></style>
