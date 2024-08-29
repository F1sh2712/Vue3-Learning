<template>
    <div class="news">
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- params method for route -->
                <RouterLink 
                :to="{
                    name:'detail',
                    // params cannot transfer object data and list data
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
    </div>

    <!-- news details -->
     <div class="news-content">
        <RouterView></RouterView>
     </div>
</template>

<script setup lang="ts" name="News">
    import { reactive } from 'vue';

    const newsList = reactive([
        {id:'01', title:'The best vegetables for good health', content:'Broccoli'},
        {id:'02', title:'The most well-paid job', content:'Programmer'},
        {id:'03', title:'What is better than the USA', content:'USB'},
        {id:'04', title:'What is No.1', content:'China No.1'}
    ])
    
</script>

<style scoped>
</style>