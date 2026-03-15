/* =========================================
   VELOUR — LUXURY NIGHTWEAR
   Main JavaScript v1.0
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ── PRODUCT GALLERY THUMBS ── */
  const thumbs = document.querySelectorAll('.thumb');
  const mainImg = document.querySelector('.gallery-main img');
  if (thumbs.length && mainImg) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function () {
        thumbs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        mainImg.src = this.querySelector('img').src;
      });
    });
  }

  /* ── SIZE SELECTOR ── */
  const sizeBtns = document.querySelectorAll('.size-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      sizeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── COLOR SELECTOR ── */
  const colorOpts = document.querySelectorAll('.color-opt');
  colorOpts.forEach(opt => {
    opt.addEventListener('click', function () {
      colorOpts.forEach(o => o.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── DETAIL ACCORDION ── */
  const detailToggles = document.querySelectorAll('.detail-toggle');
  detailToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.detail-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.detail-toggle span.arr').forEach(a => a.textContent = '+');
      if (!isOpen) {
        body.classList.add('open');
        this.querySelector('.arr').textContent = '−';
      }
    });
  });

  /* ── CART ADD FEEDBACK ── */
  document.querySelectorAll('.prod-btn:not(.wish)').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const orig = this.textContent;
      this.textContent = 'Added ✓';
      this.style.background = 'var(--rose)';
      setTimeout(() => {
        this.textContent = orig;
        this.style.background = '';
      }, 1800);
    });
  });

  /* ── ANNOUNCEMENT BAR CAROUSEL ── */
  const annMsgs = [
    'Free shipping above ₹999 · Use code VELOUR10 for 10% off',
    'New drop: The Ivory Edit — Shop Now',
    'Easy 15-day returns · COD available pan-India',
    '4.9★ rated by 2,400+ customers'
  ];
  const annEl = document.querySelector('.ann');
  if (annEl) {
    let i = 0;
    setInterval(() => {
      i = (i + 1) % annMsgs.length;
      annEl.style.opacity = '0';
      setTimeout(() => {
        const seps = annEl.querySelectorAll('.ann-sep');
        const textNodes = [...annEl.childNodes].filter(n => n.nodeType === 3);
        if (textNodes[0]) textNodes[0].textContent = ' ' + annMsgs[i] + ' ';
        annEl.style.opacity = '1';
      }, 300);
    }, 4000);
  }

});
