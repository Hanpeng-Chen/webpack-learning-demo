<template>
  <div>
    <div>解析Vue文件</div>
    <p>{{name}}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const name = ref('Hello World!')
    return {
      name
    }
  }
})
</script>