export default function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">
            Simple & <span className="highlight">Affordable</span> Fun
          </h2>
          <p className="section-subtitle">
            One flat price per child covers the entire soft play zone plus arcade games!
          </p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card featured">
            <div className="pricing-card-label">Best Value</div>
            <div className="pricing-card-price">
              <span className="currency">₹</span>250
              <span className="period"> /child</span>
            </div>
            <div className="pricing-card-title">1 Hour of Fun</div>
            <ul className="pricing-features">
              <li>
                <span className="pricing-check">✓</span>
                Full access to Soft Play Zone
              </li>
              <li>
                <span className="pricing-check">✓</span>
                Ball house, slides, trampoline & more
              </li>
              <li>
                <span className="pricing-check">✓</span>
                2 Arcade Games included
              </li>
              <li>
                <span className="pricing-check">✓</span>
                1 full hour of playtime
              </li>
            </ul>
            <a href="#booking" className="btn-primary">Book Your Slot</a>
          </div>

          <div className="pricing-card non-featured">
            <div className="pricing-card-label">Add-On</div>
            <div className="pricing-card-price">
              <span className="currency">₹</span>50
              <span className="period"> /game</span>
            </div>
            <div className="pricing-card-title">Extra Arcade Game</div>
            <ul className="pricing-features">
              <li>
                <span className="pricing-check">✓</span>
                Any extra arcade game of your choice
              </li>
              <li>
                <span className="pricing-check">✓</span>
                Car racing, air hockey, frog hitting & more
              </li>
              <li>
                <span className="pricing-check">✓</span>
                Add as many as you like
              </li>
              <li>
                <span className="pricing-check">✓</span>
                Pay per game, no commitments
              </li>
            </ul>
            <a href="#booking" className="btn-primary">Add & Book Now</a>
          </div>
        </div>

        <div className="pricing-note">
          <p>
            <strong>₹250 per child</strong> includes the entire soft play zone plus 2 arcade games for 1 hour.
            Need more arcade fun? Each extra arcade game is just <strong>₹50</strong>.
            Call <strong>7829807717</strong> to lock your timing!
          </p>
        </div>
      </div>
    </section>
  )
}
