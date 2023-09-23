import './Portfolio.css'
import Title from '../Title/Title'
import { portfolio } from '../../utils/portfolio'

function Portfolio() {
  return (
    <section className="portfolio_container">
      <Title title="Projects" />
      <div className="projects_container">
        {portfolio.map((project) => (
          <article className="project" key={project.id}>
            <h3 className="project_title">{project.name}</h3>
            <div className="img_container">
              <img src={project.img} alt={`${project.name} Project`} />
            </div>
            <div className="tech_project">
              <div className="tech_used">
                {project.tech.map((icon) => (
                  <img
                    key={project.id}
                    src={icon}
                    alt={`${project.name} Icon`}
                  />
                ))}
              </div>
              <div className="project_link">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <img
                    src="public/assets/icons/globe.svg"
                    alt="Globe Icon"
                    title="Ver Proyecto"
                  />
                </a>
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <img
                    src={`public/assets/icons/${
                      project.repository ? 'github.svg' : 'padlock.svg'
                    }`}
                    alt="GitHub Icon"
                    title="Ver Repositorio"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
