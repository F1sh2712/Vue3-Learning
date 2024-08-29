<template>
    <ul class="news-list">
        <li>Code:{{ route.params.id }}</li>
        <li>Title:{{ route.params.title }}</li>
        <li>Content:{{ route.params.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
    import { useRoute } from 'vue-router'
    const route = useRoute()
</script>


<style scoped>
</style>