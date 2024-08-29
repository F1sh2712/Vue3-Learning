<template>
    <div class="person">
        <h2>当前温度：{{temp}}℃</h2>
        <h2>当前湿度：{{humidity}}‌%RH</h2>
        <button @click="changeTemp">温度加5</button>
        <button @click="changeHumidity">湿度加0.5</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
   import {ref, watchEffect} from 'vue'

   // 数据
   let temp = ref(20)
   let humidity = ref(40.0)

   // 方法
   function changeTemp(){
    temp.value += 5
   }
   function changeHumidity(){
    humidity.value += 0.5
   }

   // watchEffect能够自动识别需要监视的数据
   watchEffect(()=>{
    if(temp.value >= 50 || humidity.value >= 50.0){
        console.log('服务器报警')
    }
   })
</script>

<style scoped>
    

  

</style>