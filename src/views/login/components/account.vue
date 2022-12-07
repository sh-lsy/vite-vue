<template>
  <div class="account">
    <el-form :model="account" :rules="accountRules" label-width="60px" size="large" status-icon ref="formRef">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'

import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'

const account = reactive<IAccount>({
  name: '',
  password: ''
})
const formRef = ref<FormInstance>()
const accountRules: FormRules = {
  name: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}
const loginStore = useLoginStore()
const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.loginStoreAction({ name, password })
    } else {
      ElMessage.error('请输入正确的信息')
    }
  })
}
defineExpose({
  loginAction
})
</script>
<style scoped lang="less"></style>
