import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsFixed(y > 0);
      setIsSmall(y > 80);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`tf-header${isFixed ? ' is-fixed' : ''}${isSmall ? ' is-small' : ''}`}>
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="header-inner">
            {/* Logo */}
            <Link to="/" className="logo">
              <img src="/images/logo/mob-logo.png" alt="MOB Solutions" style={{ width: '120px' }} />
            </Link>

            {/* Desktop Nav */}
            <nav className="main-nav">
              <ul className="nav-list">
                {navItems.map(item => (
                  <li key={item.href} className="item">
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' active-nav' : ''}`
                      }
                      end={item.href === '/'}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right buttons */}
            <div className="header-right">
              { <Link
                to="/contact"
                className="tf-btn style-2"
              >
                Get a Quote
              </Link> }
              <Link
                to="/contact"
                className="tf-btn style-1"
              >
                Start a Project
              </Link>

              {/* Mobile toggle */}
              <button
                id="btn-menu-mobile"
                className="btn-menu-mobile"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-times" />
        </button>
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo/mob-logo.png" alt="MOB Solutions" style={{ width: '100px' }} />
        </Link>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) => isActive ? 'active-nav' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="tf-btn style-1"
          style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          Start a Project
        </Link>

      </div>
    </>
  );
}
