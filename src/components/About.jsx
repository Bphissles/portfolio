import { Link } from 'react-router-dom'
import BorderCard from './BorderCard'

function About() {
  return (
    <section id="about" className="container">
      <h3 className="mega-heading-3">About</h3>
      <div className="flex flex-col gap-6 mt-6 md:mt-8">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">Who I Am</h4>
            <p className="text-black/80 leading-relaxed">
              I'm a Solutions Architect and hands-on engineer based in Evergreen, Colorado. With 8 years of experience building web platforms for automotive and manufacturing clients including Mopar, Dana, and Peterbilt, I design cloud and CMS architectures, lead technical delivery across 3–4 concurrent projects, and run AI adoption at The JRT Agency. I'm also co-founder of StageFinder, a live-music ticketing platform I architected and built end to end.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">What Drives Me</h4>
            <p className="text-black/80 leading-relaxed">
              I'm passionate about bridging the gap between design and engineering. Whether it's training a company on Claude, mentoring junior developers, or diving deep into a CMS migration, I bring curiosity and ownership to everything I do. I recently graduated cum laude from Metropolitan State University of Denver with a B.S. in Computer Science — because I believe in never stopping learning.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">What I'm Looking For</h4>
            <p className="text-black/80 leading-relaxed">
              I'm looking for an AI-focused role, such as AI solutions architecture, AI enablement, or applied AI engineering, where I can turn what AI can do into working systems and into how teams actually work. I've done that by training 50+ colleagues on Claude, building Claude skills and CMS plugins, and automating audits, and I'd like to do more of it. I'm open to agency or product teams that value clear documentation, quality, and a good sense of humor.
            </p>
          </div>

          <BorderCard color="teal">
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">Get In Touch</h4>
            <p className="text-black/80 leading-relaxed mb-4">
              Based in Evergreen, CO. I'm always open to discussing new opportunities, collaborations, or just connecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn btn-coral self-start">Contact Me</Link>
              <a href="mailto:bphislop@gmail.com" className="btn btn-outline self-start">bphislop@gmail.com</a>
            </div>
          </BorderCard>
      </div>
    </section>
  )
}

export default About
