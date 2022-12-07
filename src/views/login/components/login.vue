<template>
  <div class="login">
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 1.账号登录的Pane -->
        <el-tab-pane name="account">
          <template #label>
            <div class="f-all-center">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <account ref="accountRef" />
        </el-tab-pane>

        <!-- 2.手机登录的Pane -->
        <el-tab-pane name="phone">
          <template #label>
            <div class="f-all-center">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <phone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="btn">
      <el-button class="login-btn" type="primary" size="large" @click="login"> 立即登录 </el-button>
    </div>
    <div class="controls f-j-between">
      <el-link type="primary">忘记密码</el-link>
      <el-link type="primary">还没有账号？现在注册</el-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import account from './account.vue'
import phone from './phone.vue'

const activeName = ref('account')
const accountRef = ref<InstanceType<typeof account>>()

const login = () => {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>
<style scoped lang="less">
.login {
  .text {
    margin-left: 6px;
  }
  .controls {
    background-color: #fff;
    padding: 0px 20px 20px 20px;
  }
  .btn {
    background-color: #fff;
    padding: 20px 20px 10px 20px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
