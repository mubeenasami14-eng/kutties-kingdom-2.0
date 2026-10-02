import Reveal from './Reveal'

const features = [
  { icon: '🛡️', title: 'Safe Environment', desc: 'Soft, padded play areas designed to keep your children safe while they have fun.' },
  { icon: '👀', title: 'Always Supervised', desc: 'Our staff keeps a watchful eye so parents can relax while kids play freely.' },
  { icon: '🎨', title: 'Colorful & Engaging', desc: 'Bright, playful designs that spark imagination and keep children entertained.' },
  { icon: '💰', title: 'Affordable Fun', desc: 'Just 250 per child for a full hour of unlimited soft play plus 2 arcade games!' },
  { icon: '🎮', title: 'Variety of Games', desc: 'From ball houses to car racing — over 15 activities for every age and interest.' },
  { icon: '🎂', title: 'Party Ready', desc: 'Planning a birthday? Kutties Kingdom is the perfect spot for an unforgettable celebration.' },
]

export default function Features() {
  return (
    <section className="section features" id="why-us">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Why Kutties Kingdom?</span>
            <h2 className="section-title">
              The Best Place for <span className="highlight">Little Ones</span>
            </h2>
            <p className="section-subtitle">
              We've created a wonderland where children laugh, play, and make memories that last forever.
            </p>
          </div>
        </Reveal>

        <div className="features-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
