import './Skills.css'
import { technologies } from '../../utils/technologies'
import Title from '../Title/Title'

function Skills() {
  return (
    <>
      <section className="skills_container">
        <Title title="My Skills" />
        <div className="tech_container">
          {technologies.slice(0, 5).map(({ id, tech, icon }) => (
            <img key={id} src={icon} alt={`${tech} Icon`} title={tech} />
          ))}
        </div>
        <div className="tech_container">
          {technologies.slice(5).map(({ id, tech, icon }) => (
            <img key={id} src={icon} alt={`${tech} Icon`} title={tech} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
