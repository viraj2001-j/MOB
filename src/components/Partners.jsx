const partners = [
  { src: "/images/partner/deal-zone.png", alt: "Deal Zone", width: "100px" },
  {
    src: "/images/partner/digital-point.png",
    alt: "Digital Point",
    width: "80px",
  },
  {
    src: "/images/partner/sithuki-agencies.png",
    alt: "Sithuki Agencies",
    width: "80px",
  },
  {
    src: "/images/partner/wego-travels.png",
    alt: "Wego Travels",
    width: "80px",
  },
  { src: "/images/partner/optivex.png", alt: "Optivex", width: "100px" },
  { src: "/images/partner/merc-lanka.png", alt: "Merc Lanka", width: "100px" },
  { src: "/images/partner/zbunny.png", alt: "ZBunny", width: "100px" },
  {
    src: "/images/partner/linen&loom.png",
    alt: "Linen & Loom",
    width: "200px",
  },
  {
    src: "/images/partner/sri-fitness.png",
    alt: "Sri Fitness",
    width: "80px",
  },
  { src: "/images/partner/prime-cash.png", alt: "Prime Cash", width: "180px" },
  {
    src: "/images/partner/green-valley.png",
    alt: "Green Valley",
    width: "180px",
  },
  { src: "/images/partner/pepsi.png", alt: "Pepsi", width: "80px" },
  {
    src: "/images/partner/life-style-gym.png",
    alt: "Life Style Gym",
    width: "80px",
  },
];

// Duplicate for seamless infinite scroll
const marqueeItems = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="partners-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <p className="partners-label">Trusted by 500+ Brands &amp; Companies</p>
      </div>

      {/* Full-width marquee */}
      <div className="partners-marquee-wrap">
        <div className="partners-marquee-track">
          {marqueeItems.map((p, i) => (
            <div key={`${p.alt}-${i}`} className="partner-item max-w-[200px]">
              <img
                src={p.src}
                alt={p.alt}
                style={{
                  width: p.width,
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
