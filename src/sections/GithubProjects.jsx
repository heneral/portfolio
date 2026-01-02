import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'

// Custom tech stack for specific repositories
const customRepoTech = {
  'payroll-management-system': {
    languages: ['Laravel', 'Vue.js'],
    description: 'A modern, professional payroll management system built with Laravel and Vue.js for streamlined employee management, attendance tracking, and payroll processing.'
  },
  'event-management-system': {
    languages: ['Ruby on Rails', 'Bootstrap'],
    description: 'A full-featured event management web application with user authentication, ticket system, and automated email notifications.'
  },
  'word-cloud': {
    languages: ['Python', 'Streamlit'],
    description: 'A simple survey form that collects words or short text responses, automatically saving them for later analysis and word cloud generation.'
  },
  'ai-chatbot': {
    languages: ['Python', 'Streamlit'],
    description: 'A bean-powered AI chatbot with a clean, user-friendly web interface for real-time conversation simulation.'
  },
  'Cryptocurrency-App': {
    languages: ['React', 'Vite'],
    description: 'A web application displaying real-time cryptocurrency prices and market information using the CoinGecko API.'
  },
  'portfolio': {
    languages: ['React', 'Tailwind CSS'],
    description: 'Personal portfolio website built with React, Tailwind CSS, and Framer Motion showcasing projects and experience.'
  }
}

const githubReposData = [
  {
    name: 'portfolio-website',
    description: 'My personal portfolio website built with React, Tailwind CSS, and Framer Motion',
    html_url: 'https://github.com/yourusername/portfolio-website',
    homepage: 'https://yourportfolio.com',
    topics: ['react', 'tailwindcss', 'framer-motion', 'portfolio'],
    stargazers_count: 15,
    forks_count: 3
  },
  {
    name: 'ecommerce-platform',
    description: 'Full-stack e-commerce platform with Shopify integration',
    html_url: 'https://github.com/yourusername/ecommerce-platform',
    homepage: '',
    topics: ['shopify', 'react', 'nodejs', 'ecommerce'],
    stargazers_count: 28,
    forks_count: 7
  },
  {
    name: 'wordpress-custom-plugin',
    description: 'Custom WordPress plugin for advanced booking and reservation management',
    html_url: 'https://github.com/yourusername/wordpress-custom-plugin',
    homepage: '',
    topics: ['wordpress', 'php', 'plugin'],
    stargazers_count: 12,
    forks_count: 4
  }
  // Add your actual GitHub repositories here
]

export default function GithubProjects() {
  const [repos, setRepos] = useState(githubReposData)
  const [loading, setLoading] = useState(false)

  // Fetch real data from GitHub API
  useEffect(() => {
    const fetchGithubRepos = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://api.github.com/users/heneral/repos?sort=updated&per_page=6')
        const data = await response.json()
        setRepos(data.filter(repo => !repo.fork)) // Filter out forked repos
      } catch (error) {
        console.error('Error fetching GitHub repos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGithubRepos()
  }, [])

  return (
    <section id="github" className="items-center px-6 py-20 md:px-20">
      <SectionHeading number="4" title="GitHub Projects" />
      
      {loading ? (
        <div className="text-center text-slate">Loading repositories...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => {
            const customTech = customRepoTech[repo.name]
            const displayDescription = customTech?.description || repo.description || 'No description available'
            const languages = customTech?.languages || (repo.language ? [repo.language] : [])
            
            return (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light-navy p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate/10"
            >
              <div className="flex justify-between items-start mb-4">
                <svg className="w-10 h-10 text-customyellow" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                </svg>
                <div className="flex gap-4 text-slate text-sm">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                    </svg>
                    {repo.forks_count}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {repo.name}
              </h3>
              
              <p className="text-slate text-sm mb-4 line-clamp-3">
                {displayDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {languages.map((lang, idx) => (
                  <span key={idx} className="text-xs text-white font-mono bg-slate/20 px-2 py-1 rounded flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-customyellow"></span>
                    {lang}
                  </span>
                ))}
                {repo.topics && repo.topics.length > 0 && (
                  <>
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs text-customyellow font-mono bg-customyellow/10 px-2 py-1 rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </>
                )}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customyellow hover:text-white transition-colors text-sm font-mono flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-white transition-colors text-sm font-mono flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
            )
          })}
        </div>
      )}

      <div className="text-center mt-12">
        <a
          href="https://github.com/heneral"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-customyellow text-customyellow px-6 py-3 rounded hover:bg-customyellow/10 transition-all font-mono text-sm"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  )
}
