import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard' // This should be used below

const projectsData = [
  {
    title: 'Azalea Hotel and Restaurant Baguio',
    description: 'Architected and deployed a fully custom WordPress website for Azalea Hotel and Restaurant Baguio, including proprietary plugins for real-time booking, reservations, and menu management.',
    tech: ['Wordpress', 'Javascript(es6)', 'Google Analytics', 'SEO'],
    link: 'https://www.azaleabaguio.com/'
  },
  {
    title: 'Chinkee Tan Blog and e Store',
    description: 'Orchestrated a full-scale digital overhaul for Chinkee Tan by migrating the WordPress blog to WP Engine for optimized performance, configuring secure email infrastructure, and architecting a custom Shopify storefront to scale book sales.',
    tech: ['Wordpress', 'Javascript(es6)', 'Shopify', 'Active Campaign', 'Google Analytics', 'SEO', 'Elementor'],
    link: 'https://chinkeetan.com/'
  },
  {
    title: 'Aboitiz Company',
    description: 'Modernized the Aboitiz corporate platform by integrating a Nuxt.js frontend with WordPress, leveraging CanvasJS for data visualization and jQuery/MomentJS to deliver a high-performance, SEO-optimized, and secure user experience.',
    tech: ['Wordpress', 'CanvasJS', 'jQuery', 'MomentJS', 'Nuxt.js'],
    link: 'https://aboitiz.com/'
  },
  {
    title: 'Universal Home Theatre',
    description: 'Led a seamless platform migration to WooCommerce for Universal Home Theatre, optimizing business operations through advanced payment gateway configurations and tracking integrations like Bing UET and Infusionsoft to drive marketing ROI.',
    tech: ['Woocommerce', 'Infusionsoft', 'Google Analytics', 'Bing Universal Event Tracking', 'Cloudflare JS'],
    link: 'https://www.universalhometheatre.com.au/'
  },
  {
    title: 'UK Funerals',
    description: 'Developed the UK Funerals web ecosystem from the ground up using PHP and HTML5, delivering a high-performance, SEO-optimized interface featuring interactive service locators and streamlined member management tools.',
    tech: ['PHP', 'HTML5', 'Bootstrap'],
    link: 'http://www.uk-funerals.co.uk/'
  },
  {
    title: 'Home Zone',
    description: 'Orchestrated the transition of Home Zone Furniture to Shopify, optimizing the ecosystem with custom React components, streamlined payment integrations, and performance-tuned shipping configurations to enhance the end-to-end customer journey.',
    tech: ['Shopify', 'React', 'jQuery' ],
    link: 'https://homezonefurniture.com/'
  },
  {
    title: 'Coffin World',
    description: 'Led the legacy migration of Coffin World from Magento 1.8 to Shopify, maintaining total data integrity across complex catalogs while developing a custom jQuery branch locator plugin and integrating Live Chat to enhance real-time customer engagement.',
    tech: ['Shopify', 'jQuery', 'Google Analytics', 'Live Chat' ],
    link: 'https://coffinworld.com.au/'
  },
  {
    title: 'World Bank Group - Research Management System',
    description: 'Developed a comprehensive Research Management System (RMS) web and mobile application for student data monitoring in Mindanao (BARMM). The cross-platform solution provides a centralized platform for tracking research progress, storing academic records, and generating reports for data-driven decision-making, accessible from both desktop and mobile devices.',
    tech: ['Typescript', 'React', 'React Native'],
    link: 'https://adpa.space/'
  },
  {
    title: 'John Louis Home',
    description: 'Successfully migrated John Louis Home from Magento 2.1.6 to Magento 2.4.6, ensuring a seamless transition with minimal downtime. Upgraded the platform for enhanced performance, security, and scalability, while preserving all products, customer data, orders, and custom functionalities. Optimized the new version with faster loading speeds, improved checkout experience, and modern security patches, ensuring a future-proof and efficient e-commerce operation. Conducted extensive testing and validation to guarantee a smooth user experience and compliance with the latest Magento standards.',
    tech: ['Magento', 'PHP', 'ReactJs', 'Bootstrap'],
    link: 'https://www.johnlouishome.com/'
  },
  {
    title: 'NEDA Philippines Government Website',
    description: 'Modernized the NEDA Philippines official website by integrating a React-based frontend with WordPress, ensuring high-speed performance, advanced security, and full compliance with government accessibility standards.',
    tech: ['Wordpress', 'PHP', 'React', 'Bootstrap', 'Javascript'],
    link: 'https://sdg.neda.gov.ph/'
  },
  {
    title: 'PARIMA - Pan-Asia Risk and Insurance Management Association',
    description: 'Upgraded the PARIMA website using WordPress and React, delivering a custom WordCloud plugin and performance-tuned event pages to streamline survey data collection and improve user engagement.',
    tech: ['Wordpress', 'PHP', 'jQuery', 'Bootstrap', 'Javascript', 'ReactJs'],
    link: 'https://parima.org/'
  }
  // Add more projects
]

export default function Projects() {
  return (
    <section id="projects" className="items-center px-6 py-20 md:px-20">
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