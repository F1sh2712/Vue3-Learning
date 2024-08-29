<template>
  <div class="app">
    <h2>Vue3 Router Test</h2>
    <!--Navigation Bar-->
     <div class="navigate">
        <!-- <a class="navigate-bar" href="./">Home Page</a>
        <a class="navigate-bar" href="./news">News</a>
        <a class="navigate-bar" href="./about">About</a> -->

        <!-- use routerLink to import different route components -->
        <RouterLink to="./" active-class="highLight">Home Page</RouterLink>
        <RouterLink :to="{name:'news'}" active-class="highLight">News</RouterLink>
        <RouterLink :to="{path:'/about'}" active-class="highLight">About</RouterLink>
     </div>

     <!--Page Content-->
     <div class="main-content">
       <RouterView>

       </RouterView>
     </div>
  </div>
</template>

<script lang="ts" setup name='App'>
   import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    .navigate {
        background-color: skyblue;
        box-shadow: 0 0 5px;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 20px;
    }

    .navigate a {
        /* display: block; */
        text-align: center;
        margin-right: 20px;
        box-shadow: 0 0 10px;
        font-style: italic;
        padding: 5px;
        background-color:chocolate;
        border-top-left-radius: 10px;
        border-end-end-radius: 10px;
        align-content: center;
    }

    .navigate.highLight {
        background-color: #4CAF50; /* 高亮时的背景色 */  
        color: white; /* 高亮时的文字颜色 */ 
        font-weight: 900;
        text-shadow: 0 0 1px black; 
    }

    .main-content {
        width: auto;
        height: auto;
        text-align: center;
        border-radius: 5px;
        font-size: large;
        font-style: italic;
    }
</style>