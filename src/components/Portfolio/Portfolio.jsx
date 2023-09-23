import './Portfolio.css'
import Title from '../Title/Title'
import { portfolio } from '../../utils/portfolio'
import Project from '../Project/Project'

function Portfolio() {
  return (
    <section className="portfolio_container" id="portfolio">
      <Title title="Projects" />
      <div className="projects_container">
        {portfolio.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
