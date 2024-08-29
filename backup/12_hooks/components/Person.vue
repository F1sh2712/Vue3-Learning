<template>
    <div class="person">
        <h2>{{ sum }}</h2>
        <button @click="add">点我+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index">
        <br/>
        <button @click="getDog">Get Another Dog</button>
    </div>
</template>

<script lang="ts" setup name="Person111">
    // 引入hooks
    import useSum from '@/hooks/useSum'
    import useDogs  from '@/hooks/useDogs'

    const {sum, add} = useSum()
    const {dogList, getDog} = useDogs()
    

</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
img {
    height: 200px;
    margin-left: 10px;
} 
</style>