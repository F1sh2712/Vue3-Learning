<template>
    <!-- html -->
     <div class="app" >
        
        <Person v-if="isShow" />
     </div>
</template>

<script lang="ts" setup name='App'>
    import Person from './components/Person.vue'
    import {ref} from 'vue'
    
    // isShow为false，则子组件开始卸载
    let isShow = ref(true)
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>