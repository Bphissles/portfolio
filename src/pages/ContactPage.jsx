import ContactForm from '../components/ContactForm'
import useDocumentMeta from '../hooks/useDocumentMeta'

function ContactPage() {
  useDocumentMeta(
    'Contact',
    'Get in touch with Ben Hislop — open to new opportunities, collaborations, and connections.'
  )
  return (
    <section className="container">
      <h3 className="mega-heading-3">Contact</h3>
      <p className="text-base md:text-xl text-black/70 max-w-3xl mt-4 md:mt-6 leading-relaxed">
        Have a question, opportunity, or just want to connect? Drop me a message and I'll get back to you.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-8">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-black/5 rounded-lg p-6 md:p-8">
            <h4 className="text-xl font-bold text-black italic mb-4">Other Ways to Reach Me</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:bphislop@gmail.com" className="text-coral hover:text-teal transition-colors font-semibold">bphislop@gmail.com</a>
              <a href="tel:3039680309" className="text-coral hover:text-teal transition-colors font-semibold">(303) 968-0309</a>
              <p className="text-black/60 text-sm">Evergreen, CO 80439</p>
            </div>
          </div>
          <div className="bg-black/5 rounded-lg p-6 md:p-8">
            <h4 className="text-xl font-bold text-black italic mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/benjaminhislop/" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-teal transition-colors font-semibold">LinkedIn</a>
              <a href="https://github.com/Bphissles" target="_blank" rel="noopener noreferrer" className="text-coral hover:text-teal transition-colors font-semibold">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
