<template>
  <section class="values" aria-label="餐厅特色">
    <div class="container value-grid">
      <article v-reveal class="value-card reveal">
        <span class="value-number">01</span>
        <div class="value-icon">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <div><h3>当日现做</h3><p>清晨到店，现切现腌，拒绝预制。</p></div>
      </article>
      <article v-reveal="100" class="value-card reveal reveal-delay-1">
        <span class="value-number">02</span>
        <div class="value-icon">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div><h3>时令风物</h3><p>跟随节气换菜单，吃当季最好的味道。</p></div>
      </article>
      <article v-reveal="200" class="value-card reveal reveal-delay-2">
        <span class="value-number">03</span>
        <div class="value-icon">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg>
        </div>
        <div><h3>私享空间</h3><p>适合相聚、庆祝与认真谈事的安静角落。</p></div>
      </article>
    </div>
  </section>
</template>
