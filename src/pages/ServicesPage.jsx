import { useEffect, useState } from 'react';

const services = [
  {
    id: 1,
    icon: 'fas fa-cloud',
    emoji: '⚙️',
    color: '#4f60fa',
    tag: 'Infrastructure',
    title: 'DevOps & Cloud Solutions',
    short: 'Scalable infrastructure with streamlined DevOps practices.',
    desc: 'We empower businesses with efficient cloud infrastructure and streamlined DevOps practices. By automating deployments and optimizing workflows, we help you achieve faster delivery cycles, improved scalability, and consistent system reliability.',
    features: ['CI/CD Pipeline Setup', 'Cloud Migration', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Alerting', '24/7 Support'],
    tech: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    id: 2,
    icon: 'fas fa-paint-brush',
    emoji: '🎨',
    color: '#a855f7',
    tag: 'Design',
    title: 'UI/UX Design',
    short: 'Crafting intuitive, beautiful digital experiences users love.',
    desc: 'We design experiences that users love. By combining creativity with usability principles, we craft intuitive interfaces that reflect your brand and provide smooth, engaging interactions across all digital platforms.',
    features: ['User Research', 'Wireframing & Prototyping', 'Interactive Design', 'Design Systems', 'Usability Testing', 'Responsive Design'],
    tech: ['Figma', 'Adobe XD', 'Framer', 'Sketch', 'InVision', 'Zeplin'],
  },
  {
    id: 3,
    icon: 'fas fa-globe',
    emoji: '🌐',
    color: '#22c55e',
    tag: 'Development',
    title: 'Web Development',
    short: 'High-performance, scalable websites built with modern technologies.',
    desc: 'Our team builds high-performance websites tailored to your goals. Using modern technologies, we create scalable, secure, and responsive web solutions that deliver both functionality and a seamless user experience.',
    features: ['Custom Web Apps', 'E-Commerce Solutions', 'CMS Integration', 'API Development', 'Performance Optimization', 'SEO Ready'],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 4,
    icon: 'fas fa-mobile-alt',
    emoji: '📱',
    color: '#3b82f6',
    tag: 'Mobile',
    title: 'Mobile App Development',
    short: 'Powerful, user-friendly mobile apps for iOS and Android.',
    desc: 'We turn ideas into powerful mobile applications. From concept to deployment, we develop user-friendly, feature-rich apps that align with your business objectives and serve diverse audiences across industries.',
    features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Publishing', 'Push Notifications', 'Offline Capability'],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
  },
  {
    id: 5,
    icon: 'fas fa-palette',
    emoji: '🧩',
    color: '#f97316',
    tag: 'Branding',
    title: 'Branding & Identity',
    short: 'Strategic branding that makes your business unforgettable.',
    desc: 'Your brand is more than just a logo — it\'s your story. We help you define and communicate your identity through strategic branding, including visual design, messaging, and brand guidelines that create a lasting impression and build trust with your audience.',
    features: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines', 'Messaging Framework', 'Brand Audit'],
    tech: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Procreate', 'Canva Pro', 'Brandbook'],
  },
];

const process = [
  { num: '01', title: 'Discovery', desc: 'We dive deep into understanding your business, goals, and target audience.' },
  { num: '02', title: 'Strategy', desc: 'We craft a tailored plan that aligns with your vision and market position.' },
  { num: '03', title: 'Execution', desc: 'Our expert team brings the strategy to life with precision and creativity.' },
  { num: '04', title: 'Delivery', desc: 'We deliver, launch, and provide ongoing support to ensure lasting success.' },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const svc = services[activeService];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="page-wrapper flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
          <p className="text-gray-500">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      {/* ─── Hero ─── */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="deco-blur deco-blur-1" />
          <div className="deco-blur deco-blur-2" />
          <div className="hero-grid-overlay" />
        </div>
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="page-hero-inner">
            <div className="about-statement-tag" style={{ marginBottom: '28px' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">What We Offer</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h1 className="page-hero-title">
              Our Core <span className="gradient-text">Services</span>
            </h1>
            <p className="page-hero-desc">
              Comprehensive digital solutions engineered to transform your business
              and accelerate your growth in the digital era.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Interactive Services Explorer ─── */}
      <section className="services-explorer-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="services-explorer-grid">
            {/* Sidebar tabs */}
            <div className="svc-tabs">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  id={`svc-tab-${s.id}`}
                  className={`svc-tab${activeService === i ? ' active' : ''}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="svc-tab-emoji">{s.emoji}</span>
                  <div className="svc-tab-info">
                    <span className="svc-tab-label">{s.tag}</span>
                    <span className="svc-tab-title">{s.title}</span>
                  </div>
                  <i className="fas fa-chevron-right svc-tab-arrow" />
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="svc-detail-panel">
              <div className="svc-detail-header">
                <div className="svc-detail-icon" style={{ background: `linear-gradient(135deg, ${svc.color}44, ${svc.color}22)`, border: `1px solid ${svc.color}44` }}>
                  <i className={svc.icon} style={{ color: svc.color }} />
                </div>
                <div>
                  <span className="svc-detail-tag" style={{ color: svc.color }}>{svc.emoji} {svc.tag}</span>
                  <h2 className="svc-detail-title">{svc.title}</h2>
                </div>
              </div>

              <p className="svc-detail-desc">{svc.desc}</p>

              <div className="svc-detail-cols">
                <div>
                  <h5 className="svc-detail-sub">What We Deliver</h5>
                  <ul className="svc-features-list">
                    {svc.features.map(f => (
                      <li key={f}>
                        <i className="fas fa-check-circle" style={{ color: svc.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="svc-detail-sub">Technologies</h5>
                  <div className="svc-tech-pills">
                    {svc.tech.map(t => (
                      <span key={t} className="svc-tech-pill" style={{ borderColor: `${svc.color}44`, color: svc.color }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/contact" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]" style={{ marginTop: '32px' }}>
                Start This Service <i className="fas fa-arrow-right" />
              </a>

              <div className="svc-detail-glow" style={{ background: `radial-gradient(ellipse at 100% 0%, ${svc.color}22 0%, transparent 70%)` }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── All Services Cards ─── */}
      <section className="services-cards-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Full Portfolio</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Everything You Need</h2>
            <p>From concept to launch — we cover every facet of your digital journey.</p>
          </div>
          <div className="svc-cards-grid">
            {services.map((s, i) => (
              <div key={s.id} className="svc-card" onClick={() => { setActiveService(i); document.querySelector('.services-explorer-section').scrollIntoView({ behavior: 'smooth' }); }}>
                <div className="svc-card-top">
                  <div className="svc-card-icon" style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}>
                    <span style={{ fontSize: '2.4rem' }}>{s.emoji}</span>
                  </div>
                  <span className="svc-card-num">0{i + 1}</span>
                </div>
                <h4>{s.title}</h4>
                <p>{s.short}</p>
                <div className="svc-card-footer">
                  <span className="svc-card-link" style={{ color: s.color }}>Learn More <i className="fas fa-arrow-right" /></span>
                </div>
                <div className="svc-card-hover-line" style={{ background: s.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="process-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">How We Work</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Our Process</h2>
            <p>A proven, structured approach that ensures every project exceeds expectations.</p>
          </div>
          <div className="process-steps">
            {process.map((step, i) => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < process.length - 1 && <div className="process-connector"><i className="fas fa-arrow-right" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="page-cta-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="page-cta-inner">
            <div className="deco-blur" style={{ width: '500px', height: '300px', background: 'rgba(79,96,250,0.15)', top: '-100px', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)' }} />
            <h2>Ready to start your <span className="gradient-text">next project</span>?</h2>
            <p>Let's discuss your requirements and craft a solution that drives real results.</p>
            <div className="page-cta-actions">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">Get a Free Quote <i className="fas fa-arrow-right" /></a>
              <a href="/projects" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white">View Our Work</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
