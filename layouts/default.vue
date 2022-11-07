<script setup lang='ts'>
  
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">index</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li v-for="id in [1,2,3]">
            <NuxtLink :to="{path: `/posts/${id}`}">Post -{{id}}</NuxtLink>
          </li>
          <li><NuxtLink to="/posts/1">click 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">click 2</NuxtLink></li>
          <li><button @click="$router.push('/about')">跳转about</button></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
  
</style>
