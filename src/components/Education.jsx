import BorderCard from './BorderCard'

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

  return (
    <section id="education" className="container">
      <h3 className="mega-heading-3">Education</h3>
      <div className="flex flex-col gap-8 md:gap-12 mt-6 md:mt-8">
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
    </section>
  )
}

export default Education
