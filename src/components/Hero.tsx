export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src="https://images.pexels.com/photos/5393654/pexels-photo-5393654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Children playing in a colorful ball pit"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="hero-content">
        <span className="hero-badge">
          🎪 Ages 2 to 14 · Moolakadai, Chennai
        </span>
        <h1>
          Welcome to <span className="highlight">Kutties Kingdom</span>
        </h1>
        <p className="hero-subtitle">
          The ultimate soft play zone & arcade for your little ones!
          Ball house, slides, trampoline, arcade games and so much more fun.
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn-primary">Book Your Slot</a>
          <a href="#games" className="btn-secondary">Explore Games</a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Games & Activities</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">250</div>
            <div className="hero-stat-label">Per Child (1 Hour)</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">2-14</div>
            <div className="hero-stat-label">Years Age Group</div>
          </div>
        </div>
      </div>
    </section>
  )
}
