import { useEffect, useState } from 'react';

const contactMethods = [
  {
    icon: 'fas fa-envelope',
    label: 'Email Us',
    value: 'mobsolutions@gmail.com',
    href: 'mailto:mobsolutions@gmail.com',
    color: '#4f60fa',
    desc: 'We typically respond within 24 hours.',
  },
  {
    icon: 'fas fa-phone',
    label: 'Call Us',
    value: '+94 71 249 2183',
    href: 'tel:+94712492183',
    color: '#22c55e',
    desc: 'Available Mon–Fri, 9AM–6PM.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Visit Us',
    value: 'Kurunegala, Sri Lanka',
    href: 'https://maps.app.goo.gl/xsuyVZTwdmyRfKzM9',
    color: '#a855f7',
    desc: 'Let\'s meet for a coffee and talk.',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: 'MOB Solutions',
    href: 'https://www.linkedin.com/company/ministryofbrandslk/',
    color: '#3b82f6',
    desc: 'Connect with us professionally.',
  },
];

const services = [
  'DevOps & Cloud Solutions',
  'UI/UX Design',
  'Web Development',
  'Mobile App Development',
  'Branding & Identity',
  'Strategy Consulting',
  'Other',
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope. A website typically takes 4–8 weeks, a mobile app 8–16 weeks, and a full branding project 3–6 weeks. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We offer both fixed-price and hourly pricing depending on the project type. After understanding your requirements, we provide a transparent, detailed proposal with no hidden costs.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Absolutely! We love working with startups and early-stage companies. We offer flexible packages designed to accommodate different budgets while delivering premium quality.',
  },
  {
    q: 'Will you provide post-launch support?',
    a: 'Yes. All our projects include a post-launch support period, and we offer ongoing maintenance & support packages to keep your product running optimally.',
  },
  {
    q: 'Can I get a free consultation?',
    a: 'Yes! We offer a free 30-minute discovery call to understand your needs and explore how we can help. Use the contact form and mention "Free Consultation" in your message.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const waNumber = '94712492183';
    let text = `*New Contact Form Inquiry*%0A`;
    text += `*Name:* ${form.name}%0A`;
    text += `*Email:* ${form.email}%0A`;
    if (form.company) text += `*Company:* ${form.company}%0A`;
    if (form.service) text += `*Service:* ${form.service}%0A`;
    if (form.budget) text += `*Budget:* ${form.budget}%0A`;
    text += `*Message:* ${form.message}`;

    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', service: '', budget: '', message: '' });
    }, 4000);
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
              <span className="tag-text">Get In Touch</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h1 className="page-hero-title">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="page-hero-desc">
              Have a project in mind? Want to learn more about what we do?
              We'd love to hear from you. Reach out and let's create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Contact Methods ─── */}
      <section className="contact-methods-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="contact-methods-grid">
            {contactMethods.map(m => (
              <a key={m.label} href={m.href} className="contact-method-card" target={m.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                <div className="contact-method-icon" style={{ background: `${m.color}22`, border: `1px solid ${m.color}44` }}>
                  <i className={m.icon} style={{ color: m.color }} />
                </div>
                <div className="contact-method-info">
                  <span className="contact-method-label">{m.label}</span>
                  <strong className="contact-method-value">{m.value}</strong>
                  <span className="contact-method-desc">{m.desc}</span>
                </div>
                <i className="fas fa-arrow-right contact-method-arrow" style={{ color: m.color }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Main Contact Form + Info ─── */}
      <section className="contact-main-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="contact-main-grid">
            {/* Left info panel */}
            <div className="contact-info-panel">
              <div className="about-statement-tag" style={{ marginBottom: '24px', justifyContent: 'flex-start' }}>
                <span className="tag-line left" />
                <span className="tag-dot left" />
                <span className="tag-text">MOB Solutions</span>
                <span className="tag-dot right" />
                <span className="tag-line right" />
              </div>
              <h2>We're Here to <span className="gradient-text">Help</span></h2>
              <p>
                Whether you're launching a new product, rebranding, looking for a tech partner,
                or simply exploring your options — our team is ready to listen and provide guidance.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-clock" /></div>
                  <div>
                    <strong>Business Hours</strong>
                    <span>Monday – Friday, 9:00 AM – 6:00 PM (IST)</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-reply" /></div>
                  <div>
                    <strong>Response Time</strong>
                    <span>We respond to all inquiries within 24 hours.</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fas fa-shield-alt" /></div>
                  <div>
                    <strong>Confidentiality</strong>
                    <span>Your information is always kept private and secure.</span>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <span>Follow Us</span>
                <div className="contact-social-links">
                  <a href="https://www.linkedin.com/company/ministryofbrandslk/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
                  {/*<a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>*/}
                  <a href="https://www.instagram.com/ministryofbrands.lk?stkn=MWFlNXM3cnRnbDEyMg==" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                  <a href="https://www.facebook.com/profile.php?id=100063864380866" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="apply-success">
                  <div className="success-icon"><i className="fas fa-check-circle" /></div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-header">
                    <h3>Send Us a Message</h3>
                    <p>Fill in the details below and we'll be in touch shortly.</p>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input id="contact-email" type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="contact-company">Company / Organisation</label>
                      <input id="contact-company" type="text" placeholder="Your company name" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="contact-service">Service Interested In</label>
                      <select id="contact-service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-budget">Estimated Budget</label>
                    <select id="contact-budget" value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}>
                      <option value="">Select budget range...</option>
                      <option>Under $5,000</option>
                      <option>$5,000 – $15,000</option>
                      <option>$15,000 – $50,000</option>
                      <option>$50,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-message">Your Message *</label>
                    <textarea id="contact-message" rows={6} placeholder="Tell us about your project, goals, or questions..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                  </div>

                  <button type="submit" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]" style={{ width: '100%', justifyContent: 'center', padding: '16px 32px', fontSize: '1.6rem' }}>
                    Send Message <i className="fas fa-paper-plane" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map Location ─── */}
      <section className="contact-map-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="contact-map-wrap" style={{ padding: 0, overflow: 'hidden', height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.131546196412!2d80.37057899999999!3d7.480220000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33b00462e57fd%3A0x9f0eb3e989a34568!2sMinistry%20of%20Brands!5e1!3m2!1sen!2slk!4v1774861199322!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="contact-faq-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '60px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Common Questions</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-question" id={`faq-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`} />
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
