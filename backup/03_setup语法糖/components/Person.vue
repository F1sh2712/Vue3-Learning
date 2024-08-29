<template>
    <div class="person">
        <h1>人员信息</h1>
        <h2>姓名： {{name}}</h2>
        <h2>年龄： {{age}}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTelephone">查看电话</button>
    </div>
</template>

<!-- <script lang="ts">
    export default {
        name:'Person',
    }
</script> -->


<script lang="ts" setup name="Person111">
    //  为了避免使用两个script标签，可以将组件名以name的方式写入，需要在vite config里增加配置

    // 数据（此时数据不是响应式）
    let name = '吴彦祖'
    let age = 40
    let telephone = '15011111111'
            
    // 方法（方法成功修改数据，但是页面数据不是响应式，所以不会变化)
    function changeName() {
        name = 'Daniel Wu'
    }
    function changeAge() {
        age += 1
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

</style>