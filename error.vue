<template>
  <div>
    <div>发生了错误！！！</div>
    <button @click="handleError">返回首页</button>  
  </div>
</template>
<script setup lang="ts">
  const handleError = () => clearError({ redirect: "/" })
</script>