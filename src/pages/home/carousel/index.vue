<template>
    <el-carousel trigger="click" height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
            <img src="../../../assets/images/web-banner-1.png" alt="banner" class="banner">
        </el-carousel-item>
    </el-carousel>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.banner {
    width: 100%;
    height: 350px;
}
</style>