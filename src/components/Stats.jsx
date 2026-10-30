const stats = [
  { num: '$2.5M+', label: 'Clients Revenue Generated' },
  { num: '10M+', label: 'Transactions Recorded' },
  { num: '98%', label: 'Project Success Rate' },
  { num: '500+', label: 'Projects Done' },
];

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="stats-header">
          <div className="rating-badge" style={{margin:'0 auto 20px',display:'inline-flex'}}>
            <div className="stars">
              {[...Array(5)].map((_,i) => <i key={i} className="fas fa-star" />)}
            </div>
            <span className="text">4.9/5 based on 24 reviews on Clutch</span>
          </div>
          <h2>We're proud to have great indicators</h2>
          <p>Trusted by leading brands worldwide</p>
        </div>

        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.num} className="stat-item">
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
