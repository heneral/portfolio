import SectionHeading from '../components/SectionHeading'
import imga from '../images/chad.png'

export default function About() {
  return (
    <section id="about" className="py-20 md:px-20">
      <SectionHeading number="1" title="About Me" />
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4">
          <p className="text-slate">
            Hello! My name is Chad with a passion for building digital experiences. 
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
            {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'Magento', 'Shopify', 'Angular', 'PHP', 'VB.Net', 'C#', 'SQL', 'Database Management Systems', 'jQuery', 'Bootstrap', 'TailwindCss', 'Joomla', 'Woocommerce','Prestashop', 'Video Editing', 'Email Template Creator'].map((tech) => (
              <li key={tech} className="flex items-center text-slate">
                <span className="text-customyellow mr-2">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 relative group min-h-[200px]">
  {/* Decorative elements */}
  <div className="w-3/4 h-full absolute -right-4 group-hover:-right-2 group-hover:-top-2 transition-all" />
  <div className="w-3/4 h-full bg-customyellow/50 absolute -right-2" />
  
  {/* Image container */}
  <div className="relative z-10 w-3/4 ml-auto aspect-[3/4]"> {/* Adjust aspect ratio as needed */}
    <img 
      src={imga}
      alt="Richard" 
      className="w-full h-full object-cover transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all" 
    />
  </div>
</div>
      </div>
    </section>
  )
}