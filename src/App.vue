<script setup lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import ToastMessage from '@/components/ui/ToastMessage.vue'
</script>

<template>
  <a class="skip-link" href="#main">跳到主要内容</a>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <ToastMessage />
</template>
