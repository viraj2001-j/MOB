import { useState } from 'react';
import { Link } from 'react-router-dom';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];
const serviceLinks = [
  { label: 'DevOps & Cloud', to: '/services' },
  { label: 'UI/UX Design', to: '/services' },
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'Branding & Identity', to: '/services' },
];
const supportLinks = ['Help Center', 'Documentation', 'Privacy Policy', 'Terms of Service'];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="tf-footer">
      <div className="footer-bg">
        <img src="/images/section/bg-footer.jpg" alt="" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/images/logo/mob-logo1.png" alt="MOB Solutions" style={{ width: '120px' }} />
            </Link>
            <p>A forward-thinking digital solutions company helping businesses grow, evolve, and stand out in a competitive world.</p>

            <div className="footer-contact-item">
              <i className="fas fa-envelope" />
              <a href="mailto:mobsolutions@gmail.com">mobsolutions@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-phone" />
              <a href="tel:+94712492183">+94 71 249 2183</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-map-marker-alt" />
              <a href="https://maps.app.goo.gl/xsuyVZTwdmyRfKzM9" target="_blank" rel="noreferrer">
                Kurunegala, Sri Lanka
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              {companyLinks.map(link => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              {serviceLinks.map(link => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h5>Stay Updated</h5>
            <p style={{ fontSize: '1.4rem', color: 'var(--Text)', marginBottom: '16px', lineHeight: '2.2rem' }}>
              Get the latest updates on digital strategies and industry insights.
            </p>
            <form
              className="newsletter-form"
              onSubmit={e => { e.preventDefault(); setEmail(''); }}
              aria-label="Newsletter subscription"
            >
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p>© {new Date().getFullYear()} Copyright - MOB Solutions | All Rights Reserved Ministry of Brands</p>
          <div className="footer-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div className="footer-socials">
              {/*<a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>*/}
              <a href="https://www.linkedin.com/company/ministryofbrandslk/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
              <a href="https://www.facebook.com/profile.php?id=100063864380866" aria-label="Facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/ministryofbrands.lk?stkn=MWFlNXM3cnRnbDEyMg==" aria-label="Instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ background: 'none', border: 'none', color: 'var(--White)', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Back to top <i className="fas fa-arrow-up" />
            </button>
          </div>
        </div>

        {/* ─── Giant Logo Bottom ─── */}
        {/* <div className="footer-huge-logo-wrap" style={{ textAlign: 'center', width: '100%', overflow: 'hidden', padding: '0 20px', marginTop: '20px' }}>
          <img 
            src="/images/logo/mob-logo.png" 
            alt="MOB Solutions" 
            className="footer-huge-logo"
            style={{ width: '50%', maxWidth: '1200px', height: 'auto', objectFit: 'contain', opacity: 0.9, mixBlendMode: 'screen' }} 
          />
        </div> */}
      </div>
    </footer>
  );
}