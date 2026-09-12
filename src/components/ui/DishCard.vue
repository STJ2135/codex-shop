<script setup lang="ts">
import { computed } from 'vue'
import type { Dish } from '@/types/content'

const props = defineProps<{
  dish: Dish
  favorite: boolean
}>()

const emit = defineEmits<{
  'toggle-favorite': [dish: Dish]
}>()

const labelClass = computed(() => {
  if (props.dish.labelTone === 'dark') return 'dish-label-dark'
  if (props.dish.labelTone === 'olive') return 'dish-label-green'
  return ''
})
</script>

<template>
  <article class="dish-card" :data-category="dish.category">
    <div class="dish-image">
      <img v-image-fallback :src="dish.image" :alt="dish.alt" loading="lazy" referrerpolicy="no-referrer">
      <span v-if="dish.label" class="dish-label" :class="labelClass">{{ dish.label }}</span>
      <button
        class="heart-button"
        type="button"
        :aria-label="`${favorite ? '取消收藏' : '收藏'}${dish.name}`"
        :aria-pressed="favorite"
        @click="emit('toggle-favorite', dish)"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>
      </button>
    </div>
    <div class="dish-body">
      <div class="dish-title"><h3>{{ dish.name }}</h3><span>{{ dish.price }}</span></div>
      <p>{{ dish.description }}</p>
      <div class="dish-meta">
        <span v-for="attribute in dish.attributes" :key="attribute">{{ attribute }}</span>
        <span>{{ dish.time }}</span>
      </div>
    </div>
  </article>
</template>
