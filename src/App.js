import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function App() { 
  return (
    <Router>
      <div className="bg-navy text-lightest-slate">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}