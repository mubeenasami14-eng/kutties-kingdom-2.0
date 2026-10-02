import Reveal from './Reveal'

const testimonials = [
  { name: 'Priya S.', text: 'My kids absolutely love Kutties Kingdom! The ball pit and trampoline are their favorites. Great value for money at just 250!', rating: 5, childAge: 'Kids aged 5 & 8' },
  { name: 'Karthik R.', text: 'Best place in Moolakadai for children. Safe, clean, and so many games. My son enjoys the car racing arcade game every time!', rating: 5, childAge: 'Son aged 10' },
  { name: 'Fatima A.', text: 'We celebrated my daughter\'s birthday here. The kids had a blast with the slides and kitchen set game. Highly recommended!', rating: 5, childAge: 'Daughter aged 6' },
  { name: 'Suresh M.', text: 'Affordable, fun, and well-maintained. The staff is friendly and keeps everything clean. My twins ask to go every weekend!', rating: 5, childAge: 'Twins aged 4' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Happy Parents</span>
            <h2 className="section-title">
              What Parents <span className="highlight">Say</span>
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it — hear from the families who visit us every week!
            </p>
          </div>
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-meta">{t.childAge}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
