import React, { useState } from 'react'
import './Header.css'
import cLogo from '../assets/logo.png'
import icon from '../assets/thum.png'
import Bars from '../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerHeight <= 768 ? false : true
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div>
      <img
        src={icon}
        alt=""
        className="main-icon"
      />
      <img
        src={cLogo}
        alt=""
        className="logo"
      />
      <div className="header">
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: 'var(--appColor)',
              padding: '0.5rem',
              borderRadius: '5PX',
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: '1.5rem', height: '1.5rem' }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => setMenuOpened(true)}
                activeClass="active"
                to="home"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(true)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(true)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(true)}
                to="plans"
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                onClick={() => setMenuOpened(true)}
                span={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
