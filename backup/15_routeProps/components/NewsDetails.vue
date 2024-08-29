<template>
    <ul class="news-list">
        <li>Code:{{ id }}</li>
        <li>Title:{{ title }}</li>
        <li>Content:{{ content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
   defineProps(['id', 'title', 'content'])
</script>


<style scoped>
</style>