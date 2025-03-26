import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard' // This should be used below

const projectsData = [
  {
    title: 'Azalea Hotel and Restaurant Baguio',
    description: 'Created the Azalea Hotel and Restaurant Baguio website from scratch using WordPress, including custom themes and plugins for booking, reservations, and menu management.',
    tech: ['Wordpress', 'Javascript(es6)', 'Google Analytics', 'SEO'],
    link: 'https://www.azaleabaguio.com/'
  },
  {
    title: 'Chinkee Tan Blog and e Store',
    description: 'Revamped the Chinkee Tan website using WordPress and WP Engine, set up email hosting, and developed a Shopify store for book sales.',
    tech: ['Wordpress', 'Javascript(es6)', 'Shopify', 'Active Campaign', 'Google Analytics', 'SEO', 'Elementor'],
    link: 'https://chinkeetan.com/'
  },
  {
    title: 'Aboitiz Company',
    description: 'Revamped the Aboitiz website using WordPress, enhancing its design, performance, and user experience. Implemented a modern, responsive layout, optimized site speed, and improved SEO for better visibility. Additionally, integrated advanced security features, streamlined content management, and ensured seamless navigation to enhance user engagement and accessibility.',
    tech: ['Wordpress', 'CanvasJS', 'jQuery', 'MomentJS', 'Nuxt.js'],
    link: 'https://aboitiz.com/'
  },
  {
    title: 'Universal Home Theatre',
    description: 'Migrated the entire store from Prestashop to WooCommerce, ensuring a seamless transition of products, customer data, and order history while maintaining full website functionality. Optimized the new WooCommerce setup by configuring payment gateways, shipping methods, SEO, and performance enhancements to improve user experience and business operations.',
    tech: ['Woocommerce', 'Infusionsoft', 'Google Analytics', 'Bing Universal Event Tracking', 'Cloudflare JS'],
    link: 'https://www.universalhometheatre.com.au/'
  },
  {
    title: 'UK Funerals',
    description: 'Developed the UK Funerals website from scratch using PHP, HTML, and Bootstrap, ensuring a fully responsive and user-friendly design. Implemented key functionalities such as service listings, online inquiries, and contact forms while optimizing the website for performance, accessibility, and SEO to enhance user experience and visibility.',
    tech: ['PHP', 'HTML5', 'Bootstrap'],
    link: 'http://www.uk-funerals.co.uk/'
  },
  {
    title: 'Home Zone',
    description: 'Migrated Home Zone Furniture from WooCommerce to Shopify, ensuring a seamless transfer of products, customer data, and order history while maintaining website functionality. Optimized the Shopify setup by configuring payment gateways, shipping options, and a customized theme to enhance user experience, improve site performance, and streamline store management.',
    tech: ['Shopify', 'React', 'jQuery' ],
    link: 'https://homezonefurniture.com/'
  },
  {
    title: 'Coffin World',
    description: 'Successfully transitioned CoffinWorld from Magento 1.8 to Shopify, modernizing the platform for improved performance, security, and ease of management. Rebuilt the store structure, migrated product catalogs, customer records, and historical orders while ensuring data integrity. Customized the Shopify theme to align with the brand’s aesthetics, integrated necessary payment and shipping solutions, and optimized the site for better navigation and mobile responsiveness, create a plugin for branch locator map and providing a seamless shopping experience for customers.',
    tech: ['Shopify', 'jQuery', 'Google Analytics', 'Live Chat' ],
    link: 'https://coffinworld.com.au/'
  },
  {
    title: 'World Bank Group - Research Management System',
    description: 'Built a Research Management System (RMS) for student data monitoring in Mindanao (BARMM), providing a centralized platform for tracking research progress, storing academic records, and generating reports for data-driven decision-making.',
    tech: ['Angular', 'Typescript', 'React', 'Laravel'],
    link: 'https://angular.spruko.com/xintra-tailwind/preview/auth/login'
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