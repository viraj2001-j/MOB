import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Helper: split text into spans for character animation
function splitTextIntoChars(el) {
  if (!el || el.dataset.split) return;
  el.dataset.split = '1';
  const text = el.textContent;
  el.textContent = '';
  el.style.overflow = 'hidden';
  const words = text.split(' ');
  words.forEach((word, wi) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'split-word';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.overflow = 'hidden';
    [...word].forEach((char) => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.style.display = 'inline-block';
      span.textContent = char;
      wordSpan.appendChild(span);
    });
    el.appendChild(wordSpan);
    if (wi < words.length - 1) {
      const space = document.createTextNode(' ');
      el.appendChild(space);
    }
  });
}

// Helper: split text into lines (words wrapped as spans)
function splitIntoWords(el) {
  if (!el || el.dataset.splitWords) return;
  el.dataset.splitWords = '1';
  const words = el.innerText.split(/\s+/);
  el.innerHTML = words
    .map(w => `<span class="word-span" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="word-inner" style="display:inline-block;">${w}</span></span>`)
    .join(' ');
  return el;
}

export default function GlobalAnimator() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // Kill all triggers EXCEPT the about-char scrub (owned by AboutStatement.jsx)
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger?.classList?.contains('about-statement-heading')) return;
        t.kill();
      });
      ScrollTrigger.clearScrollMemory();

      // ─── 1. Hero heading animation (handled by Banner.jsx) ───

      // ─── 2. Section headings – slide up per word ───
      document.querySelectorAll('h2:not(.about-statement-heading):not([data-animated])').forEach((el) => {
        el.dataset.animated = '1';
        splitIntoWords(el);
        gsap.fromTo(
          el.querySelectorAll('.word-inner'),
          { y: '110%' },
          {
            y: '0%', duration: 0.8, stagger: 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el, start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // ─── 3. Tags / badges fade in ───
      document.querySelectorAll('.section-tag, .about-statement-tag, [data-anim-tag]').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20, scale: 0.92 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7, ease: 'back.out(1.8)',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 4. Paragraph fade/slide ───
      document.querySelectorAll('p:not([data-animated])').forEach((el) => {
        el.dataset.animated = '1';
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 5. Cards stagger from bottom ───
      document.querySelectorAll('.built-grid, .stats-grid, .svc-cards-grid, .pricing-grid, .projects-masonry-grid, .culture-grid, .roles-list, .team-grid, .contact-methods-grid').forEach((grid) => {
        const children = gsap.utils.toArray(grid.children);
        if (!children.length) return;
        gsap.fromTo(children,
          { y: 60, opacity: 0, scale: 0.94 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.8, stagger: 0.12,
            ease: 'back.out(1.3)',
            scrollTrigger: { trigger: grid, start: 'top 82%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 6. Feature cards animate from sides ───
      document.querySelectorAll('.feature-card').forEach((el, i) => {
        gsap.fromTo(el,
          { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 7. Split two-column sections ───
      document.querySelectorAll('.about-inner, .benefits-inner, .howto-inner, .contact-main-grid, .services-explorer-grid').forEach((split) => {
        const children = gsap.utils.toArray(split.children);
        if (!children.length) return;
        gsap.fromTo(children,
          { x: (i) => i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 1.1, stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: split, start: 'top 78%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 8. Project cards alternating slide ───
      document.querySelectorAll('.project-card').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0, duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 9. Partner logos stagger ───
      const partnerItems = document.querySelectorAll('.partner-item');
      if (partnerItems.length) {
        gsap.fromTo(partnerItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: partnerItems[0], start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      }

      // ─── 10. Floating badges ───
      document.querySelectorAll('.float-badge, .about-image-wrap .card-float').forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.7,
            delay: 0.3 + i * 0.15,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 11. Benefit items stagger ───
      document.querySelectorAll('.benefit-item').forEach((el, i) => {
        gsap.fromTo(el,
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.7, delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 12. CTA section dramatic entrance ───
      const ctaInner = document.querySelector('.cta-inner');
      if (ctaInner) {
        gsap.fromTo(ctaInner,
          { scale: 0.9, opacity: 0, y: 40 },
          {
            scale: 1, opacity: 1, y: 0,
            duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: ctaInner, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }

      // ─── 13. Stats counter animation ───
      document.querySelectorAll('.stat-item .num, .banner-stat-item .num, .cta-stat-item .num').forEach((el) => {
        const text = el.textContent;
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.replace(/[0-9.]/g, '');
        if (!isNaN(num)) {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            onEnter: () => {
              gsap.fromTo({ val: 0 }, { val: num, duration: 2, ease: 'power2.out', onUpdate: function() {
                el.textContent = (Number.isInteger(num)
                  ? Math.round(this.targets()[0].val).toLocaleString()
                  : this.targets()[0].val.toFixed(1)) + suffix;
              }});
            },
            once: true,
          });
        }
      });

      // ─── 14. Parallax on banner decorative blobs ───
      ScrollTrigger.create({
        trigger: '.banner-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          gsap.set('.deco-blur-1', { y: self.progress * 80 });
          gsap.set('.deco-blur-2', { y: self.progress * -60 });
        },
      });

      // ─── 15. Feature tag pills stagger ───
      document.querySelectorAll('.feature-tag-pill').forEach((el, i) => {
        gsap.fromTo(el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.5, delay: i * 0.08,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: '.feature-tags-wrap', start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 16. Footer enter ───
      const footer = document.querySelector('.tf-footer');
      if (footer) {
        gsap.fromTo(footer.querySelectorAll('.footer-col, .footer-brand'),
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: { trigger: footer, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      }

      // ─── 17. About statement heading — handled by AboutStatement.jsx (per-char scrub) ───

      // ─── 18. Howto steps ───
      document.querySelectorAll('.howto-step').forEach((el, i) => {
        gsap.fromTo(el,
          { x: -60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, delay: i * 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      // ─── 19. Line wipe on horizontal dividers ───
      document.querySelectorAll('.tag-line').forEach(el => {
        gsap.fromTo(el,
          { scaleX: 0 },
          {
            scaleX: 1, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return null;
}
