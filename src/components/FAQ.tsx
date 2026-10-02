import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  { q: 'How much does it cost per child?', a: 'It is 250 rupees per child for 1 hour. This includes full access to the entire soft play zone plus 2 arcade games!' },
  { q: 'What age group is Kutties Kingdom suitable for?', a: 'Kutties Kingdom is designed for children aged 2 to 14 years. We have activities and games suitable for every age in this range.' },
  { q: 'How much do extra arcade games cost?', a: 'Each extra arcade game beyond the 2 included ones costs just 50 rupees. You can add as many as you like!' },
  { q: 'What is included in the 250 rupee ticket?', a: 'The 250 rupee ticket includes unlimited access to all soft play zone activities (ball house, slides, trampoline, sand pit, doctor set, kitchen set, and more) plus 2 arcade games, all for 1 hour.' },
  { q: 'Do I need to book in advance?', a: 'We recommend calling 7829807717 to lock your preferred timing, especially on weekends and holidays. You can also book online through our booking form.' },
  { q: 'Where is Kutties Kingdom located?', a: 'We are at 72/128, Kamarajar Salai, Gandhi Nagar, Kodungaiyur, Chennai, Tamil Nadu 600118 — in the Moolakadai area.' },
]

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button className="faq-question" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`faq-answer ${isOpen ? 'faq-answer-open' : ''}`}>
        <p>{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-tag">Questions?</span>
            <h2 className="section-title">
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <p className="section-subtitle">
              Got questions? We've got answers! Here are the things parents ask us most.
            </p>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60}>
              <FAQItem
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
