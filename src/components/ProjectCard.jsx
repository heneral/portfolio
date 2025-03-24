import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-light-navy rounded-lg p-6 hover:shadow-xl transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl text-lightest-slate">{title}</h3>
        <a 
          href={link} 
          className="text-green hover:text-green/80 transition-colors"
          aria-label="View project"
        >
          ↗
        </a>
      </div>
      <p className="text-slate mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-navy text-customyellow font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}