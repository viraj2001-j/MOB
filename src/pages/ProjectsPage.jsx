import { useEffect, useState } from "react";

const categories = [
  "All",
  "Web",
  "Mobile",
  "UI/UX",
  "System",
];

const projects = [
  {
    id: 1,
    title: "Wego Travels - Travel Booking Platform",
    categories: ["Web"],
    tags: ["Portfolio", "Next.js", "Dashboard"],
    image: "/images/projects/wego-travels.png",
    desc: "A travel booking platform that offers personalized recommendations and seamless booking experiences. Integrates real-time data to provide users with the best deals and travel options worldwide.",
    color: "#4f60fa",
  },
  {
    id: 2,
    title: "Digital Point - Digital Marketing Platform",
    categories: ["Web"],
    tags: ["SaaS", "OpenAI", "React"],
    image: "/images/projects/digital-point.png",
    desc: "A comprehensive digital marketing platform that leverages AI to optimize campaigns, analyze customer behavior, and automate content creation. Designed to help businesses maximize their online presence and ROI.",
    color: "#4f60fa",
  },
  {
    id: 3,
    title: "Optivex - E-Commerce Platform",
    categories: ["E-Commerce"],
    tags: ["Analytics", "Cloud", "Data Viz"],
    image: "/images/projects/optivex.png",
    desc: "An e-commerce platform that utilizes AI to enhance user experience, personalize product recommendations, and streamline inventory management. Built with a focus on scalability and performance to support growing online businesses.",
    color: "#a855f7",
  },
  {
    id: 4,
    title: "Merck Lanka - Construction Company",
    categories: ["E-Commerce", "UI/UX"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/merck-lanka.png",
    desc: "A comprehensive brand overhaul for a leading construction company, including logo, visual identity, messaging framework, and a full brand guidelines document.",
    color: "#a855f7",
  },
  {
    id: 5,
    title: "EV Charging Mobile App",
    categories: ["Mobile", "UI/UX"],
    tags: ["React Native", "Supabase"],
    image: "/images/projects/ev1.png",
    desc: "A cross-platform health tracking application with real-time sync, personalized insights, and a sleek UI designed specifically for health-conscious users.",
    color: "#ec4899",
  },
  {
    id: 6,
    title: "You Salon - Beauty Salon Website",
    categories: ["Mobile", "UI/UX"],
    tags: ["React Native", "Supabase"],
    image: "/images/projects/usalon.png",
    desc: "A modern, responsive website for a beauty salon, featuring an online booking system, service menu, and a gallery of their work.",
    color: "#ec4899",
  },
  {
    id: 7,
    title: "Sithuki Website",
    categories: ["Web"],
    tags: ["Next.js", "Portfolio"],
    image: "/images/projects/sithuki.png",
    desc: "Sithuki is a global employee career agency portfolio showcasing professional recruitment, international career opportunities, and trusted workforce solutions. We connect skilled talent with leading employers worldwide.",
    color: "#4f60fa",
  },
  {
    id: 8,
    title: "Deal zone",
    categories: ["E-Commerce"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/dealzone.png",
    desc: "Deal Zone is an e-commerce platform offering quality home, kitchen, and food products at affordable prices. Discover convenient online shopping with trusted products and great deals.",
    color: "#a855f7",
  },
  {
    id: 9,
    title: "Linen & Loom",
    categories: ["E-Commerce", "UI/UX"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/linenandloom.png",
    desc: "Linen & Loom is a modern e-commerce platform offering stylish room accessories with interactive 3D room visualization. Its mobile app helps users explore, customize, and shop home décor effortlessly.",
    color: "#a855f7",
  },
  {
    id: 10,
    title: "Loan System",
    categories: ["System"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/loansystem.png",
    desc: "A modern loan management system built with Next.js and database integration for efficient loan processing, customer management, and secure financial tracking.",
    color: "#12b2da",
  },
  {
    id: 11,
    title: "GYM System",
    categories: ["System"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/gymsystem.png",
    desc: "A complete Gym Management System integrated with fingerprint machines for secure attendance, membership tracking, billing, and fitness management solutions.",
    color: "#12b2da",
  },
  {
    id: 12,
    title: "POS System",
    categories: ["System"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/possystem.png",
    desc: "A powerful POS system designed to manage sales, inventory, billing, customer records, and business operations with efficient digital solutions.",
    color: "#12b2da",
  },
  {
    id: 13,
    title: "Resturant Management System",
    categories: ["System"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/resturantmanagmentsystem.png",
    desc: "A modern restaurant management system with QR-based digital menus, online ordering, table management, billing, and seamless customer experiences.",
    color: "#12b2da",
  },
  {
    id: 14,
    title: "Pepsi Distributors Service System",
    categories: ["System"],
    tags: ["Branding", "Identity", "Strategy"],
    image: "/images/projects/pepsidistributors.png",
    desc: "A comprehensive distributor management system designed to manage inventory, sales, suppliers, orders, and delivery operations with efficient business automation.",
    color: "#12b2da",
  },
];

const stats = [
  { num: "100+", label: "Projects Completed" },
  { num: "30+", label: "Happy Clients" },
  { num: "15+", label: "Industries Served" },
  { num: "98%", label: "Client Satisfaction" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
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

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

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
            <div
              className="about-statement-tag"
              style={{ marginBottom: "28px" }}
            >
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Our Portfolio</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h1 className="page-hero-title">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="page-hero-desc">
              Explore our portfolio of successful digital transformations —
              where innovation meets execution to create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section
        className="about-stats-section"
        style={{ borderTop: "1px solid var(--Border-3)" }}
      >
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="about-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="about-stat-card">
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="projects-page-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          {/* Filter Tabs */}
          <div className="projects-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                className={`filter-btn${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-masonry-grid">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="proj-masonry-card"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="proj-masonry-img-wrap">
                  <img src={proj.image} alt={proj.title} />
                  <div className="proj-masonry-overlay">
                    <button className="proj-view-btn">
                      View Project <i className="fas fa-external-link-alt" />
                    </button>
                  </div>
                </div>
                <div className="proj-masonry-content">
                  <div
                    className="project-tags"
                    style={{ marginBottom: "12px" }}
                  >
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="proj-tag"
                        style={{
                          borderColor: `${proj.color}44`,
                          color: proj.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4>{proj.title}</h4>
                  <p>{proj.desc}</p>
                  <div
                    className="proj-cat-badge"
                    style={{ background: `${proj.color}22`, color: proj.color }}
                  >
                    {proj.categories.join(" / ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Showcase (Alternating) ─── */}
      {/* <section className="featured-showcase-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="mb-16" style={{ marginBottom: '70px' }}>
            <div className="about-statement-tag" style={{ marginBottom: '20px', justifyContent: 'center' }}>
              <span className="tag-line left" />
              <span className="tag-dot left" />
              <span className="tag-text">Case Studies</span>
              <span className="tag-dot right" />
              <span className="tag-line right" />
            </div>
            <h2>Deep Dive</h2>
            <p>A closer look at some of our most impactful projects.</p>
          </div>

          <div className="projects-list">
            {projects.slice(0, 3).map((proj, idx) => (
              <div key={proj.id} className={`project-card ${idx % 2 !== 0 ? 'reversed' : ''}`}>
                <div className="project-image-wrap">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                  <div className="project-overlay">
                    <span className="view-btn">View Case Study <i className="fas fa-arrow-right" /></span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {proj.tags.map(t => <span key={t} className="proj-tag" style={{ borderColor: `${proj.color}44`, color: proj.color }}>{t}</span>)}
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white" style={{ marginTop: '32px' }}>
                    Read Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── Modal ─── */}
      {selectedProject && (
        <div
          className="proj-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="proj-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="proj-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <i className="fas fa-times" />
            </button>
            <div className="proj-modal-img">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="proj-modal-body">
              <div className="project-tags">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="proj-tag"
                    style={{
                      borderColor: `${selectedProject.color}44`,
                      color: selectedProject.color,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.desc}</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]"
                style={{ marginTop: "24px" }}
              >
                Enquire About This Project <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ─── CTA ─── */}
      <section className="page-cta-section">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="page-cta-inner">
            <div
              className="deco-blur"
              style={{
                width: "500px",
                height: "300px",
                background: "rgba(79,96,250,0.15)",
                top: "-100px",
                left: "50%",
                transform: "translateX(-50%)",
                filter: "blur(80px)",
              }}
            />
            <h2>
              Have a project in <span className="gradient-text">mind</span>?
            </h2>
            <p>Let's turn your idea into an extraordinary digital product.</p>
            <div className="page-cta-actions">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]"
              >
                Start a Project <i className="fas fa-arrow-right" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 py-5 px-11 rounded-full text-xl font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}