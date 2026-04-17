<template>
    <div class="search">
        <div class="content">
            <el-autocomplete clearable placeholder="请你输入医院名称" />
            <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
</script>

<style scoped lang="scss">
.search {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        // width: 400px;
    }

    // 深度选择器，作用外部组件中内部样式
    :deep(.el-input__wrapper) {
        width: 400px;
        margin-right: 10px;
    }
}
</style>