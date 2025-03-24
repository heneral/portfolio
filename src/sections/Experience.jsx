import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'

const experienceData = [
  {
    company: 'Zagweb',
    role: 'Magento Full Stack Developer / Angular Developer',
    period: 'Aug 2023 - Jan 2025',
    details: [
      'Led development of customer-facing dashboard',
      'Implemented microservices architecture',
      'Mentored junior developers'
    ]
  },
  // Add more experience objects
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <SectionHeading number="2" title="Where I've Worked" />
      <div className="max-w-3xl">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}