import './Home.css'
import profile from '/assets/profile.png'
import linkedin from '/assets/linkedin.svg'
import github from '/assets/github.svg'

function Home() {
  return (
    <section className="home_container">
      <div className="profile_image">
        <img src={profile} alt="Foto Personal" />
      </div>
      <div className="introduction">
        <h1>
          Hola, Soy <span className="color">Gabriel Sanchez.</span>
          <br />
          Soy un apasionado del <span className="color">Desarrollo Web</span>.
          <br />
          <br />
        </h1>
        <p>
          Mi mayor interés es el <span className="color">Frontend</span> y es
          donde mejor me desenvuelvo, igualmente también me gusta el{' '}
          <span className="color">Backend</span>.
        </p>
        <span className="location color">Buenos Aires, Argentina.</span>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/gszcode/"
          rel="noreferrer"
          title="Linkedin"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin Icon" />
        </a>
        <a
          href="https://github.com/gszcode"
          rel="noreferrer"
          title="GitHub"
          target="_blank"
        >
          <img src={github} alt="Github Icon" />
        </a>
      </div>
    </section>
  )
}

export default Home
