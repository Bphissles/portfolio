import BorderCard from './BorderCard'
import CtaBanner from './CtaBanner'

const jobs = [
  {
    title: 'Co-Founder, Product & Engineering',
    company: 'The StageFinder',
    location: 'Denver, CO',
    dates: '03/2026 – Present',
    bullets: [
      'Co-founded a live-music discovery and ticketing platform with one partner. I own product, engineering, and DevOps; the public beta is live at stagefinder.fm.',
      'Architected the stack: Go REST API, Postgres (Supabase, sqlc), and a Next.js / React / TypeScript front end, with S3 media storage and an AWS hosting migration in progress. Replaced a third-party headless CMS with first-party data models to cut vendor dependency.',
      'Built ticketing on Stripe Connect with itemized pass-through fees, so the platform never absorbs processing costs, plus checkout capacity limits, owner payouts, and QR-code check-in.',
      'Built role-based admin tools and a booking-consent workflow that lets promoters request claimed artists and venues.',
    ],
  },
  {
    title: 'Solutions Architect, AI Innovation & Delivery',
    company: 'The JRT Agency',
    location: 'Farmington, MI (Remote)',
    dates: '08/2026 – Present',
    labeled: true,
    bullets: [
      'Technical project management: Run 3–4 concurrent client projects with a team of 7 developers in Jira, designing sprint cadences for some projects and managing kanban boards for others.',
      'Client consulting: Work directly with clients on nearly every project, joining kickoffs as both PM and technical lead, running requirements sessions with client stakeholders and their engineers (including platform and integration requirements for a Shopify build), and presenting plans and recommendations.',
      'Architecture documentation: Produce architecture diagrams for review by our data team, systems administrator, and developers, and polished handover documentation when a client takes over day-to-day operation.',
      'Cost reduction: Moved seven Vimeo accounts, each set to rise from about $200 to $4,800 per year, to Bunny Stream ($12–$60/yr) and SproutVideo ($144/yr), avoiding roughly $33,600 a year in increases.',
      'Migrations: Designed, implemented, and delegated multisite migrations from dotCMS to CrafterCMS, saving clients $30,000 a year in licensing fees.',
      'Cloud & commerce architecture: Designed AWS architectures for two client sites (Lightsail; EC2 with MariaDB and MySQL), each with dev and production environments, and ecommerce strategies connecting client ERP systems with Shopify.',
      'Front-end platform: Prototyped consolidating Vue apps under one pnpm workspace to end version drift, and eliminated merge conflicts caused by committing dist files.',
      'AI enablement: Led two company-wide Claude trainings (prompting; Claude Design) for 50+ attendees each, plus small-group sessions of 4–6 people tailored to each team\'s workflow, including working with Claude in OneDrive.',
      'AI tooling: Build reusable Claude skills on request with coworkers (UTM generation, news-article formatting) and CrafterCMS plugins in the rich-text editor that draft copy in company tone from existing content. Built AI-assisted Lighthouse and accessibility audits, tailored per site and run monthly across all of the agency\'s sites.',
    ],
  },
  {
    title: 'Senior Frontend Web Developer',
    company: 'The JRT Agency',
    location: 'Farmington, MI',
    dates: '05/2023 – 08/2026',
    bullets: [
      'Founded and led a 4-person AI Innovation Team that piloted AI tools in agency project planning, and wrote a bi-weekly newsletter on practical AI uses.',
      'Built enterprise services on Java, Spring Boot, and Hibernate with S3-backed asset storage.',
      'Owned project budgets, plans, and resourcing with PM teams, and mentored junior developers through code review in Vue 3 and Nuxt 3.',
      'Received the 2024 Employee Outstanding Achievement Award for technical leadership and innovation.',
    ],
  },
  {
    title: 'Frontend Web Developer',
    company: 'The JRT Agency',
    location: 'Farmington, MI',
    dates: '12/2018 – 05/2023',
    bullets: [
      'Modeled content for client-driven sites in dotCMS and CrafterCMS and built custom Sanity.io dashboards.',
      'Moved legacy sites to headless architectures and maintained Angular, Ionic, and Vue applications.',
      'Served as accessibility lead for B2C sites and scoped client requests into technical quotes and hour estimates.',
    ],
  },
  {
    title: 'Technical Support Specialist / Adjudicator',
    company: 'Kelly Services',
    location: 'Troy, MI',
    dates: '10/2017 – 11/2018',
    bullets: [
      'Made final determinations on candidate eligibility based on various client policies.',
      'Explained technical information in clear terms to non-technical individuals to promote better understanding.',
      'Worked alongside UiPath and Blue Prism Robotic Process Automation systems to increase efficiency and reduce turnaround time on orders.',
      'Developed and implemented workflows for when Salesforce or other systems went offline.',
      'Supported intake and adjudication teams during high-volume periods.',
      'Implemented company policies, technical procedures, and standards for preserving the integrity and security of data, reports, and access.',
    ],
  },
]

function Work() {
  return (
    <section id="work" className="container">
      <h3 className="mega-heading-3">Work</h3>
      <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-8">
        {jobs.map((job) => (
          <BorderCard key={job.title + job.dates} color="teal">
            <h4 className="text-xl md:text-2xl font-bold text-black italic">{job.title}</h4>
            <p className="text-base md:text-lg text-coral font-semibold">{job.company} &middot; {job.location}</p>
            <p className="text-sm text-black/60 mb-4">{job.dates}</p>
            <ul className="list-disc list-outside ml-4 flex flex-col gap-2">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="text-black/80">
                  {job.labeled ? (
                    <>
                      <span className="font-bold text-black">{bullet.slice(0, bullet.indexOf(':') + 1)}</span>
                      {bullet.slice(bullet.indexOf(':') + 1)}
                    </>
                  ) : bullet}
                </li>
              ))}
            </ul>
          </BorderCard>
        ))}
      </div>
      <p className="text-sm md:text-base text-black/60 mt-8 md:mt-12">
        <span className="font-semibold text-black/80">Earlier career:</span> Restaurant management, including teams of 20+ staff (2010–2016).
      </p>
      <CtaBanner
        heading="Like what you see?"
        description="I'm open to new opportunities — let's talk."
        buttonText="Get In Touch"
        buttonTo="/contact"
        color="coral"
      />
    </section>
  )
}

export default Work
