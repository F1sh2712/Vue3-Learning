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

<script lang="ts">
import { textChangeRangeIsUnchanged } from 'typescript';

    export default {
        name:'Person',
        // Vue2 option API
        // data() {
        //     return {
        //         name: '吴彦祖',
        //         age: 40,
        //         telephone: '13500000000',
        //     }
        // },

        // methods: {
        //     showTelephone() {
        //         alert('吴彦祖的电话是：' + this.telephone)
        //     },

        //     changeName() {
        //         this.name = 'Daniel Wu'
        //     },

        //     changeAge() {
        //         this.age += 1
        //     }
        // },

        setup() {
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
             return {name,age,changeName,changeAge,showTelephone}
        }
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