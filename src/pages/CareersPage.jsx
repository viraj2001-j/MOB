import { useEffect, useState } from 'react';

const benefits = [
  { icon: 'fas fa-rocket', title: 'Accelerated Growth', desc: 'Join a team that is scaling fast and create real impact from Day 1.' },
  { icon: 'fas fa-laptop-house', title: 'Remote-Friendly', desc: 'Work from anywhere. We believe in flexibility and trust.' },
  { icon: 'fas fa-graduation-cap', title: 'Learning Culture', desc: 'Continuous learning with access to courses, workshops, and conferences.' },
  { icon: 'fas fa-heart', title: 'Health & Wellbeing', desc: 'We care about your physical and mental wellbeing.' },
  { icon: 'fas fa-users', title: 'Collaborative Team', desc: 'Work alongside brilliant minds who love what they do.' },
  { icon: 'fas fa-chart-line', title: 'Equity & Growth', desc: 'Competitive salary, equity options, and clear career growth paths.' },
];

const openRoles = [
  // {
  //   id: 1,
  //   title: 'Senior React Developer',
  //   dept: 'Engineering',
  //   type: 'Full-Time',
  //   location: 'On-Site / Kurunegala',
  //   color: '#4f60fa',
  //   reqs: ['3+ years React experience', 'TypeScript proficiency', 'REST/GraphQL APIs', 'CSS & design sensibility'],
  //   nice: ['Next.js experience', 'AWS knowledge', 'Open-source contributions'],
  // },
  // {
  //id: 1,
  //title: 'Business Developer Executive',
  //dept: 'Business',
  //type: 'Full-Time',
  //location: 'On-Site / Kurunegala',
  //color: '#4f60fa',
  //reqs: ['1+ years sales or business development experience', 'Strong communication skills', 'Customer relationship management', 'Proven track record of meeting targets'],
  //nice: ['Agency experience', 'Tech industry knowledge'],
  //},
  // {
  //   id: 3,
  //   title: 'UI/UX Designer',
  //   dept: 'Design',
  //   type: 'Full-Time',
  //   location: 'On-Site / Kurunegala',
  //   color: '#a855f7',
  //   reqs: ['Figma expert', '3+ years UX design', 'Portfolio of shipped products', 'User research skills'],
  //   nice: ['Motion/animation design', 'Framer experience', 'Design systems ownership'],
  // },
  // {
  //   id: 4,
  //   title: 'DevOps Engineer',
  //   dept: 'Infrastructure',
  //   type: 'Full-Time',
  //   location: 'On-Site / Kurunegala',
  //   color: '#22c55e',
  //   reqs: ['AWS / GCP experience', 'Docker & Kubernetes', 'CI/CD pipeline management', 'Infrastructure as Code'],
  //   nice: ['Terraform expertise', 'Security certifications', 'SRE background'],
  // },
  // {
  //   id: 5,
  //   title: 'Brand Strategist',
  //   dept: 'Marketing',
  //   type: 'Full-Time',
  //   location: 'On-Site / Kurunegala',
  //   color: '#f97316',
  //   reqs: ['5+ years brand strategy', 'Strong portfolio', 'Market research skills', 'Excellent communication'],
  //   nice: ['Digital marketing background', 'Agency experience', 'Content creation'],
  // },
  // {
  //   id: 6,
  //   title: 'Mobile App Developer',
  //   dept: 'Engineering',
  //   type: 'Contract',
  //   location: 'On-Site / Kurunegala',
  //   color: '#3b82f6',
  //   reqs: ['React Native or Flutter', 'iOS & Android publishing', 'API integration', '2+ years mobile dev'],
  //   nice: ['Native Swift/Kotlin', 'App Store Optimization', 'Performance testing'],
  // },
];

const culture = [
  {
    emoji: '🚀',
    title: 'Move Fast, Build Smart',
    desc: 'We ship iteratively, learn from data, and improve continuously.',
  },
  {
    emoji: '🤝',
    title: 'Radical Transparency',
    desc: 'Open communication, honest feedback, and a culture of respect.',
  },
  {
    emoji: '🎯',
    title: 'Ownership Mentality',
    desc: 'Everyone owns their work and their impact on the business.',
  },
  {
    emoji: '🌍',
    title: 'Diverse & Inclusive',
    desc: 'We celebrate diverse backgrounds, perspectives, and ideas.',
  },
];

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleApply = (role) => {
    const subject = `Application for ${role.title}`;
    const mailtoLink = `mailto:careers@mobsolutions.lk?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

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
              <span className="tag-text">Join Our Team</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h1 className="page-hero-title">
              Build the <span className="gradient-text">Future</span> With Us
            </h1>
            <p className="page-hero-desc">
              We're looking for passionate, driven individuals who want to shape the next
              generation of digital experiences. Come grow with us.
            </p>
            <div className="page-hero-actions">
              <a href="#open-roles" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">
                View Open Roles <i className="fas fa-arrow-down" />
              </a>
              <a href="#culture" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white">Our Culture</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Culture ─── */}
      <section id="culture" className="careers-culture-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Life at MOB</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Our Culture</h2>
            <p>We're not just building products — we're building a team and a culture we're proud of.</p>
          </div>
          <div className="culture-grid">
            {culture.map(c => (
              <div key={c.title} className="culture-card">
                <div className="culture-emoji">{c.emoji}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="benefits-page-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Perks</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Why Work Here</h2>
            <p>We invest in our team because great people build great things.</p>
          </div>
          <div className="benefits-highlights-grid">
            {benefits.map(b => (
              <div key={b.title} className="benefit-highlight-card">
                <div className="benefit-hl-icon">
                  <i className={b.icon} />
                </div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Roles ─── */}
      {/*<section id="open-roles" className="open-roles-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Now Hiring</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Open Positions</h2>
            <p>Find your next challenge and be part of something extraordinary.</p>
          </div>

          <div className="roles-list">
            {openRoles.map(role => (
              <div key={role.id} className={`role-card${activeRole === role.id ? ' expanded' : ''}`} >
                <div className="role-card-header" onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}>
                  <div className="role-card-left">
                    <div className="role-dept-badge" style={{ background: `${role.color}22`, color: role.color, border: `1px solid ${role.color}44` }}>
                      {role.dept}
                    </div>
                    <h4 className="role-title">{role.title}</h4>
                    <div className="role-meta">
                      <span><i className="fas fa-map-marker-alt" /> {role.location}</span>
                      <span><i className="fas fa-briefcase" /> {role.type}</span>
                    </div>
                  </div>
                  <div className="role-card-right">
                    <button className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]" style={{ fontSize: '1.3rem', padding: '10px 20px' }} onClick={(e) => { e.stopPropagation(); handleApply(role); }}>
                      Apply Now
                    </button>
                    <i className={`fas fa-chevron-${activeRole === role.id ? 'up' : 'down'} role-chevron`} />
                  </div>
                </div>

                {activeRole === role.id && (
                  <div className="role-card-body">
                    <div className="role-reqs-grid">
                      <div>
                        <h5>Requirements</h5>
                        <ul>
                          {role.reqs.map(r => (
                            <li key={r}><i className="fas fa-check" style={{ color: role.color }} /> {r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5>Nice to Have</h5>
                        <ul>
                          {role.nice.map(n => (
                            <li key={n}><i className="fas fa-plus" style={{ color: role.color }} /> {n}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ─── CTA ─── */}
      <section className="page-cta-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="page-cta-inner">
            <div className="deco-blur" style={{ width: '500px', height: '300px', background: 'rgba(79,96,250,0.15)', top: '-100px', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)' }} />
            <h2>Don't see your <span className="gradient-text">role</span>?</h2>
            <p>We're always looking for exceptional talent. Send us your CV and we'll keep you in mind.</p>
            <div className="page-cta-actions">
              <a href="mailto:careers@mobsolutions.lk" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">
                Send Your CV <i className="fas fa-paper-plane" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
