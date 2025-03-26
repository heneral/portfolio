import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'

const experienceData = [
  {
    company: 'Zagweb',
    role: 'Magento Full Stack Developer / Angular Developer',
    period: 'Aug 2023 - January 2025',
    details: [
      'Developed custom Magento templates',
      'Implement Video optimization',
      'Created an extension for countdown email subscriptions and modified some extension like backorders and subscription list storage backend, debugged and fixed various issues',
      'Integrated new features, and migrated an old website to Magento 2.4.6',
      'Create a angular automation car system using angular'
    ]
  },  
  {
    company: 'PARIMA | Singapore',
    role: 'Web Developer / Web Designer / Admin Technical Staff / Email Templates Creator',
    period: 'November 2018 - August 2023',
    details: [
      'Modified the PARIMA website using WordPress',
      'Created event and landing pages, and optimized performance to reduce bounce rates.',
      'Designed email templates for events',
      'Developed a WordCloud plugin',
      'Assist teammates with debugging, design, data imports, and editing event videos.'
    ]
  },
  {    
    company: 'Virtual Done Well Inc',
    role: 'Senior Web Developer/Web Designer/Mobile Apps Tester/Graphic Designer',
    period: 'September 2016 - November 2018',
    details: [
      'Designed and developed custom websites using WordPress for small businesses and non profit organizations clients',
      'Utilized modern front-end frameworks (e.g., Bootstrap) to create visually appealing and responsive layouts.',
      'Managed projects from initial concept to final deployment, ensuring timely delivery and client satisfaction.',
      'Handled Shopify Store and create pages (landing pages), edit product images, and was a graphic designer.',
      'Improved client site load times and performance through optimization techniques, resulting in reduced bounce rates.',
      'Developing and executing test plans for new and existing applications. Monitoring and analyzing application performance.'
    ]
  },
  {    
    company: 'GoCmms',
    role: 'Video Editor, SEO',
    period: 'December 2013 - September 2016',
    details: [
      'Research relevant keywords using tools like Google Keyword Planner',
      'Hook viewers in the first 5-10 seconds to improve watch time',
      'Use engaging visuals, transitions, and effects to maintain viewer retention.',
      'Keep videos concise and valuable (optimize length based on audience preferences)',
      'Use H.264 (MP4) codec for optimal compression and quality, and encode with AAC audio codec (128kbps minimum for clarity).'
    ]
  },
  {    
    company: 'Sunway BPO Inc',
    role: 'PHP Developer/Magento Developer/Software Developer',
    period: 'November 2011 – December 2013',
    details: [
      'Developed company software applications, including a biometrics system, finance system, booking system, and book system, using PHP and JavaScript.',
      'Managed the company e-store using Magento, developed a module integrating a payment method, and created a custom shipping method, product categories, and sorting layout.'
    ]
  },
  {    
    company: 'Rogationist College Davao',
    role: 'I.T Instructor',
    period: 'January 2006- August 2009',
    details: [
      'I specialize in teaching college students programming languages such as C++, .NET, C#, HTML5, CSS, Javascript and XML, helping them build a strong foundation in software development. My teaching approach combines theory with hands-on practice, ensuring students not only understand programming concepts but also apply them in real-world projects.',
      'Developed a comprehensive Library System for the school using VB.Net, enabling efficient book management, student borrowing and return tracking, and an organized cataloging system to enhance accessibility and usability.'
    ]
  }
  // Add more experience objects
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:px-20">
      <SectionHeading number="2" title="Where I've Worked" />
      <div className="max-w-3xl">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}