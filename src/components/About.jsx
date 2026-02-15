import BorderCard from './BorderCard'

function About() {
  return (
    <section id="about" className="container">
      <h3 className="mega-heading-3">About</h3>
      <div className="mt-6 md:mt-8">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">Who I Am</h4>
            <p className="text-black/80 leading-relaxed">
              I'm a Senior Frontend Developer and AI Innovation Lead based in Evergreen, Colorado. With over 8 years in the industry, I've built high-performance web applications across the automotive, manufacturing, and energy sectors — always with a focus on clean architecture, accessibility, and pushing what's possible with modern tooling.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">What Drives Me</h4>
            <p className="text-black/80 leading-relaxed">
              I'm passionate about bridging the gap between design and engineering. Whether it's leading an AI innovation team, mentoring junior developers, or diving deep into a headless CMS migration, I bring curiosity and ownership to everything I do. I recently graduated cum laude from Metropolitan State University of Denver with a B.S. in Computer Science — because I believe in never stopping learning.
            </p>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">What I'm Looking For</h4>
            <p className="text-black/80 leading-relaxed">
              I'm seeking a role where I can continue to grow as a technical leader — ideally on a collaborative team that values innovation, quality, and a good sense of humor. I thrive in environments where I can mentor others, architect solutions, and make a real impact on the product.
            </p>
          </div>

          <BorderCard color="teal">
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">Get In Touch</h4>
            <p className="text-black/80 leading-relaxed">
              Evergreen, CO 80439<br />
              <a href="mailto:bphislop@gmail.com" className="text-coral hover:text-teal transition-colors">bphislop@gmail.com</a><br />
              <a href="tel:3039680309" className="text-coral hover:text-teal transition-colors">(303) 968-0309</a>
            </p>
          </BorderCard>
        </div>
      </div>
    </section>
  )
}

export default About
