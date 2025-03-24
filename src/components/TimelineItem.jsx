import { motion } from 'framer-motion'

export default function TimelineItem({ company, role, period, details }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l-2 border-lightest-navy py-6"
    >
      <div className="absolute w-3 h-3 bg-customyellow rounded-full -left-[7px] top-6" />
      <h3 className="text-2xl text-lightest-slate">{company}</h3>
      <p className="text-slate mt-2">{role}</p>
      <p className="text-sm text-lightest-navy mt-1">{period}</p>
      <ul className="mt-4 space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-slate flex items-start">
            <span className="text-customyellow mr-2">▹</span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}