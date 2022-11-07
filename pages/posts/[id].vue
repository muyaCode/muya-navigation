<script setup lang='ts'>
  useHead({
    title: '详情页面',
    // 标题模板
    titleTemplate: (title) => {
      return title ? `${title} - ${route.params.id}` : '前端|后端|学习|导航|前端导航|后端导航|前端库导航|前端学习导航'
    },
    meta: [
      { name:'description', content: '详情页面' }
    ],
  })
  // 路由
  const router = useRouter()

  console.log('router', router)
  const route = useRoute()

  console.log('route.query', route.query)
  console.log('route.params', route.params)
</script>

<template>
  <div>
    ID：{{ $route.params.id }}
  </div>
  <div>
    posts-{{ $route.params.id }}
    {{$router.hasRoute}}
  </div>
  <button @click="$router.push('about')">跳转about</button>
</template>

<style scoped lang="scss">
  
</style>
