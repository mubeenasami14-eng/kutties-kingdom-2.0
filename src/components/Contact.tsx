export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">
            Come <span className="highlight">Visit Us</span>!
          </h2>
          <p className="section-subtitle">
            We're located in Moolakadai, Chennai. Call ahead to lock your preferred play time!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-info-icon phone">📞</div>
              <div className="contact-info-content">
                <h4>Call to Book Your Slot</h4>
                <p>
                  <a href="tel:7829807717">7829807717</a> (Primary)
                </p>
                <p>
                  <a href="tel:7200007717">7200007717</a> (Alternate)
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon location">📍</div>
              <div className="contact-info-content">
                <h4>Our Location</h4>
                <p>72/128, Kamarajar Salai, Gandhi Nagar,</p>
                <p>Kodungaiyur, Chennai,</p>
                <p>Tamil Nadu 600118</p>
                <p style={{ marginTop: '8px' }}>
                  <a
                    href="https://maps.google.com/?q=72/128+Kamarajar+Salai+Gandhi+Nagar+Kodungaiyur+Chennai+Tamil+Nadu+600118"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions →
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon clock">🕐</div>
              <div className="contact-info-content">
                <h4>Play Time</h4>
                <p>Each session: 1 hour</p>
                <p>Call to lock your preferred timing</p>
              </div>
            </div>

            <div className="contact-owners">
              <h4>Meet the Owners</h4>
              <div className="contact-owner-item">
                <span className="contact-owner-name">Mohammed Tayub</span>
                <a href="tel:7829807717" className="contact-owner-phone">7829807717</a>
              </div>
              <div className="contact-owner-item">
                <span className="contact-owner-name">Mohammed Aleem</span>
                <a href="tel:7200007717" className="contact-owner-phone">7200007717</a>
              </div>
            </div>
          </div>

          <div className="contact-map-card">
            <iframe
              title="Kutties Kingdom Location"
              src="https://maps.google.com/maps?q=Kodungaiyur%20Chennai%20Tamil%20Nadu%20600118&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
