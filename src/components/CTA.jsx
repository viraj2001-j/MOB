export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="cta-inner">
          {/* Phones */}
          <div className="cta-phones">
            <img src="/images/item/iphone-1.png" alt="App" style={{width:'160px',transform:'rotate(-8deg) translateY(20px)',filter:'drop-shadow(0 20px 40px rgba(0,0,0,0.6))'}} />
            <img src="/images/item/iphone-2.png" alt="App" style={{width:'180px',zIndex:2,filter:'drop-shadow(0 20px 60px rgba(79,96,250,0.5))'}} />
            <img src="/images/item/iphone-1.png" alt="App" style={{width:'160px',transform:'rotate(8deg) translateY(20px)',filter:'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',opacity:0.7}} />
          </div>

          <h2>Make your Productivity more efficient. From this time.</h2>
          <p>Get the Demo and unleash your productivity. Feel free to explore the latest technology.</p>

          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-gradient-to-br from-primary to-[#5935e9] text-white shadow-[0_4px_20px_rgba(79,96,250,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(79,96,250,0.6)]">
              <i className="fab fa-apple" /> App Store
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 py-3 px-7 rounded-full text-base font-medium font-sans cursor-pointer transition-all duration-300 border-none bg-transparent text-heading border border-border hover:bg-primary hover:border-primary hover:text-white">
              <i className="fab fa-google-play" /> Google Play
            </a>
          </div>

          <div className="cta-stats">
            <div className="cta-stat-item">
              <div className="num">100+</div>
              <div className="label">Transactions Recorded</div>
            </div>
            <div className="cta-stat-item">
              <div className="num">100+</div>
              <div className="label">Project Done</div>
            </div>
            <div className="cta-stat-item">
              <div className="num">50+</div>
              <div className="label">Trusted Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
