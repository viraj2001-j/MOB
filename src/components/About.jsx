const tags = [
  'Cloud Solutions', "Writer's Assist", 'Quality Control',
  'Faster Workflow', 'Increased Output', 'Super-Brain', 'Style Variations',
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="deco-blur deco-blur-1" style={{top:'-100px',right:'-200px'}} aria-hidden="true" />
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="about-inner">
          {/* Left Images */}
          <div className="about-image-wrap">
            <img
              src="/images/item/reseach.png"
              alt="AI Research Interface"
              className="main-img"
            />
            <div className="card-float top-right">
              <img src="/images/item/card-1.png" alt="Card 1" />
            </div>
            <div className="card-float bottom-left">
              <img src="/images/item/dashboard.png" alt="Dashboard" />
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-border rounded-full text-sm font-medium text-slate-500 tracking-wide uppercase mb-6 bg-slate-100">About Ministry of Brands</div>
            <h2>We're a passionate team of innovators</h2>
            <p>
              We're a passionate team of innovators obsessed with using AI to streamline
              content creation. We believe AI can revolutionise the writing industry by making
              high-quality content generation faster and more accessible.
            </p>

            <div className="tags-list">
              {tags.map(tag => (
                <span key={tag} className="tag-item">
                  <span className="dot" />
                  {tag}
                </span>
              ))}
            </div>

            <a href="/about" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">
              More About Us <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
