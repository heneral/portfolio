import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => alert('Message sent!'),
      (error) => alert(`Error: ${error.text}`)
    )
  }

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input 
          type="text" 
          name="name"
          placeholder="Name"
          required
          className="w-full bg-light-navy rounded px-4 py-3 text-lightest-slate placeholder-slate focus:outline-none focus:ring-2 focus:ring-green"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email"
          required
          className="w-full bg-light-navy rounded px-4 py-3 text-lightest-slate placeholder-slate focus:outline-none focus:ring-2 focus:ring-green"
        />
      </div>
      <textarea
        name="message"
        rows="5"
        placeholder="Message"
        required
        className="w-full bg-light-navy rounded px-4 py-3 text-lightest-slate placeholder-slate focus:outline-none focus:ring-2 focus:ring-green"
      />
      <button
        type="submit"
        className="px-8 py-3 bg-transparent border-2 border-green text-green rounded hover:bg-green/10 transition-colors font-mono"
      >
        Send Message
      </button>
    </form>
  )
}