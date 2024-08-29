<template>
    <div class="person">
    <h1>China</h1>
    <h2>Wuhan</h2>
    <h3 ref="title">Hankou</h3>
    <button @click="showLog">Output the element in h2 tag</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
  import {ref, defineExpose} from 'vue'

  // 创建一个title来储存ref标记的内容，如DOM元素
  let title = ref()
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)
  function showLog(){
    console.log(title.value)
  }

  // 允许父组件查看数据
  defineExpose({a,b,c})

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
} 


</style>