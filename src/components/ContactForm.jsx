import { useState } from 'react'

function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong. Please try again.'))
  }

  if (submitted) {
    return (
      <div className={`bg-black/5 rounded-lg ${compact ? 'p-4' : 'p-6 md:p-8'} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-xl md:text-2xl font-bold text-black italic">Thanks!</p>
          <p className="text-black/70 mt-2">I'll get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={`bg-black/5 rounded-lg ${compact ? 'p-4' : 'p-6 md:p-8'} flex flex-col gap-4`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <h4 className="text-xl md:text-2xl font-bold text-black italic">Get In Touch</h4>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold text-black/70 uppercase tracking-wide">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-2 border-black bg-cream px-3 py-2 text-black font-medium focus:outline-none focus:border-teal transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold text-black/70 uppercase tracking-wide">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-2 border-black bg-cream px-3 py-2 text-black font-medium focus:outline-none focus:border-teal transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold text-black/70 uppercase tracking-wide">Message</label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          required
          className="border-2 border-black bg-cream px-3 py-2 text-black font-medium focus:outline-none focus:border-teal transition-colors resize-none"
        />
      </div>
      <button type="submit" className="btn btn-coral self-start">Send</button>
    </form>
  )
}

export default ContactForm
