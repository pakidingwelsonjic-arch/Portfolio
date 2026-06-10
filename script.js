/* =====================================================
   PORTFOLIO – script.js
   Features:
     1. Typing animation in the hero section
     2. Smooth scroll-triggered fade-in animations
     3. Sticky nav shrink on scroll
     4. Mobile hamburger menu toggle
     5. Auto-update copyright year
   ===================================================== */

/* ── 1. Typing animation ─────────────────────────── */
(function initTyping() {
  const phrases = ['IT Student', 'Web Developer', 'IoT Enthusiast', 'Problem Solver'];
  const target  = document.getElementById('typed-text');
  if (!target) return;

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    // Timing: type fast, pause at full word, delete fast
    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      // Pause before deleting
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  // Small initial delay so page is painted first
  setTimeout(tick, 600);
})();


/* ── 2. Scroll fade-in (IntersectionObserver) ───── */
(function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve once visible – no need to re-trigger
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
})();


/* ── 3. Navbar: shrink on scroll ─────────────────── */
(function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
    }
  }, { passive: true });
})();


/* ── 4. Hamburger menu toggle ────────────────────── */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.textContent = isOpen ? '✕' : '☰';
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.textContent = '☰';
      btn.setAttribute('aria-expanded', false);
    });
  });
})();


/* ── 5. Auto copyright year ──────────────────────── */
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
