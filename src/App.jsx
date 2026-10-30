import { useEffect, useState, Component } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalAnimator from './components/GlobalAnimator';
import CustomCursor from './components/CustomCursor';

// Home sections
import Banner from './components/Banner';
import AboutStatement from './components/AboutStatement';
import Partners from './components/Partners';
import Projects from './components/Projects';
import Built from './components/Built';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

// Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h2>Oops, something went wrong.</h2>
          <p>There was an error communicating with the server or rendering the page.</p>
          <button
            className="tf-btn style-1"
            onClick={() => { this.setState({ hasError: false }); window.location.reload(); }}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`progress-wrap${visible ? ' active-progress' : ''}`}>
      <button
        id="scroll-to-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up" />
      </button>
    </div>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('idle');

  useEffect(() => {
    setTransitionStage('fadeOut');
    const t = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 250);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className={`page-transition ${transitionStage}`}>
      {displayChildren}
    </div>
  );
}

function HomePage() {
  return (
    <div className="main-content">
      <Banner />
      <AboutStatement />
      <Built />
      <Partners />
      <Projects />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  );
}

function AppInner() {
  return (
    <div id="wrapper">
      <CustomCursor />
      <GlobalAnimator />
      <Header />
      <Routes>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
