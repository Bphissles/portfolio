import BorderCard from './BorderCard'
import CtaBanner from './CtaBanner'

function Education() {
  const schools = [
    {
      name: 'Metropolitan State University of Denver',
      location: 'Denver, CO',
      degree: 'Bachelor of Science, Computer Science — Cum Laude',
      date: '12/2025',
      highlights: [
        'Graduated Cum Laude',
        "Provost's Honor Roll",
        'Upsilon Pi Epsilon Member',
        'National Society of Leadership and Success Member',
        'MSU Star Science Club Vice President',
      ],
    },
    {
      name: 'Red Rocks Community College',
      location: 'Lakewood, CO',
      degree: 'Associates of Science',
      date: '06/2013',
      highlights: [],
    },
  ]

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      code: 'SAA-C03',
      status: 'In Progress',
      expected: '05/2026',
    },
  ]

  return (
    <section id="education" className="container">
      <h3 className="mega-heading-3">Education</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-6 md:mt-8">
        <div className="lg:col-span-2">
          <h4 className="text-xl md:text-2xl font-bold text-black italic mb-6">Degrees</h4>
          <div className="flex flex-col gap-8 md:gap-12">
          {schools.map((school) => (
            <BorderCard key={school.name} color="coral">
              <h4 className="text-xl md:text-2xl font-bold text-black italic">{school.name}</h4>
              <p className="text-base md:text-lg text-teal font-semibold">{school.degree}</p>
              <p className="text-sm text-black/60 mb-4">{school.location} &middot; {school.date}</p>
              {school.highlights.length > 0 && (
                <ul className="list-disc list-outside ml-4 flex flex-col gap-2">
                  {school.highlights.map((item, i) => (
                    <li key={i} className="text-black/80">{item}</li>
                  ))}
                </ul>
              )}
            </BorderCard>
          ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-black italic mb-6">Certifications</h4>
          <div className="flex flex-col gap-6">
            {certifications.map((cert) => (
              <BorderCard key={cert.name} color="teal">
                <h5 className="text-base md:text-lg font-bold text-black">{cert.name}</h5>
                <p className="text-sm text-coral font-semibold">{cert.issuer}</p>
                <p className="text-sm text-black/60">{cert.code}</p>
                <span className="inline-block mt-2 text-xs font-semibold uppercase tracking-wide bg-teal/20 text-black px-2 py-1">
                  {cert.status} &middot; Expected {cert.expected}
                </span>
              </BorderCard>
            ))}
          </div>
        </div>
      </div>
      <CtaBanner
        heading="See it in action"
        description="Check out the projects where I apply these skills."
        buttonText="View Projects"
        buttonTo="/projects"
        color="teal"
      />
    </section>
  )
}

export default Education
