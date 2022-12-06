<template>
  <div class="home">
    <h1>home</h1>
    <h2>main: {{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>
<script lang="ts" setup>
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(Math.ceil(Math.random() * 1000))
}
</script>
<style scoped lang="less"></style>
