<template>
    <div class="header">
        <div class="container">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="logo" class="logo">
                <span class="title">尚医通 预约挂号统一平台</span>
            </div>
            <div class="right">
                <span class="help">帮助中心</span>
                <span class="user">登录/注册</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 1200px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            height: 100%;
            display: flex;
            align-items: center;

            .logo {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            .title {
                font-size: 20px;
                font-weight: bold;
                color: #55a6fe;
            }
        }

        .right {
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #bbb;

            .help {
                margin-right: 20px;
                cursor: pointer;
            }

            .user {
                cursor: pointer;
            }
        }
    }
}
</style>