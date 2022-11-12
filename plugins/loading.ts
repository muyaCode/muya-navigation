// 全局加载插件，通过生命周期定义：https://v3.nuxtjs.org/api/advanced/hooks#lifecycle-hooks

// 1.导入相关的组件api

// 2.生命周期中判断: 未开始，开始和完成 ，或发生错误时使用
export default defineNuxtPlugin((NuxtApp) => {
  const loading = ref(null);

  NuxtApp.hook("app:mounted", (e) => {
    if(!loading.value) {
      // 运行加载组件
      // loading.value = 加载组件
    }
  })

  NuxtApp.hook("page:start", (e) => {
    // loading.value?.start() // 开始loading加载
  })

  NuxtApp.hook("page:finish", (e) => {
    // loading.value?.finish() // loading加载完成
  })

  NuxtApp.hook("app:error", (e) => {
    // 如果是在客户端
    if(process.client) {
      console.log("客户端app:error", e)
    }
    // 如果是在服务端
    if(process.server) {
      console.log("服务端app:error", e)
    }
  })
})