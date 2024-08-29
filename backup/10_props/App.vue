<template>
    <!-- html -->
     <div class="app">
        
        <Person :list="list"/>
     </div>
</template>

<script lang="ts" setup name='App'>
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import { type personList } from './type';

    let list = reactive<personList>([
        {id:'01', name:'Mike', age:18},
        {id:'02', name:'Tom', age:38},
        {id:'03', name:'Billy', age:28}
    ])
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>