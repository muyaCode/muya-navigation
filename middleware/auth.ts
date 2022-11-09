export default defineNuxtRouteMiddleware((to, from) => {
  console.log('auth 中间件')
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // return navigateTo('/')
})