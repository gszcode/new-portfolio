import './About.css'
import Title from '../Title/Title'
import Box from '../Box/Box'

function About() {
  return (
    <section className="about_container" id="about">
      <Title title="Abot Me" />
      <Box>
        <p>
          Como <span className="color">Desarrollador web</span>, disfruto
          especialmente de la maquetación y de implementar diseños en
          aplicaciones. Me apasionan los desafíos que plantean ciertos
          proyectos, ya que es donde más aprendo.
          <br />
          En mi tiempo libre, disfruto jugando al fútbol con amigos, yendo al
          gimnasio y viendo películas. También dedico tiempo a mejorar mis
          conocimientos y habilidades. Además, estudio{' '}
          <span className="color">Inglés</span>, no solo por necesidad, sino
          también porque es algo que me gusta.
        </p>
      </Box>
    </section>
  )
}

export default About
