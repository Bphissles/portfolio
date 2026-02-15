import BorderCard from './BorderCard'

function Work() {
  const jobs = [
    {
      title: 'Senior Frontend Web Developer',
      company: 'The JRT Agency',
      location: 'Farmington, MI',
      dates: '05/2023 – Present',
      bullets: [
        'Founded and lead a 4-person AI Innovation Team, spearheading "AI forward" project planning and piloting integration tools to modernize agency workflows.',
        'Champion internal AI education by publishing a bi-weekly newsletter showcasing actionable AI applications for creative and technical departments.',
        'Architected enterprise-level solutions using Java and Spring Boot, leveraging AWS S3 for scalable asset storage and Hibernate for data persistence.',
        'Direct project lifecycles by developing budgets, project plans, and collaborating with PM teams on resource delegation.',
        'Mentor junior developers, conducting code reviews and guiding best practices in Vue 3, Nuxt 3, and headless CMS implementations including dotCMS and CrafterCMS.',
        'Received the 2024 Employee Outstanding Achievement Award for excellence in technical leadership and innovation.',
      ],
    },
    {
      title: 'Frontend Web Developer',
      company: 'The JRT Agency',
      location: 'Farmington, MI',
      dates: '12/2018 – 05/2023',
      bullets: [
        'Architected data structures for client-driven content systems using dotCMS and CrafterCMS, and created custom dashboards in Sanity.io.',
        'Modernized legacy sites by migrating to headless architectures and maintaining Angular, Ionic, and Vue-based applications.',
        'Served as Accessibility Expert, ensuring B2C websites remained compliant with current web accessibility standards.',
        'Collaborated with designers to solve complex UX challenges while maintaining strict brand guidelines.',
        'Developed technical quotes for client requests by identifying project complexities and estimating development hours.',
      ],
    },
    {
      title: 'Technical Support Specialist / Adjudicator',
      company: 'Kelly Services',
      location: 'Troy, MI',
      dates: '10/2017 – 11/2018',
      bullets: [
        'Made final determinations on candidate eligibility based on various client policy\'s.',
        'Explained technical information in clear terms to non-technical individuals to promote better understanding.',
        'Work alongside UiPath and Blue Prism Robotic Process Automation systems, to increase efficiency and reduce TAT on orders.',
        'Developed and implemented workflows when Salesforce or other systems went offline.',
        'Supported Intakers, and adjudication teams, during high volume periods.',
        'Implemented company policies, technical Procedures and standards for preserving integrity and security of data, reports and access.',
      ],
    },
  ]

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
                <li key={i} className="text-black/80">{bullet}</li>
              ))}
            </ul>
          </BorderCard>
        ))}
      </div>
    </section>
  )
}

export default Work
