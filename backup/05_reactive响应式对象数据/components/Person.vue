<template>
    <div class="person">
        <h1>人员信息</h1>
        <h2>姓名： {{name}}</h2>
        <h2>年龄： {{age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTelephone">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
    //  使用ref将数据变成响应式，ref定义的是基本类型的数据
    import {ref} from 'vue'

    // 数据
    let name = ref('吴彦祖')
    let age = ref(40)
    let telephone = '15011111111'
            
    // 方法（方法成功修改数据，但是页面数据不是响应式，所以不会变化)
    function changeName() {
        name.value = 'Daniel Wu'
    }
    function changeAge() {
        age.value += 1
    }
    function showTelephone() {
        alert('你的电话是： ' + telephone)
    }
   
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    button {
        border-radius: 10px;
        padding: 10px;
    }

    li {
        font-size: 25px;
    }

</style>