<template>
    <div class="person">
        <h2>{{ sum }}</h2>
        <button @click="add">点我+1</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

let sum = ref(0)

function add(){
    sum.value += 1
}

// 创建，通过setup函数
console.log('创建')

// 挂载
onBeforeMount(()=>{
    console.log('挂载前')
})
onMounted(()=>{
    console.log('挂载完成')
})

// 更新
onBeforeUpdate(()=>{
    console.log('更新前')
})
onUpdated(()=>{
    console.log('更新完成')
})

// 卸载
onBeforeUnmount(()=>{
    console.log('卸载前')
})
onUnmounted(()=>{
    console.log('卸载完成')
})
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
} 
</style>