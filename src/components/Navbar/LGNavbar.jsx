import './LGNavbar.css'

function LGNavbar() {
  return (
    <nav className="navbarLg">
      <ul className="menuLg">
        <li className="item">
          <a href="#home">Inicio</a>
        </li>
        <li className="item">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="item">
          <a href="#portfolio">Portafolio</a>
        </li>
        <li className="item">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default LGNavbar
