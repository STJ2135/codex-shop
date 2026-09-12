<template>
  <section id="story" class="story section">
    <div class="container story-grid">
      <div v-reveal class="story-visual reveal">
        <div class="story-main-image">
          <img v-image-fallback src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=84" alt="拾味厨房中主厨正在准备餐点" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="story-small-image">
          <img v-image-fallback src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=82" alt="主厨在开放式厨房工作" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="years-badge"><strong>08</strong><span>年<br>认真做饭</span></div>
      </div>

      <div v-reveal="100" class="story-copy reveal reveal-delay-1">
        <p class="eyebrow"><span></span> OUR STORY</p>
        <h2>一餐一饭，<br><em>皆有来处。</em></h2>
        <p class="story-lead">拾味创立于 2018 年。我们想做的，是一间有中式底子、也有当代气息的 neighborhood bistro。</p>
        <p>我们的菜单不长。主厨团队每个月走访产地，从云南的菌子到崇明的时蔬，从海边小渔港到城市清晨的市场，用恰到好处的技法，让食材自己说话。</p>
        <div class="signature">
          <span class="signature-mark">拾</span>
          <div><strong>主厨 · 陈拾</strong><small>“少一点修饰，多一点真心。”</small></div>
        </div>
        <RouterLink class="text-link text-link-dark" to="/#visit">认识拾味的一切 <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>

    <div v-reveal class="container stats-row reveal">
      <div class="stat"><strong>58<span>+</span></strong><p>时令菜品持续创作</p></div>
      <div class="stat"><strong>26<span>家</span></strong><p>生态农场与渔场合作</p></div>
      <div class="stat"><strong>92<span>%</span></strong><p>食客愿意再次到访</p></div>
      <div class="stat"><strong>0<span>种</span></strong><p>预制菜与人工香精</p></div>
    </div>
  </section>
</template>
