<script setup lang="ts">
import BookingForm from '@/components/ui/BookingForm.vue'
</script>

<template>
  <section id="reservation" class="reservation section">
    <div v-reveal class="container reservation-shell reveal">
      <div class="reservation-copy">
        <p class="eyebrow eyebrow-light"><span></span> RESERVATION</p>
        <h2>今晚，<br><em>一起吃点好的。</em></h2>
        <p>预订将于确认后保留 15 分钟。6 人以上聚餐或包场需求，请直接致电我们。</p>
        <div class="reservation-contact">
          <a href="tel:02168886688"><span>电话</span>021 6888 6688</a>
          <a href="mailto:hello@shiwei.cn"><span>邮箱</span>hello@shiwei.cn</a>
        </div>
        <div class="reservation-art" aria-hidden="true">味</div>
      </div>
      <BookingForm />
    </div>
  </section>
</template>
