<template>
  <div id="app">
    <!-- 路由的出口，用于设置挂载点，规则对应组件显示在这里 -->
    <router-view />
    <h1>黑马头条</h1>
  </div>
</template>

<script>
export default {
  // 给组件起的名字
  name: 'App'
}
</script>

<style lang="less">
</style>
