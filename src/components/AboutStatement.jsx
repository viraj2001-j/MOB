import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const featureTags = [
  { label: "Cloud Solutions", color: "#f97316", icon: "✦" },
  { label: "UI/UX Design", color: "#a855f7", icon: "✦" },
  { label: "Web Development", color: "#22c55e", icon: "✦" },
  { label: "Mobile App Development", color: "#3b82f6", icon: "✦" },
  { label: "Branding & Identity", color: "#f97316", icon: "✦" },
];

export default function AboutStatement() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Immediately dim all chars so they never flash as fully visible on load.
    gsap.set('.about-char', { opacity: 0.2, color: '#94a3b8' });

    // GlobalAnimator.jsx kills ALL ScrollTriggers at ~200ms after route change.
    // We delay by 300ms so our trigger is created AFTER that kill-all.
    const setupTimer = setTimeout(() => {
      gsap.set('.about-char', { opacity: 0.2, color: '#94a3b8' });

      gsap.fromTo('.about-char',
        { opacity: 0.2, color: '#94a3b8' },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 95%',
            end: 'bottom 70%',
            scrub: true,
            invalidateOnRefresh: true,
          },
          opacity: 1,
          color: '#0f172a',
          stagger: 0.1,
        }
      );

      // If the page already finished loading, refresh immediately.
      // If not, wait for the load event (catches hard reload cases).
      if (document.readyState === 'complete') {
        ScrollTrigger.refresh(true);
      } else {
        const onLoad = () => ScrollTrigger.refresh(true);
        window.addEventListener('load', onLoad, { once: true });
      }

      // Extra refresh after Spline iframe likely finishes loading.
      setTimeout(() => ScrollTrigger.refresh(true), 1500);
    }, 300);

    return () => {
      clearTimeout(setupTimer);
    };
  }, { scope: containerRef });

  const headingText = "We're a forward-thinking digital solutions company dedicated to helping businesses grow, evolve, and stand out in a competitive world. We combine creativity, technology, and strategy to build impactful digital experiences that deliver real results.";

  return (
    <section className="about-statement-section" ref={containerRef}>
      {/* Grid background */}
      <div className="about-statement-grid" aria-hidden="true">
        <div className="grid-lines-h" />
        <div className="grid-lines-v" />
        {/* Radial fade overlay */}
        <div className="grid-fade-top" />
        <div className="grid-fade-bottom" />
        <div className="grid-fade-left" />
        <div className="grid-fade-right" />
      </div>

      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="about-statement-inner">
          {/* Section Tag */}
          <div className="about-statement-tag -mb-10">
            <span className="tag-line left" />
            <span className="tag-dot left" />
            <span className="tag-text">About Ministry of Brands</span>
            <span className="tag-dot right" />
            <span className="tag-line right" />
          </div>

          {/* Spline Animation */}
          {/* <div className="w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[550px] relative mx-auto my-8 md:-mb-10 lg:-mb-80 rounded-2xl overflow-hidden flex justify-center items-center pointer-events-none sm:pointer-events-auto">
            <div className="absolute top-0 left-0 w-full" style={{ height: 'calc(100% + 64px)' }}>
              <iframe
                src="https://my.spline.design/untitled-q2wgMUHe8ji9ZdFOECSXWxRM/"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{  marginTop: '-10%', transform: 'scale(0.888)', transformOrigin: 'center', clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 80px), calc(100% - 2000px) calc(100% - 80px), calc(100% - 2000px) 100%, 0% 100%)' }}
                className="about-spline-iframe"
                title="Ministry of Brands - Spline Animation"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              />
            </div>
          </div> */}

          {/* Big headline with fading end */}
          <h2 className="about-statement-heading" ref={textRef}>
            {headingText.split(/(\s+)/).map((part, i) => {
              if (part.match(/\s+/)) {
                return <span key={i}>{part}</span>;
              }
              return (
                <span key={i} className="inline-block whitespace-nowrap">
                  {part.split('').map((char, j) => (
                    <span 
                      key={j} 
                      className="about-char relative inline-block" 
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </h2>

          {/* CTA Button */}
          <a href="/about" className="about-statement-btn">
            More About Us <span className="btn-arrow">↗</span>
          </a>

          {/* Feature Tags */}
          <div className="feature-tags-wrap">
            <div className="feature-tags-row">
              {featureTags.slice(0, 4).map((tag) => (
                <div key={tag.label} className="feature-tag-pill">
                  <span
                    className="feature-tag-icon"
                    style={{ color: tag.color }}
                  >
                    {tag.icon}
                  </span>
                  {tag.label}
                </div>
              ))}
            </div>
            <div className="feature-tags-row centered">
              {featureTags.slice(4).map((tag) => (
                <div key={tag.label} className="feature-tag-pill">
                  <span
                    className="feature-tag-icon"
                    style={{ color: tag.color }}
                  >
                    {tag.icon}
                  </span>
                  {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* You will access */}
          {/* <div className="you-will-access" aria-hidden="true">
            <div className="access-line left" />
            <div className="access-dot" />
            <div className="access-label">
              <img src="/images/item/mouse-point.svg" alt="" width="18" />
              <span>You will access</span>
            </div>
            <div className="access-line right" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
