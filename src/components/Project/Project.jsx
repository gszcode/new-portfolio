import './Project.css'

// eslint-disable-next-line react/prop-types
function Project({ id, name, img, tech, url, repository }) {
  let path = 'public/assets/img/'

  return (
    <article className="project" key={id}>
      <h3 className="project_title">{name}</h3>
      <div className="img_container">
        <img src={path + img} alt={`${name} Project`} />
      </div>
      <div className="tech_project">
        <div className="tech_used">
          {/* eslint-disable-next-line react/prop-types */}
          {tech.map((icon) => (
            <img key={id} src={`/assets/icons/${icon}`} alt={`${name} Icon`} />
          ))}
        </div>
        <div className="project_link">
          <a href={url} target="_blank" rel="noreferrer">
            <img
              src="/assets/icons/globe.svg"
              alt="Globe Icon"
              title="Ver Proyecto"
            />
          </a>
          <a
            href={repository ? repository : '#portfolio'}
            target={repository && '_blank'}
            rel="noreferrer"
          >
            <img
              src={`/assets/icons/${repository ? 'github.svg' : 'padlock.svg'}`}
              alt="GitHub Icon"
              title="Ver Repositorio"
            />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
