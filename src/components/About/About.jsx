import './About.css'
import ball_image from '/assets/img/ball.png'
import pc_image from '/assets/img/pc.png'
import Title from '../Title/Title'

function About() {
  return (
    <section className="about_container">
      <Title title="Abot Me" />
      <div className="about">
        <img src={ball_image} alt="Ball Image" className="ball_img" />
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
        <img src={pc_image} alt="PC Image" className="pc_img" />
      </div>
    </section>
  )
}

export default About
