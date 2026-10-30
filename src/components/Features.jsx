import { useState } from 'react';

const features = [
  {
    icon: 'fas fa-brain',
    title: 'Intelligent Research Assistant',
    desc: 'Feed the AI your topic and keywords, and watch it gather relevant information from across the web.',
  },
  {
    icon: 'fas fa-magic',
    title: 'AI-Powered Content Generation',
    desc: 'Overcome writer\'s block and get fresh ideas with a single click. Our AI learns your brand voice.',
  },
  {
    icon: 'fas fa-shield-check',
    title: 'Real-time Fact-Checking & Plagiarism Detection',
    desc: 'Integrate with reliable fact-checking databases to ensure accuracy and originality every time.',
  },
];

export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="features" className="features-section">
      <div className="deco-blur" style={{
        width:'500px',height:'500px',
        background:'rgba(79,96,250,0.06)',
        top:'-150px',left:'-150px',
        filter:'blur(100px)',position:'absolute',
        borderRadius:'50%',pointerEvents:'none'
      }} aria-hidden="true" />

      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="client-hading">
          {/* Section Tag */}
          <div className="about-statement-tag">
            <span className="tag-line left" />
            <span className="tag-dot left" />
            <span className="tag-text">Our Projects</span>
            <span className="tag-dot right" />
            <span className="tag-line right" />
          </div>
          <h2>Our Client Love to use Our Products</h2>
          <p>Free Up Your Time to Focus on What Matters Most</p>
        </div>

        <div className="features-grid">
          {/* Feature list */}
          <div className="features-list">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card${activeIdx === i ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActiveIdx(i)}
              >
                <div className="feature-icon">
                  <i className={f.icon} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}

            <div style={{marginTop: '8px'}}>
              <a href="#built" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">
                Get A Demo <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>

          {/* Screenshot */}
          <div className="features-image">
            <img
              src="/images/projects/wego-travels.png"
              alt="Nexux AI Platform Dashboard"
              className="main-screen"
            />
            <div className="small-card">
              <div className="icon"><i className="fas fa-chart-line" /></div>
              <div className="text">
                <strong>Content Generated</strong>
                <span>+240% this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
