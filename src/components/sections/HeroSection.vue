<template>
  <section id="home" class="hero">
    <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
    <div class="hero-orb hero-orb-two" aria-hidden="true"></div>
    <div class="container hero-grid">
      <div v-reveal class="hero-copy reveal">
        <p class="eyebrow"><span></span> 上海 · 静安 · 一间认真做饭的小馆</p>
        <h1>人间有味，<br><em>慢慢吃。</em></h1>
        <p class="hero-intro">我们走访山川湖海，把四季放进盘中。不追赶花哨潮流，只专注食材本味与恰到好处的一道火候。</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" to="/#reservation">
            预订今晚的桌子
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </RouterLink>
          <RouterLink class="text-link" to="/#menu">先看看菜单 <span aria-hidden="true">↗</span></RouterLink>
        </div>
        <div class="hero-proof">
          <div class="avatar-stack" aria-hidden="true">
            <span>周</span><span>林</span><span>陈</span><span>+</span>
          </div>
          <div>
            <div class="stars" aria-label="4.9 分">★★★★★ <strong>4.9</strong></div>
            <p>来自 2,300+ 位食客的真实评价</p>
          </div>
        </div>
      </div>

      <div v-reveal="100" class="hero-visual reveal reveal-delay-1">
        <div class="hero-frame">
          <img v-image-fallback src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=88" alt="拾味餐厅温暖而安静的用餐空间" fetchpriority="high" referrerpolicy="no-referrer">
          <div class="image-shade"></div>
          <div class="hero-badge">
            <span class="badge-icon">拾</span>
            <div><small>本周主厨推荐</small><strong>炭火脆皮鸡</strong></div>
          </div>
          <div class="open-pill"><span></span> 今日营业至 22:30</div>
        </div>
        <div class="hero-note">
          <span>SEASONAL</span>
          <strong>不时不食</strong>
          <p>秋日菜单已上新</p>
        </div>
      </div>
    </div>

    <div class="hero-foot container">
      <div class="scroll-cue"><span></span> 向下探索</div>
      <p>每一道菜，都从认识它的产地开始。</p>
    </div>
  </section>
</template>
