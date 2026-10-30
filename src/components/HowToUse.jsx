const steps = [
  {
    num: '/1',
    title: 'Fast Sign-up',
    desc: 'You can join our platform faster with your Social Account. Get started in seconds with zero friction.',
  },
  {
    num: '/2',
    title: 'Easy to Generate',
    desc: 'Our UI is simple, you can easily catch up. Type a prompt and let AI handle the heavy lifting.',
  },
  {
    num: '/3',
    title: 'Use Specific Tools',
    desc: 'Explore our Dashboard with 50+ Tools and 20+ Team Support Features tailored to your workflow.',
  },
];

export default function HowToUse() {
  return (
    <section className="howto-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="howto-inner">
          {/* Left steps */}
          <div>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-border rounded-full text-sm font-medium text-slate-500 tracking-wide uppercase mb-6 bg-slate-100" style={{display:'inline-flex',marginBottom:'24px'}}>How to Use</div>
            <h2 style={{fontSize:'4rem',lineHeight:'4.8rem',letterSpacing:'-2px',marginBottom:'16px'}}>
              Easy to Use
            </h2>
            <p style={{color:'var(--Text-2)',marginBottom:'48px',lineHeight:'2.8rem'}}>
              We dive deep into understanding your values and target audience to develop a cohesive brand strategy.
            </p>

            <div className="howto-steps">
              {steps.map(s => (
                <div key={s.num} className="howto-step">
                  <div className="step-num">{s.num}</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="howto-image-wrap">
            <img src="/images/item/iphone-1.png" alt="App Usage Demo" />
          </div>
        </div>
      </div>
    </section>
  );
}
