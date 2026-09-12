<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <RouterLink class="brand brand-light" to="/">
          <span class="brand-mark">拾</span>
          <span class="brand-copy"><strong>拾味</strong><small>SHIWEI KITCHEN</small></span>
        </RouterLink>
        <p>把四季端上桌，把生活吃得好一点。</p>
      </div>
      <div class="footer-links">
        <div>
          <span>探索</span>
          <RouterLink to="/#menu">时令菜单</RouterLink>
          <RouterLink to="/#story">关于拾味</RouterLink>
          <RouterLink to="/#reviews">食客说</RouterLink>
        </div>
        <div>
          <span>到店</span>
          <RouterLink to="/#reservation">预订座位</RouterLink>
          <RouterLink to="/#visit">交通与停车</RouterLink>
          <RouterLink to="/#visit">团体聚餐</RouterLink>
        </div>
        <div>
          <span>关注</span>
          <a href="#">微信公众号</a>
          <a href="#">小红书</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© {{ new Date().getFullYear() }} 拾味餐饮 · 保留所有权利</p>
      <p>沪 ICP 备 2026XXXXXX 号</p>
    </div>
  </footer>
</template>
