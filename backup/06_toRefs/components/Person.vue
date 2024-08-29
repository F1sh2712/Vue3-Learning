<template>
    <div class="person">
       <!-- <h2>姓名： {{ person.name }}</h2>
       <h2>年龄： {{ person.age }}</h2>
       <h2>性别： {{ person.gender }}</h2> -->
       <h2>姓名： {{ name }}</h2>
       <h2>年龄： {{ age }}</h2>
       <h2>性别： {{ gender }}</h2>
       <button @click="changeName">修改姓名</button>
       <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
    import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import {reactive, toRefs} from 'vue'

    let person = reactive({
        name: '金城武',
        age: 40,
        gender: '男'

    })

    // 如果想要赋值一个对象且更改数据，需要用到toRefs
    let {name, age, gender} = toRefs(person)
    // 输出为一个响应式对象
    console.log(toRefs(person))

    function  changeName(){
        name.value += '帅'
    }
    function  changeAge(){
        age.value -= 1
    }
</script>

<style scoped>
    

  

</style>