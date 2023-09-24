import './Home.css'
import profile from '/assets/profile.png'
import logo from '/assets/logo.png'
import linkedin from '/assets/icons/linkedin.svg'
import github from '/assets/icons/github.svg'
import Skills from '../Skills/Skills'

function Home() {
  return (
    <section className="home_container">
      <div className="home">
        <div className="profile_image">
          <img src={profile} alt="Foto Personal" />
        </div>
        <div className="main_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="introduction">
          <h1>
            Hola, Soy <span className="color">Gabriel Sanchez.</span>
            <br />
            Soy un entusiasta de la creación y el{' '}
            <span className="color">Desarrollo Web</span>.
            <br />
            <br />
          </h1>
          <p>
            Mi mayor interés es el <span className="color">Frontend</span> y es
            donde mejor me desenvuelvo, aúnque también me gusta el{' '}
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
      </div>
      <Skills />
    </section>
  )
}

export default Home
