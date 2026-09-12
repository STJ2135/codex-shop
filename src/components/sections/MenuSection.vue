<script setup lang="ts">
import { computed, ref } from 'vue'
import DishCard from '@/components/ui/DishCard.vue'
import { menuCategories, dishes } from '@/data/menu'
import { useToast } from '@/composables/useToast'
import type { Dish, DishFilter } from '@/types/content'

const selectedCategory = ref<DishFilter>('all')
const favoriteIds = ref(new Set<number>())
const { showToast } = useToast()

const visibleCount = computed(() => {
  if (selectedCategory.value === 'all') return dishes.length
  return dishes.filter((dish) => dish.category === selectedCategory.value).length
})

const isVisible = (dish: Dish) => selectedCategory.value === 'all' || dish.category === selectedCategory.value

const toggleFavorite = (dish: Dish) => {
  const next = new Set(favoriteIds.value)
  const selected = next.has(dish.id)
  if (selected) next.delete(dish.id)
  else next.add(dish.id)
  favoriteIds.value = next
  showToast(`${selected ? '已取消收藏' : '已收藏'} ${dish.name}`)
}
</script>

<template>
  <section id="menu" class="menu-section section">
    <div class="container">
      <div v-reveal class="section-heading reveal">
        <div>
          <p class="eyebrow"><span></span> SEASONAL MENU</p>
          <h2>今日菜单，<em>取悦四季。</em></h2>
        </div>
        <p class="heading-note">菜单随节气与市场当日鲜货调整，偶尔售罄，是自然的安排。</p>
      </div>

      <div v-reveal class="menu-toolbar reveal">
        <div class="menu-tabs" role="tablist" aria-label="菜单分类">
          <button
            v-for="category in menuCategories"
            :key="category.id"
            class="menu-tab"
            :class="{ 'is-active': selectedCategory === category.id }"
            type="button"
            role="tab"
            :aria-selected="selectedCategory === category.id"
            @click="selectedCategory = category.id"
          >
            {{ category.label }}
          </button>
        </div>
        <span class="menu-count"><b>{{ visibleCount }}</b> 道本期精选</span>
      </div>

      <div id="dishGrid" class="dish-grid">
        <DishCard
          v-for="(dish, index) in dishes"
          :key="dish.id"
          v-reveal="(index % 3) * 100"
          class="reveal"
          :class="{ 'is-filtered': !isVisible(dish), 'is-visible': isVisible(dish) }"
          :dish="dish"
          :favorite="favoriteIds.has(dish.id)"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </div>
  </section>
</template>
