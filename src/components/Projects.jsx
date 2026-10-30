import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeId, setActiveId] = useState(null);
  const rowRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Wego Travels',
      subtitle: 'Travel Booking Platform',
      desc: 'A travel booking platform that offers personalized recommendations and seamless booking experiences. Integrates real-time data to provide users with the best deals and travel options worldwide.',
      image: '/images/projects/wego-travels.png',
      tags: ['AI Engine', 'Next.js', 'Dashboard'],
      year: '2024',
      category: 'Web Application',
    },
    {
      id: 2,
      title: 'Digital Point',
      subtitle: 'Digital Marketing Platform',
      desc: 'A comprehensive digital marketing platform that leverages AI to optimize campaigns, analyze customer behavior, and automate content creation for maximum ROI.',
      image: '/images/projects/digital-point.png',
      tags: ['SaaS', 'OpenAI', 'React'],
      year: '2024',
      category: 'SaaS Product',
    },
    {
      id: 3,
      title: 'Optivex',
      subtitle: 'E-Commerce Platform',
      desc: 'An e-commerce platform that utilizes AI to enhance user experience, personalize product recommendations, and streamline inventory management for growing online businesses.',
      image: '/images/projects/optivex.png',
      tags: ['Analytics', 'Cloud', 'Data Viz'],
      year: '2023',
      category: 'E-Commerce',
    },
  ];

  useEffect(() => {
    // Small delay so the DOM is settled
    const timer = setTimeout(() => {
      const triggers = [];

      projects.forEach((proj, idx) => {
        const el = rowRefs.current[idx];
        if (!el) return;

        const st = ScrollTrigger.create({
          trigger: el,
          start: 'top 32%',
          end: 'bottom 5%',
          onEnter: () => setActiveId(proj.id),
          // When scrolling back up into a row from below, re-activate it
          onEnterBack: () => setActiveId(proj.id),
          // Scrolling back up past the TOP of this row
          onLeaveBack: () => {
            if (idx === 0) {
              setActiveId(null);
            } else {
              setActiveId(projects[idx - 1].id);
            }
          },
        });

        triggers.push(st);
      });

      ScrollTrigger.refresh();

      return () => triggers.forEach(t => t.kill());
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="projects-showcase">
      {/* Ambient background glow */}
      <div className="proj-bg-glow" />

      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Header */}
        <div className="proj-header">
          <div className="about-statement-tag">
            <span className="tag-line left" />
            <span className="tag-dot left" />
            <span className="tag-text">Our Projects</span>
            <span className="tag-dot right" />
            <span className="tag-line right" />
          </div>
          <div className="proj-header-content">
            <h2 className="proj-main-title">
              Featured Projects<br />
              {/* <span className="proj-title-outline">Projects</span> */}
            </h2>
            <p className="proj-header-desc">
              Discover how we transform ideas into powerful<br />
              digital experiences that drive real results.
            </p>
          </div>
        </div>

        {/* Project List */}
        <div className="proj-list">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              ref={el => (rowRefs.current[idx] = el)}
              className={[
                'proj-row',
                activeId === proj.id ? 'is-scroll-active' : '',
                activeId && activeId !== proj.id ? 'is-dimmed' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {/* Row inner */}
              <div className="proj-row-inner">
                {/* Index number */}
                <span className="proj-index">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Category pill */}
                <span className="proj-category">{proj.category}</span>

                {/* Title block */}
                <div className="proj-title-block">
                  <h3 className="proj-name">{proj.title}</h3>
                  <span className="proj-sub">{proj.subtitle}</span>
                </div>

                {/* Tags */}
                <div className="proj-tags-inline">
                  {proj.tags.map(t => (
                    <span key={t} className="proj-tag-chip">{t}</span>
                  ))}
                </div>

                {/* Year */}
                <span className="proj-year">{proj.year}</span>

                {/* CTA arrow */}
                <a href="#projects" className="proj-arrow-btn" aria-label={`View ${proj.title}`}>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>

              {/* Scroll-reveal panel */}
              <div className="proj-hover-panel">
                <div className="proj-hover-image">
                  <img src={proj.image} alt={proj.title} />
                  <div className="proj-hover-overlay">
                    <div className="proj-hover-info">
                      <p className="proj-hover-desc">{proj.desc}</p>
                      <a href="/projects" className="proj-hover-cta">
                        Read Case Study <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="proj-footer-cta">
          <div className="proj-footer-line" />
          <a href="/projects" className="proj-view-all">
            <span>View All Projects</span>
            <span className="proj-view-all-icon"><i className="fas fa-arrow-right" /></span>
          </a>
          <div className="proj-footer-line" />
        </div>
      </div>
    </section>
  );
}
