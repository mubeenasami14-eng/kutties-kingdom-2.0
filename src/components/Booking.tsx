import { useState } from 'react'
import { supabase } from '../lib/supabase'

const TIME_SLOTS = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
  '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM',
  '7:00 PM - 8:00 PM',
]

export default function Booking() {
  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    parent_name: '',
    phone: '',
    children_count: 1,
    preferred_date: '',
    preferred_time: '',
    extra_arcade_games: 0,
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const totalCost = form.children_count * 250 + form.extra_arcade_games * 50

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'children_count' || name === 'extra_arcade_games' ? Math.max(0, parseInt(value) || 0) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.parent_name.trim()) {
      setError('Please enter the parent or guardian name.')
      return
    }
    if (!form.phone.trim() || form.phone.trim().length < 10) {
      setError('Please enter a valid phone number (at least 10 digits).')
      return
    }
    if (form.children_count < 1) {
      setError('At least 1 child is required to book.')
      return
    }
    if (!form.preferred_date) {
      setError('Please select a preferred date.')
      return
    }
    if (!form.preferred_time) {
      setError('Please select a preferred time slot.')
      return
    }

    setSubmitting(true)
    const { error: insertError } = await supabase.from('bookings').insert({
      parent_name: form.parent_name.trim(),
      phone: form.phone.trim(),
      children_count: form.children_count,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      extra_arcade_games: form.extra_arcade_games,
      message: form.message.trim() || null,
    })

    setSubmitting(false)

    if (insertError) {
      setError('Something went wrong while submitting your booking. Please try calling 7829807717 instead.')
      return
    }

    setSuccess(true)
    setForm({
      parent_name: '',
      phone: '',
      children_count: 1,
      preferred_date: '',
      preferred_time: '',
      extra_arcade_games: 0,
      message: '',
    })
  }

  if (success) {
    return (
      <section className="section booking" id="booking">
        <div className="booking-shape booking-shape-1"></div>
        <div className="booking-shape booking-shape-2"></div>
        <div className="container">
          <div className="booking-inner">
            <div className="section-header">
              <span className="section-tag">Booking Confirmed</span>
              <h2 className="section-title">Yay! Your Request is In!</h2>
              <p className="section-subtitle">
                We've received your booking request. Our team will call you shortly to confirm your slot.
              </p>
            </div>
            <div className="booking-form">
              <div className="form-success">
                <h3>🎉 Booking Request Sent!</h3>
                <p>
                  Thank you for choosing Kutties Kingdom! Please call <strong>7829807717</strong> to
                  confirm and lock your preferred timing. We can't wait to see your little ones!
                </p>
              </div>
              <button
                className="booking-submit"
                onClick={() => setSuccess(false)}
              >
                Make Another Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section booking" id="booking">
      <div className="booking-shape booking-shape-1"></div>
      <div className="booking-shape booking-shape-2"></div>
      <div className="container">
        <div className="booking-inner">
          <div className="section-header">
            <span className="section-tag">Book Your Slot</span>
            <h2 className="section-title">Reserve Your Fun Time!</h2>
            <p className="section-subtitle">
              Fill in the details below and we'll get back to you. Or call <strong>7829807717</strong> to book directly!
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="parent_name">Parent / Guardian Name *</label>
                <input
                  type="text"
                  id="parent_name"
                  name="parent_name"
                  value={form.parent_name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="children_count">Number of Children *</label>
                <input
                  type="number"
                  id="children_count"
                  name="children_count"
                  min={1}
                  max={20}
                  value={form.children_count}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="extra_arcade_games">Extra Arcade Games (₹50 each)</label>
                <input
                  type="number"
                  id="extra_arcade_games"
                  name="extra_arcade_games"
                  min={0}
                  max={50}
                  value={form.extra_arcade_games}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferred_date">Preferred Date *</label>
                <input
                  type="date"
                  id="preferred_date"
                  name="preferred_date"
                  min={today}
                  value={form.preferred_date}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferred_time">Preferred Time Slot *</label>
                <select
                  id="preferred_time"
                  name="preferred_time"
                  value={form.preferred_time}
                  onChange={handleChange}
                >
                  <option value="">Select a time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Notes (optional)</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requests or questions?"
              />
            </div>

            <div className="booking-cost-preview">
              <span className="booking-cost-preview-label">
                Estimated Total ({form.children_count} child{form.children_count !== 1 ? 'ren' : ''} + {form.extra_arcade_games} extra game{form.extra_arcade_games !== 1 ? 's' : ''})
              </span>
              <span className="booking-cost-preview-value">₹{totalCost}</span>
            </div>

            <button
              type="submit"
              className="booking-submit"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Confirm Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
