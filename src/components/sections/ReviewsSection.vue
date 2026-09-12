<script setup lang="ts">
import { reviews } from '@/data/reviews'
</script>

<template>
  <section id="reviews" class="reviews section">
    <div class="container">
      <div v-reveal class="section-heading review-heading reveal">
        <div>
          <p class="eyebrow"><span></span> GUEST NOTES</p>
          <h2>他们坐下来，<em>聊了聊拾味。</em></h2>
        </div>
        <div class="review-score"><strong>4.9</strong><span>★★★★★<small>综合评分</small></span></div>
      </div>

      <div class="review-grid">
        <article
          v-for="(review, index) in reviews"
          :key="review.id"
          v-reveal="index * 100"
          class="review-card reveal"
          :class="[
            review.featured && 'review-card-featured',
            index === 1 && 'reveal-delay-1',
            index === 2 && 'reveal-delay-2',
          ]"
        >
          <span class="quote-mark">“</span>
          <p>{{ review.content }}</p>
          <div class="reviewer">
            <span class="reviewer-avatar">{{ review.initial }}</span>
            <div><strong>{{ review.name }}</strong><small>{{ review.source }}</small></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
