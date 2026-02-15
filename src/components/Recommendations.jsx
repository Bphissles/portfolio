import BorderCard from './BorderCard'
import CtaBanner from './CtaBanner'

function Recommendations() {
  const letters = [
    {
      author: 'Dana Cunningham',
      title: 'Lead Digital Project Manager, Fruition',
      pullQuote: 'I would highly recommend Ben for any developer role and feel confident that he will be a strong contributor wherever he lands.',
      paragraphs: [
        'I\'m happy to recommend Ben Hislop, who I worked with at The JRT Agency during my time as Director of Project Management. Ben was a developer on our team, and I had the opportunity to work closely with him across a variety of projects.',
        'Ben is extremely hardworking and dependable. When we were facing tight timelines or resource constraints, he consistently stepped up—often putting in long hours to make sure his work was completed on time and to a high standard. He takes real ownership of his responsibilities and can be counted on to follow through, even under pressure.',
        'One of Ben\'s standout qualities is his drive to keep learning and improving. He regularly researches better, faster, and more efficient ways to approach problems, and he also actively worked on furthering his education to strengthen his skills. This commitment to growth made a noticeable difference in how our projects were executed. He also served as our primary subject matter expert during the implementation of a new CMS, and his knowledge was invaluable to both the technical team and project leadership.',
        'Beyond his technical skills, Ben is thoughtful and collaborative. He contributes meaningfully during brainstorming sessions, balances multiple tasks and priorities with ease, and is consistently easy to work with. He communicates clearly, stays organized, and approaches challenges with a positive, solutions-focused mindset.',
      ],
    },
    {
      author: 'Keats Dolgin',
      title: 'Account Director, RAPP',
      pullQuote: 'Ben is the kind of employee who elevates both the work and the people around him.',
      paragraphs: [
        'I am pleased to recommend Ben Hislop, whom I had the opportunity to work closely with at The JRT Agency from January 2018 through July 2024. During that time, Ben served as a Frontend Web Developer and was a trusted peer who supported several of my projects.',
        'Ben is a true go-getter. He consistently demonstrated a proactive mindset, always willing to jump in, take ownership, and go the extra mile to ensure projects were successful. The quality of his work was always excellent, and what stood out most was his commitment to growth—if Ben didn\'t immediately know how to solve a problem or build a solution, he would research, learn, and figure it out. He is naturally curious, self-driven, and constantly pushing himself to improve his craft.',
        'Beyond his technical skillset, Ben added tremendous value to our team culture. He is friendly, approachable, and brings a sense of fun and charm to everything he does. Whether in meetings or collaborative working sessions, Ben had a way of lifting energy, building rapport, and making people feel comfortable. He was highly reliable, results-driven, collaborative, proactive, and truly a fan favorite across teams.',
        'One example that perfectly captures Ben\'s impact was when he supported me onsite at a client tradeshow to manage and maintain digital displays. Not only did he ensure everything was set up flawlessly and ran smoothly throughout the event, but he also won over the clients with his personality and professionalism. Following the event, clients specifically asked for Ben to support future events—a clear reflection of his ability to deliver outstanding work while also representing the company in a way people genuinely connect with.',
        'I have no doubt he will be a valuable asset to any team fortunate enough to have him, and I recommend him wholeheartedly for his next role.',
      ],
    },
  ]

  return (
    <section id="recommendations" className="container">
      <h3 className="mega-heading-3">Letters</h3>
      <div className="flex flex-col gap-10 md:gap-16 mt-6 md:mt-8">
        {letters.map((letter) => (
          <BorderCard key={letter.author} color="teal">
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-1">{letter.author}</h4>
            <p className="text-base md:text-lg text-coral font-semibold mb-4 md:mb-6">{letter.title}</p>
            <blockquote className="border-l-4 border-coral pl-3 md:pl-4 py-2 mb-4 md:mb-6 bg-black/5 rounded-r-lg">
              <p className="text-base md:text-xl italic text-black/90 leading-relaxed">&ldquo;{letter.pullQuote}&rdquo;</p>
            </blockquote>
            <div className="flex flex-col gap-4">
              {letter.paragraphs.map((p, i) => (
                <p key={i} className="text-black/80 leading-relaxed">{p}</p>
              ))}
            </div>
          </BorderCard>
        ))}
      </div>
      <CtaBanner
        heading="Ready to work together?"
        description="I'd love to hear about your next project."
        buttonText="Get In Touch"
        buttonTo="/contact"
        color="coral"
      />
    </section>
  )
}

export default Recommendations
