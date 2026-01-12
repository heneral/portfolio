import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'

const experienceData = [
  {
    company: 'Zagweb | Florida USA | Remote',
    role: 'Senior Magento and Angular Developer',
    period: 'Aug 2023 - January 2025',
    details: [
      'Spearheaded the migration of legacy enterprise websites to Magento 2.4.6, ensuring zero data loss and improved security protocols.',
      'Engineered a custom Angular-based automation system for automotive workflows, increasing operational efficiency.',
      'Developed high-conversion Magento extensions, including countdown subscription modules and modified backorder logic.',
      'Optimized video delivery and frontend assets, significantly reducing page load times and bounce rates.'
    ]
  },  
  {
    company: 'PARIMA | Singapore | Remote',
    role: 'Full Stack Web Developer / Designer',
    period: 'November 2018 - August 2023',
    details: [
      'Managed and overhauled the corporate WordPress ecosystem, focusing on responsive design and performance tuning.',
      'Designed and deployed high-traffic event landing pages and custom WordCloud plugins for interactive data visualization.',
      'Created sophisticated HTML email templates and automated data import workflows to support marketing initiatives.',
      'Mentored junior team members in debugging complex UI/UX issues and asset optimization.'
    ]
  },
  {    
    company: 'Virtual Done Well Inc',
    role: 'Senior Web Developer/Web Designer',
    period: 'September 2016 - November 2018',
    details: [
      'Delivered end-to-end WordPress and Shopify solutions for diverse international clients, from concept to deployment.',
      'Conducted rigorous mobile application testing, executing test plans to ensure cross-platform compatibility and stability.',
      'Improved site SEO and performance metrics by implementing modern asset-loading techniques and cleaner code structures.',
      'Handled Shopify Store and create pages (landing pages), edit product images, and was a graphic designer.',
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
    role: 'PHP /Magento Developer/Software Developer',
    period: 'November 2011 – December 2013',
    details: [
      'Engineered internal enterprise-level applications using PHP and JavaScript, including biometric attendance and finance tracking systems.',
      'Developed custom Magento modules for secure payment gateway integration and complex shipping calculation algorithms.',
      'Managed the corporate e-store infrastructure, implementing custom product sorting layouts and category management logic to improve user navigation.',
      'Leveraged the Moodle framework to build and maintain specialized booking and library systems for internal company use.'
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
    <section id="experience" className="items-center px-6 py-20 md:px-20">
      <SectionHeading number="2" title="Where I've Worked" />
      <div className="max-w-3xl">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}