<template>
    <div class="progress-bar">
       <div class="progress-val"></div>
    </div>
</template>

<script lang="ts" setup name="Person111">
    
</script>

<style scoped>
    .progress-bar {
       height: 20px;
       width: 600px;
       border-radius: 5px;
       border: 1px solid #ccc;
       background: #ddd;
       margin: 50px auto;
    }

    .progress-val {
        height: 20px;
        width: 400px;
        background: repeating-linear-gradient(45deg, #99ccff 0px, #99ccff 15px, #0099ff 30px, #0099ff 45px);
        background-size: 42px 20px;
        background-position: 0px;
        animation: progress-striped 1s linear infinite normal;
    }

    @keyframes progress-striped {
        from {background-position: 0px 0px;}
        to {background-position: 42px 0px;}
        
    }

    button {
        border-radius: 10px;
        padding: 10px;
    }

  

</style>