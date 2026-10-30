const benefits = [
  {
    title: 'Build with Precision',
    desc: 'We create custom-tailored, scalable software solutions aligned with your business goals and industry needs, ensuring flexibility and long-term growth.',
  },
  {
    title: 'Deliver with Agility',
    desc: 'Our agile and transparent process gives you full visibility, enabling rapid iterations, adaptability, and high-performance systems secured with best practices.',
  },
  {
    title: 'Scale with Confidence',
    desc: 'From cloud-native infrastructures to ongoing support, we ensure your product runs smoothly, scales effortlessly, and stays optimized at all times.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="benefits-inner">
          {/* Left Image */}
          <div className="benefits-image-wrap">
            <img
              src="/images/item/global.png"
              alt="Global Software Solutions"
              className="main-img"
            />
            <div className="float-badge top-left">
              <div className="badge-label">Projects Delivered</div>
              <div className="badge-value">100+</div>
            </div>
            <div className="float-badge bottom-right">
              <div className="badge-label">Client Satisfaction</div>
              <div className="badge-value">98%</div>
            </div>
          </div>

          {/* Right Benefits List */}
          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-border rounded-full text-sm font-medium text-slate-500 tracking-wide uppercase mb-6 bg-slate-100" style={{display:'inline-flex',marginBottom:'24px'}}>Benefits</div>
            <h2 style={{fontSize:'4rem',lineHeight:'4.8rem',letterSpacing:'-2px',marginBottom:'16px'}}>
              Your Benefits
            </h2>
            <p style={{color:'var(--Text-2)',marginBottom:'40px',lineHeight:'2.8rem'}}>
              Partner with MOB Solutions to drive digital transformation through superior, tailor-made software engineering.
            </p>

            <div className="benefits-list">
              {benefits.map((b, i) => (
                <div key={b.title} className="benefit-item">
                  <div className="benefit-num">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/services" className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]" style={{marginTop:'40px'}}>
              Explore More <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
