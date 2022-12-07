<template>
  <div class="login-wra">
    <div class="introduce">
      <h2>产品介绍</h2>
    </div>
    <div class="login">
      <div class="title f-j-between">
        <div class="logo"></div>
        <h1>系统</h1>
      </div>
      <login />
    </div>
  </div>
</template>
<script lang="ts" setup>
import login from './components/login.vue'
</script>
<style scoped lang="less">
.login-wra {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(to top left, rgb(18, 107, 174), rgb(36, 134, 185), rgba(5, 39, 175, 1));
  /* 溢出隐藏 */
  overflow: hidden;
  position: relative;
  .introduce {
    width: 465px;
    height: 500px;
    border: 1px solid red;
    h2 {
      font-size: 30px;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
  }
  .login {
    width: 465px;
    height: 500px;
    .title {
      h1 {
        font-size: 30px;
        color: #fff;
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>
