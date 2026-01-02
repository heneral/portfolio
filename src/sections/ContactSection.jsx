import SectionHeading from '../components/SectionHeading'
import Contact from '../components/Contact'

export default function ContactSection() {
  return (
    <section id="contact" className="items-center px-6 py-20 md:px-20">
      <SectionHeading number="5" title="Get In Touch" />
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-slate mb-8">
        I'm actively seeking new opportunities and ready to bring my skills to your team! If you're looking for a dedicated professional or just want to connect, feel free to reach out—I'd love to discuss how I can contribute to your success!
        </p>
        <Contact />
      </div>
    </section>
  )
}