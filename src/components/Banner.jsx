import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export default function Banner() {
  const bannerRef = useRef();

  useGSAP(() => {
    // Ensure content is visible initially (fallback)
    gsap.set('.banner-content h1, .banner-content p, .banner-stats, .banner-tag', {
      opacity: 1, y: 0,
    });

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from('.banner-tag', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.banner-content h1', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .from('.banner-content p',  { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .from('.banner-stats',       { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .from('.banner-cta-group',   { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');

    // Mouse parallax on decorative blobs only
    const onMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 30;
      const yPos = (e.clientY / innerHeight - 0.5) * 30;
      gsap.to('.deco-blur-1', { x: -xPos * 2, y: -yPos * 2, duration: 2, ease: 'power2.out' });
      gsap.to('.deco-blur-2', { x:  xPos * 3, y:  yPos * 3, duration: 2, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, { scope: bannerRef });

  return (
    <section id="home" className="banner-section" ref={bannerRef}>
      <div className="deco-blur deco-blur-1" aria-hidden="true" />
      <div className="deco-blur deco-blur-2" aria-hidden="true" />

      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="banner-inner lg:flex-row">
          {/* Left Content */}
          <div className="banner-content lg:w-1/2">
            <div className="banner-tag">
              <span className="banner-tag-dot" />
              Smart Technology Platform
            </div>

            <h1>Transform Your Business with Smart Technology Solutions</h1>

            <p>MOB is a leading provider of innovative technology solutions designed to help businesses of all sizes streamline operations, enhance productivity, and achieve sustainable growth.</p>

            <div className="banner-cta-group">
              <Link to="/contact" className="tf-btn style-1">
                Start a Project <i className="fas fa-arrow-right" />
              </Link>
              <Link to="/about" className="tf-btn style-2">
                Learn More
              </Link>
            </div>

            <div className="banner-stats">
              <div className="banner-stat-item">
                <div className="num">4.9/5</div>
                <div className="label">Based on 24 reviews</div>
              </div>
              <div className="banner-stat-divider" />
              <div className="banner-stat-item">
                <div className="num">500+</div>
                <div className="label">Trusted Brands</div>
              </div>
              <div className="banner-stat-divider" />
              <div className="banner-stat-item">
                <div className="num">98%</div>
                <div className="label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right – Spline Logo */}
          <div className="w-full lg:w-[70%] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[500px] relative mx-auto my-8 md:-mb-16 lg:-mb-64 rounded-2xl overflow-hidden flex justify-center items-center pointer-events-none sm:pointer-events-auto p-6 sm:p-8 lg:ml-8">
            <div className="absolute top-0" style={{ height: 'calc(100% + 64px)', width: '140%', left: '-20%' }}>
              <iframe
                src="https://my.spline.design/untitled-q2wgMUHe8ji9ZdFOECSXWxRM/"
                frameBorder="0"
                width="100%"
                height="100%"
                style={{  marginTop: '-6%', transform: 'scale(0.72)', transformOrigin: 'center', clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 80px), calc(100% - 2000px) calc(100% - 80px), calc(100% - 2000px) 100%, 0% 100%)' }}
                className="about-spline-iframe"
                title="Ministry of Brands - Spline Animation"
                sandbox="allow-same-origin allow-scripts allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              />  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}