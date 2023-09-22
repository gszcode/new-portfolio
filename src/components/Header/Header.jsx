import './Header.css'
import logo from '/assets/img/logo.png'
import LG_logo from '/assets/img/LG_logo.png'
import bars from '/assets/icons/bars.svg'
import close from '/assets/icons/close.svg'
import SMNavbar from '../Navbar/SMNavbar'
import LGNavbar from '../Navbar/LGNavbar'
import { useState } from 'react'

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
        <a href="#home" className="LG_logo">
          <img src={LG_logo} alt="Main Logo" />
        </a>
        <div className="bars">
          <img
            src={openMenu ? close : bars}
            alt={openMenu ? 'Bars' : 'Close'}
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
