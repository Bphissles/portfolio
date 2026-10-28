import { Link } from 'react-router-dom'
import BorderCard from '../components/BorderCard'
import useDocumentMeta from '../hooks/useDocumentMeta'

const skills = [
  { category: 'Architecture & Delivery', items: 'Solution design, cloud architecture (AWS Lightsail, EC2, S3), CMS migrations, ecommerce / ERP integration, project estimating and budgeting' },
  { category: 'AI', items: 'Claude (skills, plugins, Claude Code), prompt design, team training and enablement, workflow automation' },
  { category: 'Frontend', items: 'TypeScript, React, Next.js, Vue 3, Nuxt 3, Angular, Tailwind, Vite, pnpm, HTML5, CSS / Sass' },
  { category: 'Backend & Data', items: 'Go, Java, Spring Boot, Hibernate, REST, GraphQL, PostgreSQL, MySQL, MariaDB, sqlc' },
  { category: 'CMS & Commerce', items: 'CrafterCMS, dotCMS, Sanity.io, Shopify, MODX, Velocity, FreeMarker' },
  { category: 'Payments & Infra', items: 'Stripe Connect, Supabase, Railway, Docker, Lighthouse and accessibility audits' },
  { category: 'Process & Quality', items: 'Jira, Agile (sprints, kanban), WCAG accessibility, SEO, responsive design' },
  { category: 'Also', items: 'Python (Pandas, scikit-learn, Streamlit), Tableau, SQL / NoSQL' },
]

const proof = [
  { value: '$63K+/yr', label: 'saved for clients through CMS and video platform migrations' },
  { value: '3–4', label: 'concurrent projects led with a team of 7 developers' },
  { value: '50+', label: 'colleagues per company-wide Claude training' },
  { value: 'End to end', label: 'StageFinder ticketing platform, built and live in beta' },
]

function HomePage() {
  useDocumentMeta(
    'Solutions Architect, AI Innovation & Delivery',
    'Portfolio of Ben Hislop — Solutions Architect and hands-on engineer with 8 years building web platforms for automotive and manufacturing clients.'
  )

  return (
    <div className="container">
      <section className="py-4 md:py-8">
        <p className="text-sm md:text-lg text-coral font-semibold italic uppercase tracking-wide mb-2">Solutions Architect, AI Innovation & Delivery</p>
        <h1 className="mega-heading-3">Ben Hislop</h1>
        <p className="text-base md:text-xl text-black/70 max-w-3xl mt-4 md:mt-6 leading-relaxed">
          Solutions Architect and hands-on engineer with 8 years of experience building web platforms for automotive and manufacturing clients including Mopar, Dana, and Peterbilt. I design cloud and CMS architectures, lead technical delivery across 3–4 concurrent projects, and run AI adoption at The JRT Agency.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
          <Link to="/projects" className="btn btn-teal">View Projects</Link>
          <Link to="/about" className="btn btn-coral">About Me</Link>
          <Link to="/contact" className="btn btn-outline">Contact</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
          {proof.map((item) => (
            <div key={item.value} className="bg-black/5 rounded-lg p-4 md:p-5">
              <p className="text-2xl md:text-3xl font-bold italic text-coral">{item.value}</p>
              <p className="text-sm text-black/70 mt-1 leading-snug">{item.label}</p>
            </div>
          ))}
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
            <p className="text-coral font-bold text-base md:text-lg">Co-Founder, The StageFinder</p>
            <p className="text-black/70">Co-founded a live-music discovery and ticketing platform. I architected and built it end to end, including Stripe Connect ticketing and QR-code check-in. Public beta is live.</p>
            <Link to="/projects/stagefinder" className="btn btn-teal text-sm self-start">View Project</Link>
          </div>
          <div className="bg-black/5 p-4 md:p-6 rounded-lg flex flex-col gap-3">
            <p className="text-coral font-bold text-base md:text-lg">B.S. Computer Science — Cum Laude</p>
            <p className="text-black/70">Graduated cum laude from Metropolitan State University of Denver with a Bachelor of Science in Computer Science (December 2025).</p>
            <Link to="/education" className="btn btn-teal text-sm self-start">View Education</Link>
          </div>
          <div className="bg-black/5 p-4 md:p-6 rounded-lg flex flex-col gap-3">
            <p className="text-coral font-bold text-base md:text-lg">2024 Employee Outstanding Achievement Award</p>
            <p className="text-black/70">Recognized for excellence in technical leadership and innovation at The JRT Agency, where I founded and led a 4-person AI Innovation Team.</p>
            <Link to="/work" className="btn btn-teal text-sm self-start">View Work History</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
