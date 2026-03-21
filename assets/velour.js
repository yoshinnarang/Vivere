/* =========================================
   VIVERE — LUXURY NIGHTWEAR FOR WOMEN
   Premium JavaScript v3.0
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ═══════════════════════════════════════
     HERO SWIPER CAROUSEL
     ═══════════════════════════════════════ */
  if (typeof Swiper !== 'undefined' && document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      speed: 900,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      pagination: {
        el: '.hero-carousel .swiper-pagination',
        clickable: true,
      },
    });
  }

  /* ═══════════════════════════════════════
     HEADER — SCROLL SHADOW
     ═══════════════════════════════════════ */
  const header = document.getElementById('site-header');
  if (header) {
    function updateHeader() {
      if (window.pageYOffset > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ═══════════════════════════════════════
     MOBILE MENU
     ═══════════════════════════════════════ */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      this.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ═══════════════════════════════════════
     SCROLL REVEAL
     ═══════════════════════════════════════ */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ═══════════════════════════════════════
     PRODUCT GALLERY THUMBS (Product Page)
     ═══════════════════════════════════════ */
  var thumbs = document.querySelectorAll('.thumb');
  var mainImg = document.querySelector('.gallery-main img');
  if (thumbs.length && mainImg) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        var thumbSrc = this.querySelector('img').src;

        // Convert thumbnail URL to full-resolution URL
        var newSrc = thumbSrc.replace(/\/300x300/, '/1200x1200');
        mainImg.style.opacity = '0';

        // Preload the new image before fading in
        var tempImg = new Image();
        tempImg.onload = function () {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        };
        tempImg.src = newSrc;
      });
    });
  }

  /* ═══════════════════════════════════════
     SIZE SELECTOR
     ═══════════════════════════════════════ */
  document.querySelectorAll('.size-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.size-btn').forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      // Update the hidden variant ID input with the selected size's variant ID
      var variantId = this.getAttribute('data-variant-id');
      var input = document.getElementById('variant-id-input');
      if (input && variantId) {
        input.value = variantId;
      }
    });
  });

  /* ═══════════════════════════════════════
     COLOR SELECTOR
     ═══════════════════════════════════════ */
  document.querySelectorAll('.color-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      document.querySelectorAll('.color-opt').forEach(function (o) { o.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  /* ═══════════════════════════════════════
     DETAIL ACCORDION (Product Page)
     ═══════════════════════════════════════ */
  document.querySelectorAll('.detail-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var body = this.nextElementSibling;
      var isOpen = body.classList.contains('open');
      document.querySelectorAll('.detail-body').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.detail-toggle .arr').forEach(function (a) { a.textContent = '+'; });
      if (!isOpen) {
        body.classList.add('open');
        this.querySelector('.arr').textContent = '\u2212';
      }
    });
  });

  /* ═══════════════════════════════════════
     QUICK ADD TO CART FEEDBACK
     ═══════════════════════════════════════ */
  document.querySelectorAll('.prod-btn:not(.wish)').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = this;
      var orig = el.textContent;
      el.textContent = 'Added \u2713';
      el.style.background = 'var(--rose)';
      setTimeout(function () {
        el.textContent = orig;
        el.style.background = '';
      }, 1800);
    });
  });

  /* ═══════════════════════════════════════
     ANNOUNCEMENT BAR ROTATION
     ═══════════════════════════════════════ */
  var annMsgs = [
    'Complimentary shipping on orders above \u20B91,499',
    'New Season: The Moonlit Collection \u2014 Shop Now',
    '4.9\u2605 rated by 3,200+ women across India'
  ];
  var annEl = document.querySelector('.ann');
  if (annEl) {
    var msgIndex = 0;
    setInterval(function () {
      msgIndex = (msgIndex + 1) % annMsgs.length;
      annEl.style.opacity = '0';
      setTimeout(function () {
        var textNodes = [];
        annEl.childNodes.forEach(function (n) {
          if (n.nodeType === 3) textNodes.push(n);
        });
        if (textNodes[0]) textNodes[0].textContent = ' ' + annMsgs[msgIndex] + ' ';
        annEl.style.opacity = '1';
      }, 300);
    }, 4500);
  }

  /* ═══════════════════════════════════════
     COUNTER ANIMATION (Editorial Stats)
     ═══════════════════════════════════════ */
  var statNums = document.querySelectorAll('.ed-stat-num[data-count]');
  if (statNums.length) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'));
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 2000;
          var start = performance.now();

          function tick(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased).toLocaleString('en-IN') + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    statNums.forEach(function (el) { countObserver.observe(el); });
  }

});
