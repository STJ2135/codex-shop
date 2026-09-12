<template>
  <section id="visit" class="visit section">
    <div class="container visit-grid">
      <div v-reveal class="visit-card reveal">
        <p class="eyebrow"><span></span> FIND US</p>
        <h2>来吃顿饭，<br>慢慢聊。</h2>
        <div class="visit-details">
          <div><span>地址</span><p>上海市静安区愚园路 318 号<br>梧桐里 1F-08</p></div>
          <div><span>营业时间</span><p>周二至周日<br>11:30–14:30 / 17:30–22:30</p></div>
          <div><span>停车</span><p>愚园路公共停车场，步行约 3 分钟</p></div>
        </div>
        <a class="button button-primary" href="https://maps.google.com/?q=上海市静安区愚园路318号" target="_blank" rel="noreferrer">打开地图导航 <span>↗</span></a>
      </div>

      <div v-reveal="100" class="visit-map reveal reveal-delay-1">
        <img v-image-fallback src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1300&q=82" alt="朋友在餐厅聚餐" loading="lazy" referrerpolicy="no-referrer">
        <div class="map-pin">
          <span class="pin-dot"></span>
          <div><small>拾味 SHIWEI KITCHEN</small><strong>愚园路 318 号</strong></div>
        </div>
      </div>
    </div>
  </section>
</template>
