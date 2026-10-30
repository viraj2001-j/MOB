import { useState } from 'react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    icon: '/icons/diamond-basic.svg',
    monthly: '$39.99',
    annual: '$29.99',
    desc: 'Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.',
    features: ['30+ Features', 'Priority Support', '4 Team Members', 'Premium Features', 'Data Insights'],
    cta: 'Get Started',
    featured: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    icon: '/icons/diamond-standard.svg',
    monthly: '$69.99',
    annual: '$54.99',
    desc: 'Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.',
    features: ['50+ Features', 'Unlimited Support', '10 Team Members', 'Premium Features', 'Data Insights'],
    cta: 'Get Started',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: '/icons/diamond-enterprise.svg',
    monthly: '$89.99',
    annual: '$74.99',
    desc: 'Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.',
    features: ['100+ Features', 'Lifetime Support', '100 Team Members', 'All templates unlocked', 'In-Depth Data Insights'],
    cta: 'Contact Us',
    featured: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="pricing-section">
      <div className="deco-blur deco-blur-1" aria-hidden="true" />
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-border rounded-full text-sm font-medium text-slate-500 tracking-wide uppercase mb-6 bg-slate-100">Subscription</div>
          <h2>Get your Package</h2>
          <p>Pick your Plan and Start Unleash your Creativity from now</p>
        </div>

        {/* Toggle */}
        <div className="pricing-toggle">
          <span style={{color: !annual ? 'var(--White)' : 'var(--Text)'}}>Monthly</span>
          <button
            id="pricing-toggle-btn"
            className={`toggle-switch${annual ? ' active' : ''}`}
            onClick={() => setAnnual(a => !a)}
            aria-pressed={annual}
            aria-label="Toggle annual pricing"
          >
            <div className="toggle-knob" />
          </button>
          <span style={{color: annual ? 'var(--White)' : 'var(--Text)'}}>Annual</span>
          {annual && <span className="toggle-save">Save 25%</span>}
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <span className="featured-badge">Most Popular</span>}

              <div className="pricing-icon">
                <img src={plan.icon} alt={`${plan.name} icon`} />
              </div>
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-price">
                <span className="amount">{annual ? plan.annual : plan.monthly}</span>
                <span className="period"> /per month</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <i className="fas fa-check-circle" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`tf-btn ${plan.featured ? 'style-1' : 'style-2'}`}
                style={{width:'100%', justifyContent:'center'}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
