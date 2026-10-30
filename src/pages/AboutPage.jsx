import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation First',
    desc: 'We push the boundaries of what is possible, constantly exploring new technologies and creative approaches to solve complex challenges.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Partnership Mindset',
    desc: 'We build long-term relationships, not just projects. Your success is our success — we grow together.',
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Precision & Quality',
    desc: 'Every pixel, every line of code, every strategy is crafted with purpose, attention to detail, and a commitment to excellence.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Vision',
    desc: 'We think globally, building solutions that scale across markets, cultures, and industries.',
  },
];

const founders = [
  { name: 'Danushka Senesh', role: 'Co-Founder & CEO', initials: 'DS', color: '#4f60fa', image: null },
];

const management = [
  { name: 'Panchala Rathnayake', role: 'Marketing Director', initials: 'PR', color: '#f97316', image: null },
  { name: 'Yugantha Polhengoda', role: 'Junior Software Engineer', initials: 'YP', color: '#a855f7', image: null },
  { name: 'Nimaya Hansani', role: 'Associate Software Engineer & UI/UX Designer', initials: 'NH', color: '#22c55e', image: null },
  { name: 'Shehan Samuditha', role: 'Associate Software Engineer', initials: 'SS', color: '#f97316', image: null },
  { name: 'Sajitha Anupama', role: 'Digital Marketing Executive', initials: 'SA', color: '#3b82f6', image: null },
];

const stats = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '30+', label: 'Happy Clients' },
  { num: '1+', label: 'Years Experience' },
  { num: '10+', label: 'Team Members' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate content loading or set to false immediately
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
      <section className="page-hero" ref={heroRef}>
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
              <span className="tag-text">Who We Are</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h1 className="page-hero-title">
              Ministry of <span className="gradient-text">Brands</span> Solutions
            </h1>
            <p className="page-hero-desc">
              A forward-thinking digital solutions company dedicated to helping businesses grow,
              evolve, and stand out in a competitive world.
            </p>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="about-who-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="about-who-inner">
            <div className="about-who-content">
              <div className="about-statement-tag" style={{ marginBottom: '24px', justifyContent: 'flex-start' }}>
                <span className="tag-line left" />
                <span className="tag-dot left" />
                <span className="tag-text">Our Story</span>
                <span className="tag-dot right" />
                <span className="tag-line right" />
              </div>
              <h2>Building the future of<br /><span className="gradient-text">digital excellence</span></h2>
              <p>
                At MOB Solutions (Ministry of Brands Solutions), we are a forward-thinking digital
                solutions company dedicated to helping businesses grow, evolve, and stand out in a
                competitive world. We combine creativity, technology, and strategy to build impactful
                digital experiences that deliver real results.
              </p>
              <p style={{ marginTop: '20px' }}>
                Our team is made up of passionate designers, developers, and problem-solvers who
                believe in turning ideas into meaningful solutions. Whether it's crafting a unique
                brand identity, developing scalable platforms, or designing seamless user experiences,
                we approach every project with innovation and precision.
              </p>
              <p style={{ marginTop: '20px' }}>
                We don't just deliver services — we build long-term partnerships. By understanding
                your vision and business goals, we create solutions that not only meet your needs today
                but also support your growth for the future.
              </p>
              <div className="about-who-tags">
                {['Creative', 'Innovative', 'Strategic', 'Results-Driven'].map(t => (
                  <span key={t} className="tag-item">
                    <span className="dot" />{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-who-visual">
              <div className="visual-card-grid">
                <div className="visual-card v-card-1">
                  <div className="v-card-icon"><i className="fas fa-rocket" /></div>
                  <div className="v-card-text">
                    <strong>100+ Projects</strong>
                    <span>Successfully delivered</span>
                  </div>
                </div>
                <div className="visual-card v-card-2">
                  <div className="v-card-icon" style={{ background: 'linear-gradient(135deg,#a855f7,#ec4899)' }}>
                    <i className="fas fa-users" />
                  </div>
                  <div className="v-card-text">
                    <strong>30+ Clients</strong>
                    <span>Worldwide partnerships</span>
                  </div>
                </div>
                <div className="visual-card v-card-3">
                  <div className="v-card-icon" style={{ background: 'linear-gradient(135deg,#22c55e,#10b981)' }}>
                    <i className="fas fa-award" />
                  </div>
                  <div className="v-card-text">
                    <strong>1+ Years</strong>
                    <span>Industry experience</span>
                  </div>
                </div>
                <div className="visual-card v-card-4">
                  <div className="v-card-icon" style={{ background: 'linear-gradient(135deg,#f97316,#ef4444)' }}>
                    <i className="fas fa-star" />
                  </div>
                  <div className="v-card-text">
                    <strong>100% Satisfaction</strong>
                    <span>Client retention rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="mv-section">
        <div className="mv-bg-grid" />
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Our Purpose</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Mission &amp; Vision</h2>
            <p>At MOB Solutions, our mission is simple: to empower brands with the tools, technology, and identity they need to succeed.</p>
          </div>

          <div className="mv-grid">
            <div className="mv-card mv-vision">
              <div className="mv-card-icon">
                <i className="fas fa-eye" />
              </div>
              <div className="mv-card-tag">Vision</div>
              <h3>Global Digital Leadership</h3>
              <p>
                To become a globally recognized software company that empowers businesses to build
                intelligent, data-driven brands through innovative AI solutions.
              </p>
              <div className="mv-card-glow" />
            </div>

            <div className="mv-card mv-mission">
              <div className="mv-card-icon" style={{ background: 'linear-gradient(135deg,#a855f7,#5935e9)' }}>
                <i className="fas fa-bullseye" />
              </div>
              <div className="mv-card-tag" style={{ color: '#a855f7' }}>Mission</div>
              <h3>Cutting-Edge Solutions</h3>
              <p>
                To design and deliver cutting-edge software solutions that leverage data and artificial
                intelligence to help businesses grow, optimize operations, and create impactful digital
                experiences. We are committed to innovation, quality, and delivering measurable results
                that transform ideas into scalable, future-ready brands.
              </p>
              <div className="mv-card-glow" style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(168,85,247,0.15) 0%, transparent 70%)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="about-stats-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="about-stats-grid">
            {stats.map(s => (
              <div key={s.label} className="about-stat-card">
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="values-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">What Drives Us</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision, project, and partnership we undertake.</p>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">
                  <i className={v.icon} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
                <div className="value-card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="team-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '50px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">The People</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Our Founders</h2>
          </div>
          <div className="founders-grid">
            {founders.map(m => (
              <div key={m.name} className="founder-item">
                <div className="founder-avatar" style={{ background: `linear-gradient(135deg, ${m.color}33, ${m.color}11)`, border: `2px solid ${m.color}44` }}>
                  {m.image ? (
                    <img src={m.image} alt={m.name} />
                  ) : (
                    <span style={{ color: m.color, fontSize: '3.6rem', fontWeight: 700 }}>{m.initials}</span>
                  )}
                </div>
                <h4 className="founder-name">{m.name}</h4>
                <span className="founder-role">{m.role}</span>
                {/*<a href="#about" className="founder-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>*/}
              </div>
            ))}
          </div>

          <div className="mb-16" style={{ marginBottom: '50px', marginTop: '80px' }}>
            <h2>Our Management Team</h2>
          </div>
          <div className="founders-grid management-grid">
            {management.map(m => (
              <div key={m.name} className="founder-item">
                <div className="founder-avatar founder-avatar-sm" style={{ background: `linear-gradient(135deg, ${m.color}33, ${m.color}11)`, border: `2px solid ${m.color}44` }}>
                  {m.image ? (
                    <img src={m.image} alt={m.name} />
                  ) : (
                    <span style={{ color: m.color, fontSize: '2.8rem', fontWeight: 700 }}>{m.initials}</span>
                  )}
                </div>
                <h4 className="founder-name">{m.name}</h4>
                <span className="founder-role">{m.role}</span>
                {/* <a href="#about" className="founder-social" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="page-cta-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="page-cta-inner">
            <div className="deco-blur" style={{ width: '500px', height: '300px', background: 'rgba(79,96,250,0.15)', top: '-100px', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)' }} />
            <h2>Ready to build something <span className="gradient-text">amazing</span>?</h2>
            <p>Let's collaborate and bring your vision to life with innovative digital solutions.</p>
            <div className="page-cta-actions">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">Get In Touch <i className="fas fa-arrow-right" /></a>
              <a href="/services" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}