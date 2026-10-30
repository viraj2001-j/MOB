import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Working with the team was a turning point for our brand. They understood Love Ceylon’s identity and crafted campaigns that truly resonated with our audience. We saw a noticeable boost in engagement and customer loyalty.",
    name: 'Love Ceylon Owner',
    company: 'Love Ceylon',
    rating: 5,
  },
  {
    text: "Their deep understanding of the travel industry helped Wego Travels stand out in a competitive market. The strategies brought in more bookings and strengthened our online presence significantly.",
    name: 'Wego Travels Marketing Head',
    company: 'Wego Travels',
    rating: 5,
  },
  {
    text: "They took time to understand our business model at Sithuki Agencies and delivered a marketing strategy that actually worked. We gained new clients and improved our brand recognition.",
    name: 'Sithuki Agencies CEO',
    company: 'Sithuki Agencies',
    rating: 5,
  },
  {
    text: "Digital Point experienced real growth thanks to their innovative approach. Their team brought fresh ideas and executed campaigns that drove measurable results.",
    name: 'Digital Point Manager',
    company: 'Digital Point',
    rating: 5,
  },
  {
    text: "Their creative direction helped USalon attract a wider audience. We noticed increased bookings and stronger brand awareness within just a few months.",
    name: 'USalon Owner',
    company: 'USalon',
    rating: 5,
  },
  {
    text: "Optivex benefited greatly from their strategic insight. They delivered a clear, results-driven plan that helped us expand our client base and improve conversions.",
    name: 'Optivex Marketing Lead',
    company: 'Optivex',
    rating: 5,
  },
  {
    text: "Their professional approach and attention to detail made a big difference for Merck Lanka. The campaigns were effective and aligned perfectly with our corporate vision.",
    name: 'Merck Lanka Marketing Director',
    company: 'Merck Lanka',
    rating: 5,
  },
  {
    text: "CRE Solutions saw a strong return on investment through their strategies. Their ability to understand our goals and deliver results was truly impressive.",
    name: 'CRE Solutions CEO',
    company: 'CRE Solutions',
    rating: 5,
  },
  {
    text: "Deal Zone achieved excellent growth with their support. Their marketing strategies increased our visibility and helped us reach new customer segments.",
    name: 'Deal Zone Owner',
    company: 'Deal Zone',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="testimonials-3d-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="mb-16" style={{ marginBottom: '60px', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="about-statement-tag">
            <span className="tag-line left" />
            <span className="tag-dot left" />
            <span className="tag-text">Testimonial</span>
            <span className="tag-dot right" />
            <span className="tag-line right" />
          </div>
          <h2 style={{ fontSize: '4.8rem', marginBottom: '16px', fontWeight: 500, letterSpacing: '-0.02em', color: '#ffffff' }}>
            Our Client Love to<br/>use Our Products
          </h2>
          <p style={{ color: '#ffffff' }}>Free Up Your Time to Focus on What Matters Most</p>
        </div>

        <div 
          className="carousel-3d-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel-globe-bg">
             <img src="/images/item/global.png" alt="" />
          </div>
          
          <div className="carousel-3d-track">
            {testimonials.map((t, i) => {
              const offset = i - activeIndex;
              let className = "carousel-card";
              if (offset === 0) className += " active";
              else if (offset === -1) className += " prev-1";
              else if (offset === 1) className += " next-1";
              else if (offset === -2) className += " prev-2";
              else if (offset === 2) className += " next-2";
              else if (offset < -2) className += " hidden-left";
              else if (offset > 2) className += " hidden-right";

              return (
                <div 
                  key={i} 
                  className={className} 
                  onClick={() => setActiveIndex(i)}
                >
                  <p className="t-text">{t.text}</p>
                  <div className="t-bottom">
                    <div className="t-author">
                      <strong>{t.name}</strong>
                      <span>{t.company}</span>
                    </div>
                    <div className="t-quote">
                      <i className="fas fa-quote-right" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="carousel-pagination">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`page-dot ${i === activeIndex ? 'active' : ''}`} 
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
