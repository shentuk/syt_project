<template>
  <div class="container">
    <hospitalTop></hospitalTop>
    <div class="content">
      <RouterView></RouterView>
    </div>
    <hospitalBottom></hospitalBottom>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1200px;
    margin-top: 70px;
    min-height: 700px;
  }
}
</style>