import SectionHeading from '../components/SectionHeading'
import Contact from '../components/Contact'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:px-20">
      <SectionHeading number="4" title="Get In Touch" />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-slate mb-8">
          I'm currently looking for new opportunities! Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <Contact />
      </div>
    </section>
  )
}