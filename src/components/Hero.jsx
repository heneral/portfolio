import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2
    }
  }
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
}

export default function Hero() {
  const title = "Transforming ideas into functional web experiences."
  
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-customyellow font-mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Richard Sawanaka.
        </h1>
        
        <motion.div
          className="text-4xl md:text-6xl font-bold text-slate mb-6 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split(' ').map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2 whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-slate max-w-2xl">
          I am a Full Stack Developer with 10+ years of experience specializing in Shopify, Magento, WordPress, PHP, JavaScript, React, .Net and Angular. I build high-performance e-commerce solutions and custom web applications that are scalable, user-friendly, and optimized for business growth.
        </p>
      </motion.div>
    </section>
  )
}