<template>
    <div class="person">
        <!--v-model可以使页面数据双向流动-->
        <h1>监视ref定义的对象类型数据</h1>
        <h2>姓名：{{personRef.name}}</h2>
        <h2>年龄：{{personRef.age}}</h2>
        <button @click="changeNameRef()">修改姓名</button>
        <button @click="changeAgeRef()">修改年龄</button>
        <button @click="changePersonRef()">修改人员</button>
        <hr>
        <h1>监视reactive定义的对象类型数据</h1>
        <h2>姓名：{{personReactive.name}}</h2>
        <h2>年龄：{{personReactive.age}}</h2>
        <button @click="changeNameReactive()">修改姓名</button>
        <button @click="changeAgeReactive()">修改年龄</button>
        <button @click="changePersonReactive()">修改人员</button>
        <hr>
        <h2>姓名：{{personFinal.name}}</h2>
        <h2>年龄：{{personFinal.age}}</h2>
        <h2>汽车：{{personFinal.car.firstCar}}、{{personFinal.car.secondCar}}</h2>
        <button @click="changeName()">修改姓名</button>
        <button @click="changeAge()">修改年龄</button>
        <button @click="changeFirstCar()">修改第一台车</button>
        <button @click="changeSecondCar()">修改第二台车</button>
        <button @click="changeAllCar()">修改所有车</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
   import {ref, reactive, watch} from 'vue'
    
    let personRef = ref({
        name:'Chris',
        age:30
    })

    let personReactive = reactive({
        name:'Christine',
        age:28
    })

    let personFinal = reactive({
        name:'Christina',
        age:20,
        car:{
            firstCar:'Benz',
            secondCar:'BMW'
        }
    })

    // 方法
    function changeNameRef(){
        personRef.value.name += '~'
    }
    function changeAgeRef(){
        personRef.value.age += 1
    }
    function changePersonRef(){
        personRef.value = {name:'Kris', age:25}
    }
    function changeNameReactive(){
        personReactive.name += '~'
    }
    function changeAgeReactive(){
        personReactive.age += 1
    }
    function changePersonReactive(){
        // 修改reactive定义的对象需要用这种方式，但是没有变成全新对象，而是修改原本对象的数值
        Object.assign(personReactive,{name:'Kris', age:25})
    }
    function changeName(){
        personFinal.name += '~'
    }
    function changeAge(){
        personFinal.age += 1
    }
    function changeFirstCar(){
        personFinal.car.firstCar = 'Audi'
    }
    function changeSecondCar(){
        personFinal.car.secondCar = 'Jaguar'
    }
    function changeAllCar(){
        personFinal.car = {
            firstCar:'Ferrari',
            secondCar:'Porche'
        }
    }

    /*  
        监视
        watch的第一个参数是被监视的数据
        watch的第二个参数是监视的回调
        watch的第三个参数是配置对象
        watch's first argument can be different types of reactive "sources": 
        it can be a ref (including computed refs), 
        a reactive object, a getter function, or an array of multiple sources
    */
    watch(personRef, (newValue, oldValue)=>{
        console.log('personRef变化了', newValue, oldValue)
    },{deep:true,immediate:true})

    // 监视用reactive定义的对象，默认开启深度监听
    watch(personReactive, (newValue, oldValue)=>{
        console.log('personReactive变化了', newValue, oldValue)
    })

    // 监视一个响应式对象里的某一个属性，需要使用getter函数
    watch(()=> personFinal.name, (newValue, oldValue)=>{
        console.log('personFinal变化了', newValue, oldValue)
    })

    watch(()=> personFinal.car, (newValue, oldValue)=>{
        console.log('personFinal.car变化了', newValue, oldValue)
    })

    // 监视多个数据，用数组包裹
    watch([()=>personFinal.name, ()=>personFinal.car.firstCar], (newValue, oldValue)=>{
        console.log('名字和第一辆车变化了', newValue, oldValue)
    })

</script>

<style scoped>
    

  

</style>