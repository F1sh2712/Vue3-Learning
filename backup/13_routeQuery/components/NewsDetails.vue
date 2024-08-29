<template>
    <ul class="news-list">
        <li>{{ route.query.id }}</li>
        <li>{{ route.query.title }}</li>
        <li>{{ route.query.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="About">
    import { useRoute } from 'vue-router'

    let route = useRoute()
</script>


<style scoped>
</style>