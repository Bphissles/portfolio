import { Link } from 'react-router-dom'
import BorderCard from '../components/BorderCard'

function HomePage() {
  const skills = [
    { category: 'Frontend', items: 'Vue.js, Nuxt.js, Angular, React, TypeScript, jQuery' },
    { category: 'Backend & Architecture', items: 'Java, Spring Boot, REST APIs, GraphQL, WebSockets' },
    { category: 'CMS & Templating', items: 'CrafterCMS, dotCMS, Sanity.io, MJDX, Velocity, FreeMarker' },
    { category: 'AI & Data Science', items: 'Python, Pandas, NumPy, Scikit-learn, SQL, NoSQL, Tableau' },
    { category: 'Design & Strategy', items: 'UI/UX Design, Responsive Design, Accessibility (WCAG), Agile Methodology' },
  ]

  return (
    <div className="container">
      <section className="py-4 md:py-8">
        <p className="text-sm md:text-lg text-coral font-semibold italic uppercase tracking-wide mb-2">Senior Frontend Developer & AI Innovation Lead</p>
        <h1 className="mega-heading-3">Ben Hislop</h1>
        <p className="text-base md:text-xl text-black/70 max-w-3xl mt-4 md:mt-6 leading-relaxed">
          Over 8 years of experience building high-performance web applications for the automotive, manufacturing, and energy sectors. Expert in bridging modern frontend frameworks with robust enterprise backend architectures and CMS platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
          <Link to="/projects" className="btn btn-teal">View Projects</Link>
          <Link to="/about" className="btn btn-coral">About Me</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
        </div>
      </section>

      <section className="py-8 md:py-16 border-t border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold italic text-black">Skills & Expertise</h2>
          <Link to="/work" className="btn btn-coral text-sm self-start sm:self-auto">Work History</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <BorderCard key={skill.category} color="teal">
              <h3 className="font-bold text-black text-lg mb-1">{skill.category}</h3>
              <p className="text-black/70">{skill.items}</p>
            </BorderCard>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16 border-t border-black/10">
        <h2 className="text-2xl md:text-3xl font-bold italic text-black mb-4">Recent Highlights</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-black/5 p-4 md:p-6 rounded-lg flex flex-col gap-3">
            <p className="text-coral font-bold text-base md:text-lg">B.S. Computer Science — Cum Laude</p>
            <p className="text-black/70">Graduated cum laude from Metropolitan State University of Denver with a Bachelor of Science in Computer Science (December 2025).</p>
            <Link to="/education" className="btn btn-teal text-sm self-start">View Education</Link>
          </div>
          <div className="bg-black/5 p-4 md:p-6 rounded-lg flex flex-col gap-3">
            <p className="text-coral font-bold text-base md:text-lg">2024 Employee Outstanding Achievement Award</p>
            <p className="text-black/70">Recognized for excellence in technical leadership and innovation at The JRT Agency, where I lead a 4-person AI Innovation Team modernizing agency workflows.</p>
            <Link to="/work" className="btn btn-teal text-sm self-start">View Work History</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
