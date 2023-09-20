import './SMNavbar.css'

// eslint-disable-next-line react/prop-types
function SMNavbar({ menu }) {
  return (
    <nav className={menu ? 'navbar show' : 'navbar'}>
      <ul className="menu">
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

export default SMNavbar
