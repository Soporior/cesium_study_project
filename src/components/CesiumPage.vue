<template>
  <div ref="cesiumContainer" class="cesiumContainer" id="cesiumContainer"></div>
</template>
<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue'

// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })
onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer')
})
const count = ref(0)
</script>
<style scoped></style>
