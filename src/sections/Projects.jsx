import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard' // This should be used below

const projectsData = [
  {
    title: 'Example Project',
    description: 'Project description',
    tech: ['React', 'Tailwind'],
    link: '#'
  }
  // Add more projects
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:px-20">
      <SectionHeading number="3" title="My Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}