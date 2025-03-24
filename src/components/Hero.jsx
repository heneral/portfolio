import { motion } from 'framer-motion'

export default function Hero() {
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
        <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
        Transforming ideas into functional web experiences.
        </h2>
        <p className="text-slate max-w-2xl">
        I am a Full-Stack Developer & Web Designer with 10+ years of experience specializing in Shopify, Magento, WordPress, PHP, and JavaScript. I build high-performance e-commerce solutions and custom web applications that are scalable, user-friendly, and optimized for business growth.
        </p>
      </motion.div>
    </section>
  )
}