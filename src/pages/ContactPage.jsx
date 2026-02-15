import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <section className="container max-w-2xl">
      <h3 className="mega-heading-3">Contact</h3>
      <p className="text-base md:text-xl text-black/70 mt-4 md:mt-6 leading-relaxed mb-8">
        Have a question, opportunity, or just want to connect? Drop me a message and I'll get back to you.
      </p>
      <ContactForm />
    </section>
  )
}

export default ContactPage
