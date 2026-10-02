import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <div className="about-images">
              <img
                src="https://images.pexels.com/photos/5488878/pexels-photo-5488878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Child sliding down a colorful slide"
              />
              <img
                src="https://images.pexels.com/photos/4964542/pexels-photo-4964542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Kids jumping on a trampoline"
              />
              <img
                className="about-img-main"
                src="https://images.pexels.com/photos/27175469/pexels-photo-27175469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Child playing in a colorful indoor ball pit"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="about-text">
              <span className="section-tag">About Us</span>
              <h2>A Magical World of Fun for Every Child</h2>
              <p>
                Kutties Kingdom is a soft play zone and arcade designed especially for
                children aged 2 to 14. Located in Moolakadai, Chennai, we offer a safe,
                colorful, and exciting environment where kids can play, explore, and make
                unforgettable memories.
              </p>
              <p>
                From ball houses and trampolines to arcade racing games, every corner of
                Kutties Kingdom is packed with activities that keep children entertained and
                active for hours!
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">🛡️</div>
                  <div className="about-feature-text">Safe & Supervised</div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🎨</div>
                  <div className="about-feature-text">Colorful & Fun</div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">👶</div>
                  <div className="about-feature-text">Ages 2 to 14</div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">💰</div>
                  <div className="about-feature-text">Affordable Pricing</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
