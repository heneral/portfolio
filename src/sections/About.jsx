import SectionHeading from '../components/SectionHeading'
import imga from '../images/chad.png'

export default function About() {
  return (
    <section id="about" className="items-center px-6 py-20 md:px-20">
      <SectionHeading number="1" title="About Me" />
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4">
          <p className="text-slate">
          Hello! My name is Chad, and I'm passionate about crafting seamless and engaging digital experiences. With a strong foundation in modern web technologies, I specialize in building innovative, high-performance solutions. Here are some of the cutting-edge tools and technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
            {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'Magento', 'Shopify', 'Angular', 'PHP', 'VB.Net', 'C#', 'SQL', 'Database Management Systems', 'jQuery', 'Bootstrap', 'TailwindCss', 'Joomla', 'Woocommerce','Prestashop', 'Video Editing', 'Email Template Creator', 'Photoshop', 'Adobe Illustrator', 'Adobe After Effect', 'Sketch', 'Docker', 'Autocad'].map((tech) => (
              <li key={tech} className="flex items-center text-slate">
                <span className="text-customyellow mr-2">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2 relative group min-h-[200px]">     
          <div className="w-3/4 h-full absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 -right-4 md:-right-4 -top-4 group-hover:-right-2 group-hover:-top-1 transition-all" />
          <div className="w-3/4 h-full bg-customyellow/50 absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 -right-2 md:-right-2 -top-2" />
          <div className="relative z-10 w-3/4 mx-auto md:ml-auto aspect-[3/4] max-w-[300px] md:max-w-none">
            <img 
              src={imga}
              alt="Richard" 
              className="w-full h-full object-cover transform translate-x-0 md:translate-x-4 translate-y-0 md:translate-y-4 group-hover:translate-x-0 md:group-hover:translate-x-2 group-hover:translate-y-0 md:group-hover:translate-y-2 transition-all" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}