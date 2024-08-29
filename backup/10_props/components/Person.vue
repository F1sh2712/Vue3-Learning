<template>
    <div class="person">
        <ul>
            <li v-for="p in list" :key="p.id">
                {{ p.name }} -- {{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person111">
import {type personList} from '@/type';
import { withDefaults } from 'vue';

    // import {defineProps} from 'vue'

    // 接收从父组件传过来的值list
    // defineProps(['list'])

    // 接收从父组件传过来的list并加类型限制
    // defineProps<{list:personList}>()

    // 接收list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{list?:personList}>(), {
        // 不能直接写数组，需要写函数返回数组
        // list:[{id:'001', name:'Bill', age:48}]
        list:()=> [{id:'001', name:'Bill', age:48}]
    }
    )
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
} 
</style>