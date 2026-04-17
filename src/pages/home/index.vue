<template>
    <div class="home">
        <!-- 首页轮播组件 -->
        <Carousel />
        <!-- 首页输入框 -->
        <Search />
    </div>
</template>

<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
</script>

<style scoped lang="scss"></style>