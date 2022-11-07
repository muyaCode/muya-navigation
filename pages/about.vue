<script setup lang='ts'>
  function enableCustomLayout () {
    setPageLayout('custom')
  }
  // 继承的公共布局，为false则不继承layouts的公共布局
  definePageMeta({
    // layout: "custom",
    layout: false,
  });
  // 页面SEO
  useHead({
    title: '关于页面',
    meta: [
      { name:'description', content: '关于页面' }
    ],
  })
</script>

<template>
  <div class="about">
    <div>关于页面</div>
    <button @click="enableCustomLayout">动态更改布局</button>
    <NuxtLink to="/">回到首页</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  
</style>
