<template>
    <!-- html -->
     <div class="app">
        <button @click="showLog">Output the component</button>
        <Person ref="person"/>
     </div>
</template>

<script lang="ts" setup name='App'>
    import Person from './components/Person.vue'
    import {ref} from 'vue'

    // ref还可以储存一个组件的实例，但是需要子组件中使用defineExpose来限定输出内容
    let person = ref()

    function showLog(){
        console.log(person.value)
    }
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>