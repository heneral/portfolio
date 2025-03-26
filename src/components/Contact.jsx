export default function Contact() { 

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex gap-4 flex-col sm:flex-row">    
        <a
          href="mailto:richardsawanaka@gmail.com"
          className="px-8 py-3 text-center bg-transparent border-2 border-customyellow text-customyellow rounded hover:bg-customyellow/10 transition-colors font-mono flex-1"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/richard-sawanaka-00b39b92/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 text-center bg-transparent border-2 border-[#0A66C2] text-[#0A66C2] rounded hover:bg-[#0A66C2]/10 transition-colors font-mono flex-1"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  )
}