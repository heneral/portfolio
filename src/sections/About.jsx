import SectionHeading from '../components/SectionHeading'
import imga from '../images/chad.png'

export default function About() {
  return (
    <section id="about" className="items-center px-6 py-20 md:px-20">
      <SectionHeading number="1" title="About Me" />
      <div className="grid md:grid-cols-5 gap-8 items-stretch">
        <div className="md:col-span-3 h-full flex flex-col justify-center min-h-[200px] space-y-4">
          <p className="text-slate">
            Hello! My name is Chad, and I'm passionate about crafting seamless and engaging digital experiences. 
            With a strong foundation in modern web technologies, I specialize in building innovative, high-performance solutions. 
            Here are some of the cutting-edge tools and technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
            {[
              'JavaScript (ES6+)',
              'React',
              'Node.js',
              'TypeScript',
              'GraphQL',
              'Magento',
              'Shopify',
              'Angular',
              'PHP',
              'VB.Net',
              'C#',
              'SQL',
              'Database Management Systems',
              'jQuery',
              'Bootstrap',
              'Tailwind CSS',
              'Joomla',
              'WooCommerce',
              'Prestashop',
              'Video Editing',
              'Email Template Creation',
              'Photoshop',
              'Adobe Illustrator',
              'Adobe After Effects',
              'Sketch',
              'Docker',
              'Autocad'
            ].map((tech) => (
              <li 
                key={tech} 
                className="flex items-center text-slate p-1.5 hover:bg-light-navy/50 rounded transition-colors"
              >
                <span className="text-customyellow mr-2 text-xs">▹</span>
                <span className="truncate">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 relative group min-h-[200px] h-full">
          <div className="w-3/4 mx-auto md:ml-auto aspect-[3/4] max-w-[300px] md:max-w-none relative">
            
            <div className="absolute inset-0 border-2 border-customyellow transform translate-x-4 translate-y-4 md:group-hover:translate-x-2 md:group-hover:translate-y-2 transition-all" />
            
            
            <div className="absolute inset-0 bg-customyellow/10 transform translate-x-2 translate-y-2 transition-all" />
            
            
            <div className="relative z-10 h-full overflow-hidden ">
              <img 
                src={imga}
                alt="Richard" 
                className="w-full h-full object-cover transform translate-x-0 translate-y-0 group-hover:scale-105 transition-all duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}