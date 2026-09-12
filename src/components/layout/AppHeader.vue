<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'

const navItems = [
  { id: 'home', label: '首页', to: '/#home' },
  { id: 'menu', label: '时令菜单', to: '/#menu' },
  { id: 'story', label: '关于拾味', to: '/#story' },
  { id: 'reviews', label: '食客说', to: '/#reviews' },
  { id: 'visit', label: '到店指南', to: '/#visit' },
]

const { activeSection } = useActiveSection(navItems.map((item) => item.id))
const isScrolled = ref(false)
const mobileOpen = ref(false)

const syncHeader = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileNav = () => {
  mobileOpen.value = false
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMobileNav()
}

watch(mobileOpen, (open) => {
  document.body.classList.toggle('nav-open', open)
})

onMounted(() => {
  syncHeader()
  window.addEventListener('scroll', syncHeader, { passive: true })
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncHeader)
  window.removeEventListener('keydown', handleEscape)
  document.body.classList.remove('nav-open')
})
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="nav-shell">
      <RouterLink class="brand" to="/" aria-label="拾味餐厅首页">
        <span class="brand-mark">拾</span>
        <span class="brand-copy">
          <strong>拾味</strong>
          <small>SHIWEI KITCHEN</small>
        </span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.id"
          class="nav-link"
          :class="{ 'is-active': activeSection === item.id }"
          :to="item.to"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="nav-actions">
        <a class="phone-link" href="tel:02168886688" aria-label="电话预订">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z"/></svg>
          <span>021 6888 6688</span>
        </a>
        <RouterLink class="button button-small button-dark" to="/#reservation">立即订位</RouterLink>
      </div>

      <button
        class="menu-toggle"
        type="button"
        :aria-label="mobileOpen ? '关闭导航菜单' : '打开导航菜单'"
        :aria-expanded="mobileOpen"
        aria-controls="mobileNav"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span><span></span>
      </button>
    </div>

    <nav id="mobileNav" class="mobile-nav" :class="{ 'is-open': mobileOpen }" aria-label="移动端导航">
      <RouterLink v-for="item in navItems" :key="item.id" :to="item.to" @click="closeMobileNav">
        {{ item.label }}
      </RouterLink>
      <RouterLink class="button button-dark" to="/#reservation" @click="closeMobileNav">立即订位</RouterLink>
    </nav>
  </header>
</template>
