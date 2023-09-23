import './Header.css'
import logo from '/assets/img/logo.png'
import LG_logo from '/assets/img/LG_logo.png'
import bars from '/assets/icons/bars.svg'
import close from '/assets/icons/close.svg'
import SMNavbar from '../Navbar/SMNavbar'
import LGNavbar from '../Navbar/LGNavbar'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    function handleDocumentClick(event) {
      if (menuOpen && !event.target.closest('.header')) {
        setMenuOpen(false)
      }
      console.log(event.target.closest('.header'))
    }

    document.addEventListener('mousedown', handleDocumentClick)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
    }
  }, [menuOpen])

  return (
    <>
      <header className="header" style={menuOpen ? { boxShadow: 'none' } : {}}>
        <a href="#home" className="logo">
          <img src={logo} alt="Main Logo" />
        </a>
        <a href="#home" className="LG_logo">
          <img src={LG_logo} alt="Main Logo" />
        </a>
        <div className="bars">
          <img
            src={menuOpen ? close : bars}
            alt={menuOpen ? 'Bars' : 'Close'}
            onClick={handleClick}
          />
        </div>
        {/* Large Navbar  */}
        <LGNavbar />
      </header>
      {/* Small Navbar  */}
      <SMNavbar menu={menuOpen} />
    </>
  )
}

export default Header
