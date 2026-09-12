<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import MarqueeStrip from '@/components/sections/MarqueeStrip.vue'
import MenuSection from '@/components/sections/MenuSection.vue'
import ReservationSection from '@/components/sections/ReservationSection.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'
import StorySection from '@/components/sections/StorySection.vue'
import ValuesSection from '@/components/sections/ValuesSection.vue'
import VisitSection from '@/components/sections/VisitSection.vue'
</script>

<template>
  <main id="main">
    <HeroSection />
    <ValuesSection />
    <MenuSection />
    <StorySection />
    <ReservationSection />
    <ReviewsSection />
    <VisitSection />
    <MarqueeStrip />
  </main>
</template>
