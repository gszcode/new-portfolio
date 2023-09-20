import logo from '/assets/logo.png'
import bars_down from '/assets/bars-arrow-down.svg'
import bars_up from '/assets/bars-arrow-up.svg'
import './Header.css'
import SMNavbar from '../Navbar/SMNavbar'
import { useState } from 'react'
import LGNavbar from '../Navbar/LGNavbar'

function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <header className="header" style={openMenu ? { boxShadow: 'none' } : {}}>
        <a href="#home" className="logo">
          <img src={logo} alt="Main Logo" />
        </a>
        <div className="bars">
          <img
            src={openMenu ? bars_up : bars_down}
            alt={openMenu ? 'Bars Down' : 'Bars Up'}
            onClick={handleClick}
          />
        </div>
        {/* Large Navbar  */}
        <LGNavbar />
      </header>
      {/* Small Navbar  */}
      <SMNavbar menu={openMenu} />
    </>
  )
}

export default Header
