import './Skills.css'
import { technologies } from '../../utils/technologies'

function Skills() {
  return (
    <>
      <section className="skills_container">
        <h2 className="title">My Skills</h2>
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
